import { SEO } from '../components/shared/SEO';

export default function Privacy() {
  return (
    <>
      <SEO page="privacy" />
      <div className="bg-pink-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:max-w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-pink-100 p-4 sm:p-8">
          <h1 className="text-3xl font-bold text-pink-500 mb-8 text-center">Privacy Policy</h1>
          <ol className="list-decimal list-inside space-y-6 text-gray-700">
            <li>
              <strong>Information We Collect</strong><br />
              We collect and process the following categories of personal information:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li><strong>Identity & Contact Information:</strong> Full name, ID number, phone number, email address, and physical address.</li>
                <li><strong>Medical & Health Information:</strong> Relevant medical history, allergies, medications, or other wellness-related details you voluntarily disclose.</li>
                <li><strong>Treatment & Appointment Data:</strong> Services booked, session notes, before-and-after photos (with your consent), and client progress.</li>
                <li><strong>Payment Information:</strong> Transaction records and receipts (no card details are stored unless explicitly authorised through secure platforms).</li>
                <li><strong>Communication History:</strong> Emails, messages, and feedback between you and our team.</li>
              </ul>
            </li>
            <li>
              <strong>How We Use Your Information</strong><br />
              Your personal data is used to:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Provide and personalise treatments</li>
                <li>Maintain client records and treatment progress</li>
                <li>Book, manage, and confirm appointments</li>
                <li>Communicate updates, promotions, or wellness tips</li>
                <li>Ensure health and safety compliance during service delivery</li>
                <li>Comply with legal, accounting, or tax obligations</li>
              </ul>
            </li>
            <li>
              <strong>Consent & Client Rights</strong><br />
              By providing your information, you consent to its processing for the purposes outlined above.<br />
              You have the right to:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Access your personal data</li>
                <li>Correct or update inaccuracies</li>
                <li>Withdraw consent at any time (which may impact service delivery)</li>
                <li>Request deletion of your records, subject to legal or regulatory retention requirements</li>
              </ul>
              To exercise any of these rights, contact us at <span className="text-pink-500 font-semibold">skinandbodyfitnessct@gmail.co.za</span>.
            </li>
            <li>
              <strong>Data Storage & Security</strong><br />
              We take all reasonable steps to protect your information:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Physical records (if any) are stored securely and accessed only by authorised staff</li>
                <li>Digital records are stored in password-protected systems and encrypted platforms</li>
                <li>Access is limited to personnel directly involved in your care or administration</li>
                <li>We retain your data only as long as necessary for the purpose it was collected or as legally required.</li>
              </ul>
            </li>
            <li>
              <strong>Third-Party Disclosure</strong><br />
              We do not sell, rent, or share your information with unauthorised third parties.<br />
              Data may be shared only with:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>Medical professionals (upon request and with your consent)</li>
                <li>Payment processors or appointment booking tools</li>
                <li>Legal or regulatory bodies, if required by law</li>
              </ul>
            </li>
            <li>
              <strong>Photos and Testimonials</strong><br />
              Client photos and testimonials may be used in our marketing only with prior written or verbal consent. You may withdraw permission at any time.
            </li>
            <li>
              <strong>Cookies & Digital Marketing (If Applicable)</strong><br />
              If you visit our website or engage with us online:
              <ul className="list-disc list-inside ml-6 mt-2">
                <li>We may use cookies for basic analytics and user experience improvements.</li>
                <li>You can adjust your browser settings to block cookies.</li>
                <li>You may opt out of marketing communications at any time by following the unsubscribe instructions in emails or messaging us directly.</li>
              </ul>
            </li>
            <li>
              <strong>Policy Updates</strong><br />
              This policy may be updated from time to time to reflect changes in law or our business practices. The latest version will always be available on request or via our website.
            </li>
          </ol>
          <div className="mt-10 text-center text-pink-500 font-semibold">
            <div>Contact Us</div>
            <div>Skin and Body Fitness</div>
            <div>skinandbodyfitnessct@gmail.co.za</div>
          </div>
        </div>
      </div>
    </>
  );
} 