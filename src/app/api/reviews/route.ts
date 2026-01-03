import { NextResponse } from "next/server";

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
}

interface GooglePlaceDetailsResponse {
  result: {
    reviews: GoogleReview[];
    user_ratings_total: number;
  };
  status: string;
}

// In-memory cache
const cachedReviews: {
  el: { reviews: GoogleReview[]; total: number; timestamp: number } | null;
  en: { reviews: GoogleReview[]; total: number; timestamp: number } | null;
} = {
  el: null,
  en: null,
};

const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get("locale") || "el";
  const language = locale === "el" ? "el" : "en";

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Missing API credentials" },
      { status: 500 }
    );
  }

  // Check cache
  const now = Date.now();
  const cached = cachedReviews[language as "el" | "en"];
  if (cached && now - cached.timestamp < CACHE_DURATION) {
    return NextResponse.json({
      reviews: cached.reviews,
      total: cached.total,
      cached: true,
    });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total&language=${language}&key=${apiKey}`
    );

    const data: GooglePlaceDetailsResponse = await response.json();

    if (data.status === "OK") {
      const reviews = data.result.reviews || [];
      const total = data.result.user_ratings_total || 0;

      // Cache the results
      cachedReviews[language as "el" | "en"] = {
        reviews,
        total,
        timestamp: now,
      };

      return NextResponse.json({
        reviews,
        total,
        cached: false,
      });
    }

    return NextResponse.json({ error: data.status }, { status: 400 });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}
