import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle, 
  Phone, 
  Mail, 
  ChevronRight, 
  ArrowUpRight 
} from 'lucide-react';
import { PageBanner } from '../components/PageBanner';
import { SERVICES, COMPANY_INFO } from '../data/content';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="bg-white">
      <PageBanner 
        title={service.title} 
        subtitle="Commercial Service Details" 
        breadcrumbs={[
          { label: "Services", path: "/services" },
          { label: service.title }
        ]} 
      />

      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <div className="eyebrow-xclean">
                  <span>✦</span>
                  <span>COMMERCIAL SPECIFICATIONS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-['Quicksand'] text-[#001837]">
                  {service.title} for North Shore Facilities
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {service.fullDesc}
                </p>
              </div>

              {/* Scope of Work / Features */}
              <div className="bg-[#f8fafc] p-8 rounded-3xl space-y-4 border border-gray-100">
                <h3 className="text-xl font-bold font-['Quicksand'] text-[#001837]">
                  What Our Service Scope Covers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-[#fba311] shrink-0 mt-0.5" />
                      <span className="text-xs font-semibold text-[#001837]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Business Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold font-['Quicksand'] text-[#001837]">
                  Business & Facility Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-[#fba311] text-[#001837] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Free Evaluation Callout */}
              <div className="p-7 rounded-3xl bg-[#001837] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div>
                  <h4 className="text-lg font-bold font-['Quicksand'] text-[#fba311]">
                    Need a Quote for {service.title}?
                  </h4>
                  <p className="text-xs text-gray-300 mt-1">
                    Jerry Sheehan will personally conduct a walkthrough of your premises.
                  </p>
                </div>
                <Link to="/contact" className="btn-xclean-orange text-xs whitespace-nowrap">
                  <span>Schedule Walkthrough</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Navigation to Other Services */}
              <div className="bg-[#f8fafc] p-6 rounded-3xl border border-gray-100 space-y-4">
                <h4 className="font-bold text-base text-[#001837] font-['Quicksand'] border-b border-gray-200 pb-2">
                  All Services
                </h4>
                <div className="space-y-1">
                  {SERVICES.map((s) => {
                    const isCurrent = s.slug === slug;
                    return (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className={`flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isCurrent
                            ? 'bg-[#001837] text-white'
                            : 'text-gray-700 hover:bg-white hover:text-[#fba311]'
                        }`}
                      >
                        <span>{s.title}</span>
                        <ChevronRight className={`w-3.5 h-3.5 ${isCurrent ? 'text-[#fba311]' : 'text-gray-400'}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="bg-[#001837] p-7 rounded-3xl text-white space-y-4">
                <span className="text-[10px] uppercase font-bold text-[#fba311] tracking-wider font-['Quicksand']">
                  DIRECT CONTACT
                </span>
                <h4 className="text-lg font-bold font-['Quicksand'] text-white">
                  Have questions about this service?
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Call our 24/7 hotline directly to speak with our management team about specifications and custom shifts.
                </p>

                <div className="pt-2 space-y-2 text-xs">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-2 text-[#fba311] font-bold">
                    <Phone className="w-4 h-4 fill-current" />
                    <span>{COMPANY_INFO.phone}</span>
                  </a>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 text-gray-300 hover:text-white">
                    <Mail className="w-4 h-4" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                <div className="pt-2">
                  <Link to="/contact" className="btn-xclean-orange w-full text-xs justify-center">
                    <span>Request Free Walkthrough</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
