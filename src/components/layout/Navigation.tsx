'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-3xl text-[hsl(var(--gold-bronze))]">☸</div>
            <span className="text-xl font-heading font-semibold text-[hsl(var(--dark-charcoal))]">
              Natural Healing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/practitioners"
              className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium"
            >
              Find Practitioners
            </Link>
            <Link
              href="/resources"
              className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium"
            >
              Resources
            </Link>
            <Link
              href="/"
              className="bg-[hsl(var(--earth-terracotta))] text-white px-6 py-2.5 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[hsl(var(--dark-charcoal))] p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[hsl(var(--border))]">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/practitioners"
                className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Find Practitioners
              </Link>
              <Link
                href="/resources"
                className="text-[hsl(var(--dark-charcoal))] hover:text-[hsl(var(--sage-green))] transition-colors font-medium px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/"
                className="bg-[hsl(var(--earth-terracotta))] text-white px-6 py-2.5 rounded-full hover:bg-[hsl(var(--gold-bronze))] transition-colors font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
