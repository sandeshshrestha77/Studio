import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// This would typically come from a CMS or database
const blogPosts = {
  "future-of-web-design-trends-2025": {
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends shaping the future of web design and user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends",
    content: `
      <p>The web design landscape is constantly evolving, driven by technological advancements and changing user expectations. As we look ahead to 2025, several exciting trends are emerging that will shape the future of digital experiences.</p>
      
      <h2>1. AI-Driven Personalization</h2>
      <p>Artificial Intelligence will play a crucial role in creating personalized user experiences. Websites will adapt in real-time to user behavior, preferences, and needs, delivering tailored content and interfaces.</p>
      
      <h2>2. Immersive Experiences</h2>
      <p>Virtual and Augmented Reality will become more prevalent in web design, offering users interactive and immersive experiences that blur the line between digital and physical worlds.</p>
      
      <h2>3. Sustainable Design</h2>
      <p>Environmental consciousness will influence web design practices, with a focus on energy-efficient coding practices and eco-friendly hosting solutions.</p>
    `
  },
  "building-accessible-websites": {
    title: "Building Accessible Websites: A Comprehensive Guide",
    excerpt: "Learn how to create websites that are accessible to everyone.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369&auto=format&fit=crop",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Development",
    content: `
      <p>Web accessibility is not just a nice-to-have feature—it's a necessity. Creating websites that are accessible to all users, regardless of their abilities, is both a moral imperative and, in many cases, a legal requirement.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites that can be used by people with disabilities, including visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      <p>The WCAG guidelines provide a framework for creating accessible content, focusing on four main principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>
    `
  }
};

interface BlogPostParams {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: BlogPostParams) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Button variant="outline" className="mb-8" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-medium text-primary mb-4">{post.category}</div>
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            {/* Author Section */}
            <div className="mt-16 pt-8 border-t">
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-space font-bold">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Content Writer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
