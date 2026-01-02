# Dog Trainer Website - Bilingual Next.js 14 Application

A professional, SEO-optimized bilingual (English/Greek) dog trainer website built with Next.js 14, featuring:

## Features

✅ **Bilingual Support (English/Greek)**
- Automatic language detection based on browser settings
- Language switcher component
- Full translation support with next-intl
- Localized routing (/en/* and /el/*)

✅ **SEO Optimization**
- Unique meta titles and descriptions for all pages
- hreflang tags for bilingual SEO
- Canonical URLs
- Open Graph tags
- Schema.org LocalBusiness structured data
- Service-specific structured data
- Optimized sitemap.xml with hreflang annotations
- robots.txt configuration

✅ **Modern UI/UX**
- Responsive design with Tailwind CSS
- AOS (Animate On Scroll) animations
- Mobile-friendly navigation with dropdown menus
- Professional gradient designs
- Accessibility-focused components

✅ **Pages Included**
- Home (/)
- About (/about)
- Services (/services)
  - Dog Training (/services/dog-training)
  - Dog Sitting (/services/dog-sitting)
  - Dog Adventures (/services/dog-adventures)
- Contact (/contact) with functional form

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 4
- **Internationalization**: next-intl
- **Animations**: AOS (Animate On Scroll)
- **Language**: TypeScript
- **Image Optimization**: Next.js Image component with WebP support

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set your domain:
```
NEXT_PUBLIC_DOMAIN=https://yourdomain.com
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The root URL (/) will redirect to `/el` (Greek) or `/en` (English) based on your browser's language preference.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # Localized routes
│   │   ├── layout.tsx      # Locale-specific layout
│   │   ├── page.tsx        # Home page
│   │   ├── about/
│   │   ├── services/
│   │   └── contact/
│   ├── layout.tsx          # Root layout
│   ├── sitemap.ts          # Sitemap with hreflang
│   └── robots.ts           # Robots.txt
├── components/
│   ├── Navigation.tsx      # Main navigation with language switcher
│   ├── Footer.tsx          # Footer component
│   ├── LanguageSwitcher.tsx
│   ├── ContactForm.tsx
│   └── AOSInit.tsx         # AOS initialization
├── i18n/
│   ├── routing.ts          # i18n routing configuration
│   └── request.ts          # i18n request configuration
├── lib/
│   └── seo.ts             # SEO utilities and schema generation
└── middleware.ts           # Locale detection middleware

messages/
├── en.json                 # English translations
└── el.json                 # Greek translations
```

## SEO Features

### Meta Tags
Each page includes:
- Unique, optimized title (50-60 characters)
- Meta description (150-160 characters)
- Canonical URL
- hreflang tags for EN and EL versions
- Open Graph tags for social sharing
- Twitter Card tags

### Structured Data
- LocalBusiness schema on homepage
- Service schema on service pages
- Proper heading hierarchy (H1, H2, H3)

### Sitemap
- Automatic sitemap generation at `/sitemap.xml`
- Includes all pages in both languages
- hreflang annotations
- Priority and changeFrequency settings

## Customization

### Update Translations
Edit the translation files:
- `messages/en.json` for English
- `messages/el.json` for Greek

### Update Business Information
Update the contact information in:
- `src/app/[locale]/contact/page.tsx`
- `src/lib/seo.ts` (for Schema.org data)

### Add Images
Replace placeholder images in the pages with actual images:
1. Add images to `/public` folder
2. Use Next.js Image component for optimization
3. Update alt text using translation files

### Customize Colors
The website uses Tailwind CSS. Main color themes:
- Blue: Dog Training
- Green: Dog Sitting
- Purple: Dog Adventures

Edit `tailwind.config.js` or use different Tailwind color classes.

## AOS Animations

AOS (Animate On Scroll) is already configured and initialized. Add animations to any element:

```tsx
<div data-aos="fade-up" data-aos-delay="100">
  Content here
</div>
```

Available animations: fade-up, fade-down, fade-left, fade-right, zoom-in, etc.

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_DOMAIN=https://yourdomain.com`
4. Deploy

### Other Platforms
This is a standard Next.js 14 app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud
- Self-hosted with Node.js

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue in the repository.
