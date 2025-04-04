import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, HeadphonesIcon, MessageCircle, Video } from "lucide-react";
import Link from "next/link";

const helpResources = [
  {
    title: "Documentation",
    description: "Browse our comprehensive documentation and guides",
    icon: Book,
    href: "/docs"
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step video tutorials and walkthroughs",
    icon: Video,
    href: "/tutorials"
  },
  {
    title: "Live Chat Support",
    description: "Get real-time assistance from our support team",
    icon: MessageCircle,
    href: "/contact"
  },
  {
    title: "Support Center",
    description: "Access our knowledge base and support articles",
    icon: HeadphonesIcon,
    href: "/support"
  }
];

const commonQuestions = [
  {
    question: "How do I get started with Studio Spark?",
    answer: "Begin by reviewing our quick start guide in the documentation section. This will walk you through the basic setup and initial steps."
  },
  {
    question: "What are your service packages?",
    answer: "We offer various service packages tailored to different needs and budgets. Visit our Services page for detailed information about each package."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website project takes 6-8 weeks, while larger applications can take 3-6 months."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide various maintenance and support packages to ensure your digital presence remains optimal. Contact us for more details."
  }
];

export default function HelpPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-space text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground">
            Find the resources and support you need to succeed with Studio Spark
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {helpResources.map((resource, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-space text-xl font-bold mb-2">{resource.title}</h2>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link href={resource.href} className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="font-space text-2xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-6">
            {commonQuestions.map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-space font-bold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
