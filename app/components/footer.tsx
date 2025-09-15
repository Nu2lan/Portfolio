"use client"

import { useState, useEffect } from 'react'
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'Home', href: 'hero' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Experience', href: 'experience' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ]

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nu2lanibrahimov', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:nu2lanibrahimov@outlook.com', label: 'Email' },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <button
            onClick={() => scrollToSection('hero')}
            className="font-bold text-xl hover:text-primary transition-colors">
            Nİ
            </button>
            <p className="text-muted-foreground mb-4">
              Product Owner passionate about creating user-centric digital experiences through strategic product management.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  title={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nurlan İbrahimov. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </footer>
  )
}
