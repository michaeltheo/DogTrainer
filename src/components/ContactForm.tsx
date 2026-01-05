'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Input, Textarea, Select, SelectItem, Button } from '@heroui/react';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dogName: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        dogName: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const services = [
    { key: "training", label: "Dog Training - Εκπαίδευση Σκύλων" },
    { key: "sitting", label: "Dog Sitting - Φύλαξη Σκύλων" },
    { key: "adventures", label: "Dog Adventures - Εκδρομές στη Φύση" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Στείλτε μας Μήνυμα
            </h2>
            <div className="w-20 h-1.5 bg-linear-to-r from-accent-400 to-accent-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600">
              Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο
            </p>
          </div>

          {/* Form */}
          <div
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                type="text"
                label={t('name')}
                name="name"
                isRequired
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                variant="bordered"
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                }}
              />

              <Input
                type="email"
                label={t('email')}
                name="email"
                isRequired
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                variant="bordered"
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                }}
              />

              <Input
                type="tel"
                label={t('phone')}
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                variant="bordered"
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                }}
              />

              <Input
                type="text"
                label={t('dogName')}
                name="dogName"
                value={formData.dogName}
                onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                variant="bordered"
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                }}
              />

              <Select
                label={t('service')}
                name="service"
                isRequired
                placeholder={t('selectService')}
                selectedKeys={formData.service ? [formData.service] : []}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                variant="bordered"
                classNames={{
                  trigger: "border-gray-300 hover:border-accent-500 data-[focus=true]:border-accent-500",
                }}
              >
                {services.map((service) => (
                  <SelectItem key={service.key}>
                    {service.label}
                  </SelectItem>
                ))}
              </Select>

              <Textarea
                label={t('message')}
                name="message"
                isRequired
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                variant="bordered"
                minRows={5}
                classNames={{
                  input: "text-base",
                  inputWrapper: "border-gray-300 hover:border-accent-500 focus-within:!border-accent-500",
                }}
              />

              <Button
                type="submit"
                className="w-full bg-linear-to-r from-accent-500 to-accent-600 text-white font-semibold text-lg py-6 shadow-lg hover:shadow-xl transition-all"
                isLoading={isSubmitting}
                size="lg"
              >
                {t('submit')}
              </Button>

              {submitted && (
                <div className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-lg text-center">
                  <p className="font-semibold">Ευχαριστούμε! Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
