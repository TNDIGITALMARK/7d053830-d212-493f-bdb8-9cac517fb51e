'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { practitioners } from '@/lib/data'

export default function PractitionersPage() {
  const [searchLocation, setSearchLocation] = useState('')
  const [searchSpecialty, setSearchSpecialty] = useState('')

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--warm-cream))] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
            Find Your Perfect Practitioner
          </h1>
          <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto">
            Connect with experienced, certified holistic health professionals in your area
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <button className="w-full bg-[hsl(var(--sage-green))] text-white px-6 py-3 rounded-lg hover:bg-[hsl(var(--earth-terracotta))] transition-colors font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioners Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-[hsl(var(--dark-charcoal))]/70">
              Showing {practitioners.length} practitioners
            </p>
            <select className="px-4 py-2 rounded-lg border border-[hsl(var(--border))] focus:border-[hsl(var(--sage-green))] outline-none bg-white">
              <option>Sort by: Recommended</option>
              <option>Highest Rated</option>
              <option>Most Reviews</option>
              <option>Years of Experience</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    📍 {practitioner.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {practitioner.specialty.slice(0, 2).map((spec, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-medium text-[hsl(var(--earth-terracotta))]">
                    {practitioner.priceRange}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
