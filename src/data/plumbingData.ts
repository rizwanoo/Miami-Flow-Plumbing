import {
  ServiceItem,
  TrustItem,
  WhyChooseUsItem,
  ProcessStep,
  BeforeAfterItem,
  GalleryItem,
  TestimonialItem,
  TeamMember,
  FAQItem
} from '../types';

export const COMPANY_INFO = {
  name: 'Miami Flow Plumbing',
  tagline: 'Reliable Plumbing. Right When You Need It.',
  subheadline: 'When plumbing problems disrupt your home, our experienced team is ready to restore comfort, safety, and peace of mind.',
  phone: '(305) 555-FLOW',
  rawPhone: 'tel:+13055553569',
  emergencyPhone: '(305) 555-9111',
  whatsappPhone: '+1 (305) 555-3569',
  whatsappUrl: 'https://wa.me/13055553569?text=Hello%20Miami%20Flow%20Plumbing%2C%20I%20need%20a%20plumber%20estimate%20or%20emergency%20service.',
  email: 'service@miamiflowplumbing.com',
  address: '1200 Brickell Ave, Suite 800, Miami, FL 33131',
  license: 'State of Florida Certified Plumbing Contractor #CFC1430922',
  hours: '24/7 Emergency Dispatch • Mon-Sat 7:00 AM - 7:00 PM (Regular)',
  areasServed: [
    'Brickell & Downtown Miami',
    'Coral Gables',
    'Coconut Grove',
    'Miami Beach & South Beach',
    'Pinecrest & Palmetto Bay',
    'Kendall & Doral',
    'Wynwood & Design District',
    'Key Biscayne',
    'Aventura & Sunny Isles'
  ]
};

export const TRUST_ITEMS: TrustItem[] = [
  {
    id: 'licensed',
    title: 'Licensed & Insured',
    subtitle: 'FL State Lic #CFC1430922',
    iconName: 'ShieldCheck'
  },
  {
    id: 'experienced',
    title: 'Experienced Plumbers',
    subtitle: '15+ Years Avg. Master Experience',
    iconName: 'Award'
  },
  {
    id: 'res-comm',
    title: 'Residential & Commercial',
    subtitle: 'Homes, High-Rises & Eateries',
    iconName: 'Building2'
  },
  {
    id: 'workmanship',
    title: 'Quality Workmanship',
    subtitle: '100% Satisfaction & Parts Warranty',
    iconName: 'Wrench'
  },
  {
    id: 'communication',
    title: 'Clear Communication',
    subtitle: 'Upfront Flat Rates, No Hidden Fees',
    iconName: 'MessageSquareText'
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    number: '01',
    title: 'FAST & RESPONSIVE',
    badge: 'Under 45 Min Dispatch',
    description: 'When water is flooding your baseboards or a sewer backs up, waiting hours is not an option. Our radio-dispatched mobile units across Miami arrive quickly with fully stocked trucks.',
    iconName: 'Zap'
  },
  {
    number: '02',
    title: 'HONEST COMMUNICATION',
    badge: 'Upfront Quotes',
    description: 'We diagnose the exact source of your issue and provide clear, plain-English explanations with flat-rate quotes before turning a single wrench. No surprise bills ever.',
    iconName: 'CheckCircle2'
  },
  {
    number: '03',
    title: 'QUALITY WORKMANSHIP',
    badge: 'Florida Code Exceeded',
    description: 'We use commercial-grade brass fixtures, schedule-80 fittings, and high-spec PEX-A and copper piping built to withstand South Florida hard water and salt air corrosion.',
    iconName: 'BadgeCheck'
  },
  {
    number: '04',
    title: 'CLEAN, PROFESSIONAL SERVICE',
    badge: 'Shoe Covers & Drop Cloths',
    description: 'Our technicians treat your home with the utmost respect: shoe covers on before stepping inside, protective floor runners, and leaving the work area cleaner than we found it.',
    iconName: 'Sparkles'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'emergency-plumbing',
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    category: 'emergency',
    shortDesc: 'Immediate 24/7 dispatch for burst pipes, flooding, gas leaks, and severe sewage backups across Miami.',
    fullDesc: 'Plumbing disasters do not wait for business hours. When a main line breaks or dirty water floods your kitchen, our on-call master plumbers arrive fast with high-capacity extraction tools, leak locators, and replacement piping to halt damage immediately.',
    iconName: 'AlertTriangle',
    imageUrl: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Available 24 hours a day, 7 days a week, 365 days a year',
      'Average arrival in under 45 minutes across Miami-Dade',
      'Immediate main water shutoff & stabilization',
      'Fully equipped vans stocked with valves, pumps, and fittings'
    ],
    commonSituations: [
      'Burst copper or CPVC supply pipes in walls or slabs',
      'Active water heater tank ruptures and basement flooding',
      'Overflowing main sewer lines and multiple toilet backups',
      'Sudden loss of complete water pressure or gas appliance odor'
    ],
    priceRange: 'Upfront assessment from $99 (waived with repair)',
    responseTiming: 'Immediate / Under 45 Mins'
  },
  {
    id: 'leak-detection',
    slug: 'leak-detection',
    title: 'Leak Detection & Repair',
    category: 'residential',
    shortDesc: 'Non-invasive acoustic, thermal, and tracer gas leak detection for hidden wall and slab leaks.',
    fullDesc: 'High water bill or warm floor spots? Hidden leaks inside Miami concrete slabs and high-rise drywall cause devastating structural damage and toxic mold in Florida humidity. We use non-invasive acoustic sensors and thermal imaging to pinpoint leaks to within inches.',
    iconName: 'Search',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Zero unnecessary drywall demolition or slab destruction',
      'FLIR infrared thermal imaging & ultrasonic acoustic sensors',
      'Pinpoint underground irrigation and supply pipe leak discovery',
      'Direct direct-line epoxy patch or PEX overhead reroute solutions'
    ],
    commonSituations: [
      'Unexplained spike in monthly Miami-Dade Water & Sewer bill',
      'Damp drywall, peeling paint, or warped hardwood/baseboards',
      'Sound of running water behind walls when faucets are off',
      'Warm spots under tile floors indicating hot-water slab leaks'
    ],
    priceRange: 'Comprehensive digital detection from $185',
    responseTiming: 'Same-Day Service Available'
  },
  {
    id: 'drain-cleaning',
    slug: 'drain-cleaning',
    title: 'Drain Cleaning & Hydro Jetting',
    category: 'maintenance',
    shortDesc: 'High-pressure 4,000 PSI hydro jetting and mechanized augers to eliminate grease, soap scum, and tree roots.',
    fullDesc: 'Slow-draining showers, gurgling kitchen sinks, or foul odors? Miami hard water and cooking grease form heavy scale on pipe walls. Our commercial hydro-jetting strips pipes back to original factory diameter without damaging line integrity.',
    iconName: 'RotateCcw',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    benefits: [
      '4,000 PSI hydro jetting scours 100% of grease and mineral buildup',
      'Heavy-duty root cutter heads for invasive Banyan & palm roots',
      'Complimentary HD fiber-optic camera inspection included',
      'Long-lasting clean drain flow guarantee'
    ],
    commonSituations: [
      'Standing water in showers, bathtubs, or utility sinks',
      'Recurring clogs despite consumer chemical drain cleaners',
      'Foul organic odors emanating from sink or garbage disposal',
      'Washing machine drain backing up into laundry sinks'
    ],
    priceRange: 'Standard drain clearing from $120',
    responseTiming: 'Same-Day Service'
  },
  {
    id: 'water-heater-repair',
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    category: 'residential',
    shortDesc: 'Precision diagnosis and repair for tank and tankless water heaters, heating elements, and thermostats.',
    fullDesc: 'Waking up to a freezing shower? Our certified water heater technicians service Rheem, Bradford White, Navien, Rinnai, A.O. Smith, and Bosch systems. We carry factory OEM elements, burner assemblies, thermocouples, and relief valves.',
    iconName: 'Flame',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Same-day diagnostics for electric, gas, and hybrid systems',
      'Comprehensive flush to remove heavy South Florida calcium sediment',
      'Genuine manufacturer OEM replacement parts on truck',
      'Accurate assessment of repair viability vs replacement ROI'
    ],
    commonSituations: [
      'Water not getting hot enough or running cold in under 5 minutes',
      'Popping, rumbling, or whistling noises from the heater tank',
      'Discolored, rust-tinted, or foul-smelling hot water',
      'Dripping pressure relief valve or moisture around tank base'
    ],
    priceRange: 'Diagnosis & tune-up from $140',
    responseTiming: 'Same-Day Service'
  },
  {
    id: 'water-heater-installation',
    slug: 'water-heater-installation',
    title: 'Water Heater Installation',
    category: 'residential',
    shortDesc: 'Energy-efficient tank and continuous tankless water heater installations with Florida hurricane strapping.',
    fullDesc: 'Upgrade to endless hot water and save up to 40% on electric bills with high-efficiency tankless or hybrid heat pump water heaters. Every installation includes South Florida hurricane straps, thermal expansion tanks, and full Miami-Dade permit compliance.',
    iconName: 'Zap',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'High-efficiency Navien and Rheem tankless conversions',
      'Hurricane strapping and flood pan drain lines to local code',
      'Up to 15-year manufacturer warranties and 5-year labor guarantee',
      'Eco-friendly hybrid systems eligible for federal energy tax credits'
    ],
    commonSituations: [
      'Replacing an aging unit over 8-10 years old before catastrophic leak',
      'Remodeling bathroom for high-demand multi-head rainfall shower',
      'Running out of hot water for growing families or guests',
      'Desire to free up valuable interior closet space with tankless'
    ],
    priceRange: 'Complete turnkey installations with permits',
    responseTiming: 'Next-Day or Scheduled'
  },
  {
    id: 'sewer-line-services',
    slug: 'sewer-line-services',
    title: 'Sewer Line Inspection & Trenchless Repair',
    category: 'residential',
    shortDesc: 'HD fiber-optic camera sewer audits, hydro trenchless pipe relining, and main line replacements.',
    fullDesc: 'Many older homes across Coral Gables, Coconut Grove, and Miami have deteriorated cast iron sewer pipes damaged by limestone shifts and tropical tree root intrusion. We specialize in trenchless CIPP epoxy relining to restore your sewer without tearing up your lawn or tile.',
    iconName: 'Activity',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Color HD fiber-optic video camera sewer recording with USB copy',
      'No-dig trenchless epoxy lining protects landscaping and driveways',
      '50-year structural lifespan on epoxy sewer liners',
      'Eliminates dangerous sewer gas odors from penetrating your home'
    ],
    commonSituations: [
      'Gurgling toilets or sewer smell in bathrooms and yard',
      'Multiple drains backing up simultaneously across the house',
      'Lush green patches or sink depressions in the lawn above sewer run',
      'Pre-purchase real estate sewer inspections for Miami homes'
    ],
    priceRange: 'Camera sewer scope from $199',
    responseTiming: 'Priority Service'
  },
  {
    id: 'pipe-repair-repiping',
    slug: 'pipe-repair-repiping',
    title: 'Whole-Home Repiping & Pipe Repair',
    category: 'residential',
    shortDesc: 'Modern PEX-A and Type L copper whole-house repiping to eliminate recurring leaks and rusty water.',
    fullDesc: 'If your home was built before 1990 in South Florida, deteriorating galvanized steel or thin-wall copper pipes are ticking time bombs. We replace brittle pipes with flexible, chlorine-resistant Uponor PEX-A piping backed by a 25-year warranty.',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Non-invasive attic overhead PEX-A installation system',
      'Clean professional drywall patching and paint-ready finish',
      'Eliminates low water pressure and metallic tasting water',
      'Qualifies your home for lower Florida homeowners insurance premiums'
    ],
    commonSituations: [
      'Multiple pinhole leaks requiring recurring emergency plumber calls',
      'Insurance company requesting repiping proof for policy renewal',
      'Rusty, brown, or cloudy tap water after periods of inactivity',
      'Significant drop in water pressure when multiple fixtures run'
    ],
    priceRange: 'Custom quote with guaranteed lifetime PEX warranty',
    responseTiming: 'Consultation within 24 Hours'
  },
  {
    id: 'faucet-fixture-services',
    slug: 'faucet-fixture-services',
    title: 'Faucet & Fixture Repair / Installation',
    category: 'residential',
    shortDesc: 'Designer kitchen faucets, rainfall shower valves, luxury bath trims, and garbage disposal setups.',
    fullDesc: 'From high-end Moen, Kohler, and Hansgrohe architectural fixtures to stubborn dripping bathroom sink stems, our craftsmen install and service premium kitchen and bath hardware with meticulous fit and water-tight sealing.',
    iconName: 'Droplet',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Precision ceramic disc cartridge replacement and reseating',
      'WaterSense low-flow luxury showerhead and faucet optimizations',
      'Continuous-feed quiet garbage disposal installations (InSinkErator)',
      'Outdoor hose bibb & anti-siphon backflow preventer updates'
    ],
    commonSituations: [
      'Persistent drip wasting hundreds of gallons of water per month',
      'Loose, wobbly, or corroded kitchen faucet handle or sprayer',
      'Shower temperature fluctuating wildly (defective pressure balance valve)',
      'Installing luxury fixtures during kitchen or master bath remodel'
    ],
    priceRange: 'Fixture repair from $115',
    responseTiming: 'Flexible Scheduling'
  },
  {
    id: 'toilet-repair-installation',
    slug: 'toilet-repair-installation',
    title: 'Toilet Repair & Smart Installation',
    category: 'residential',
    shortDesc: 'Fix constantly running toilets, wax ring flange leaks, and install modern bidet smart toilets.',
    fullDesc: 'A leaking toilet flange or weak flush isn’t just annoying — it quietly wastes thousands of gallons of water and can rot subfloors beneath tile. We repair all flush valves, replace deteriorated wax seals, and install modern comfort-height dual-flush and smart bidet toilets (Toto, Kohler, American Standard).',
    iconName: 'CheckCircle2',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Zero rock or wobble guarantee with precision leveling and anchoring',
      'High-efficiency 1.28 GPF powerful cyclone flush conversions',
      'Smart toilet electrical & water supply connections (Toto Neorest, Washlets)',
      'Heavy-duty reinforced wax-free silicone flange seals'
    ],
    commonSituations: [
      'Toilet running continuously, driving up Miami water bills',
      'Water pooling around the base of the toilet bowl on bathroom floor',
      'Weak sluggish flush that requires multiple attempts to clear',
      'Upgrading to luxury elongated bidet washlet systems'
    ],
    priceRange: 'Toilet seal repair from $125',
    responseTiming: 'Same-Day Service'
  },
  {
    id: 'commercial-plumbing',
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing & Grease Traps',
    category: 'commercial',
    shortDesc: 'Full code-compliant plumbing for Miami restaurants, hotels, medical facilities, and office buildings.',
    fullDesc: 'Commercial plumbing downtime costs real revenue. We provide specialized grease trap maintenance, commercial backflow prevention testing, high-volume commercial water heaters, and scheduled maintenance contracts for businesses across Brickell, Wynwood, and Miami Beach.',
    iconName: 'Building2',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    benefits: [
      'Annual certified backflow testing & certification submission to Miami-Dade',
      'Commercial grease interceptor cleaning and scheduled hydro jetting',
      'Heavy-duty flushometer valves, commercial ADA restrooms, mop basins',
      'Off-hours commercial service to prevent disrupting business operations'
    ],
    commonSituations: [
      'Restaurant kitchen drain emergency during peak dining hours',
      'Annual municipal backflow preventer recertification notice',
      'High-volume commercial water heater breakdown in hotel or gym',
      'Commercial tenant build-outs and commercial code updates'
    ],
    priceRange: 'Custom commercial service agreements',
    responseTiming: 'Priority 24/7 Dispatch'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Tell Us What’s Wrong',
    description: 'Call our friendly Miami dispatch line or fill out our instant online estimate form. We ask clear, simple questions to understand the issue.',
    duration: '2 Minutes',
    details: ['No robot phone trees', 'Direct live master plumber advice', 'Immediate dispatch booking'],
    iconName: 'PhoneCall'
  },
  {
    step: '02',
    title: 'Schedule Your Service',
    description: 'Choose a precise arrival window that works for your schedule. For emergencies, our nearest mobile technician is dispatched immediately.',
    duration: 'Immediate Confirmation',
    details: ['Real-time 30-min arrival alerts', 'Technician photo & profile sent', 'No sitting around all day'],
    iconName: 'CalendarClock'
  },
  {
    step: '03',
    title: 'Professional Inspection',
    description: 'Our licensed plumber arrives in uniform, puts on shoe covers, and performs an in-depth diagnostic using non-invasive tools.',
    duration: '15-30 Mins',
    details: ['Acoustic & thermal inspection', 'HD camera scope if needed', 'Identify root cause, not just symptoms'],
    iconName: 'SearchCheck'
  },
  {
    step: '04',
    title: 'Clear Recommendations',
    description: 'We present you with plain-English options and a firm, upfront flat-rate price. You know the exact cost before any work begins.',
    duration: 'Transparent Consultation',
    details: ['Zero surprise hidden fees', 'Good / Better / Best options', 'Written estimate guarantee'],
    iconName: 'FileCheck'
  },
  {
    step: '05',
    title: 'Quality Repair or Installation',
    description: 'With your approval, we complete the work using commercial-grade parts and proven craftsmanship conforming to Florida plumbing code.',
    duration: 'Efficient Execution',
    details: ['Commercial-grade brass & PEX', 'Protective drop cloths used', 'Adheres strictly to FL code'],
    iconName: 'Wrench'
  },
  {
    step: '06',
    title: 'Final Check & Cleanup',
    description: 'We pressure-test the repair, verify perfect operation, meticulously clean the area, and walk you through what was done.',
    duration: 'Complete Peace of Mind',
    details: ['100% spotless cleanup', 'Signed warranty certificate', 'Follow-up customer care check'],
    iconName: 'Sparkles'
  }
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterItem[] = [
  {
    id: 'ba-water-heater',
    title: '50-Gallon Tank to Navien Tankless Conversion',
    category: 'Water Heating',
    location: 'Coral Gables, FL',
    description: 'Replaced a rusted, leaking 12-year-old electric tank with a high-efficiency Navien NPE-240A2 condensing tankless system with hurricane strapping.',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Corroded Old Tank (Leaking)',
    afterLabel: 'Modern Compact Tankless (Clean)',
    solution: 'Endless hot water, freed up 9 sq ft in utility closet, reduced water heating electric draw by 35%.'
  },
  {
    id: 'ba-cast-iron-drain',
    title: 'Corroded Cast Iron to Trenchless Epoxy Relining',
    category: 'Sewer & Drains',
    location: 'Coconut Grove, FL',
    description: 'Restored a 1968 failing cast iron sewer line clogged with root intrusion beneath a travertine patio without any digging.',
    beforeImage: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Blocked Cast Iron with Roots',
    afterLabel: 'Seamless CIPP Structural Liner',
    solution: '50-year structural rating, completed in 6 hours with zero destruction to luxury outdoor travertine tile.'
  },
  {
    id: 'ba-copper-repiping',
    title: 'Pinhole Slab Leak to Overhead PEX-A Reroute',
    category: 'Whole-Home Repiping',
    location: 'Pinecrest, FL',
    description: 'Bypassed leaking copper line beneath concrete foundation with high-flow Uponor PEX-A piping throughout attic.',
    beforeImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    beforeLabel: 'Active Slab Leak Under Tile',
    afterLabel: 'Attic Overhead PEX-A System',
    solution: 'Permanent leak protection, restored balanced water pressure to all 4 bathrooms.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Precision PEX-A Water Manifold Installation',
    category: 'repiping',
    location: 'Brickell Condo',
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    description: 'Custom home water control distribution manifold with individual fixture shutoff valves.'
  },
  {
    id: 'gal-2',
    title: 'Dual Navien Tankless System for Luxury Estate',
    category: 'heaters',
    location: 'Miami Beach',
    imageUrl: 'https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80',
    description: 'Cascading continuous hot water setup providing 12 GPM flow for large coastal residence.'
  },
  {
    id: 'gal-3',
    title: 'Hydro-Jetting Main Sewer Lateral',
    category: 'drains',
    location: 'Coral Gables',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'High-pressure 4,000 PSI scour removing years of calcium scale and grease build-up.'
  },
  {
    id: 'gal-4',
    title: 'Designer Hansgrohe Shower Rough-In & Trim',
    category: 'fixtures',
    location: 'Coconut Grove',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    description: 'Thermostatic multi-zone shower valve assembly with custom body sprays.'
  },
  {
    id: 'gal-5',
    title: 'Commercial Grease Interceptor Installation',
    category: 'commercial',
    location: 'Wynwood Restaurant',
    imageUrl: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=800&q=80',
    description: 'Heavy-duty 100-pound grease trap with sampling port meeting City of Miami environmental codes.'
  },
  {
    id: 'gal-6',
    title: 'Emergency Main Valve Copper Replacement',
    category: 'repiping',
    location: 'Downtown Miami',
    imageUrl: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    description: 'Quick-response emergency brass quarter-turn ball valve and pressure regulator rebuild.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Carlos Mendoza',
    location: 'Miami, FL',
    neighborhood: 'Coral Gables',
    rating: 5,
    service: 'Slab Leak Detection & PEX Reroute',
    date: 'February 2026',
    content: 'When our water bill tripled and we felt warm tiles in the hallway, we panicked. The Miami Flow team arrived in 35 minutes, used infrared cameras to locate the broken copper line without smashing concrete, and repiped it cleanly through the attic. Truly honest, calm professionals.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    location: 'Miami, FL',
    neighborhood: 'Brickell',
    rating: 5,
    service: 'Navien Tankless Installation',
    date: 'January 2026',
    content: 'The plumber arrived on time, explained everything clearly, and fixed our hot water issue without making the process stressful. They wore shoe covers and left the utility closet cleaner than it was when they started. 10/10 recommend!',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-3',
    name: 'Marcus Sterling',
    location: 'Miami Beach, FL',
    neighborhood: 'South Beach',
    rating: 5,
    service: 'Emergency Drain Hydro-Jetting',
    date: 'March 2026',
    content: 'Our restaurant kitchen drains backed up on a Friday night at 7 PM. Miami Flow Plumbing had an emergency technician at our back door within 40 minutes with a commercial hydro-jetter. They saved our dinner service. Invaluable partner.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-4',
    name: 'Sophia Alvarez',
    location: 'Miami, FL',
    neighborhood: 'Coconut Grove',
    rating: 5,
    service: 'Cast Iron Sewer Camera & Lining',
    date: 'December 2025',
    content: 'Other plumbers quoted tearing up our historic coral rock landscaping to replace our old sewer line. Miami Flow showed us the camera footage, explained their trenchless epoxy lining, and fixed the line in a single afternoon without digging up a single plant.',
    verified: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'David Garcia, CFC',
    role: 'Master Plumber & Founder',
    experience: '22 Years in South Florida',
    certifications: 'Florida Certified Master Plumbing Contractor #CFC1430922, Medical Gas Certified',
    bio: 'Born and raised in Miami, David founded Miami Flow Plumbing with one core principle: treat every homeowner’s property like your grandmother’s home.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Alejandro Morales',
    role: 'Lead Diagnostics & Trenchless Specialist',
    experience: '14 Years Experience',
    certifications: 'NASSCO Certified CCTV Pipe Inspection, CIPP Epoxy Certified',
    bio: 'Specialist in non-invasive acoustic leak detection, infrared thermal imaging, and trenchless structural epoxy relining.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Robert Vance',
    role: 'Senior Commercial & Water Heating Tech',
    experience: '16 Years Experience',
    certifications: 'Navien Pro Platinum, Rheem Tankless Master, Backflow Prevention Assembly Tester',
    bio: 'Specializes in high-capacity tankless arrays, commercial food-service plumbing, and municipal backflow compliance.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'emergency',
    question: 'How quickly can a Miami Flow plumber arrive at my property?',
    answer: 'For active emergencies (flooding, burst pipes, total sewer backups), our rapid-dispatch mobile units average an arrival time of under 45 minutes anywhere in Miami-Dade County. For standard repairs and consultations, we offer convenient 2-hour arrival windows with real-time technician GPS tracking.'
  },
  {
    category: 'emergency',
    question: 'What should I do right now while waiting for an emergency plumber?',
    answer: '1) Locate your main water shutoff valve (usually near the street meter or where the main supply line enters the home) and rotate it 90 degrees clockwise. 2) Switch off power at the main electrical panel to any submerged or flooded rooms. 3) Open an exterior garden hose bibb to relieve trapped hydrostatic pressure.'
  },
  {
    category: 'pricing',
    question: 'Do you provide upfront, flat-rate pricing before any work begins?',
    answer: 'Yes, 100%. We do not use ambiguous open-ended hourly billing where you are left guessing the final cost. Our master plumber conducts an in-depth diagnostic inspection, presents clear options in plain language, and provides a guaranteed flat-rate price quote. Work only commences once you give explicit approval.'
  },
  {
    category: 'pricing',
    question: 'Is there a diagnostic fee for coming to my home?',
    answer: 'We provide free estimates for major projects including whole-home repiping, tankless water heater retrofits, and trenchless sewer relining. For standard diagnostic service calls, our flat assessment fee is fully applied toward the cost of the repair if you choose to proceed with us.'
  },
  {
    category: 'pricing',
    question: 'Are your technicians licensed, insured, and background checked?',
    answer: 'Yes. Miami Flow Plumbing is a State of Florida Certified Plumbing Contractor (Lic #CFC1430922) carrying $2,000,000 in comprehensive commercial liability and full worker’s compensation coverage. Every technician undergoes background checks, drug screenings, and ongoing manufacturer certification.'
  },
  {
    category: 'miami',
    question: 'Why do older Miami homes suffer from cast iron drain failures and slab leaks?',
    answer: 'South Florida homes built before the 1980s used cast iron sewer lines and copper water pipes laid directly underneath monolithic concrete slabs. Decades of contact with Miami’s corrosive high water table, brackish humidity, and hard Biscayne Aquifer mineral water cause bottom-channel channeling in sewer lines and pinhole slab leaks. We specialize in non-invasive PEX-A attic reroutes and trenchless structural epoxy relining that avoid breaking tile floors.'
  },
  {
    category: 'miami',
    question: 'How does Miami’s hard water affect water heaters and plumbing fixtures?',
    answer: 'Miami tap water draws from the Biscayne limestone aquifer, which contains high levels of dissolved calcium and magnesium. When heated, these minerals precipitate out as hard lime scale that coats heating elements, clogs cartridge valves, and reduces tankless heater efficiency by up to 30%. We install anti-scale filtration systems and provide descaling services to protect your appliances.'
  },
  {
    category: 'miami',
    question: 'What plumbing preparations should I make before a major hurricane or tropical storm?',
    answer: 'Before hurricane season: 1) Test your main water shutoff valve to ensure it is not seized or corroded. 2) Inspect and clear roof drain scuppers and exterior drain catch basins. 3) If evacuating, turn off your main water valve and disable electric water heater breakers to prevent burnout if municipal pressure drops.'
  },
  {
    category: 'heaters',
    question: 'Should I upgrade from a conventional tank water heater to a tankless system?',
    answer: 'Tankless water heaters (like Navien or Rinnai) heat water on demand, providing endless hot water while saving significant space in Miami utility closets and garages. They consume up to 40% less energy because they eliminate standby heat loss and typically last 20+ years compared to 8–10 years for conventional tanks.'
  },
  {
    category: 'heaters',
    question: 'Why does my hot water have a sulfur or rotten egg smell?',
    answer: 'In South Florida, the rotten egg odor is usually caused by sulfur bacteria reacting with the sacrificial magnesium anode rod inside a traditional tank water heater. We resolve this by replacing the magnesium rod with a powered titanium anode or non-reactive aluminum-zinc rod and performing a tank sanitation flush.'
  },
  {
    category: 'drains',
    question: 'What is the difference between hydro-jetting and traditional drain snaking?',
    answer: 'A mechanical drain snake punches a temporary hole through a clog to restore basic flow, but leaves grease, grease sludge, and mineral scale on the pipe walls. Commercial hydro-jetting utilizes 4,000 PSI high-pressure water with 360-degree rotating nozzles to scour the entire inner diameter clean, restoring pipes to near-new flow capacity.'
  },
  {
    category: 'drains',
    question: 'How do I know if tree roots have invaded my main sewer line?',
    answer: 'Common symptoms include gurgling toilets when the shower drains, frequent backups in multiple fixtures simultaneously, sewer odors in the yard, and unusually lush green grass patches over the sewer lateral. We confirm root intrusion using high-definition CCTV sewer cameras.'
  },
  {
    category: 'commercial',
    question: 'Do you handle commercial grease trap maintenance and municipal backflow certifications?',
    answer: 'Yes. We provide comprehensive commercial plumbing services for restaurants, hotels, and condominiums across Brickell, Downtown Miami, and Miami Beach. Our licensed technicians conduct certified backflow prevention assembly testing and grease interceptor maintenance in compliance with Miami-Dade DERM standards.'
  },
  {
    category: 'general',
    question: 'What warranty or guarantee do you offer on plumbing repairs and installations?',
    answer: 'We back all repairs with a 1-year 100% labor guarantee. Major installations—such as whole-home PEX repiping and trenchless epoxy pipe lining—include up to a 25-year manufacturer warranty and a 10-year craftsmanship guarantee. If a repair fails under normal use, we return and fix it free of charge.'
  }
];

export const MIAMI_ENVIRONMENT_FACTS = [
  {
    title: 'High Humidity & Salt Air',
    description: 'Coastal air accelerates exterior brass and copper corrosion on outdoor valves, water heaters, and water treatment manifolds.',
    iconName: 'CloudRain'
  },
  {
    title: 'Severe Tropical Storms',
    description: 'Heavy tropical downpours can overwhelm municipal storm drains and cause rapid backflow pressure into residential cleanouts.',
    iconName: 'Wind'
  },
  {
    title: 'Biscayne Aquifer Hard Water',
    description: 'High calcium and magnesium levels lead to rapid mineral scaling inside water heaters, faucet cartridges, and showerheads.',
    iconName: 'Droplets'
  },
  {
    title: 'Shifting Limestone Ground',
    description: 'Porous limestone terrain and invasive tropical root systems exert tremendous stress on older underground sewer laterals.',
    iconName: 'Mountain'
  }
];
