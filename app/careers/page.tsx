import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced frontend developer to join our team and help build beautiful, responsive web applications.",
      requirements: [
        "5+ years of experience with React",
        "Strong understanding of modern JavaScript",
        "Experience with TypeScript and Next.js",
        "Eye for design and attention to detail"
      ]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Hybrid",
      type: "Full-time",
      description: "Join our design team to create intuitive and engaging user experiences for our clients' digital products.",
      requirements: [
        "3+ years of UI/UX design experience",
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio demonstrating web and mobile design",
        "Experience with design systems"
      ]
    },
    {
      title: "Digital Marketing Manager",
      department: "Marketing",
      location: "On-site",
      type: "Full-time",
      description: "Lead our digital marketing efforts and help grow our clients' online presence through strategic campaigns.",
      requirements: [
        "5+ years of digital marketing experience",
        "Experience with SEO, PPC, and social media",
        "Strong analytical and reporting skills",
        "Project management experience"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Health, dental, and vision insurance",
    "Flexible work arrangements",
    "Professional development budget",
    "Regular team events and retreats",
    "Modern equipment and tools",
    "Generous vacation policy",
    "Parental leave"
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground">
            We're always looking for talented individuals who are passionate about creating exceptional digital experiences.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="font-space text-3xl font-bold mb-8">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section>
          <h2 className="font-space text-3xl font-bold mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="font-space text-xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {position.department}
                      </span>
                      <span className="bg-secondary/50 px-3 py-1 rounded-full">
                        {position.location}
                      </span>
                      <span className="bg-muted px-3 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0" asChild>
                    <Link href="/contact" className="flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-muted-foreground mb-4">{position.description}</p>
                <div>
                  <h4 className="font-bold mb-2">Requirements:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    {position.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
