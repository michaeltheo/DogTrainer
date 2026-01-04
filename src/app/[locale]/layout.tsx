import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";
import { HeroUIProvider } from "@/components/HeroUIProvider";
import { Geist } from "next/font/google";
import "../globals.css";
import CTASection from "@/components/home/CTASection";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${geist.variable} antialiased min-w-80`}>
        <HeroUIProvider>
          <NextIntlClientProvider messages={messages}>
            <AOSInit />
            <div className="flex flex-col min-h-screen min-w-80">
              <Navigation />
              <main className="grow min-w-80">{children}</main>
              <CTASection />
              <Footer />
            </div>
          </NextIntlClientProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
