import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, Award, CheckCircle, ChevronRight, Code, Layout, Lightbulb, Mail, Play, Star, Users, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 animate-gradient z-20" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2370')] bg-cover bg-fixed bg-center opacity-5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                New Project Launch 🚀
              </span>
            </div>
            <h1 className="font-space text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/60 animate-fade-in">
              Transforming Ideas into Digital Excellence
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Award-winning design studio crafting exceptional digital experiences that elevate brands and inspire audiences worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
              <Button size="lg" className="text-lg px-8 group" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 group" asChild>
                <Link href="/portfolio">
                  View Our Work
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-fade-in-up delay-400">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="hidden md:flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span>50+ Industry Awards</span>
              </div>
              <div className="hidden md:flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Project Success</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with Hover Effects */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Layout,
                title: "Digital Design",
                description: "Creating stunning visual experiences that capture attention and drive engagement.",
                features: ["UI/UX Design", "Brand Identity", "Motion Graphics", "Prototyping"]
              },
              {
                icon: Code,
                title: "Development",
                description: "Building performant, scalable web solutions that deliver results.",
                features: ["Web Applications", "Mobile Apps", "E-commerce", "Custom CMS"]
              },
              {
                icon: Lightbulb,
                title: "Strategy",
                description: "Developing comprehensive brand strategies that resonate with your audience.",
                features: ["Market Research", "Brand Strategy", "Digital Marketing", "Analytics"]
              }
            ].map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <service.icon className="h-12 w-12 mb-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-space text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="group" asChild>
                  <Link href={`/services#${service.title.toLowerCase()}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work with Interactive Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our latest work and success stories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "Eco Solutions Rebrand",
                category: "Brand Design",
                stats: "200% increase in brand recognition",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              },
              {
                title: "Tech Innovators Platform",
                category: "Web Development",
                stats: "500k+ monthly active users",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <Link 
                key={index} 
                href="/portfolio" 
                className="group relative overflow-hidden rounded-lg transform hover:scale-[1.01] transition-all duration-300"
              >
                <div className="aspect-[16/9] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="text-sm font-medium text-primary-foreground mb-2">{project.category}</div>
                    <h3 className="font-space text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80">{project.stats}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials with Dynamic Cards */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-space text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Studio Spark transformed our brand and doubled our online presence within months.",
                author: "Sarah Johnson",
                role: "CEO, TechVision Inc.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
              },
              {
                quote: "The team's creativity and technical expertise exceeded our expectations.",
                author: "Michael Chen",
                role: "Founder, GreenEco Solutions",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
              },
              {
                quote: "Professional, innovative, and incredibly easy to work with. Highly recommended!",
                author: "Emily Rodriguez",
                role: "Marketing Director, Artisan Brands",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-space font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-lg mb-6">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400">
                  {Array(5).fill(null).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & CTA with Gradient Background */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden bg-primary rounded-2xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80 animate-gradient" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="font-space text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Stay Updated with Industry Insights
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Subscribe to our newsletter for expert tips, trends, and exclusive offers
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <Button size="lg" variant="secondary" className="group">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators with Animated Stats */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "250+", label: "Projects Delivered" },
              { number: "95%", label: "Client Satisfaction" },
              { number: "15+", label: "Industry Awards" },
              { number: "8", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="font-space text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {Array(6).fill(null).map((_, index) => (
              <div key={index} className="w-32 h-12 bg-foreground/10 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}