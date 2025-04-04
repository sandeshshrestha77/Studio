import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Eco Solutions Brand Transformation",
    client: "GreenTech Innovations",
    description: "A comprehensive rebranding project that helped position GreenTech as a leader in sustainable technology solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    results: [
      "200% increase in brand recognition",
      "150% increase in website traffic",
      "48% improvement in conversion rate"
    ],
    tags: ["Branding", "Web Design", "Digital Marketing"]
  },
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    results: [
      "75% reduction in cart abandonment",
      "120% increase in mobile sales",
      "4.8/5 customer satisfaction score"
    ],
    tags: ["UX Design", "E-commerce", "Development"]
  },
  {
    title: "Mobile App Development",
    client: "HealthTrack",
    description: "Development of a comprehensive health tracking mobile application with advanced features and integrations.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2370&auto=format&fit=crop",
    results: [
      "100,000+ downloads in first month",
      "4.9/5 app store rating",
      "85% user retention rate"
    ],
    tags: ["Mobile Development", "UX Design", "Healthcare"]
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="min-h-[60vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our success stories and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-space text-2xl font-bold mb-2">
                      {study.title}
                    </h2>
                    <p className="text-muted-foreground mb-2">
                      Client: {study.client}
                    </p>
                    <p className="mb-6">{study.description}</p>
                    <div className="space-y-2 mb-8">
                      <h3 className="font-space font-bold">Key Results:</h3>
                      <ul className="space-y-2">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-center">
                            <ArrowRight className="h-4 w-4 text-primary mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button asChild>
                      <Link href="/contact">
                        Start Your Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
