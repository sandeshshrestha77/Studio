export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="font-space text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="mb-4">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Analytics cookies: Help us understand how visitors use our website</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Marketing cookies: Track your visits to different websites</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>View cookies stored on your computer</li>
              <li>Allow, block, or delete cookies</li>
              <li>Set preferences for certain websites</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Essential Cookies</h3>
                <p>Required for core functionality. Cannot be disabled.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Analytics Cookies</h3>
                <p>Help us improve our website through anonymous data collection.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Preference Cookies</h3>
                <p>Remember your settings for a better experience.</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Marketing Cookies</h3>
                <p>Used to deliver relevant advertisements and track campaign performance.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Cookie Policy, please contact us:
            </p>
            <ul className="list-none pl-6 mb-4">
              <li>Email: privacy@studiospark.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
