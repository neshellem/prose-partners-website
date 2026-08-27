import React, { useState } from 'react';
import { PageId } from '../types';
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface ContactProps {
  onNavigate: (page: PageId) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    clientType: 'individual',
    serviceNeeded: 'probate',
    deadline: '',
    description: '',
    acknowledgedDisclaimer: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acknowledgedDisclaimer) {
      alert('Please check the acknowledgement regarding the legal disclaimer before submitting.');
      return;
    }
    setIsSubmitted(true);
  };

  const mailtoSubject = encodeURIComponent(`Inquiry: ${formData.serviceNeeded} - ${formData.fullName}`);
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nClient Type: ${formData.clientType}\nService: ${formData.serviceNeeded}\nDeadline: ${formData.deadline || 'None'}\n\nDescription:\n${formData.description}`
  );

  return (
    <div className="font-serif">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white py-14 lg:py-18 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-gold-500/40 rounded text-xs uppercase tracking-wider text-gold-700 font-bold mb-4">
              <Mail className="w-3.5 h-3.5 text-gold-600" />
              Get in Touch
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-4">
              Contact ProSe Partners LLC
            </h1>
            <div className="h-1 w-20 bg-gold-500 mb-6" />
            <p className="text-slate-700 text-lg sm:text-xl leading-relaxed">
              Let us know how we can help you organize your documents, case records, or legal support project. Please provide a brief description of your matter below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Consultation Notice */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-navy-950 text-white p-8 rounded-xl border border-navy-800 shadow-md">
              <h2 className="text-2xl font-bold text-white mb-1">Direct Contact Information</h2>
              <p className="text-slate-300 text-sm mb-6">
                Reach out directly by email or phone during normal Colorado business hours.
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Primary Business Email</strong>
                    <a
                      href="mailto:info@prosepartnersllc.com"
                      className="text-gold-300 hover:underline"
                    >
                      info@prosepartnersllc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Office Phone</strong>
                    <a href="tel:7209241203" className="text-gold-300 hover:underline">
                      (720) 924-1203
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Domain</strong>
                    <span className="text-slate-300">prosepartnersllc.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white">Service Location</strong>
                    <span className="text-slate-300">State of Colorado, USA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Information Box */}
            <div className="bg-amber-50 border border-gold-500/40 p-6 rounded-xl text-slate-800 shadow-2xs">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-gold-600" />
                <h3 className="text-lg font-bold text-navy-900">30-Minute Consultations — $60</h3>
              </div>
              <p className="text-sm leading-relaxed mb-3">
                30-minute consultations are available for $60. Please contact ProSe Partners LLC first with a brief description of your matter so we can determine available services, next steps, and scheduling availability before any fee is paid.
              </p>
              <div className="text-xs text-slate-600 flex items-start gap-2 bg-white/70 p-3 rounded border border-gold-300/40">
                <AlertCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                <span>
                  Consultations do not create an attorney-client relationship or provide legal advice.
                </span>
              </div>
            </div>

            {/* Attorneys Notice */}
            <div className="bg-stone-50 border border-slate-200 p-6 rounded-xl">
              <h3 className="text-lg font-bold text-navy-900 mb-1">For Attorneys & Law Firms</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If you are inquiring about high-volume medical record indexing, discovery trial binders, or probate file overflow, please include approximate page counts and target deadlines in your inquiry for an upfront flat-fee quote.
              </p>
            </div>
          </div>

          {/* Right Column: Intake Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-2">Send an Inquiry</h2>
              <div className="h-0.5 w-12 bg-gold-500 mb-6" />

              {isSubmitted ? (
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-8 text-center space-y-4">
                  <div className="w-14 h-14 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">Inquiry Received</h3>
                  <p className="text-slate-700 text-base leading-relaxed max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Your inquiry regarding <strong>{formData.serviceNeeded}</strong> has been logged. We will review your matter and respond via email (<em>{formData.email}</em>) or phone promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`mailto:info@prosepartnersllc.com?subject=${mailtoSubject}&body=${mailtoBody}`}
                      className="bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-2.5 rounded text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-gold-400" />
                      Send Copy Via Direct Email
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          clientType: 'individual',
                          serviceNeeded: 'probate',
                          deadline: '',
                          description: '',
                          acknowledgedDisclaimer: false
                        });
                      }}
                      className="bg-stone-200 hover:bg-stone-300 text-slate-800 font-bold px-4 py-2.5 rounded text-sm transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone & Client Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(720) 000-0000"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        I am an: <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.clientType}
                        onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      >
                        <option value="individual">Individual / Pro Se Litigant</option>
                        <option value="attorney">Attorney / Law Firm</option>
                        <option value="fiduciary">Fiduciary / Personal Representative / Guardian</option>
                        <option value="business">Small Business Owner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Needed & Target Deadline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        Service Needed <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      >
                        <option value="Probate Administration">Probate & Estate Administration</option>
                        <option value="Court Document Prep">Court Document Preparation</option>
                        <option value="Family Law Support">Family Law Document Support</option>
                        <option value="Medical & PI Records">Medical & PI Record Organization</option>
                        <option value="Financial Records">Financial Record Organization</option>
                        <option value="Guardianship & Conservatorship">Guardianship / Conservatorship Reports</option>
                        <option value="Litigation & Trial Binders">Litigation Support / Trial Binders</option>
                        <option value="30-Min Consultation ($60)">30-Minute Consultation ($60)</option>
                        <option value="Self-Help Packets">Self-Help Document Packets</option>
                        <option value="Other Project">Other Legal Support Project</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-navy-900 mb-1">
                        Upcoming Hearing or Deadline (if any)
                      </label>
                      <input
                        type="text"
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        placeholder="e.g. Court filing due in 3 weeks"
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                      />
                    </div>
                  </div>

                  {/* Matter Description */}
                  <div>
                    <label className="block text-sm font-bold text-navy-900 mb-1">
                      Brief Description of Your Matter <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please briefly describe your current situation, the types of documents involved, and what specific assistance or organization you are looking for..."
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-md text-sm bg-white focus:outline-none focus:border-navy-900 font-sans"
                    />
                  </div>

                  {/* Mandatory Disclaimer Checkbox */}
                  <div className="bg-stone-50 border border-slate-200 p-4 rounded-lg">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.acknowledgedDisclaimer}
                        onChange={(e) =>
                          setFormData({ ...formData, acknowledgedDisclaimer: e.target.checked })
                        }
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-navy-900"
                      />
                      <span className="text-xs text-slate-700 leading-relaxed">
                        <strong className="text-navy-900">Acknowledgement:</strong> I understand that contacting ProSe Partners LLC, submitting this form, or scheduling a consultation does not create an attorney-client relationship. ProSe Partners LLC provides document preparation, records organization, and procedural support and does not provide legal representation or legal advice.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="contact-submit-button"
                    className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-4 px-6 rounded-md text-base transition-colors shadow-md flex items-center justify-center gap-2 border border-gold-500/50"
                  >
                    <Send className="w-4 h-4 text-gold-400" />
                    SEND INQUIRY TO PROSE PARTNERS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
