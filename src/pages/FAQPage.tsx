import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, ArrowUpRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { FAQS, COMPANY_INFO } from '../data/content';

export const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      <PageBanner 
        title="Frequently Asked Questions" 
        subtitle="Helpful Answers" 
        breadcrumbs={[{ label: "FAQ's" }]} 
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="eyebrow-xclean justify-center">
            <span>✦</span>
            <span>CLEAR & HONEST SERVICE INFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
            Everything You Need to Know About Our Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Have questions about contracts, insurance, or customized janitorial schedules? Here are answers to common questions asked by facility managers across the North Shore.
          </p>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 w-full">
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg font-['Quicksand'] text-[#001837]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#fba311] text-[#001837] rotate-180' : 'bg-[#f8fafc] text-gray-500'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fcfdfe]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need More Assistance Card */}
          <div className="mt-16 bg-[#001837] rounded-[36px] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase text-[#fba311] tracking-wider font-['Quicksand']">
                Still have a question?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Quicksand'] text-white">
                Speak directly with owner Jerry Sheehan
              </h3>
              <p className="text-xs text-gray-300">
                Call our direct line or submit an inquiry to discuss your facility's unique operational needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="btn-xclean-orange text-xs whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call (978) 809-5533</span>
              </a>
              <Link to="/contact" className="btn-xclean-outline text-xs whitespace-nowrap text-white border-white/40 hover:border-white">
                <span>Send Us a Message</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
