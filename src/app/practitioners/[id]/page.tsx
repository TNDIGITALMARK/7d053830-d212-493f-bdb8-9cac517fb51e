'use client'

import { use } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { practitioners } from '@/lib/data'

export default function PractitionerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const practitioner = practitioners.find(p => p.id === id)
  const [selectedDay, setSelectedDay] = useState(practitioner?.availability[0]?.day || '')
  const [showBookingModal, setShowBookingModal] = useState(false)

  if (!practitioner) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Practitioner not found</h1>
          <Link href="/practitioners" className="text-[hsl(var(--sage-green))] hover:underline">
            View all practitioners
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--warm-cream))] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-[hsl(var(--sage-green))] hover:text-[hsl(var(--earth-terracotta))] mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[hsl(var(--border))] sticky top-24">
                <div className="relative h-80">
                  <Image
                    src={practitioner.image}
                    alt={practitioner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h1 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-2">
                    {practitioner.name}
                  </h1>
                  <p className="text-[hsl(var(--sage-green))] font-medium mb-4">
                    {practitioner.title}
                  </p>

                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500 text-xl mr-2">★</span>
                    <span className="text-xl font-semibold text-[hsl(var(--dark-charcoal))]">
                      {practitioner.rating}
                    </span>
                    <span className="text-[hsl(var(--dark-charcoal))]/60 ml-2">
                      ({practitioner.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center text-[hsl(var(--dark-charcoal))]/70">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {practitioner.location}
                    </div>
                    <div className="flex items-center text-[hsl(var(--dark-charcoal))]/70">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {practitioner.experience} years experience
                    </div>
                    <div className="flex items-center text-[hsl(var(--dark-charcoal))]/70">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {practitioner.priceRange}
                    </div>
                    {practitioner.acceptsInsurance && (
                      <div className="flex items-center text-[hsl(var(--sage-green))]">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Accepts Insurance
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => setShowBookingModal(true)}
                    className="w-full bg-[hsl(var(--earth-terracotta))] text-white py-3 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium"
                  >
                    Book Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[hsl(var(--border))]">
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
                  About
                </h2>
                <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                  {practitioner.bio}
                </p>
              </div>

              {/* Specialties */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[hsl(var(--border))]">
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
                  Specialties
                </h2>
                <div className="flex flex-wrap gap-3">
                  {practitioner.specialty.map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[hsl(var(--border))]">
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
                  Education & Certifications
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                    Education
                  </h3>
                  <ul className="space-y-2">
                    {practitioner.education.map((edu, idx) => (
                      <li key={idx} className="flex items-start text-[hsl(var(--dark-charcoal))]/80">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-[hsl(var(--sage-green))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    {practitioner.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start text-[hsl(var(--dark-charcoal))]/80">
                        <svg className="w-5 h-5 mr-2 mt-0.5 text-[hsl(var(--sage-green))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Treatment Approach */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[hsl(var(--border))]">
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-4">
                  Treatment Approach
                </h2>
                <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed italic">
                  "{practitioner.treatmentApproach}"
                </p>
              </div>

              {/* Availability */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[hsl(var(--border))]">
                <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
                  Availability
                </h2>

                <div className="flex flex-wrap gap-2 mb-6">
                  {practitioner.availability.map((avail, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDay(avail.day)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedDay === avail.day
                          ? 'bg-[hsl(var(--sage-green))] text-white'
                          : 'bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] hover:bg-[hsl(var(--sage-green))]/10'
                      }`}
                    >
                      {avail.day}
                    </button>
                  ))}
                </div>

                {selectedDay && (
                  <div>
                    <h3 className="text-lg font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                      Available times for {selectedDay}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {practitioner.availability
                        .find(a => a.day === selectedDay)
                        ?.slots.map((slot, idx) => (
                          <button
                            key={idx}
                            onClick={() => setShowBookingModal(true)}
                            className="px-4 py-3 border-2 border-[hsl(var(--border))] rounded-lg hover:border-[hsl(var(--sage-green))] hover:bg-[hsl(var(--sage-green))]/5 transition-all font-medium text-[hsl(var(--dark-charcoal))]"
                          >
                            {slot}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))]">
                Book Consultation
              </h2>
              <button
                onClick={() => setShowBookingModal(false)}
                className="text-[hsl(var(--dark-charcoal))]/60 hover:text-[hsl(var(--dark-charcoal))]"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[hsl(var(--dark-charcoal))] mb-2">
                  Reason for Visit
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] focus:ring-2 focus:ring-[hsl(var(--sage-green))]/20 outline-none"
                  rows={3}
                  placeholder="Brief description of your health concerns"
                />
              </div>

              <button
                onClick={() => setShowBookingModal(false)}
                className="w-full bg-[hsl(var(--earth-terracotta))] text-white py-3 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium"
              >
                Request Booking
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
