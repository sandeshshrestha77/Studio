export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="font-space text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the materials on Studio Spark's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions and may be terminated by Studio Spark at any time.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="mb-4">
              The materials on Studio Spark's website are provided on an 'as is' basis. Studio Spark makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="mb-4">
              In no event shall Studio Spark or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Studio Spark's website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
            <p className="mb-4">
              The materials appearing on Studio Spark's website could include technical, typographical, or photographic errors. Studio Spark does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">6. Links</h2>
            <p className="mb-4">
              Studio Spark has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Studio Spark of the site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="mb-4">
              Studio Spark may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
