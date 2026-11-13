import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SPECIALS } from '../data/content';

export const SpecialsPage: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <div className="bg-white">
      <PageBanner 
        title="Specials & Coupons" 
        subtitle="Exclusive Savings" 
        breadcrumbs={[{ label: "Specials & Coupons" }]} 
      />

      {/* Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="eyebrow-xclean justify-center">
            <span>✦</span>
            <span>COMMERCIAL PROMOTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
            Current Cleaning Discounts & Introductory Offers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Take advantage of North Shore Clean's introductory commercial offers. Mention the coupon code during your initial on-site walkthrough with Jerry Sheehan to apply your savings.
          </p>
        </div>
      </section>

      {/* Coupon Cards Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SPECIALS.map((special) => (
              <div 
                key={special.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col justify-between relative group"
              >
                {/* Top Badge */}
                <div className="bg-[#001837] text-white p-7 relative">
                  <span className="inline-block bg-[#fba311] text-[#001837] text-[10px] uppercase font-extrabold tracking-wider px-3 py-1 rounded-full mb-3 font-['Quicksand']">
                    {special.badge}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-extrabold font-['Quicksand'] text-[#fba311]">
                      {special.discount}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-['Quicksand'] text-white mt-2">
                    {special.title}
                  </h3>
                  <span className="text-xs text-gray-300 block mt-1">
                    {special.subtitle}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {special.description}
                    </p>

                    <div className="bg-[#f8fafc] p-3.5 rounded-2xl flex items-center justify-between border border-dashed border-gray-300">
                      <div>
                        <span className="block text-[10px] uppercase font-bold text-gray-400 font-['Quicksand']">
                          Coupon Code
                        </span>
                        <span className="text-sm font-mono font-bold text-[#001837]">
                          {special.code}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopy(special.code)}
                        className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#fba311] hover:text-[#001837] text-xs font-bold text-[#001837] shadow-sm transition-all flex items-center gap-1 border border-gray-200"
                        title="Copy coupon code"
                      >
                        {copiedCode === special.code ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] text-gray-500 italic">
                      * {special.validity}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      to={`/contact?promo=${special.code}`}
                      className="btn-xclean-orange w-full text-center text-xs justify-center"
                    >
                      <span>Redeem This Coupon</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
            * Discounts valid for commercial accounts in the North Shore / Essex County service area. Cannot be combined with other promotional offers. Minimum billing or square footage criteria may apply.
          </div>
        </div>
      </section>

      {/* Walkthrough CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h3 className="text-2xl sm:text-3xl font-bold font-['Quicksand'] text-[#001837]">
            Ready to claim your commercial discount?
          </h3>
          <p className="text-sm text-gray-600">
            Book your free on-site walk-through today and we’ll evaluate your square footage and tailor your custom quote.
          </p>
          <div>
            <Link to="/contact" className="btn-xclean-navy text-xs">
              <span>Book On-Site Evaluation Now</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
