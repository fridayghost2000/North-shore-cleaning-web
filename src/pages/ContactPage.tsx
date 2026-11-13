import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { COMPANY_INFO, SERVICES } from '../data/content';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    facilityType: 'Office / Corporate Building',
    approxSqFt: 'Under 5,000 sq ft',
    serviceNeeded: 'Commercial & Office Cleaning',
    frequency: '3 - 5 Days / Week',
    message: ''
  });

  useEffect(() => {
    const promo = searchParams.get('promo');
    const service = searchParams.get('service');
    const sqft = searchParams.get('sqft');
    const freq = searchParams.get('freq');

    let msg = '';
    if (promo) {
      msg += `Applying Promo Code: ${promo}. `;
    }
    if (sqft) {
      msg += `Estimated facility size: ${sqft} sq ft. `;
    }
    if (freq) {
      msg += `Requested frequency: ${freq}. `;
    }

    if (service === 'floor') {
      setFormData(prev => ({ 
        ...prev, 
        serviceNeeded: 'Floor Stripping & Waxing',
        message: prev.message || msg
      }));
    } else if (service === 'medical') {
      setFormData(prev => ({ 
        ...prev, 
        serviceNeeded: 'Medical & Healthcare Facilities',
        facilityType: 'Medical Clinic / Healthcare',
        message: prev.message || msg
      }));
    } else if (msg) {
      setFormData(prev => ({ ...prev, message: prev.message || msg }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageBanner 
        title="Contact North Shore Clean" 
        subtitle="Get In Touch" 
        breadcrumbs={[{ label: "Contact Us" }]} 
      />

      {/* Contact Cards Info Row */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 space-y-2 card-hover-xclean">
              <div className="w-10 h-10 rounded-2xl bg-[#fba311] text-[#001837] flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#001837] font-['Quicksand']">Our Headquarters</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {COMPANY_INFO.address}
              </p>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 space-y-2 card-hover-xclean">
              <div className="w-10 h-10 rounded-2xl bg-[#001837] text-[#fba311] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#001837] font-['Quicksand']">24-Hour Phone</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold text-[#001837] hover:text-[#fba311]">
                  {COMPANY_INFO.phone}
                </a>
                <span className="block text-[11px] text-gray-500">Emergency & General Inquiries</span>
              </p>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 space-y-2 card-hover-xclean">
              <div className="w-10 h-10 rounded-2xl bg-[#fba311] text-[#001837] flex items-center justify-center font-bold">
                <Mail className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#001837] font-['Quicksand']">Email Address</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                <a href={`mailto:${COMPANY_INFO.email}`} className="font-bold text-[#001837] hover:text-[#fba311]">
                  {COMPANY_INFO.email}
                </a>
                <span className="block text-[11px] text-gray-500">Quick response within 2 hours</span>
              </p>
            </div>

            <div className="bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 space-y-2 card-hover-xclean">
              <div className="w-10 h-10 rounded-2xl bg-[#001837] text-[#fba311] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-[#001837] font-['Quicksand']">Operational Hours</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cleanings scheduled 24/7. Flexible day, night, and weekend rotations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Quote & Message Form Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content / Walkthrough Promise (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="eyebrow-xclean">
                <span>✦</span>
                <span>ON-SITE WALKTHROUGH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
                Schedule a Free Facility Evaluation
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Accurate quotes start with understanding your actual facility. Owner Jerry Sheehan conducts in-person walk-throughs across the North Shore to inspect floor types, square footage, and restroom configurations.
              </p>

              <div className="bg-white p-7 rounded-3xl shadow-sm border border-gray-200 space-y-4">
                <h4 className="text-base font-bold text-[#001837] font-['Quicksand']">
                  What Happens After You Inquire:
                </h4>
                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      1
                    </span>
                    <span><strong>Prompt Contact:</strong> We reach out within 2 hours to confirm your facility details.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      2
                    </span>
                    <span><strong>15-Min Walkthrough:</strong> We tour your space at a time convenient for your schedule.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center font-bold shrink-0 mt-0.5">
                      3
                    </span>
                    <span><strong>Transparent Proposal:</strong> You receive an itemized, clear proposal with zero long-term contracts.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#001837] text-white flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#fba311] shrink-0" />
                <span className="text-xs text-gray-300">
                  Your privacy is respected. We never share your facility information or contact details.
                </span>
              </div>
            </div>

            {/* Right Form: Request Quote (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold font-['Quicksand'] text-[#001837] mb-2">
                  Request Your Custom Quote
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  Fill in your details below and we will get back to you promptly.
                </p>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-['Quicksand'] text-green-900">
                      Walkthrough Request Received!
                    </h4>
                    <p className="text-sm text-green-700 max-w-md mx-auto">
                      Thank you for contacting North Shore Clean. Jerry Sheehan or a supervisory manager will contact you within 2 business hours to schedule your evaluation.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-xclean-orange text-xs mt-2"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Contact person"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Company / Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Business name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(978) 000-0000"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Facility Type
                        </label>
                        <select
                          value={formData.facilityType}
                          onChange={e => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          <option>Office / Corporate Building</option>
                          <option>Medical Clinic / Healthcare</option>
                          <option>Commercial Showroom</option>
                          <option>Industrial / Warehouse</option>
                          <option>School / Educational</option>
                          <option>Retail Plaza</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Approx. Square Footage
                        </label>
                        <select
                          value={formData.approxSqFt}
                          onChange={e => setFormData({ ...formData, approxSqFt: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          <option>Under 2,500 sq ft</option>
                          <option>2,500 - 5,000 sq ft</option>
                          <option>5,000 - 15,000 sq ft</option>
                          <option>15,000 - 30,000 sq ft</option>
                          <option>30,000+ sq ft</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Primary Service
                        </label>
                        <select
                          value={formData.serviceNeeded}
                          onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          {SERVICES.map(s => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Desired Frequency
                        </label>
                        <select
                          value={formData.frequency}
                          onChange={e => setFormData({ ...formData, frequency: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          <option>Daily (5-7 Days/Week)</option>
                          <option>3 Days / Week</option>
                          <option>Weekly (1 Day/Week)</option>
                          <option>Bi-Weekly</option>
                          <option>One-Time Deep Clean / Strip & Wax</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                        Additional Details or Questions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about specific floor types, high-traffic rooms, or preferred cleaning shift hours..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-xclean-orange w-full text-xs py-3 justify-center"
                    >
                      <span>Submit Walkthrough Request</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
