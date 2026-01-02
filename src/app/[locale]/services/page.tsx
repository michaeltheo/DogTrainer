import {getTranslations, setRequestLocale} from 'next-intl/server';
import { generateMetadata as genMeta } from '@/lib/seo';
import { Link } from '@/i18n/routing';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'services'});

  return genMeta({
    title: t('metaTitle'),
    description: t('metaDescription'),
    locale,
    path: '/services',
  });
}

export default async function ServicesPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');
  const tCommon = await getTranslations('common');

  const services = [
    {
      title: t('training.title'),
      description: t('training.description'),
      href: '/services/dog-training',
      icon: '🎓',
      features: [
        t('training.features.obedience'),
        t('training.features.behavior'),
        t('training.features.puppy'),
        t('training.features.private'),
      ],
      cta: t('training.cta'),
      color: 'blue',
      delay: '0',
    },
    {
      title: t('sitting.title'),
      description: t('sitting.description'),
      href: '/services/dog-sitting',
      icon: '🏠',
      features: [
        t('sitting.features.home'),
        t('sitting.features.updates'),
        t('sitting.features.experienced'),
        t('sitting.features.flexible'),
      ],
      cta: t('sitting.cta'),
      color: 'green',
      delay: '100',
    },
    {
      title: t('adventures.title'),
      description: t('adventures.description'),
      href: '/services/dog-adventures',
      icon: '⛰️',
      features: [
        t('adventures.features.hiking'),
        t('adventures.features.beach'),
        t('adventures.features.socialization'),
        t('adventures.features.exercise'),
      ],
      cta: t('adventures.cta'),
      color: 'purple',
      delay: '200',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-700" data-aos="fade-up" data-aos-delay="100">
            {t('metaDescription')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.href}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className={`text-6xl mb-4`}>{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`w-6 h-6 text-${service.color}-600 mr-2 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className={`block w-full text-center bg-${service.color}-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-${service.color}-700 transition-colors`}
                >
                  {tCommon('learnMore')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
