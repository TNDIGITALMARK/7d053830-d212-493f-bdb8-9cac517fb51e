'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { articles, faqs } from '@/lib/data'

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const categories = ['All', 'Acupuncture & TCM', 'Herbal Medicine', 'Mindfulness', 'Nutrition', 'Energy Healing']

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--warm-cream))] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
            Wellness Resource Center
          </h1>
          <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 max-w-2xl mx-auto">
            Explore comprehensive guides, articles, and resources about holistic healing modalities
          </p>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-8">
            Featured Resources
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Large Featured Article */}
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-lg border border-[hsl(var(--border))] hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={articles[0].image}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--sage-green))]/10 text-[hsl(var(--sage-green))] text-sm font-medium rounded-full mb-4 w-fit">
                    {articles[0].category}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-3">
                    {articles[0].title}
                  </h3>
                  <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center text-sm text-[hsl(var(--dark-charcoal))]/60 mb-6">
                    <span>{articles[0].author}</span>
                    <span className="mx-2">•</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <Link
                    href="#"
                    className="inline-block bg-[hsl(var(--earth-terracotta))] text-white px-6 py-2.5 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium w-fit"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
              Browse by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-[hsl(var(--sage-green))] text-white'
                      : 'bg-[hsl(var(--warm-cream))] text-[hsl(var(--dark-charcoal))] hover:bg-[hsl(var(--sage-green))]/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href="#"
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[hsl(var(--border))] group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--sage-green))]/10 text-[hsl(var(--sage-green))] text-xs font-medium rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--dark-charcoal))]/70 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-xs text-[hsl(var(--dark-charcoal))]/60">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Guides Section */}
      <section className="py-16 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-8 text-center">
            Treatment Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🎋</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Acupuncture Guide
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Learn about meridians, treatment protocols, and what to expect from acupuncture therapy.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Explore Guide →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Herbal Medicine Database
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Comprehensive database of 200+ herbs with usage guidelines and benefits.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Browse Herbs →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Meditation Library
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Guided meditation sessions and techniques for stress relief and mindfulness.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Start Meditating →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Energy Healing Basics
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Understand chakras, energy fields, and various energy healing modalities.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Learn More →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Nutrition for Healing
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Anti-inflammatory diets, healing foods, and nutritional approaches to wellness.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Explore Nutrition →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-[hsl(var(--border))] hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💆</div>
              <h3 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Massage Techniques
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 mb-4">
                Different massage modalities, benefits, and self-care techniques you can use at home.
              </p>
              <Link href="#" className="text-[hsl(var(--sage-green))] font-medium hover:text-[hsl(var(--earth-terracotta))] transition-colors">
                Discover Methods →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[hsl(var(--warm-cream))] rounded-xl overflow-hidden border border-[hsl(var(--border))]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[hsl(var(--warm-cream))]/80 transition-colors"
                >
                  <span className="font-heading font-semibold text-[hsl(var(--dark-charcoal))]">
                    {faq.question}
                  </span>
                  <span className="text-[hsl(var(--sage-green))] text-2xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-white border-t border-[hsl(var(--border))]">
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

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--sage-green))] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Connect with experienced practitioners who can guide you toward natural wellness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/practitioners"
              className="inline-block bg-white text-[hsl(var(--sage-green))] px-8 py-3 rounded-full hover:bg-[hsl(var(--warm-cream))] transition-colors font-medium"
            >
              Find a Practitioner
            </Link>
            <Link
              href="/"
              className="inline-block bg-[hsl(var(--earth-terracotta))] text-white px-8 py-3 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
