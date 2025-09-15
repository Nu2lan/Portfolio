"use client"

import { useState, useEffect, useRef } from 'react'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

export default function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const certificates = [
    {
      title: "Product Owner - Honours Degree",
      issuer: "Baku Design Academy",
      year: "2024",
      image: "/Honours Degree.jpg",
      description: "Awarded with Honours, this diploma signifies advanced knowledge and practical expertise in Agile product ownership. The program provided in-depth training on Scrum, product strategy, backlog management, and stakeholder collaboration.",
    },
    {
      title: "Product Owner - Diploma",
      issuer: "Baku Design Academy",
      year: "2024",
      image: "/BDA.jpg",
      description: "Demonstrates a solid foundation in Agile product development, stakeholder communication, and value-driven backlog management. The program emphasizes practical skills in defining product vision, prioritizing features based on user needs, and collaborating with cross-functional teams.",
    },
    {
      title: "Professional Scrum Product Owner I",
      issuer: "Scrum.org",
      year: "2024",
      image: "/PSPO_I.jpg",
      description: "Strong understanding of the Scrum framework with a focus on the Product Owner role. It validates your ability to maximize product value through effective backlog management, stakeholder collaboration, and agile delivery practices.",
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2023",
      image: "/PSM_I.jpg",
      description: "Deep understanding of the Scrum framework, including roles, events, artifacts, and rules.",
    },
    {
      title: "Product Management Certificate",
      issuer: "ATL Academy",
      year: "2022",
      image: "/ATL.jpg",
      description: "Certification in Scrum product ownership methodologies and practices",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="certificates" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Credentials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in product management and related fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.title}
              className={`group hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1 line-clamp-2">{cert.title}</h3>
                    <p className="text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {cert.year}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="flex-1">
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold">{cert.title}</h3>
                          <p className="text-muted-foreground">{cert.issuer} • {cert.year}</p>
                        </div>
                        <div className="relative w-full" style={{ paddingBottom: '80%' /* 4:3 aspect ratio */ }}>
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            fill
                            style={{ objectFit: 'contain' }}
                            className="rounded-lg border"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                          {/*<p className="text-xs text-muted-foreground">
                            Credential ID: {cert.credentialId}
                          </p>*/}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
