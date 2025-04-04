import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Layout, Lightbulb, Megaphone, Palette, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              From concept to execution, we offer comprehensive digital solutions tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Brand Design",
                description: "Create a distinctive brand identity that resonates with your audience.",
                features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
                price: "Starting at $2,500"
              },
              {
                icon: Layout,
                title: "Web Design",
                description: "Beautiful, responsive websites that engage and convert visitors.",
                features: ["UI/UX Design", "Responsive Design", "Prototyping", "User Testing"],
                price: "Starting at $5,000"
              },
              {
                icon: Code,
                title: "Web Development",
                description: "Custom web applications built with modern technologies.",
                features: ["Frontend Development", "Backend Systems", "CMS Integration", "API Development"],
                price: "Starting at $8,000"
              },
              {
                icon: Smartphone,
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications.",
                features: ["iOS Development", "Android Development", "React Native", "App Store Optimization"],
                price: "Starting at $15,000"
              },
              {
                icon: Megaphone,
                title: "Digital Marketing",
                description: "Strategic marketing solutions to grow your digital presence.",
                features: ["SEO", "Content Strategy", "Social Media", "Email Marketing"],
                price: "Starting at $2,000/month"
              },
              {
                icon: Lightbulb,
                title: "Consulting",
                description: "Expert guidance for your digital transformation journey.",
                features: ["Digital Strategy", "Technology Consulting", "UX Audit", "Performance Optimization"],
                price: "Starting at $200/hour"
              }
            ].map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-space text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-space font-bold text-lg mb-6">{service.price}</p>
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-space text-3xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into understanding your goals, audience, and requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a comprehensive plan tailored to your specific needs."
              },
              {
                step: "03",
                title: "Creation",
                description: "Bringing your vision to life with expert craftsmanship and attention to detail."
              },
              {
                step: "04",
                title: "Launch",
                description: "Ensuring a smooth deployment and continued success post-launch."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="font-space text-5xl font-bold text-primary/20 mb-4">{phase.step}</div>
                <h3 className="font-space text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
