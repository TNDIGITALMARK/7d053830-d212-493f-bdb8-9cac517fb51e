'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { practitioners, treatments, testimonials, faqs } from '@/lib/data'

export default function HomePage() {
  const [searchLocation, setSearchLocation] = useState('')
  const [searchSpecialty, setSearchSpecialty] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[hsl(var(--warm-cream))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-healing.jpg"
            alt="Natural Healing"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--warm-cream))] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Natural Healing & Wellness
            </h1>
            <p className="text-lg lg:text-xl text-[hsl(var(--dark-charcoal))] mb-8 leading-relaxed">
              Discover trusted holistic practitioners and natural healing solutions. Connect with certified experts in acupuncture, herbal medicine, energy healing, and more.
            </p>
            <button className="bg-[hsl(var(--earth-terracotta))] text-white px-8 py-4 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium text-lg shadow-lg">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md relative z-10 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 border border-[hsl(var(--border))]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter city or zip code"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Specialty
                </label>
                <select
                  value={searchSpecialty}
                  onChange={(e) => setSearchSpecialty(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none transition-all bg-white"
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
                  className="w-full bg-[hsl(var(--sage-green))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--earth-terracotta))] transition-colors font-medium text-center"
                >
                  Find Practitioners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
              Holistic Healing Modalities
            </h2>
            <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto">
              Explore natural healing approaches that address your whole being
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] group cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {treatment.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-2">
                  {treatment.name}
                </h3>
                <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4 leading-relaxed">
                  {treatment.description}
                </p>
                <p className="text-sm text-[hsl(var(--sage-green))] font-medium">
                  {treatment.practitionerCount} practitioners available
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Practitioners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
              Featured Practitioners
            </h2>
            <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto">
              Meet our experienced and certified holistic health professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practitioners.map((practitioner) => (
              <Link
                key={practitioner.id}
                href={`/practitioners/${practitioner.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={practitioner.image}
                    alt={practitioner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-1">
                    {practitioner.name}
                  </h3>
                  <p className="text-[hsl(var(--sage-green))] font-medium mb-3">
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
                  <p className="text-sm text-[hsl(var(--dark-charcoal))]/70 mb-3">
                    {practitioner.experience} years experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {practitioner.specialty.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] text-xs rounded-full"
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
              className="inline-block bg-[hsl(var(--sage-green))] text-white px-8 py-3 rounded-full hover:bg-[hsl(var(--earth-terracotta))] transition-colors font-medium"
            >
              View All Practitioners
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Experienced Practitioners
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                All practitioners are licensed, certified, and have years of clinical experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Trusted & Verified
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Every practitioner undergoes thorough verification and background checks
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Holistic Approach
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Comprehensive care that addresses body, mind, and spirit for lasting wellness
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-[hsl(var(--earth-terracotta))] text-white px-8 py-3 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium"
            >
              Book Your Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
              Patient Success Stories
            </h2>
            <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto">
              Real experiences from people who found healing through holistic medicine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-[hsl(var(--warm-cream))] rounded-2xl p-8 relative"
              >
                <div className="text-4xl text-[hsl(var(--gold-bronze))] mb-4">"</div>
                <p className="text-[hsl(var(--dark-charcoal))] leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading font-semibold text-[hsl(var(--dark-charcoal))]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[hsl(var(--sage-green))]">
                      {testimonial.treatment}
                    </p>
                  </div>
                  <div className="text-yellow-500">
                    {'★'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-[hsl(var(--border))]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[hsl(var(--warm-cream))]/50 transition-colors"
                >
                  <span className="font-heading font-semibold text-[hsl(var(--dark-charcoal))]">
                    {faq.question}
                  </span>
                  <span className="text-[hsl(var(--sage-green))] text-2xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-[hsl(var(--warm-cream))]/30 border-t border-[hsl(var(--border))]">
                    <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}