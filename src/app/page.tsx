'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { practitioners, treatments, testimonials, faqs } from '@/lib/data'
import {
  AcupunctureIcon,
  HerbalIcon,
  MeditationIcon,
  EnergyHealingIcon,
  MassageIcon,
  NutritionIcon,
  CheckmarkIcon,
  ShieldIcon,
  HeartIcon,
} from '@/components/icons/TreatmentIcons'

// Icon mapping
const iconMap: Record<string, any> = {
  acupuncture: AcupunctureIcon,
  herbal: HerbalIcon,
  meditation: MeditationIcon,
  energy: EnergyHealingIcon,
  massage: MassageIcon,
  nutrition: NutritionIcon,
}

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState('')
  const [searchSpecialty, setSearchSpecialty] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Enhanced with calming image and animations */}
      <section className="relative bg-[hsl(var(--warm-cream))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/wellness-space.jpg"
            alt="Natural Healing Space"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--warm-cream))]/95 via-[hsl(var(--warm-cream))]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6 animate-fade-in-up">
              Discover Your Path to <span className="text-[hsl(var(--sage-green))]">Natural Wellness</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[hsl(var(--dark-charcoal))] mb-6 leading-relaxed animate-fade-in-up animate-delay-100">
              Connect with certified holistic practitioners who treat the whole person—body, mind, and spirit. Experience the transformative power of natural healing modalities backed by ancient wisdom and modern expertise.
            </p>
            <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
              From acupuncture and herbal medicine to energy healing and therapeutic massage, find trusted experts who will guide you on your journey to optimal health and lasting wellness.
            </p>
            <button className="bg-[hsl(var(--earth-terracotta))] text-white px-10 py-5 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-fade-in-up animate-delay-300">
              Begin Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Search Section - Enhanced styling */}
      <section className="bg-white py-8 shadow-lg relative z-10 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] shadow-md">
            <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-6 text-center">
              Find Your Perfect Practitioner
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter city or zip code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none transition-all text-[hsl(var(--dark-charcoal))]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Specialty
                </label>
                <select
                  value={searchSpecialty}
                  onChange={(e) => setSearchSpecialty(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none transition-all bg-white text-[hsl(var(--dark-charcoal))]"
                >
                  <option value="">All Specialties</option>
                  <option value="acupuncture">Acupuncture</option>
                  <option value="herbal">Herbal Medicine</option>
                  <option value="reiki">Energy Healing</option>
                  <option value="massage">Massage Therapy</option>
                  <option value="nutrition">Nutrition</option>
                </select>
              </div>
              <div className="flex items-end">
                <Link
                  href="/practitioners"
                  className="w-full bg-[hsl(var(--sage-green))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--earth-terracotta))] transition-all duration-300 font-medium text-center hover:shadow-md"
                >
                  Search Practitioners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories - With icons and enhanced content */}
      <section className="py-20 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Holistic Healing Modalities
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-3xl mx-auto leading-relaxed">
              Explore time-tested natural healing approaches that address your whole being—
              combining ancient wisdom with modern understanding to restore balance and vitality
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => {
              const IconComponent = iconMap[treatment.icon]
              return (
                <div
                  key={treatment.id}
                  className="bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-[hsl(var(--border))] group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-[hsl(var(--sage-green))] mb-6 group-hover:scale-110 group-hover:text-[hsl(var(--earth-terracotta))] transition-all duration-300">
                    <IconComponent className="w-16 h-16" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                    {treatment.name}
                  </h3>
                  <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                  <p className="text-[hsl(var(--dark-charcoal))]/60 text-sm mb-4 leading-relaxed">
                    {treatment.detailedDescription}
                  </p>
                  <p className="text-sm text-[hsl(var(--sage-green))] font-semibold">
                    {treatment.practitionerCount} certified practitioners available
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section with calming image */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <Image
            src="/generated/meditation-calm.jpg"
            alt="Meditation garden"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              The Natural Healing Difference
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-3xl mx-auto leading-relaxed">
              Experience healthcare that honors your body's innate wisdom and healing capacity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center animate-fade-in-up">
              <div className="bg-[hsl(var(--warm-cream))] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <CheckmarkIcon className="w-12 h-12 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Expert Practitioners
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed mb-4">
                All practitioners are licensed, certified, and have extensive clinical experience in their healing modalities.
              </p>
              <p className="text-[hsl(var(--dark-charcoal))]/60 text-sm leading-relaxed">
                Each professional undergoes rigorous credentialing and maintains continuing education to provide you with the highest standard of care.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-100">
              <div className="bg-[hsl(var(--warm-cream))] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <ShieldIcon className="w-12 h-12 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Trusted & Verified
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed mb-4">
                Every practitioner undergoes thorough verification, background checks, and credential validation.
              </p>
              <p className="text-[hsl(var(--dark-charcoal))]/60 text-sm leading-relaxed">
                We maintain strict safety standards and regularly review practitioner credentials to ensure your peace of mind and wellbeing.
              </p>
            </div>

            <div className="text-center animate-fade-in-up animate-delay-200">
              <div className="bg-[hsl(var(--warm-cream))] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <HeartIcon className="w-12 h-12 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Whole-Person Care
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed mb-4">
                Comprehensive care that addresses body, mind, and spirit for lasting wellness and transformation.
              </p>
              <p className="text-[hsl(var(--dark-charcoal))]/60 text-sm leading-relaxed">
                Rather than treating symptoms in isolation, we support your complete healing journey with personalized, integrative approaches.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/"
              className="inline-block bg-[hsl(var(--earth-terracotta))] text-white px-10 py-4 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Practitioners */}
      <section className="py-20 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Meet Our Featured Healers
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-3xl mx-auto leading-relaxed">
              Experienced and compassionate holistic health professionals dedicated to your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practitioners.map((practitioner, index) => (
              <Link
                key={practitioner.id}
                href={`/practitioners/${practitioner.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[hsl(var(--border))] group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={practitioner.image}
                    alt={practitioner.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-2">
                    {practitioner.name}
                  </h3>
                  <p className="text-[hsl(var(--sage-green))] font-medium mb-3 text-lg">
                    {practitioner.title}
                  </p>
                  <div className="flex items-center mb-3">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-semibold text-[hsl(var(--dark-charcoal))]">
                      {practitioner.rating}
                    </span>
                    <span className="text-[hsl(var(--dark-charcoal))]/60 ml-1">
                      ({practitioner.reviewCount} reviews)
                    </span>
                  </div>
                  <p className="text-sm text-[hsl(var(--dark-charcoal))]/70 mb-4">
                    {practitioner.experience} years of clinical experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {practitioner.specialty.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] text-xs rounded-full font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practitioners"
              className="inline-block bg-[hsl(var(--sage-green))] text-white px-10 py-4 rounded-full hover:bg-[hsl(var(--earth-terracotta))] transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Explore All Practitioners
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials with enhanced styling */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full opacity-5">
          <Image
            src="/generated/herbal-preparation.jpg"
            alt="Herbal medicine"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Transformative Healing Stories
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-3xl mx-auto leading-relaxed">
              Real experiences from people who discovered lasting wellness through holistic medicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-[hsl(var(--warm-cream))] rounded-2xl p-8 relative animate-fade-in-up shadow-md hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl text-[hsl(var(--gold-bronze))] mb-4 font-serif">&ldquo;</div>
                <p className="text-[hsl(var(--dark-charcoal))] leading-relaxed mb-6 text-lg">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-4">
                  <div>
                    <p className="font-heading font-semibold text-[hsl(var(--dark-charcoal))] text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[hsl(var(--sage-green))] font-medium">
                      {testimonial.treatment}
                    </p>
                  </div>
                  <div className="text-yellow-500 text-xl">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-20 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Your Questions Answered
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto leading-relaxed">
              Learn more about holistic medicine and what to expect from your healing journey
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-[hsl(var(--border))] shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-5 text-left flex justify-between items-center hover:bg-[hsl(var(--warm-cream))]/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-[hsl(var(--dark-charcoal))] text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[hsl(var(--sage-green))] text-3xl flex-shrink-0 transition-transform duration-300" style={{ transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: openFaq === index ? '500px' : '0',
                    opacity: openFaq === index ? 1 : 0
                  }}
                >
                  <div className="px-8 py-5 bg-[hsl(var(--warm-cream))]/30 border-t border-[hsl(var(--border))]">
                    <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section with calming background */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/acupuncture-detail.jpg"
            alt="Healing detail"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6 animate-fade-in">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 mb-10 leading-relaxed animate-fade-in animate-delay-100">
            Connect with experienced holistic practitioners who will guide you toward optimal health,
            balance, and vitality. Your path to natural wellness starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-200">
            <Link
              href="/practitioners"
              className="inline-block bg-[hsl(var(--sage-green))] text-white px-10 py-4 rounded-full hover:bg-[hsl(var(--earth-terracotta))] transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105"
            >
              Find Your Practitioner
            </Link>
            <Link
              href="/resources"
              className="inline-block bg-white text-[hsl(var(--sage-green))] border-2 border-[hsl(var(--sage-green))] px-10 py-4 rounded-full hover:bg-[hsl(var(--sage-green))] hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
