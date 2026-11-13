import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target,
  HeartHandshake,
  Check,
  ArrowUpRight
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageBanner 
        title="About North Shore Clean" 
        subtitle="Our History & Standards" 
        breadcrumbs={[{ label: "About Us" }]} 
      />

      {/* Main Story Section */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image & Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80" 
                alt="Cummings Center North Shore Clean Team" 
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001837]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-[#fba311] tracking-wider">
                  HQ: Cummings Center, Beverly MA
                </span>
                <h3 className="text-xl font-bold font-['Quicksand'] text-white mt-1">
                  Direct local supervision across Essex County
                </h3>
              </div>
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-[#f8fafc] p-4 rounded-2xl border border-gray-100">
                <span className="block text-2xl font-bold text-[#fba311] font-['Quicksand']">1995</span>
                <span className="text-xs text-gray-600 font-semibold">Founded</span>
              </div>
              <div className="bg-[#f8fafc] p-4 rounded-2xl border border-gray-100">
                <span className="block text-2xl font-bold text-[#001837] font-['Quicksand']">100%</span>
                <span className="text-xs text-gray-600 font-semibold">Contract-Free</span>
              </div>
              <div className="bg-[#f8fafc] p-4 rounded-2xl border border-gray-100">
                <span className="block text-2xl font-bold text-[#fba311] font-['Quicksand']">24/7</span>
                <span className="text-xs text-gray-600 font-semibold">Client Hotline</span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="eyebrow-xclean">
              <span>✦</span>
              <span>DEDICATED COMMERCIAL JANITORIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837] leading-tight">
              Three Decades of Reliable Facility Cleanliness
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Founded by Jerry Sheehan, <strong>North Shore Cleaning Systems, Inc.</strong> was established with a singular objective: to deliver dependable, honest, and spotless commercial cleaning solutions without forcing clients into rigid, long-term binding contracts.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed">
              Headquartered at <strong>100 Cummings Center in Beverly, Massachusetts</strong>, we operate close to our clients. When you partner with North Shore Clean, you work directly with responsive decision-makers who visit your premises, inspect standards personally, and adjust specifications as your business evolves.
            </p>

            {/* Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#001837]">Hands-On Supervisory Audits</h4>
                  <p className="text-xs text-gray-500">Every account has regular on-site supervisor walkthroughs to guarantee quality control.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#001837]">Comprehensive Insurance Coverage</h4>
                  <p className="text-xs text-gray-500">Full general liability, property bonding, and workers' compensation protection on all team members.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fba311]/20 flex items-center justify-center text-[#fba311] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#001837]">No Locked Long-Term Contracts</h4>
                  <p className="text-xs text-gray-500">We earn your recurring business every day through meticulous execution.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link to="/contact" className="btn-xclean-orange text-xs">
                <span>Request Free Walkthrough</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/services" className="btn-xclean-outline text-xs">
                <span>Explore Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Values (Matching Xclean Feature Cards) */}
      <section className="py-20 bg-[#f8fafc] border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <div className="eyebrow-xclean justify-center">
              <span>✦</span>
              <span>CORE PRINCIPLES</span>
            </div>
            <h2 className="text-3xl font-bold font-['Quicksand'] text-[#001837]">
              How We Conduct Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4 card-hover-xclean">
              <div className="w-12 h-12 rounded-2xl bg-[#001837] text-[#fba311] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-['Quicksand'] text-[#001837]">
                Customer-Centric Focus
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We believe no two office spaces are identical. We design customized task checklists specifically reflecting your facility's layout, high-touch points, and working hours.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4 card-hover-xclean">
              <div className="w-12 h-12 rounded-2xl bg-[#fba311] text-[#001837] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-['Quicksand'] text-[#001837]">
                Integrity & Accountability
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                If something doesn't meet your expectations, we fix it promptly. With a 24-hour hotline, you always reach someone with the authority to resolve issues on the spot.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-4 card-hover-xclean">
              <div className="w-12 h-12 rounded-2xl bg-[#001837] text-[#fba311] flex items-center justify-center font-bold">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-['Quicksand'] text-[#001837]">
                Experienced Local Personnel
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We hire and thoroughly train local residents from the North Shore area, providing fair compensation and rigorous safety training in chemical handling and equipment.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="bg-[#001837] rounded-[36px] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="eyebrow-xclean">
                  <span>✦</span>
                  <span>GEOGRAPHIC COVERAGE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-['Quicksand'] text-white">
                  Proudly Serving the Massachusetts North Shore & Essex County
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Our commercial cleaning crews regularly service commercial properties, professional medical plazas, schools, and business facilities throughout:
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Beverly", "Salem", "Peabody", "Danvers", "Marblehead", "Gloucester", "Lynn", "Woburn", "Hamilton", "Wenham", "Manchester-by-the-Sea"].map((town, idx) => (
                    <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-gray-200 border border-white/10">
                      • {town}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <Link to="/contact" className="btn-xclean-orange text-xs">
                  <span>Check Your Service Area</span>
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
