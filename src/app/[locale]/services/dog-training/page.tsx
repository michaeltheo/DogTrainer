import {getTranslations, setRequestLocale} from 'next-intl/server';
import { generateMetadata as genMeta, generateServiceSchema } from '@/lib/seo';
import { Link } from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'services.training'});

  const keywords = locale === 'el' ? [
    'εκπαίδευση σκύλων',
    'εκπαίδευση σκύλων Θεσσαλονίκη',
    'dog training',
    'εκπαιδευτής σκύλων',
    'υπακοή σκύλων',
    'εκπαίδευση κουταβιών',
    'τροποποίηση συμπεριφοράς σκύλων',
    'επαγγελματική εκπαίδευση σκύλων',
    'ιδιωτικά μαθήματα σκύλων',
    'ομαδικά μαθήματα σκύλων',
    'Θεσσαλονίκη',
  ] : [
    'dog training',
    'dog training Thessaloniki',
    'obedience training',
    'puppy training',
    'behavioral training',
    'dog behavior modification',
    'professional dog trainer',
    'Thessaloniki',
    'private dog training',
    'group dog training',
  ];

  return genMeta({
    title: t('metaTitle'),
    description: t('metaDescription'),
    locale,
    path: '/services/dog-training',
    keywords,
  });
}

export default async function DogTrainingPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services.training');

  const serviceSchema = generateServiceSchema({
    name: t('title'),
    description: t('metaDescription'),
    locale,
    serviceType: 'Dog Training',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(serviceSchema)}}
      />

      <section className="bg-gradient-to-br from-primary-100 to-primary-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {t('description')}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
              >
                {t('cta')}
              </Link>
            </div>
            <div data-aos="fade-left" className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-8xl mb-4">🎓</div>
                <p className="text-sm">Dog training image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8" data-aos="fade-up">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              t('features.obedience'),
              t('features.behavior'),
              t('features.puppy'),
              t('features.private'),
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start p-6 bg-primary-50 rounded-lg" data-aos="fade-up" data-aos-delay={idx * 100}>
                <svg className="w-6 h-6 text-primary-600 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
