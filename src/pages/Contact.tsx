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
  const [isSending, setIsSending] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    if (!formData.acknowledgedDisclaimer) {
      alert('Please check the acknowledgement regarding the legal disclaimer before submitting.');
      return;
    }

    setIsSending(true);
    setSubmitError('');
    try {
      const response = await fetch('https://formspree.io/f/xvkarlpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          clientType: formData.clientType,
          serviceNeeded: formData.serviceNeeded,
          deadline: formData.deadline || 'None',
          description: formData.description,
          acknowledgedDisclaimer: formData.acknowledgedDisclaimer,
          _subject: `New ProSe Partners inquiry: ${formData.serviceNeeded}`
        })
      });

      if (!response.ok) {
        throw new Error('Formspree did not accept the submission.');
      }
      setIsSubmitted(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError('Your inquiry could not be sent. Please try again or call/text us at (720) 924-1203.');
    } finally {
      setIsSending(false);
    }
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
