import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including web design, development, branding, digital marketing, and UI/UX design. Our team specializes in creating custom solutions tailored to your specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A typical website project takes 6-8 weeks, while larger applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer customized pricing based on project requirements. Our services start at $5,000 for basic websites and scale based on functionality and complexity. Contact us for a detailed quote."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital presence remains optimal. This includes regular updates, security monitoring, and technical support."
    },
    {
      question: "How do you handle revisions?",
      answer: "Our process includes two rounds of revisions for each project phase. Additional revisions can be accommodated at an hourly rate. We ensure clear communication throughout to minimize the need for extensive revisions."
    },
    {
      question: "What is your payment process?",
      answer: "We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, we offer managed hosting solutions with 24/7 monitoring, regular backups, and security updates. We can also work with your existing hosting provider if preferred."
    },
    {
      question: "Can you help with content creation?",
      answer: "Yes, we offer content strategy and creation services including copywriting, photography, and video production. We can help develop compelling content that engages your audience."
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-space text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find answers to common questions about our services, process, and policies.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h2 className="font-space text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <div className="space-y-2">
              <p>Email: support@studiospark.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
