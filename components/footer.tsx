import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Company",
      links: [
        ["About", "/about"],
        ["Services", "/services"],
        ["Portfolio", "/portfolio"],
        ["Careers", "/careers"],
        ["Contact", "/contact"],
      ],
    },
    {
      title: "Resources",
      links: [
        ["Blog", "/blog"],
        ["Case Studies", "/case-studies"],
        ["Documentation", "/docs"],
        ["Help Center", "/help"],
        ["FAQ", "/faq"],
      ],
    },
    {
      title: "Legal",
      links: [
        ["Privacy Policy", "/privacy"],
        ["Terms of Service", "/terms"],
        ["Cookie Policy", "/cookies"],
        ["Sitemap", "/sitemap"],
      ],
    },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="font-space font-bold text-xl">Studio Spark</span>
            </Link>
            <p className="text-muted-foreground">
              Crafting exceptional digital experiences that inspire and elevate brands.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Contact Us:</p>
              <p className="text-sm">hello@studiospark.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-space font-bold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map(([label, path]) => (
                  <li key={path}>
                    <Link
                      href={path}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Studio Spark. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
