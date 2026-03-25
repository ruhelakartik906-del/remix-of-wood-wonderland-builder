import Layout from "@/components/Layout";

const PrivacyPolicy = () => (
  <Layout>
    <div className="bg-muted min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded shadow-lg p-8 md:p-14 font-serif text-foreground leading-relaxed">
          <div className="text-center border-b-2 border-foreground pb-6 mb-8">
            <h1 className="text-2xl font-bold tracking-wide">INFINITY BOARD PRIVATE LIMITED</h1>
            <p className="text-lg mt-2 font-semibold">Privacy Policy</p>
          </div>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">1.0 &nbsp; INTRODUCTION</h2>
            <p className="mb-3 text-sm">
              1.1 &nbsp; Infinity Board Private Limited ("the Company", "we", "us", or "our") is committed to protecting the privacy and personal information of its users, customers, employees, and stakeholders. This Privacy Policy describes how we collect, use, store, and protect personal data in compliance with applicable Indian data protection laws.
            </p>
            <p className="text-sm">
              1.2 &nbsp; By accessing our website or using our services, you consent to the collection and use of your information as described in this Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">2.0 &nbsp; INFORMATION WE COLLECT</h2>
            <p className="mb-3 text-sm">2.1 &nbsp; We may collect the following categories of personal information:</p>
            <ul className="list-disc pl-8 space-y-1 text-sm mb-3">
              <li>Name, email address, phone number, and mailing address;</li>
              <li>Business information such as company name and designation;</li>
              <li>Enquiry and communication records;</li>
              <li>Website usage data through cookies and analytics tools.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">3.0 &nbsp; USE OF INFORMATION</h2>
            <p className="mb-3 text-sm">3.1 &nbsp; We use the collected information to:</p>
            <ul className="list-disc pl-8 space-y-1 text-sm">
              <li>Respond to enquiries and provide customer support;</li>
              <li>Improve our products and services;</li>
              <li>Comply with legal and regulatory obligations;</li>
              <li>Communicate updates and promotional information (with consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">4.0 &nbsp; DATA PROTECTION</h2>
            <p className="text-sm">
              4.1 &nbsp; We implement appropriate technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. Access to personal data is restricted to authorised personnel only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-bold mb-3">5.0 &nbsp; CONTACT US</h2>
            <p className="text-sm">
              5.1 &nbsp; For any questions regarding this Privacy Policy, please contact us at <strong>info@infinityboards.in</strong>.
            </p>
          </section>

          <div className="text-center text-xs text-muted-foreground mt-12 pt-6 border-t border-border">
            © {new Date().getFullYear()} Infinity Board Private Limited. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default PrivacyPolicy;
