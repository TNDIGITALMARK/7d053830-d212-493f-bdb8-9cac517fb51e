'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import { HeartIcon, ShieldIcon, CheckmarkIcon } from '@/components/icons/TreatmentIcons'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-[hsl(var(--warm-cream))] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/meditation-calm.jpg"
            alt="Natural healing space"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--warm-cream))]/90 via-[hsl(var(--warm-cream))]/80 to-[hsl(var(--warm-cream))]/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6 animate-fade-in-up">
              About <span className="text-[hsl(var(--sage-green))]">Natural Healing</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[hsl(var(--dark-charcoal))] leading-relaxed animate-fade-in-up animate-delay-100">
              Bridging ancient wisdom with modern wellness to help you discover your path to optimal health, balance, and vitality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 leading-relaxed mb-6">
                Natural Healing was founded with a simple yet profound vision: to make holistic healthcare accessible to everyone seeking natural, whole-person healing approaches. We recognized that many people were searching for alternatives to conventional medicine—treatments that honor the body's innate wisdom and address root causes rather than just symptoms.
              </p>
              <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 leading-relaxed mb-6">
                What began as a small directory of local holistic practitioners has grown into a comprehensive platform connecting thousands of people with certified healers across multiple disciplines. Our community includes acupuncturists, herbalists, energy healers, massage therapists, nutritionists, and wellness coaches—all dedicated to supporting your journey toward optimal health.
              </p>
              <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                Today, we're proud to be the trusted bridge between those seeking natural healing solutions and the experienced practitioners who can guide them. Every connection we facilitate represents another person taking control of their health and discovering the transformative power of holistic medicine.
              </p>
            </div>

            <div className="relative animate-fade-in-up animate-delay-100">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/wellness-space.jpg"
                  alt="Natural healing environment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[hsl(var(--sage-green))]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[hsl(var(--earth-terracotta))]/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 max-w-3xl mx-auto leading-relaxed">
              Guiding principles that shape everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="bg-[hsl(var(--warm-cream))] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <HeartIcon className="w-10 h-10 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Compassionate Care
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                We believe healing happens in an environment of compassion, trust, and genuine care. Every practitioner in our network shares this commitment to treating the whole person with kindness and respect.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-100">
              <div className="bg-[hsl(var(--warm-cream))] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <ShieldIcon className="w-10 h-10 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Trusted Excellence
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Quality and safety are paramount. We rigorously verify credentials, licenses, and experience to ensure you connect only with qualified, professional practitioners who maintain the highest standards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-200">
              <div className="bg-[hsl(var(--warm-cream))] w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <CheckmarkIcon className="w-10 h-10 text-[hsl(var(--sage-green))]" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-4">
                Holistic Approach
              </h3>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                True wellness addresses body, mind, and spirit. We support integrative healing approaches that honor the interconnectedness of your whole being and empower you to take an active role in your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up order-2 lg:order-1">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/herbal-preparation.jpg"
                  alt="Holistic healing modalities"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-100 order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6">
                What We Do
              </h2>
              <p className="text-lg text-[hsl(var(--dark-charcoal))]/80 leading-relaxed mb-8">
                We connect you with experienced, certified holistic health practitioners across a wide range of natural healing modalities:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--sage-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                    <strong className="text-[hsl(var(--dark-charcoal))]">Practitioner Directory:</strong> Comprehensive profiles of certified holistic healers including credentials, specialties, experience, and patient reviews
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--sage-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                    <strong className="text-[hsl(var(--dark-charcoal))]">Treatment Information:</strong> Educational resources about different holistic healing modalities to help you make informed decisions about your care
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--sage-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                    <strong className="text-[hsl(var(--dark-charcoal))]">Verification & Safety:</strong> Rigorous credentialing process ensures all practitioners are licensed, insured, and maintain current certifications
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--sage-green))] flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[hsl(var(--dark-charcoal))]/80 leading-relaxed">
                    <strong className="text-[hsl(var(--dark-charcoal))]">Community Support:</strong> Resources, testimonials, and guidance to support your natural healing journey from start to finish
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-[hsl(var(--warm-cream))]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6 animate-fade-in">
            Our Commitment to You
          </h2>
          <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 leading-relaxed mb-8 animate-fade-in animate-delay-100">
            When you choose Natural Healing, you're choosing a partner in your wellness journey. We're committed to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in-up">
              <h4 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Quality Assurance
              </h4>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Every practitioner undergoes thorough verification of credentials, licenses, insurance, and professional standing before joining our network.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in-up animate-delay-100">
              <h4 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Transparency
              </h4>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Detailed practitioner profiles, genuine patient reviews, and clear information about treatments, costs, and what to expect from your care.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in-up animate-delay-200">
              <h4 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Education
              </h4>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Comprehensive resources to help you understand different healing modalities, make informed decisions, and get the most from your treatments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md animate-fade-in-up animate-delay-300">
              <h4 className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))] mb-3">
                Support
              </h4>
              <p className="text-[hsl(var(--dark-charcoal))]/70 leading-relaxed">
                Ongoing assistance in finding the right practitioner, understanding your options, and navigating your path to natural wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/acupuncture-detail.jpg"
            alt="Begin your journey"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-[hsl(var(--dark-charcoal))] mb-6 animate-fade-in">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-[hsl(var(--dark-charcoal))]/80 mb-10 leading-relaxed animate-fade-in animate-delay-100">
            Discover experienced holistic practitioners who can guide you toward optimal health, balance, and vitality through natural healing approaches.
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
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
