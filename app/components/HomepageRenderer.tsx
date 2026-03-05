'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { HeartHandshake, Activity, Home, Quote, Shield, Clock, Users, Utensils } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Header />
      <ErrorBoundary><HeroSection homepageContent={homepageContent} /></ErrorBoundary>
      <ErrorBoundary><StatsSection homepageContent={homepageContent} /></ErrorBoundary>

      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-primary-900 mb-3">Personalized Care, Every Day</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Flexible care pathways that adapt as residents&apos; needs change over time.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Home, title: 'Independent Living', text: 'Maintenance-free residences with chef-prepared dining and daily activities.' },
              { icon: HeartHandshake, title: 'Assisted Living', text: 'Discreet support for daily routines while preserving independence and dignity.' },
              { icon: Activity, title: 'Memory Care', text: 'Specialized programs and secure spaces designed for cognitive wellness.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#faf8f5] border border-primary-100 rounded-xl p-6">
                <item.icon className="w-6 h-6 text-primary-700 mb-3" />
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-10 h-10 text-primary-300 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-display text-primary-900 leading-relaxed mb-6">
            &ldquo;Moving Mom to Community Collective was the best decision our family ever made. The staff treat every resident like their own family, and the activities keep her engaged and happy every single day.&rdquo;
          </blockquote>
          <div className="text-gray-600">
            <p className="font-semibold text-primary-800">Margaret Sullivan</p>
            <p className="text-sm">Daughter of resident, 3 years</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display text-primary-900 mb-3">Why Families Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Decades of experience, a compassionate team, and a community that feels like home.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: '24/7 On-Site Care', text: 'Licensed nurses and trained caregivers available around the clock for peace of mind.' },
              { icon: Utensils, title: 'Chef-Prepared Meals', text: 'Nutritious, dietitian-approved menus with accommodations for every dietary need.' },
              { icon: Users, title: 'Vibrant Social Life', text: 'Daily activities, outings, and interest groups that foster genuine friendships.' },
              { icon: Clock, title: 'Flexible Scheduling', text: 'Short-term respite stays and trial visits so families can plan with confidence.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary><CTASection homepageContent={homepageContent} /></ErrorBoundary>

      <footer className="bg-[#f5f2ee] text-gray-800 pt-16 pb-8 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-display text-primary-900 mb-4">Community Collective</h3>
              <p className="text-gray-600">Thoughtful programs, trusted service, and a welcoming experience for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/services" className="hover:text-primary-800 transition-colors">Programs</Link></li>
                <li><Link href="/activities" className="hover:text-primary-800 transition-colors">Events</Link></li>
                <li><Link href="/about" className="hover:text-primary-800 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-primary-800 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>123 Main Street</li>
                <li>Anytown, USA 12345</li>
                <li>info@example.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Community Collective. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
