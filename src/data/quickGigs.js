// Mock Database of Quick Gigs / Hyperlocal Short-Term Jobs for Students & Freelancers

export const quickGigCategories = [
  {
    id: 'event-helpers',
    name: 'Event Helpers',
    tagline: 'Concerts, Weddings, College Fests & Corporate Events',
    icon: 'PartyPopper',
    count: '48+ Gigs',
    startingPay: '₹800/day',
    avgPay: '₹800 – ₹1,500/day',
    popularRoles: ['Guest Registration', 'Stage Coordinator', 'VIP Usher', 'Food & Beverage Desk'],
    cover: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'data-entry',
    name: 'Data Entry',
    tagline: 'Spreadsheets, Catalog Updates & Form Digitization',
    icon: 'FileText',
    count: '36+ Gigs',
    startingPay: '₹650/day',
    avgPay: '₹650 – ₹1,200/day',
    popularRoles: ['Excel Uploads', 'Invoice Entry', 'Inventory Digitization', 'Survey Transcription'],
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'store-assistants',
    name: 'Store Assistants',
    tagline: 'Retail Outlets, Weekend Rush & Billing Support',
    icon: 'ShoppingBag',
    count: '52+ Gigs',
    startingPay: '₹750/day',
    avgPay: '₹750 – ₹1,400/day',
    popularRoles: ['Customer Greeter', 'Shelf Stocking', 'Barcode Tagging', 'Cash Counter Assistant'],
    cover: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'exhibition-staff',
    name: 'Exhibition Staff',
    tagline: 'Trade Shows, Lifestyle Expos & Brand Promoters',
    icon: 'Presentation',
    count: '29+ Gigs',
    startingPay: '₹1,200/day',
    avgPay: '₹1,200 – ₹2,500/day',
    popularRoles: ['Stall Attendant', 'Lead Collector', 'Product Sampler', 'Demonstrator'],
    cover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'delivery-packaging',
    name: 'Delivery & Packaging',
    tagline: 'Dark Stores, E-commerce Hubs & Local Dispatch',
    icon: 'Package',
    count: '64+ Gigs',
    startingPay: '₹900/day',
    avgPay: '₹900 – ₹1,600/day',
    popularRoles: ['Order Picker', 'Bubble Wrapping', 'Barcode Scanner', 'Local Rider / Runner'],
    cover: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cleaning-shifting',
    name: 'Cleaning & Shifting',
    tagline: 'Apartment Move-ins, Event Cleanup & Box Movers',
    icon: 'Sparkles',
    count: '41+ Gigs',
    startingPay: '₹850/day',
    avgPay: '₹850 – ₹1,500/day',
    popularRoles: ['Furniture Helper', 'Carton Packaging', 'Post-Party Cleanup', 'Warehouse Organizer'],
    cover: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'photography-assistants',
    name: 'Photography Assistants',
    tagline: 'Studio Shoots, Pre-Weddings & Lighting Setups',
    icon: 'Camera',
    count: '22+ Gigs',
    startingPay: '₹1,500/day',
    avgPay: '₹1,500 – ₹3,000/day',
    popularRoles: ['Light Reflector Holder', 'Lens & Drone Runner', 'Memory Card Backup', 'Client Coordinator'],
    cover: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'festival-helpers',
    name: 'Festival Helpers',
    tagline: 'Diwali Melas, Navratri Pandals & Holiday Markets',
    icon: 'Flame',
    count: '33+ Gigs',
    startingPay: '₹1,000/day',
    avgPay: '₹1,000 – ₹2,000/day',
    popularRoles: ['Crowd Guide', 'Token / Coupon Desk', 'Prasad / Gift Counter', 'Stage Decor Helper'],
    cover: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
  }
];

export const quickGigsData = [
  {
    id: 'gig-01',
    title: 'College Tech Fest Delegate Registration & Welcome Kit Coordinator',
    category: 'event-helpers',
    categoryName: 'Event Helpers',
    employer: {
      name: 'Apex Horizon Events India',
      logo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.9,
      reviewCount: 38,
      activeJobs: 4,
      contactPerson: 'Vikram Sethi',
      phone: '+91 98201 44892',
      whatsapp: '+919820144892',
      type: 'Premier Event Production'
    },
    location: 'Bandra Kurla Complex (BKC), Mumbai',
    city: 'Mumbai',
    area: 'BKC',
    distance: 1.8,
    distanceDisplay: '1.8 km away',
    payment: {
      amount: 1200,
      unit: 'day',
      display: '₹1,200',
      period: 'per day',
      payoutType: 'Daily at 6:00 PM via UPI',
      guaranteed: true
    },
    duration: '2 Days (Sat – Sun)',
    durationType: 'daily',
    durationDays: 2,
    workingHours: '9:00 AM – 6:00 PM',
    employmentType: 'Part-time',
    vacancies: 6,
    experienceRequired: false,
    experienceText: 'No experience needed • Students & Freshers welcome',
    isNearMe: true,
    tags: ['Instant UPI Pay', 'Students Welcome', 'Lunch Provided', 'Certificate'],
    description: 'We are seeking enthusiastic, energetic college students and freshers to manage registration desks, badge scanning, and delegate welcome kit distribution for a premier national tech conference at BKC.',
    responsibilities: [
      'Greet incoming delegates and scan QR pass barcodes using our mobile app',
      'Hand over welcome conference badges, lanyards, and promotional kits',
      'Guide speakers and attendees toward conference auditoriums and breakout rooms',
      'Assist the main event coordinator with stage timing announcements'
    ],
    requirements: [
      'Basic conversational Hindi and English',
      'Must have a charged smartphone (Android or iOS)',
      'Smart casual attire (dark jeans and sneakers)',
      'Punctual and friendly demeanor'
    ],
    perks: [
      'Complimentary buffet lunch and coffee snacks throughout the day',
      'Official Event Experience Certificate issued by Apex Horizon',
      'Direct on-spot UPI payment released upon shift completion at 6 PM'
    ],
    workSchedule: {
      dates: 'Coming Weekend (Sat & Sun)',
      reportingTime: '8:30 AM sharp',
      shiftDuration: '9 hours with 1 hr lunch break'
    },
    mapDetails: {
      landmark: 'Near Jio World Convention Centre, Gate 3',
      address: 'G Block, Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      lat: 19.0657,
      lng: 72.8687
    }
  },
  {
    id: 'gig-02',
    title: 'Festive Season Retail Store Assistant & Gift Wrapping Desk',
    category: 'store-assistants',
    categoryName: 'Store Assistants',
    employer: {
      name: 'Titanium Lifestyle Brands',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.8,
      reviewCount: 52,
      activeJobs: 3,
      contactPerson: 'Meera Kulkarni',
      phone: '+91 98192 33401',
      whatsapp: '+919819233401',
      type: 'Premium Retail Chain'
    },
    location: 'Linking Road, Bandra West, Mumbai',
    city: 'Mumbai',
    area: 'Bandra West',
    distance: 2.3,
    distanceDisplay: '2.3 km away',
    payment: {
      amount: 850,
      unit: 'day',
      display: '₹850',
      period: 'per day',
      payoutType: 'Weekly Bank/UPI Transfer',
      guaranteed: true
    },
    duration: '3–5 Days',
    durationType: 'daily',
    durationDays: 4,
    workingHours: '11:00 AM – 8:00 PM',
    employmentType: 'Part-time',
    vacancies: 4,
    experienceRequired: false,
    experienceText: 'No experience needed • Quick training provided',
    isNearMe: true,
    tags: ['Retail Training', 'AC Showroom', 'Students Welcome', 'Flexible Days'],
    description: 'Support our flagship store during festival shopping days. Assist shoppers with item location, manage the complimentary gift-wrapping counter, and help keep apparel displays tidy.',
    responsibilities: [
      'Assist walk-in customers with gift-wrapping and festive packaging',
      'Tag items with barcode stickers and re-stock shelves from backroom inventory',
      'Maintain clean and organized clothing display racks during shopping hours',
      'Hand over promotional flyers and loyalty reward scratch cards at checkout'
    ],
    requirements: [
      'Pleasant communication skills and polite behavior',
      'Comfortable standing and walking around the store floor',
      'Neat attire (plain black or white polo/shirt)',
      'College ID or Aadhaar Card copy for entry gatepass'
    ],
    perks: [
      'Clean, fully air-conditioned modern store environment',
      'Evening snacks and beverages provided daily',
      'Store employee discount coupon valid for 3 months'
    ],
    workSchedule: {
      dates: 'Thursday to Sunday (4 Shifts)',
      reportingTime: '10:45 AM',
      shiftDuration: '9 hours with 45 min dinner/lunch break'
    },
    mapDetails: {
      landmark: 'Next to National College, Linking Road',
      address: 'Linking Road, Bandra West, Mumbai, Maharashtra 400050',
      lat: 19.0607,
      lng: 72.8362
    }
  },
  {
    id: 'gig-03',
    title: 'E-commerce Dark Store Quick Delivery & Parcel Sorter',
    category: 'delivery-packaging',
    categoryName: 'Delivery & Packaging',
    employer: {
      name: 'SwiftKart Logistics Hub',
      logo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.7,
      reviewCount: 94,
      activeJobs: 8,
      contactPerson: 'Sandeep Yadav',
      phone: '+91 97690 12845',
      whatsapp: '+919769012845',
      type: 'Instant Commerce & Logistics'
    },
    location: 'Marol, Andheri East, Mumbai',
    city: 'Mumbai',
    area: 'Andheri East',
    distance: 4.6,
    distanceDisplay: '4.6 km away',
    payment: {
      amount: 950,
      unit: 'shift',
      display: '₹950',
      period: 'per shift',
      payoutType: 'Instant UPI on Shift End',
      guaranteed: true
    },
    duration: 'Daily / Flexible Shifts',
    durationType: 'daily',
    durationDays: 1,
    workingHours: 'Flexible (Morning 6–2 or Evening 2–10)',
    employmentType: 'Shift',
    vacancies: 8,
    experienceRequired: false,
    experienceText: 'No prior experience required',
    isNearMe: true,
    tags: ['Instant Daily UPI', 'Flexible Shifts', 'High Openings', 'Overtime Bonus'],
    description: 'Work inside our automated grocery and retail dark store warehouse. Pick items according to app order slips, pack them securely in thermal bags, and hand over to delivery partners.',
    responsibilities: [
      'Locate grocery, electronics, and household items in aisles using handheld scanner',
      'Pack orders securely with bubble wrap and tamper-proof sealing bags',
      'Sort packages into designated delivery route bins',
      'Report any low-stock or damaged items to warehouse supervisor'
    ],
    requirements: [
      'Ability to read English product names and barcodes',
      'Physical agility to walk through aisles quickly',
      'Age 18+ with valid Aadhaar / Voter ID',
      'Closed-toe shoes (mandatory safety rule)'
    ],
    perks: [
      'Instant UPI payout processed every evening at 10 PM',
      'Extra ₹150 incentive if packaging target exceeds 80 orders',
      'Tea and snacks break twice during each shift'
    ],
    workSchedule: {
      dates: 'Immediate Joining • Daily slots available',
      reportingTime: '15 mins before chosen slot',
      shiftDuration: '8 hours (Day & Night options)'
    },
    mapDetails: {
      landmark: 'Near Marol Naka Metro Station, Andheri-Kurla Road',
      address: 'Marol Industrial Area, Andheri East, Mumbai, Maharashtra 400059',
      lat: 19.1136,
      lng: 72.8864
    }
  },
  {
    id: 'gig-04',
    title: 'Indian Auto Expo & Mobility Show Brand Booth Presenter',
    category: 'exhibition-staff',
    categoryName: 'Exhibition Staff',
    employer: {
      name: 'Vanguard Brand Activation Ltd',
      logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 5.0,
      reviewCount: 67,
      activeJobs: 2,
      contactPerson: 'Ananya Deshmukh',
      phone: '+91 99302 78190',
      whatsapp: '+919930278190',
      type: 'Corporate Brand Marketing'
    },
    location: 'NESCO Exhibition Centre, Goregaon East, Mumbai',
    city: 'Mumbai',
    area: 'Goregaon East',
    distance: 6.8,
    distanceDisplay: '6.8 km away',
    payment: {
      amount: 1800,
      unit: 'day',
      display: '₹1,800',
      period: 'per day',
      payoutType: '₹5,400 Total for 3 Days',
      guaranteed: true
    },
    duration: '3 Days (Fri – Sun)',
    durationType: 'project',
    durationDays: 3,
    workingHours: '10:00 AM – 7:00 PM',
    employmentType: 'Part-time',
    vacancies: 5,
    experienceRequired: true,
    experienceText: 'Good communication skills required • Friendly personality',
    isNearMe: false,
    tags: ['High Pay', 'Corporate Exhibition', 'Meals Provided', 'Celebrity Presence'],
    description: 'Represent an electric vehicle mobility brand at one of India’s biggest automotive expos. Interact with visitors, explain vehicle features using an iPad demo app, and capture test-drive leads.',
    responsibilities: [
      'Welcome expo visitors into the display pavilion with high energy',
      'Demonstrate the vehicle dashboard features and highlight range specs',
      'Collect visitor contact details and test-drive inquiries on company tablets',
      'Distribute premium brochures and merchandise kits to trade visitors'
    ],
    requirements: [
      'Fluent in English and Hindi',
      'Professional grooming and presentable appearance',
      'Prior promoter, modeling, or customer-facing experience is a plus',
      'Commitment to attend all 3 show days without absence'
    ],
    perks: [
      'Company branded blazers and polo t-shirts provided',
      'Full catering (breakfast, executive lunch, high tea) included',
      'Free entry access pass to all halls of the Auto Expo'
    ],
    workSchedule: {
      dates: 'Friday to Sunday (3 Full Days)',
      reportingTime: '9:15 AM briefing session',
      shiftDuration: '9 hours daily'
    },
    mapDetails: {
      landmark: 'Hall 3, Bombay Exhibition Centre (NESCO)',
      address: 'Western Express Highway, Goregaon East, Mumbai, Maharashtra 400063',
      lat: 19.1539,
      lng: 72.8559
    }
  },
  {
    id: 'gig-05',
    title: 'Pre-Wedding & Candid Photography Lighting Assistant',
    category: 'photography-assistants',
    categoryName: 'Photography Assistants',
    employer: {
      name: 'Studio Lumina Visuals',
      logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.9,
      reviewCount: 41,
      activeJobs: 1,
      contactPerson: 'Karan Singhania',
      phone: '+91 98334 11290',
      whatsapp: '+919833411290',
      type: 'Celebrity Wedding Studio'
    },
    location: 'Worli Sea Face & Heritage Precinct, Mumbai',
    city: 'Mumbai',
    area: 'Worli',
    distance: 5.2,
    distanceDisplay: '5.2 km away',
    payment: {
      amount: 1500,
      unit: 'day',
      display: '₹1,500',
      period: 'per day',
      payoutType: 'Instant Cash/UPI on Pack-up',
      guaranteed: true
    },
    duration: '1 Day (Sunday Shoot)',
    durationType: 'daily',
    durationDays: 1,
    workingHours: '2:30 PM – 9:30 PM (Golden Hour)',
    employmentType: 'Part-time',
    vacancies: 2,
    experienceRequired: false,
    experienceText: 'Passion for photography helpful • Freshers welcome',
    isNearMe: false,
    tags: ['Creative Industry', 'Learn Wedding Photo', 'Instant Pay', 'Evening Shoot'],
    description: 'Work alongside an award-winning wedding photography crew during an outdoor sunset pre-wedding shoot. Hold portable LED light panels, gold/silver reflectors, and assist with camera lens changes.',
    responsibilities: [
      'Hold handheld Godox LED light wands and collapsible 5-in-1 reflectors',
      'Carry the light equipment bag and tripod stand between shoot locations',
      'Assist the lead photographer with battery and memory card replacements',
      'Help ensure the bride and groom attire look clean in wind conditions'
    ],
    requirements: [
      'Basic enthusiasm for photography or video shooting',
      'Comfortable working during outdoor evening hours',
      'Attentive to director cues and quick on your feet',
      'Black shirt/t-shirt and comfortable dark trousers'
    ],
    perks: [
      'Opportunity to learn professional lighting and posing from top wedding creators',
      'Evening dinner and travel allowance of ₹200 included',
      'Instant UPI payment released as soon as the shoot wraps up'
    ],
    workSchedule: {
      dates: 'This Sunday Afternoon & Evening',
      reportingTime: '2:15 PM at Worli Sea Face promenade',
      shiftDuration: '7 hours'
    },
    mapDetails: {
      landmark: 'Near Worli Sea Face Promenade, Bandra-Worli Sea Link view',
      address: 'Khan Abdul Gaffar Khan Road, Worli, Mumbai, Maharashtra 400030',
      lat: 19.0176,
      lng: 72.8159
    }
  },
  {
    id: 'gig-06',
    title: 'Hospital & Healthcare Excel Billing Data Entry & Scanning',
    category: 'data-entry',
    categoryName: 'Data Entry',
    employer: {
      name: 'MediCare Diagnostic Diagnostics Pvt Ltd',
      logo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.8,
      reviewCount: 31,
      activeJobs: 2,
      contactPerson: 'Dr. Priya Shenoy',
      phone: '+91 98205 99482',
      whatsapp: '+919820599482',
      type: 'Healthcare Network'
    },
    location: 'Dadar West, Mumbai',
    city: 'Mumbai',
    area: 'Dadar West',
    distance: 3.5,
    distanceDisplay: '3.5 km away',
    payment: {
      amount: 750,
      unit: 'day',
      display: '₹750',
      period: 'per day',
      payoutType: 'Bank/UPI at end of each 3-day milestone',
      guaranteed: true
    },
    duration: '3–5 Days',
    durationType: 'daily',
    durationDays: 5,
    workingHours: '10:00 AM – 5:00 PM',
    employmentType: 'Part-time',
    vacancies: 3,
    experienceRequired: false,
    experienceText: 'Basic typing & Excel familiarity required',
    isNearMe: true,
    tags: ['Quiet Office Work', 'AC Environment', 'Typing Skills', 'Flexible Hours'],
    description: 'We need meticulous students or data entry typists to digitize legacy physical patient discharge cards and supplier medicine invoices into pre-formatted Google Sheets and Microsoft Excel.',
    responsibilities: [
      'Scan printed paper receipts using our high-speed desktop flatbed scanner',
      'Type patient registration numbers, dates, test names, and billing totals into Excel',
      'Perform quick cross-verification checks to ensure numbers match vouchers',
      'Organize physical files back into labelled filing drawers'
    ],
    requirements: [
      'Typing speed of 25+ words per minute with strong accuracy',
      'Basic knowledge of Google Sheets or MS Excel data input',
      'Respect for strict patient confidentiality guidelines',
      'Laptop can be brought or desktop PC provided at the clinic office'
    ],
    perks: [
      'Quiet, air-conditioned administrative office environment',
      'Complimentary lunch and morning/evening coffee served',
      'Official Data Entry Work Experience Certificate'
    ],
    workSchedule: {
      dates: 'Monday to Friday (5 Days)',
      reportingTime: '9:45 AM',
      shiftDuration: '7 hours with 1 hour lunch break'
    },
    mapDetails: {
      landmark: 'Near Shivaji Park, Dadar West',
      address: 'Ranade Road, Dadar West, Mumbai, Maharashtra 400028',
      lat: 19.0282,
      lng: 72.8397
    }
  },
  {
    id: 'gig-07',
    title: 'Diwali Mega Mela Coupon Counter & Crowd Flow Helper',
    category: 'festival-helpers',
    categoryName: 'Festival Helpers',
    employer: {
      name: 'Shree Utsav Cultural Committee',
      logo: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.9,
      reviewCount: 46,
      activeJobs: 3,
      contactPerson: 'Rajendra Joshi',
      phone: '+91 98211 44552',
      whatsapp: '+919821144552',
      type: 'Non-Profit Cultural Trust'
    },
    location: 'Thane West, Mumbai MMR',
    city: 'Thane',
    area: 'Thane West',
    distance: 9.4,
    distanceDisplay: '9.4 km away',
    payment: {
      amount: 1100,
      unit: 'day',
      display: '₹1,100',
      period: 'per day',
      payoutType: 'Daily Cash / UPI on Shift Wrap',
      guaranteed: true
    },
    duration: '3–5 Days (Festive Week)',
    durationType: 'daily',
    durationDays: 4,
    workingHours: '4:00 PM – 11:00 PM (Evening Mela)',
    employmentType: 'Part-time',
    vacancies: 8,
    experienceRequired: false,
    experienceText: 'High energy & helpful attitude needed',
    isNearMe: false,
    tags: ['Festive Atmosphere', 'Evening Gig', 'Instant Cash Pay', 'Food Stalls'],
    description: 'Join the festive celebration! Help manage coupon counters for amusement rides and food stalls, distribute festival souvenir pamphlets, and assist senior citizens with seating at the festival ground.',
    responsibilities: [
      'Issue ride tokens and entry wristbands at the main ticketing booths',
      'Guide families and crowds smoothly toward seating pavilions and food courts',
      'Assist with lost-and-found announcements at the control room',
      'Help vendors set up lighting and signage before the evening crowd arrives'
    ],
    requirements: [
      'Friendly and cheerful interaction with families and children',
      'Punctual and reliable for evening festival hours',
      'Ability to communicate in Hindi, Marathi, or English',
      'Valid identity proof (College ID / Aadhaar)'
    ],
    perks: [
      'Full meal coupons redeemable across all premium food stalls in the mela',
      'Instant daily cash or UPI settlement before you head home each night',
      'Vibrant celebration atmosphere with live music and light shows'
    ],
    workSchedule: {
      dates: 'Thursday through Sunday Evening',
      reportingTime: '3:30 PM',
      shiftDuration: '7 hours'
    },
    mapDetails: {
      landmark: 'Near Talao Pali Lake, Thane West',
      address: 'Jambli Naka, Talao Pali, Thane West, Maharashtra 400601',
      lat: 19.1868,
      lng: 72.9754
    }
  },
  {
    id: 'gig-08',
    title: 'Apartment Relocation Box Packaging & Furniture Shifting Crew',
    category: 'cleaning-shifting',
    categoryName: 'Cleaning & Shifting',
    employer: {
      name: 'SafeHome Easy Movers & Packers',
      logo: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.6,
      reviewCount: 78,
      activeJobs: 5,
      contactPerson: 'Arun Gawde',
      phone: '+91 97022 38812',
      whatsapp: '+919702238812',
      type: 'Licensed Relocation Services'
    },
    location: 'Powai, Hiranandani Gardens, Mumbai',
    city: 'Mumbai',
    area: 'Powai',
    distance: 5.8,
    distanceDisplay: '5.8 km away',
    payment: {
      amount: 1000,
      unit: 'day',
      display: '₹1,000',
      period: 'per day',
      payoutType: '₹1,000 + ₹200 Daily Lunch Allowance',
      guaranteed: true
    },
    duration: '1 Day (Weekend Moving)',
    durationType: 'daily',
    durationDays: 1,
    workingHours: '9:00 AM – 4:00 PM',
    employmentType: 'Part-time',
    vacancies: 4,
    experienceRequired: false,
    experienceText: 'Physical stamina required • Team-based work',
    isNearMe: true,
    tags: ['Physical Fitness', 'Early Wrap-up', 'Cash Pay', 'Team Work'],
    description: 'Assist our team with packing household kitchenware, clothing, and books into sturdy cardboard boxes, applying bubble wrap, and safely moving items into the service lift of a Powai high-rise.',
    responsibilities: [
      'Wrap fragile items like glassware and photo frames with bubble wrap',
      'Pack books, clothes, and linen into numbered corrugated cartons',
      'Tape boxes securely and write room labels (e.g. Master Bedroom, Kitchen)',
      'Accompany the transport truck to unload boxes into the new apartment'
    ],
    requirements: [
      'Physically fit and comfortable lifting cartons up to 15 kg',
      'Careful and attentive handling of fragile belongings',
      'Comfortable working in a team of 4 members',
      'Casual work clothes and sneakers'
    ],
    perks: [
      'Work wraps up early (usually by 3:30–4:00 PM)',
      '₹200 lunch and cold beverage cash provided upfront at noon',
      'Immediate full payment of ₹1,000 cash/UPI upon job completion'
    ],
    workSchedule: {
      dates: 'Saturday Morning',
      reportingTime: '8:45 AM at building lobby',
      shiftDuration: '7 hours'
    },
    mapDetails: {
      landmark: 'Near Galleria Shopping Centre, Hiranandani',
      address: 'Central Avenue, Hiranandani Gardens, Powai, Mumbai 400076',
      lat: 19.1171,
      lng: 72.9056
    }
  },
  {
    id: 'gig-09',
    title: 'Comic & Pop Culture Convention Merch Booth Attendant',
    category: 'event-helpers',
    categoryName: 'Event Helpers',
    employer: {
      name: 'Nerdverse Collectibles India',
      logo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 5.0,
      reviewCount: 39,
      activeJobs: 1,
      contactPerson: 'Sahil Kapoor',
      phone: '+91 99204 11782',
      whatsapp: '+919920411782',
      type: 'Pop Culture & Gaming Merch'
    },
    location: 'Jio World Garden, BKC, Mumbai',
    city: 'Mumbai',
    area: 'BKC',
    distance: 1.5,
    distanceDisplay: '1.5 km away',
    payment: {
      amount: 1400,
      unit: 'day',
      display: '₹1,400',
      period: 'per day',
      payoutType: 'Daily UPI Payout',
      guaranteed: true
    },
    duration: '2 Days (Sat – Sun)',
    durationType: 'daily',
    durationDays: 2,
    workingHours: '10:30 AM – 7:30 PM',
    employmentType: 'Part-time',
    vacancies: 3,
    experienceRequired: false,
    experienceText: 'Anime/Gaming fans preferred • No retail experience needed',
    isNearMe: true,
    tags: ['Fun Vibe', 'Free Comic-Con Pass', 'Free T-Shirt', 'Instant Pay'],
    description: 'Work at our pop-culture merchandise booth selling anime action figures, posters, and gaming tees. Help fans find their favorite characters, scan UPI QR codes for payment, and hand over bagged merchandise.',
    responsibilities: [
      'Display action figures and posters neatly on display shelves',
      'Show prices and sizes to visiting fans and cosplay attendees',
      'Generate QR code bills on our iPad billing app and verify transaction receipts',
      'Hand out free convention stickers and promotional postcards'
    ],
    requirements: [
      'Enthusiasm for anime, superhero movies, or gaming is a major plus!',
      'Active, friendly, and comfortable speaking to fellow fans',
      'Basic numeracy skills to confirm UPI payment receipts',
      'Fun casual wear or cosplay if you like!'
    ],
    perks: [
      'Free VIP all-access wristband to the entire convention (worth ₹2,500)',
      'Free exclusive anime t-shirt from our collection',
      'Instant UPI payment released at the end of each evening'
    ],
    workSchedule: {
      dates: 'Saturday & Sunday',
      reportingTime: '10:00 AM',
      shiftDuration: '9 hours with snack breaks'
    },
    mapDetails: {
      landmark: 'Jio World Garden, BKC',
      address: 'Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051',
      lat: 19.0664,
      lng: 72.8679
    }
  },
  {
    id: 'gig-10',
    title: 'International Medical Summit Delegate Desk & Speaker Usher',
    category: 'exhibition-staff',
    categoryName: 'Exhibition Staff',
    employer: {
      name: 'Global MedTech Conferences',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.9,
      reviewCount: 63,
      activeJobs: 2,
      contactPerson: 'Nandita Rao',
      phone: '+91 98200 44219',
      whatsapp: '+919820044219',
      type: 'International Conference Organizers'
    },
    location: 'Grand Hyatt Mumbai Hotel & Residences, Santacruz',
    city: 'Mumbai',
    area: 'Santacruz East',
    distance: 3.1,
    distanceDisplay: '3.1 km away',
    payment: {
      amount: 2000,
      unit: 'day',
      display: '₹2,000',
      period: 'per day',
      payoutType: '₹4,000 Direct Bank/UPI for 2 days',
      guaranteed: true
    },
    duration: '2 Days (Thu – Fri)',
    durationType: 'project',
    durationDays: 2,
    workingHours: '8:30 AM – 5:30 PM',
    employmentType: 'Part-time',
    vacancies: 4,
    experienceRequired: true,
    experienceText: 'Fluent English required • Formal dress code',
    isNearMe: true,
    tags: ['Premium 5-Star Hotel', 'High Pay', 'Corporate Networking', '5-Star Buffet'],
    description: 'We are seeking well-spoken college graduates or students to serve as session ushers and speaker liaisons for international surgeons and medical researchers attending a prestigious 5-star medical summit.',
    responsibilities: [
      'Escort keynote speakers from VIP hospitality lounge to stage greenrooms',
      'Pass wireless handheld microphones during Q&A segments in the ballroom',
      'Monitor badge scanning at CME accreditation checkpoints',
      'Distribute digital slide deck summaries via QR codes'
    ],
    requirements: [
      'Fluent and polished English communication skills',
      'Formal attire mandatory (Formal trousers with light shirt, blazers preferred)',
      'Punctual and poised professional behavior',
      'Prior volunteering or college Model UN experience is appreciated'
    ],
    perks: [
      'Complimentary 5-star hotel international lunch buffet both days',
      'Distinguished Certificate of Appreciation signed by the Conference Director',
      'Valuable corporate networking with medical leaders and event executives'
    ],
    workSchedule: {
      dates: 'Thursday & Friday',
      reportingTime: '8:00 AM sharp',
      shiftDuration: '9 hours'
    },
    mapDetails: {
      landmark: 'Grand Ballroom, Grand Hyatt Mumbai',
      address: 'Off Western Express Highway, Santacruz East, Mumbai 400055',
      lat: 19.0784,
      lng: 72.8532
    }
  },
  {
    id: 'gig-11',
    title: 'Cloud Kitchen Food Order Dispatcher & Safety Seal Checker',
    category: 'delivery-packaging',
    categoryName: 'Delivery & Packaging',
    employer: {
      name: 'FreshBite Cloud Kitchens India',
      logo: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.7,
      reviewCount: 44,
      activeJobs: 3,
      contactPerson: 'Imran Shaikh',
      phone: '+91 97682 99011',
      whatsapp: '+919768299011',
      type: 'Multi-Brand Cloud Kitchen'
    },
    location: 'Lower Parel, Mumbai',
    city: 'Mumbai',
    area: 'Lower Parel',
    distance: 7.2,
    distanceDisplay: '7.2 km away',
    payment: {
      amount: 900,
      unit: 'shift',
      display: '₹900',
      period: 'per shift',
      payoutType: 'Daily UPI Settlement',
      guaranteed: true
    },
    duration: 'Weekly (4–6 Shifts)',
    durationType: 'weekly',
    durationDays: 6,
    workingHours: '7:00 PM – 2:00 AM (Night Dinner Peak)',
    employmentType: 'Shift',
    vacancies: 5,
    experienceRequired: false,
    experienceText: 'No experience needed • Night shift bonus included',
    isNearMe: false,
    tags: ['Night Shift Bonus', 'Weekly Payout', 'Free Dinner', 'Fast Paced'],
    description: 'Manage online food delivery dispatches from our central multi-brand kitchen. Check order contents, apply tamper-evident stickers, verify delivery partner order IDs, and ensure fast handovers.',
    responsibilities: [
      'Match printed kitchen ticket items with packaged food boxes',
      'Apply tamper-evident security tape and cutlery packets into brown carry bags',
      'Verify last 4 digits of Zomato/Swiggy rider order IDs before handover',
      'Mark orders as "Dispatched" on the merchant tablet dashboard'
    ],
    requirements: [
      'Attention to detail to ensure zero missing items in orders',
      'Comfortable working during evening and dinner rush hours',
      'Clean hygiene standards (hairnets and aprons provided)',
      'Basic smartphone navigation skills'
    ],
    perks: [
      'Free freshly prepared dinner from our kitchen brands every night',
      '₹150 night-shift cab travel allowance included in daily payout',
      'Reliable weekly direct deposit or daily UPI option'
    ],
    workSchedule: {
      dates: 'Choose 4 to 6 nights per week',
      reportingTime: '6:45 PM',
      shiftDuration: '7 hours'
    },
    mapDetails: {
      landmark: 'Near Mathuradas Mill Compound, Lower Parel',
      address: 'Senapati Bapat Marg, Lower Parel West, Mumbai, Maharashtra 400013',
      lat: 18.9986,
      lng: 72.8311
    }
  },
  {
    id: 'gig-12',
    title: 'Supermarket Weekend Inventory Stock Counting & RFID Scanning',
    category: 'store-assistants',
    categoryName: 'Store Assistants',
    employer: {
      name: 'Reliance Smart Superstore',
      logo: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=120&q=80',
      verified: true,
      rating: 4.8,
      reviewCount: 112,
      activeJobs: 6,
      contactPerson: 'Girish Bhatt',
      phone: '+91 98203 11849',
      whatsapp: '+919820311849',
      type: 'National Retail Supermarket'
    },
    location: 'R-City Mall, Ghatkopar West, Mumbai',
    city: 'Mumbai',
    area: 'Ghatkopar West',
    distance: 8.1,
    distanceDisplay: '8.1 km away',
    payment: {
      amount: 800,
      unit: 'day',
      display: '₹800',
      period: 'per day',
      payoutType: 'Bank/UPI at end of weekend',
      guaranteed: true
    },
    duration: '2 Days (Saturday & Sunday)',
    durationType: 'daily',
    durationDays: 2,
    workingHours: '10:00 AM – 6:30 PM',
    employmentType: 'Part-time',
    vacancies: 6,
    experienceRequired: false,
    experienceText: 'Simple scanner training provided on arrival',
    isNearMe: false,
    tags: ['Mall Location', 'Weekend Only', 'Student Friendly', 'Direct Company'],
    description: 'Join our weekend stock audit team inside the hypermarket. Scan barcode labels across packaged food, FMCG, and apparel aisles using wireless Android scanners and tally shelf numbers.',
    responsibilities: [
      'Scan barcodes on packaged goods shelf by shelf using company PDA device',
      'Count physical units on display hooks and enter quantity into the tally form',
      'Flag missing shelf price tags to the floor department manager',
      'Organize front-facing items neatly following the planogram guidelines'
    ],
    requirements: [
      'Basic numerical skill and attention to detail',
      'Comfortable walking and standing inside the supermarket floor',
      'Punctual and reliable for the scheduled weekend shift',
      'Any photo ID card'
    ],
    perks: [
      'Air-conditioned shopping mall environment',
      'Discount voucher of 10% on your personal grocery shopping',
      'Guaranteed on-time payout of ₹1,600 for the two weekend days'
    ],
    workSchedule: {
      dates: 'Upcoming Saturday & Sunday',
      reportingTime: '9:45 AM at staff security entrance',
      shiftDuration: '8.5 hours with 1 hour lunch break'
    },
    mapDetails: {
      landmark: 'Ground Floor, R-City Mall, Ghatkopar West',
      address: 'LBS Marg, Ghatkopar West, Mumbai, Maharashtra 400086',
      lat: 19.0998,
      lng: 72.9163
    }
  }
];

// Helper to filter gigs by radius, duration, payment, etc.
export const filterGigs = (gigs, filters = {}) => {
  return gigs.filter((gig) => {
    // Keyword search
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      const match =
        gig.title.toLowerCase().includes(q) ||
        gig.categoryName.toLowerCase().includes(q) ||
        gig.employer.name.toLowerCase().includes(q) ||
        gig.location.toLowerCase().includes(q) ||
        gig.tags.some((t) => t.toLowerCase().includes(q));
      if (!match) return false;
    }

    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (gig.category !== filters.category) return false;
    }

    // Radius filter (numeric in km)
    if (filters.radius && filters.radius !== 'all') {
      const maxDistance = parseFloat(filters.radius);
      if (!isNaN(maxDistance) && gig.distance > maxDistance) return false;
    }

    // Duration filter
    if (filters.duration && filters.duration !== 'all') {
      if (filters.duration === 'daily' && gig.durationType !== 'daily') return false;
      if (filters.duration === 'weekly' && gig.durationType !== 'weekly') return false;
      if (filters.duration === 'project' && gig.durationType !== 'project') return false;
    }

    // Pay range
    if (filters.payRange && filters.payRange !== 'all') {
      const amount = gig.payment.amount;
      if (filters.payRange === 'under-800' && amount >= 800) return false;
      if (filters.payRange === '800-1500' && (amount < 800 || amount > 1500)) return false;
      if (filters.payRange === 'above-1500' && amount <= 1500) return false;
    }

    // Employment type
    if (filters.employmentType && filters.employmentType !== 'all') {
      if (gig.employmentType.toLowerCase() !== filters.employmentType.toLowerCase()) return false;
    }

    // Experience required
    if (filters.experience && filters.experience !== 'all') {
      if (filters.experience === 'not-required' && gig.experienceRequired) return false;
      if (filters.experience === 'required' && !gig.experienceRequired) return false;
    }

    // Near me toggle
    if (filters.nearMeOnly && !gig.isNearMe && gig.distance > 5) return false;

    return true;
  });
};
