import { SEO } from '../components/shared/SEO';

export default function Terms() {
  return (
    <>
      <SEO page="terms" />
      <div className="bg-pink-50 min-h-screen py-12">
        <div className="container mx-auto px-4 sm:max-w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-pink-100 p-4 sm:p-8">
          <h1 className="text-3xl font-bold text-pink-500 mb-8 text-center">Terms & Conditions</h1>
          <ol className="list-decimal list-inside space-y-6 text-gray-700">
            <li>
              <strong>Purpose and Scope</strong><br />
              These Terms & Conditions govern all services provided by Skin and Body Fitness, including but not limited to Electro Muscle Stimulation (EMS), Endermologie, Infrared Sauna Therapy, and Phosphatidylcholine (PPC) Injections. By booking or receiving any of our services, you agree to these terms.
            </li>
            <li>
              <strong>Health Disclaimer</strong><br />
              Our treatments are aesthetic and wellness-focused, not a substitute for medical care. They are designed to support body sculpting, circulation, detoxification, and targeted fat reduction.<br />
              You should consult your healthcare provider before beginning any wellness or aesthetic regimen.
            </li>
            <li>
              <strong>Eligibility & Informed Consent</strong><br />
              Services are available to individuals aged 18 and older.<br />
              All clients must complete a medical intake and sign a consent form before treatment.<br />
              You agree to disclose all relevant medical conditions, medications, and allergies.<br />
              Skin and Body Fitness may require medical clearance prior to certain treatments.
            </li>
            <li>
              <strong>Contraindications</strong><br />
              Treatments may not be suitable if you:<br />
              <ul className="list-disc list-inside ml-6">
                <li>Are pregnant or breastfeeding</li>
                <li>Have a pacemaker or heart condition</li>
                <li>Have epilepsy, uncontrolled diabetes, or active skin infections</li>
                <li>Have known allergies to soy or phosphatidylcholine (for PPC)</li>
              </ul>
            </li>
            <li>
              <strong>Treatment Expectations</strong><br />
              Individual results vary based on health, lifestyle, and compliance.<br />
              A series of sessions is typically required for best results.<br />
              No treatment outcomes are guaranteed.<br />
              Progress photos may be taken with client consent.
            </li>
            <li>
              <strong>Phosphatidylcholine (PPC) Injection Disclaimer</strong><br />
              Used for localized fat breakdown via injection-based lipolysis.<br />
              Common side effects: redness, swelling, bruising, tenderness.<br />
              Clients must follow provided aftercare guidelines.<br />
              Not suitable for individuals with liver disorders or soy allergies.
            </li>
            <li>
              <strong>Appointment Policy</strong><br />
              Bookings are essential.<br />
              Cancellations or changes require 24 hours' notice.<br />
              No-shows or late cancellations may incur a R150 charge or forfeit the session.<br />
              Prepaid packages are valid for [6/12] months from purchase.
            </li>
            <li>
              <strong>Payments & Refunds</strong><br />
              Prices are in South African Rand (ZAR) and include VAT where applicable.<br />
              Payments accepted: EFT, card, or approved digital platforms.<br />
              Prepaid sessions are non-refundable but may be transferred by written request.<br />
              Discounts cannot be applied retroactively.
            </li>
            <li>
              <strong>Client Conduct & Right of Refusal</strong><br />
              Skin and Body Fitness maintains a safe, respectful, and professional environment.<br />
              We reserve the right to refuse service in cases of unsafe medical conditions or inappropriate behavior.
            </li>
            <li>
              <strong>Privacy & Data Protection</strong><br />
              We comply with the Protection of Personal Information Act (POPIA).<br />
              Client data is kept confidential and only shared with your written permission or by legal requirement.
            </li>
            <li>
              <strong>Liability Waiver</strong><br />
              By undergoing treatment, you accept the risks involved. Skin and Body Fitness, its staff, and affiliates will not be liable for any adverse outcomes where procedures were followed appropriately and informed consent was given.
            </li>
            <li>
              <strong>Changes to Terms</strong><br />
              Terms & Conditions may be updated periodically. Updates will be made available in-store or via our website and will take immediate effect upon publication.
            </li>
          </ol>
          <div className="mt-10 text-center text-pink-500 font-semibold">
            Thank you for choosing Skin and Body Fitness<br />
            We are dedicated to supporting your confidence, well-being, and long-term body goals with integrity and care.
          </div>
        </div>
      </div>
    </>
  );
} 