import React, { useState } from 'react';
import { CheckCircle, ArrowUpRight, Sparkles, Clock, ShieldCheck, Heart } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    position: 'Commercial Cleaning Specialist',
    shift: 'Evening / Night Shift',
    experience: '',
    hasTransport: 'yes',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <PageBanner 
        title="Careers & Employment" 
        subtitle="Join Our Team" 
        breadcrumbs={[{ label: "Careers" }]} 
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="eyebrow-xclean justify-center">
            <span>✦</span>
            <span>EMPLOYMENT OPPORTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
            Build a Rewarding Career with North Shore Clean
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We are always seeking conscientious, hard-working, and reliable individuals to join our commercial cleaning and floor maintenance teams in Beverly and across the North Shore.
          </p>
        </div>
      </section>

      {/* Why Work With Us & Application Form Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info: Why Join Us (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <h3 className="text-xl font-bold font-['Quicksand'] text-[#001837]">
                  Why Work With Us?
                </h3>

                <div className="space-y-4 text-xs text-gray-600">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001837]">Competitive Pay & On-Time Direct Deposit</h4>
                      <p className="mt-1">We value your dedication and ensure fair compensation with steady, consistent hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001837]">Flexible Shift Options</h4>
                      <p className="mt-1">Part-time evening shifts, daytime porter schedules, and weekend maintenance assignments.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001837]">Safe, Supportive Environment</h4>
                      <p className="mt-1">Comprehensive safety equipment, green eco-friendly chemicals, and hands-on supervisory guidance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#001837]">Respectful Leadership</h4>
                      <p className="mt-1">Direct access to owner Jerry Sheehan and leadership who care about your professional growth.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2 font-['Quicksand']">
                    General Requirements:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-500">
                    <li>• High School diploma or equivalent</li>
                    <li>• Must be authorized to work in the United States</li>
                    <li>• Reliable transportation to job sites in the North Shore area</li>
                    <li>• Pass standard background screening</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Form: Online Application (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="mb-6 space-y-1">
                  <h3 className="text-2xl font-bold font-['Quicksand'] text-[#001837]">
                    Online Employment Application
                  </h3>
                  <p className="text-xs text-gray-500">
                    Submit your credentials below and our hiring coordinator will review and contact you.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold font-['Quicksand'] text-green-900">
                      Application Submitted Successfully!
                    </h4>
                    <p className="text-sm text-green-700 max-w-md mx-auto">
                      Thank you for your interest in joining North Shore Cleaning Systems. Our hiring manager will review your submission and reach out within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-xclean-orange text-xs mt-2"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>

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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          City / Town of Residence *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={e => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Beverly, Salem, Lynn"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Position of Interest
                        </label>
                        <select
                          value={formData.position}
                          onChange={e => setFormData({ ...formData, position: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          <option>Commercial Cleaning Specialist</option>
                          <option>Floor Care Technician (Stripping/Waxing)</option>
                          <option>Day Porter (On-site facility keeper)</option>
                          <option>Night Supervisor / Team Lead</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                          Preferred Shift
                        </label>
                        <select
                          value={formData.shift}
                          onChange={e => setFormData({ ...formData, shift: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                        >
                          <option>Evening / Night Shift (5pm - 11pm)</option>
                          <option>Daytime Porter (8am - 4pm)</option>
                          <option>Late Night / Overnight (10pm - 6am)</option>
                          <option>Weekend Shifts Only</option>
                          <option>Flexible / Any Shift</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                        Do you have reliable transportation?
                      </label>
                      <div className="flex gap-6 text-xs text-gray-700 pt-1">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="transport"
                            value="yes"
                            checked={formData.hasTransport === 'yes'}
                            onChange={() => setFormData({ ...formData, hasTransport: 'yes' })}
                            className="accent-[#fba311]"
                          />
                          <span>Yes, personal vehicle / reliable transit</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="transport"
                            value="no"
                            checked={formData.hasTransport === 'no'}
                            onChange={() => setFormData({ ...formData, hasTransport: 'no' })}
                            className="accent-[#fba311]"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#001837] mb-1 font-['Quicksand']">
                        Cleaning or Floor Care Experience (Briefly describe)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.experience}
                        onChange={e => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="Mention any past commercial cleaning, hotel housekeeping, floor buffer operation, or janitorial work..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-[#fba311] bg-gray-50 focus:bg-white"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-xclean-orange w-full text-xs py-3 justify-center"
                    >
                      <span>Submit Application</span>
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
