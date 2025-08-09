'use client'

import { useEffect } from 'react'

export default function SEOMonitoring() {
  useEffect(() => {
    // Google Search Console verification (add your verification code)
    const addGoogleSearchConsole = () => {
      const meta = document.createElement('meta')
      meta.name = 'google-site-verification'
      meta.content = 'wJcguLEyT2gU1rjXOWBUAB_U-Aca6Hy5SoSESzH3Sc8' // Replace with actual code from Google Search Console
      document.head.appendChild(meta)
    }

    // Only add in production
    if (process.env.NODE_ENV === 'production') {
      addGoogleSearchConsole()
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Log Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming
            console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart)
          }
        }
      })
      
      observer.observe({ entryTypes: ['navigation'] })
    }
  }, [])

  return null // This component doesn't render anything
}
