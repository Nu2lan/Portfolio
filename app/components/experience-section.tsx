"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const experiences = [
    {
      role: "Junior Product Owner",
      company: "Bestcomp Group",
      logo: "/BCG.png?height=60&width=60",
      location: "Baku, Azerbaijan",
      period: "2024 - Present",
      achievements: [
        "Gathered customer and user requirements to create a clear and prioritized product backlog",
        "Provided direction to the team by defining value-driven development priorities",
        "Actively participated in Agile ceremonies such as sprint planning, daily scrums, sprint reviews, and retrospectives",
        "Closely collaborated with UX/UI designers and developers to ensure the product is both user-friendly and technically robust",
        "Maintained continuous communication with stakeholders to ensure alignment with business objectives",
        "Wrote user stories, defined acceptance criteria, and highlighted the most critical functionalities",
      ],
      technologies: ["Jira", "Confluence", "Figma", "Analytics", "A/B Testing"],
    },
    {
      role: "Product Owner",
      company: "iDoktor.az (Startup)",
      logo: "/iDoctor.jpg?height=60&width=60",
      location: "Baku, Azerbaijan",
      period: "2023 - 2024",
      achievements: [
        "Market research and competitor analysis",
        "Provide team members with detailed information about the work to be done during the sprint",
        "Backlog management",
        "Stakeholder management",
        "Organization of meetings",
      ],
      technologies: ["Scrum", "User Stories", "Roadmapping", "Stakeholder Management"],
    },
    {
      role: "IT Coordinator",
      company: "One Degree LLC",
      logo: "/OD.png?height=60&width=60",
      location: "Baku, Azerbaijan",
      period: "2023 - 2024",
      achievements: [
        "Working directly with customers to provide IT solutions tailored to their needs",
        "Timely resolution of inquiry tickets opened through Zoho Desk",
        "Providing customers with appropriate Service Packs and setting price ranges",
        "Establishing contact with potential customers and attracting them to the company",
      ],
      technologies: ["System", "Office", "Requirements Analysis", "Sales management"],
    },
    {
      role: "IT Specialist",
      company: "Kapital Bank",
      logo: "/KB.jpg?height=60&width=60",
      location: "Baku, Azerbaijan",
      period: "2022 - 2023",
      achievements: [
        "Technical review, installation and elimination of possible problems of IT equipment inside the bank",
        "Solving technical problems of bank employees in the JIRA system",
        "Writing in-bank and other software for computers and support for solving problems",
        "The process of creating new employees' users and handing over their computers",
      ],
      technologies: ["Information Technology", "Help Desk", "Documentation", "System Administrator"],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A progressive career journey in product management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={exp.logo || "/placeholder.svg"}
                    alt={`${exp.company} logo`}
                    width={60}
                    height={60}
                    className="rounded-lg border group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
