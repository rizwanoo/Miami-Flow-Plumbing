import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/plumbingData';
import { SectionHeading } from '../components/common/SectionHeading';
import { GlassCard } from '../components/common/GlassCard';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-sky-600" />
            <span>Legal &amp; Privacy Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-outfit mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm">
            Effective Date: January 1, 2026 • Last Updated: September 2026
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 lg:p-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              1. Introduction &amp; Commitment
            </h2>
            <p>
              At <strong>{COMPANY_INFO.name}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit inquiries for residential or commercial plumbing services in South Florida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect personal information that you voluntarily provide to us when scheduling an estimate, requesting emergency dispatch, or communicating with our team.
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm">
              <li><strong>Contact Data:</strong> Full name, telephone number, and email address.</li>
              <li><strong>Service &amp; Property Data:</strong> Physical property address, gate codes, property type, and details regarding your plumbing problem or project.</li>
              <li><strong>Appointment Data:</strong> Preferred service dates, arrival windows, and dispatch notes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              3. Contact Forms &amp; Communications
            </h2>
            <p>
              When you submit a contact or estimate form on our website, the provided details are used solely to evaluate your service request, provide accurate pricing estimates, and contact you via phone or email regarding dispatch. We do not sell your contact details to third-party telemarketers or lead aggregators.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              4. Cookies &amp; Tracking Technologies
            </h2>
            <p>
              Our website may utilize standard cookies, web beacons, and browser caching to provide a seamless browsing experience, remember your preferences, and optimize site performance. You can choose to disable cookies through your individual browser settings without losing access to basic site content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              5. Analytics &amp; Third-Party Services
            </h2>
            <p>
              We may use standard web analytics tools (such as Google Analytics) to analyze aggregate site traffic, popular service pages, and geographic visitor distribution across South Florida. This non-personally identifiable data assists us in optimizing our web performance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              6. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard administrative and technical security measures—including SSL/TLS encryption protocols—to protect your personal information against unauthorized access, loss, or alteration. We retain your contact records only as long as necessary for active warranty tracking, service history, and legal accounting compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              7. Information Sharing
            </h2>
            <p>
              We do NOT sell, rent, or trade your personal information. We only share information with certified technicians assigned to your property or trusted service providers who assist us in operating our dispatch infrastructure under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              8. Your Rights &amp; Opt-Out
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your contact information from our marketing communications at any time. Simply call our office or email us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              9. Policy Updates
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect modifications in our operational practices or statutory regulations. Any revisions will be published immediately on this page with an updated effective date.
            </p>
          </section>

          <section className="pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              10. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions or concerns regarding our Privacy Policy or your data, please reach out to our Miami office:
            </p>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2 text-slate-700">
              <p><strong>Company:</strong> {COMPANY_INFO.name}</p>
              <p><strong>License:</strong> {COMPANY_INFO.license}</p>
              <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
              <p><strong>Telephone:</strong> {COMPANY_INFO.phone}</p>
              <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
