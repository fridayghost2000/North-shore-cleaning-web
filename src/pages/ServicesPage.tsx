import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SERVICES } from '../data/content';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageBanner 
        title="Commercial Cleaning Services" 
        subtitle="What We Do" 
        breadcrumbs={[{ label: "Services" }]} 
      />

      {/* Services Overview Intro */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="eyebrow-xclean justify-center">
            <span>✦</span>
            <span>COMPREHENSIVE FACILITY SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
            Tailored Janitorial & Specialty Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            From daily commercial office cleaning to heavy-duty floor restoration and emergency disinfection, North Shore Clean delivers dependable quality backed by industrial-grade equipment and supervised crews.
          </p>
        </div>
      </section>

      {/* Full Services Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-3xl overflow-hidden border border-gray-200 card-hover-xclean flex flex-col justify-between group shadow-sm"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001837]/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-[#001837]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20 font-['Quicksand']">
                    Commercial Grade
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-['Quicksand'] text-[#001837] group-hover:text-[#fba311] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="pt-3 space-y-1.5 border-t border-gray-100">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#fba311] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      to={`/services/${service.slug}`}
                      className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl bg-[#f8fafc] group-hover:bg-[#fba311] text-[#001837] text-xs font-bold font-['Quicksand'] transition-all"
                    >
                      <span>Full Details & Specs</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Janitorial Supplies Callout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="bg-[#001837] rounded-[36px] p-8 sm:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="eyebrow-xclean">
                  <span>✦</span>
                  <span>RESTOCKING & CONSUMABLES</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Quicksand'] text-white">
                  Need Paper Goods, Hand Soap & Facility Consumables?
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Avoid coordinating multiple vendors. North Shore Clean stocks and replenishes commercial paper towels, bath tissue, antibacterial foaming soap, trash liners, and touch-free dispenser systems directly to your supply closet.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link to="/contact" className="btn-xclean-orange text-xs">
                  <span>Request Supply Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
