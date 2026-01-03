"use client";

import { memo, useEffect, useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Card, CardBody, Spinner } from "@heroui/react";
import Image from "next/image";

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = memo(({ review, index }: ReviewCardProps) => {
  const t = useTranslations("testimonials");
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 250;
  const needsExpansion = review.text.length > characterLimit;

  return (
    <Card
      className="h-full shrink-0 w-87.5 shadow-lg"
      data-aos="fade-up"
      data-aos-delay={100 + index * 100}
    >
      <CardBody className="p-6 flex flex-col min-h-50">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-14 h-14 rounded-full bg-primary-500 overflow-hidden shrink-0">
            <Image
              src={review.profile_photo_url}
              alt={review.author_name}
              fill
              className="object-cover"
              sizes="56px"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-base text-gray-900 truncate">
              {review.author_name}
            </h4>
            <p className="text-xs text-gray-500">
              {review.relative_time_description}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="mb-4">
          <StarRating rating={review.rating} />
        </div>

        {/* Review Text */}
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed text-sm">
            {isExpanded || !needsExpansion
              ? review.text
              : review.text.substring(0, characterLimit) + "... "}
            {needsExpansion && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary-600 hover:text-primary-700 font-bold inline whitespace-nowrap"
              >
                {isExpanded ? t("showLess") : t("readMore")}
              </button>
            )}
          </p>
        </div>
      </CardBody>
    </Card>
  );
});

ReviewCard.displayName = "ReviewCard";

const TestimonialsSection = memo(() => {
  const locale = useLocale();
  const t = useTranslations("testimonials");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    fetch(`/api/reviews?locale=${locale}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews) {
          setReviews(data.reviews);
          setTotal(data.total);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load reviews:", err);
        setError(true);
        setLoading(false);
      });
  }, [locale]);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", checkScrollButtons);
      return () => {
        container.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", checkScrollButtons);
      };
    }
  }, [reviews]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 370; // card width (350) + gap (20)
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Spinner size="lg" color="primary" />
            <p className="mt-4 text-gray-600">{t("loading")}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600">{t("subtitle")}</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-700 font-semibold">
                {total} {t("reviews")}
              </span>
            </div>
          </div>

          {/* Horizontal Scrolling Reviews with Navigation */}
          <div
            className="relative mb-12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* Left Arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
                aria-label="Previous reviews"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110 border border-gray-200"
                aria-label="Next reviews"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="overflow-x-auto pb-4 scrollbar-hide"
            >
              <div className="flex gap-6 px-2">
                {reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="text-center" data-aos="fade-up">
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJsZvpcQE5qBQRojVNpPQSCL4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-300 rounded-lg hover:border-primary-500 hover:shadow-xl transition-all"
            >
              <svg className="w-8 h-8" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              <div className="text-left">
                <div className="font-bold text-gray-900">{t("viewAll")}</div>
                <div className="text-sm text-gray-600">{t("leaveReview")}</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for hiding scrollbar while keeping functionality */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

export default TestimonialsSection;
