import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alumise",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">
          Privacy <span className="text-brand-blue">Policy.</span>
        </h1>

        <div className="prose prose-slate max-w-none font-light leading-relaxed text-gray-500 space-y-8">
          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">1. Who We Are</h2>
            <p>
              Alumise Ltd (“we”, “us”, or “our”) is a registered company in Scotland, operating from Unit 2B, Eastfield Industrial Estate, Penicuik, Midlothian, EH26 8HA. We are the data controller responsible for the personal information we collect through our website and during the course of our business.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">2. What Data We Collect</h2>
            <p>
              We may collect and process the following personal data about you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact details</strong> — name, email address, telephone number, and postal address.</li>
              <li><strong>Project information</strong> — details about your property, project requirements, and any technical specifications you provide.</li>
              <li><strong>Technical data</strong> — IP address, browser type and version, time zone setting, browser plug-in types, operating system and platform, and other technology on the devices you use to access our website.</li>
              <li><strong>Usage data</strong> — information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">3. How We Use Cookies</h2>
            <p>
              Our website uses cookies to distinguish you from other users. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. We use:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Strictly necessary cookies</strong> — required for the operation of our website.</li>
              <li><strong>Analytical/performance cookies</strong> — allow us to recognise and count the number of visitors and to see how visitors move around our website.</li>
              <li><strong>Functionality cookies</strong> — used to recognise you when you return to our website and personalise content for you.</li>
            </ul>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">4. How We Use Your Information</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with quotes, technical advice, and project estimates.</li>
              <li>To carry out our obligations arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our service or terms.</li>
              <li>To administer and protect our business and this website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">5. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. For tax purposes, we typically retain customer records for six years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">6. Your Rights</h2>
            <p>
              Under UK GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification</strong> — request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Erasure</strong> — request that we delete your personal data where there is no good reason for us continuing to process it.</li>
              <li><strong>Restriction</strong> — request that we suspend the processing of your personal data.</li>
              <li><strong>Data portability</strong> — request the transfer of your personal data to you or to a third party.</li>
              <li><strong>Objection</strong> — object to our processing of your personal data where we are relying on legitimate interests.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">7. Contact Information</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, or if you wish to exercise your rights, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Email:</strong> info@alumise.co.uk</li>
              <li><strong>Telephone:</strong> 0131 210 0321</li>
              <li><strong>Address:</strong> Alumise Ltd, Unit 2B, Eastfield Industrial Estate, Penicuik, Midlothian, EH26 8HA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase text-brand-charcoal mb-4">8. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. The date of the latest update will be indicated at the top of this page.
            </p>
          </section>

          <p className="text-xs pt-12 border-t border-gray-100">Last Updated: May 2026</p>
        </div>
      </div>
    </div>
  );
}
