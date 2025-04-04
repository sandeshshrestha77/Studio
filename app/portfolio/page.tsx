import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Our Work
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of award-winning projects and creative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Eco Solutions Rebrand",
                category: "Brand Design",
                description: "Complete brand refresh for a sustainable technology company.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
              },
              {
                title: "Tech Innovators Platform",
                category: "Web Development",
                description: "Custom web application for a leading tech innovation hub.",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop"
              },
              {
                title: "Artisan Coffee App",
                category: "Mobile Development",
                description: "Mobile app connecting coffee lovers with local roasters.",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2370&auto=format&fit=crop"
              },
              {
                title: "Urban Fitness",
                category: "Brand & Web",
                description: "Comprehensive digital presence for a fitness startup.",
                image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2370&auto=format&fit=crop"
              },
              {
                title: "Fresh Foods Market",
                category: "E-commerce",
                description: "Online marketplace for organic food producers.",
                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2370&auto=format&fit=crop"
              },
              {
                title: "Creative Agency Site",
                category: "Web Design",
                description: "Modern website for a boutique creative agency.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2370&auto=format&fit=crop"
              }
            ].map((project, index) => (
              <Card key={index} className="group overflow-hidden">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="font-space text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Industry Awards" },
              { number: "8", label: "Years of Excellence" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-space text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
