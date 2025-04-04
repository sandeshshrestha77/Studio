import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const documentationSections = [
  {
    title: "Getting Started",
    description: "Learn the basics of working with Studio Spark",
    links: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start Guide", href: "/docs/quick-start" },
      { title: "Project Setup", href: "/docs/project-setup" }
    ]
  },
  {
    title: "Design Guidelines",
    description: "Our design principles and brand guidelines",
    links: [
      { title: "Brand Guidelines", href: "/docs/brand-guidelines" },
      { title: "Color System", href: "/docs/color-system" },
      { title: "Typography", href: "/docs/typography" }
    ]
  },
  {
    title: "Development",
    description: "Technical documentation and resources",
    links: [
      { title: "Code Standards", href: "/docs/code-standards" },
      { title: "API Reference", href: "/docs/api-reference" },
      { title: "Component Library", href: "/docs/components" }
    ]
  },
  {
    title: "Workflows",
    description: "Learn about our project workflows and processes",
    links: [
      { title: "Project Lifecycle", href: "/docs/project-lifecycle" },
      { title: "Collaboration", href: "/docs/collaboration" },
      { title: "Quality Assurance", href: "/docs/qa" }
    ]
  }
];

export default function DocsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-space text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with Studio Spark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {documentationSections.map((section, index) => (
            <Card key={index} className="p-6">
              <h2 className="font-space text-xl font-bold mb-2">{section.title}</h2>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Button variant="link" asChild className="p-0 h-auto font-normal">
                      <Link href={link.href} className="flex items-center">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {link.title}
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 text-center">
            <h2 className="font-space text-2xl font-bold mb-4">Need Help?</h2>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/faq">View FAQs</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
