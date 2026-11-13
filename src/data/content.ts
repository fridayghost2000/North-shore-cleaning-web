export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  benefits: string[];
}

export const COMPANY_INFO = {
  name: "North Shore Cleaning Systems, Inc.",
  brandName: "North Shore Clean",
  owner: "Jerry Sheehan",
  tagline: "Commercial Cleaning & Janitorial Specialists",
  address: "100 Cummings Center, Suite 425C, Beverly, MA 01915",
  phone: "978-809-5533",
  phoneRaw: "9788095533",
  email: "service@northshoreclean.com",
  serviceHours: "Mon - Sat: 24/7 Operations / Service available 7 days a week",
  foundedYear: "1995",
  serviceArea: "Massachusetts North Shore & Essex County: Beverly, Salem, Peabody, Danvers, Marblehead, Gloucester, Woburn, and surrounding areas."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "commercial-cleaning",
    slug: "commercial-cleaning",
    title: "Commercial & Office Cleaning",
    shortDesc: "Complete janitorial upkeep for corporate offices, business suites, and commercial complexes.",
    fullDesc: "Our commercial office cleaning delivers pristine, hygienic, and organized working environments. From individual executive suites to sprawling multi-tenant business centers, we customize daily, weekly, or bi-weekly schedules tailored precisely to your company's operational rhythm.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom daily, weekly, or flexible night schedules",
      "Dusting, sanitizing desks, workstations, and high-touch points",
      "Restroom deep cleaning, stocking, and deodorizing",
      "Trash & recyclable removal with eco-friendly liners"
    ],
    benefits: [
      "Boosts workplace morale and employee productivity",
      "Reduces employee sick days and airborne contaminants",
      "Leaves an impressive, spotless impression on clients and visitors"
    ]
  },
  {
    id: "floor-stripping-waxing",
    slug: "floor-stripping-waxing",
    title: "Floor Stripping & Waxing",
    shortDesc: "Specialized hard surface and VCT floor stripping, buffing, and high-gloss polymer sealing.",
    fullDesc: "Heavy foot traffic wears down commercial flooring fast. Our expert floor technicians use state-of-the-art round and square orbital buffers, industrial-strength strippers, and multi-coat polymer waxes to restore high-gloss luster and long-term durability to VCT, vinyl, and linoleum surfaces.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Complete removal of old yellowed wax and deep-set grime",
      "Rotary machine scrubbing with premium diamond pads",
      "Application of 3-5 coats of industrial slip-resistant finish",
      "High-speed thermal burnishing for mirror-grade reflection"
    ],
    benefits: [
      "Protects floors from permanent gouging, scratches, and stains",
      "Increases indoor reflectivity and brightness",
      "Significantly prolongs the lifespan of your flooring investment"
    ]
  },
  {
    id: "carpet-upholstery-cleaning",
    slug: "carpet-upholstery-cleaning",
    title: "Carpet & Upholstery Cleaning",
    shortDesc: "Industrial hot-water extraction and steam cleaning for deep-seated dirt and allergens.",
    fullDesc: "Keep your commercial carpeting and conference seating looking fresh and feeling sanitary. We deploy heavy-duty commercial hot-water extraction systems that lift stubborn stains, traffic patterns, and embedded allergens from deep within fibers without leaving residue.",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Targeted pre-treatment of stubborn beverage and oil spots",
      "High-pressure heated extraction removes deep soil particles",
      "Rapid dry technology allows rapid re-entry into office spaces",
      "Fabric protection treatment against future spills"
    ],
    benefits: [
      "Extends carpet life by removing abrasive grit particles",
      "Improves indoor air quality by capturing trapped allergens",
      "Revitalizes tired reception and conference room seating"
    ]
  },
  {
    id: "medical-healthcare-cleaning",
    slug: "medical-healthcare-cleaning",
    title: "Medical & Healthcare Facilities",
    shortDesc: "Terminal disinfection and rigorous hygiene protocols for clinics and dental practices.",
    fullDesc: "Healthcare environments require hospital-grade disinfection where patient safety is paramount. Our trained staff adheres to strict CDC and OSHA cleaning standards for medical offices, ambulatory surgical centers, dental clinics, and laboratories across the North Shore.",
    iconName: "ShieldAlert",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "EPA-registered hospital disinfectant surface treatments",
      "Strict color-coded microfiber protocol preventing cross-contamination",
      "Detailed sanitation of exam rooms, dental chairs, and waiting areas",
      "Bio-waste handling and terminal cleaning procedures"
    ],
    benefits: [
      "Minimizes risk of healthcare-acquired infections (HAIs)",
      "Strict compliance with state health inspectors and OSHA guidelines",
      "Instills patient trust and confidence in clean healthcare practices"
    ]
  },
  {
    id: "day-porter-services",
    slug: "day-porter-services",
    title: "Day Porter Services",
    shortDesc: "Dedicated on-site daytime cleaning and facility maintenance for busy properties.",
    fullDesc: "For high-traffic buildings, evening cleaning isn't enough. Our courteous day porters remain on-site during business hours to keep lobbies spotless, continually replenish restrooms, clean spill emergencies, and handle routine maintenance tasks quietly and unobtrusively.",
    iconName: "UserCheck",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Continuous restocking of paper towels, hand soaps, and sanitizer",
      "Immediate response to accidental spills and messes",
      "Lobby and glass entryway smudge polishing throughout the day",
      "Courteous, uniformed, and background-checked on-site staff"
    ],
    benefits: [
      "Your facility looks pristine to every VIP visitor at any hour",
      "Eliminates restroom complaints during peak operational hours",
      "Provides rapid response to sudden facility emergencies"
    ]
  },
  {
    id: "tile-grout-restoration",
    slug: "tile-grout-restoration",
    title: "Tile & Grout Cleaning",
    shortDesc: "High-pressure agitation and deep extraction for ceramic, porcelain, and quarry tile.",
    fullDesc: "Moisture and soil penetrate porous grout lines, resulting in dark, discolored joints and odors. Our specialized tile and grout extraction machines break down hardened soil, grease, and soap scum, followed by an optional penetrating seal that keeps grout clean longer.",
    iconName: "Grid",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Deep scrub agitation penetrating porous grout channels",
      "Hydro-extraction power lifts soil without spraying walls",
      "Mildew and odor neutralizing sanitization",
      "Clear barrier seal protects against chemical stains and oils"
    ],
    benefits: [
      "Restores vibrant original color without tile replacement costs",
      "Eliminates foul restroom bacteria and persistent odors",
      "Prevents slip-and-fall hazards on greasy restaurant/commercial floors"
    ]
  },
  {
    id: "green-cleaning",
    slug: "green-cleaning",
    title: "Green Cleaning Solutions",
    shortDesc: "Eco-friendly, non-toxic, and biodegradable cleaning protocols for healthier workplaces.",
    fullDesc: "Promote health, sustainability, and environmental responsibility with our certified Green Cleaning program. We use Green Seal certified cleaning agents, HEPA-filtered vacuum filtration systems, and low-waste methods to protect both your employees and the environment.",
    iconName: "Leaf",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Zero-VOC and hypoallergenic Green Seal certified chemicals",
      "Four-level HEPA filtration vacuums capturing 99.97% of particulates",
      "Reusable microfiber cloth systems reducing disposable paper waste",
      "Water-conserving dilution and application technology"
    ],
    benefits: [
      "Protects individuals with chemical sensitivities or asthma",
      "Helps your facility achieve or maintain LEED green building credits",
      "Eliminates harsh chemical fumes and improves indoor atmosphere"
    ]
  },
  {
    id: "post-construction-cleaning",
    slug: "post-construction-cleaning",
    title: "Post-Construction Clean-Up",
    shortDesc: "Detailed phase cleaning and final turnover polishing for contractors and architects.",
    fullDesc: "New construction or renovations leave extensive layers of fine drywall dust, paint overspray, adhesive stickers, and debris. We handle rough cleans, final cleans, and touch-up cleans to make sure new buildings are pristine and ready for certificate of occupancy inspections.",
    iconName: "Hammer",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Removal of fine drywall dust from all ceilings, ducts, and trim",
      "Sticker and adhesive removal from new windows, glass, and fixtures",
      "Detailed scrub of all plumbing fixtures, tiles, and hardware",
      "Turnkey walk-through inspection with general contractor"
    ],
    benefits: [
      "Ensures smooth, on-schedule building handover to owners",
      "Protects brand new HVAC systems from airborne construction grit",
      "Saves general contractors valuable punch-list time"
    ]
  },
  {
    id: "janitorial-supplies",
    slug: "janitorial-supplies",
    title: "Janitorial Supplies & Restocking",
    shortDesc: "Direct supply fulfillment of paper towels, soaps, trash liners, and dispensers.",
    fullDesc: "Never run out of essential facility consumables again. We offer comprehensive inventory management and direct supply delivery for office buildings, schools, and medical facilities, providing commercial discounts on premium hand soaps, roll towels, and liners.",
    iconName: "PackageCheck",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Automated stock level tracking and seamless replenishment",
      "Wholesale volume pricing on commercial paper products and soaps",
      "Touch-free dispenser installation and maintenance",
      "One consolidated monthly invoice alongside cleaning services"
    ],
    benefits: [
      "Eliminates supply shortages and frantic emergency store runs",
      "Lower material costs through our direct commercial distributor network",
      "Customized orders suited to your facility's exact dispenser models"
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: "North Shore Cleaning Systems has managed our office suites at the Cummings Center for over 3 years. Jerry Sheehan and his crew are prompt, responsive, and consistently deliver a five-star standard.",
    author: "Mark S.",
    role: "Facilities Director",
    company: "Cummings Center Tech Firm, Beverly MA",
    rating: 5,
    avatar: "/testimonials/testimonial-img-01.jpg"
  },
  {
    quote: "Our medical clinic requires strict sanitation. North Shore Clean has proven to be the most dependable team we've ever hired. Their attention to detail and communication is unmatched.",
    author: "Elena Rostova",
    role: "Practice Administrator",
    company: "North Shore Healthcare Group",
    rating: 5,
    avatar: "/testimonials/testimonial-img-02.jpg"
  },
  {
    quote: "They recently stripped and waxed our commercial showroom floors. The transformation was dramatic! The floors look like polished glass, and their pricing was completely transparent.",
    author: "David Higgins",
    role: "General Manager",
    company: "Peabody Commercial Plaza",
    rating: 5,
    avatar: "/testimonials/testimonial-img-03.jpg"
  },
  {
    quote: "Jerry Sheehan's team at North Shore Clean provides immaculate attention to detail for our corporate headquarters. Highly recommended for commercial facilities across the North Shore.",
    author: "Ariana Green",
    role: "Operations Manager",
    company: "Salem Financial Center",
    rating: 5,
    avatar: "/testimonials/testimonial-img-04.jpg"
  },
  {
    quote: "Outstanding day porter and sanitation services. From day one, North Shore Clean transformed our facility's appearance and hygiene standards. A true five-star cleaning partner.",
    author: "Parsons William",
    role: "CEO & Founder",
    company: "Danvers Tech Hub",
    rating: 5,
    avatar: "/testimonials/testimonial-img-05.jpg"
  }
];

export const FAQS = [
  {
    question: "Do you require long-term binding contracts?",
    answer: "No. At North Shore Clean, we earn your business on every single visit. We provide flexible agreements ranging from single specialized deep cleans to ongoing daily or weekly maintenance schedules, with no long-term lock-ins."
  },
  {
    question: "Are your cleaning specialists insured and background-checked?",
    answer: "Yes, completely. North Shore Cleaning Systems, Inc. is fully licensed, bonded, and insured with comprehensive liability and workers' compensation coverage. Every crew member undergoes background screening and hands-on professional training."
  },
  {
    question: "How do you ensure quality and consistency across visits?",
    answer: "We begin every new relationship with an in-depth on-site walkthrough led by management. We build a customized cleaning specification checklist for your facility. Field supervisors conduct regular quality audits to guarantee high standards."
  },
  {
    question: "Do you provide emergency or after-hours commercial service?",
    answer: "Yes! We operate a 24-hour hotline at (978) 809-5533. Whether you experience a burst pipe, sudden spill before an important board meeting, or require late-night turnover, our team is equipped to respond quickly."
  },
  {
    question: "Can North Shore Clean supply our paper goods and soap dispensers?",
    answer: "Yes. We offer complete consumable replenishment services. We stock and deliver commercial multi-fold paper towels, bath tissue, foaming hand soaps, trash can liners, and touch-free dispenser hardware at competitive wholesale rates."
  },
  {
    question: "What geographic areas do you service?",
    answer: "We proudly service all of the North Shore and Essex County, including Beverly, Salem, Peabody, Danvers, Marblehead, Gloucester, Woburn, Lynn, and adjacent Massachusetts communities."
  }
];

export const SPECIALS = [
  {
    id: "new-client",
    title: "New Commercial Client Welcome Special",
    discount: "20% OFF",
    subtitle: "First Month of Commercial Service",
    description: "Sign up for regular ongoing commercial or office janitorial services (3+ days per week) and enjoy 20% off your initial month's billing.",
    code: "NSC-WELCOME20",
    validity: "Valid for new commercial clients on the North Shore",
    badge: "Most Popular"
  },
  {
    id: "floor-care",
    title: "Hard Floor Stripping & Waxing Promotion",
    discount: "$100 OFF",
    subtitle: "Full Floor Restoration Packages",
    description: "Book an entire VCT or hard-surface floor stripping, deep cleaning, and multi-coat polymer seal (minimum 2,500 sq. ft.) and save $100.",
    code: "FLOOR-SHINE100",
    validity: "Applies to one-time or scheduled floor care projects",
    badge: "High Value"
  },
  {
    id: "carpet-clean",
    title: "Deep Carpet Hot-Water Extraction Special",
    discount: "15% OFF",
    subtitle: "Commercial Carpet & Chair Cleaning",
    description: "Refresh your high-traffic corridors, conference rooms, and reception carpets with deep steam extraction. Enjoy 15% off when booked this season.",
    code: "STEAM-CLEAN15",
    validity: "Applicable to office spaces of 1,500 sq. ft. or more",
    badge: "Seasonal"
  }
];

