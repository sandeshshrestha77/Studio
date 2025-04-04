import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, Heart, Users } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Stories Since 2015
            </h1>
            <p className="text-xl text-muted-foreground">
              We're a team of passionate creators, innovators, and problem solvers dedicated to transforming ideas into impactful digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "We pour our hearts into every project, ensuring exceptional results."
              },
              {
                icon: Users,
                title: "Collaboration",
                description: "Working together to bring your vision to life."
              },
              {
                icon: Clock,
                title: "Efficiency",
                description: "Delivering quality results on time, every time."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Setting the highest standards in everything we do."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-space text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-space text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
              },
              {
                name: "Michael Chen",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
              },
              {
                name: "Emily Rodriguez",
                role: "Design Lead",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
              }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-space text-xl font-bold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
