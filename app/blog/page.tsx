import { Card } from "@/components/ui/card";
import { CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    slug: "future-of-web-design-trends-2025",
    title: "The Future of Web Design: Trends to Watch in 2025",
    excerpt: "Explore the emerging trends shaping the future of web design and user experience.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Design Trends"
  },
  {
    slug: "building-accessible-websites",
    title: "Building Accessible Websites: A Comprehensive Guide",
    excerpt: "Learn how to create websites that are accessible to everyone.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2369&auto=format&fit=crop",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "8 min read",
    category: "Development"
  },
  {
    slug: "psychology-of-color-brand-design",
    title: "The Psychology of Color in Brand Design",
    excerpt: "Understanding how color choices influence brand perception and user behavior.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2370&auto=format&fit=crop",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "6 min read",
    category: "Branding"
  },
  {
    slug: "optimizing-website-performance",
    title: "Optimizing Website Performance for Better UX",
    excerpt: "Tips and techniques for improving your website's loading speed and performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "7 min read",
    category: "Performance"
  },
  {
    slug: "ai-in-design",
    title: "The Rise of AI in Design: Friend or Foe?",
    excerpt: "Examining the impact of artificial intelligence on the design industry.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2370&auto=format&fit=crop",
    author: "Lisa Thompson",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Technology"
  },
  {
    slug: "creating-effective-design-systems",
    title: "Creating Effective Design Systems",
    excerpt: "A guide to building and maintaining scalable design systems.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2371&auto=format&fit=crop",
    author: "James Wilson",
    date: "March 1, 2024",
    readTime: "9 min read",
    category: "Design Systems"
  }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-space text-4xl md:text-5xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, thoughts, and stories about design, technology, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden group">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                  <h2 className="font-space text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
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
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
