// Mock Database of Local Service Categories and Vetted Local Providers

export const localCategoriesData = [
  {
    id: 'plumbers',
    name: 'Plumbers',
    tagline: 'Leakages, Bathroom Fitting, Pumps & Pipe Repairs',
    icon: 'Wrench',
    count: '580+ Pros',
    startingRate: '₹499',
    popularIn: ['Tap & Pipe Leakages', 'Water Tank Cleaning', 'Sanitary Fittings', 'Emergency Drainage'],
    cover: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'electricians',
    name: 'Electricians',
    tagline: 'Licensed Wiring, Appliance Setup & Emergency Repairs',
    icon: 'Zap',
    count: '640+ Pros',
    startingRate: '₹349',
    popularIn: ['Short Circuit Diagnostics', 'Ceiling Fan & Lights', 'Inverter Wiring', 'MCB Box Replacement'],
    cover: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'makeup-artists',
    name: 'Makeup Artists',
    tagline: 'Bridal, Party & HD Makeup Specialists',
    icon: 'Sparkles',
    count: '340+ Pros',
    startingRate: '₹2,500',
    popularIn: ['Bridal Makeovers', 'Reception Glow', 'Editorial & Shoot', 'Saree Draping'],
    cover: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rangoli-artists',
    name: 'Rangoli Artists',
    tagline: 'Custom Floral, Sanskar Bharti & Festival Art',
    icon: 'Palette',
    count: '180+ Pros',
    startingRate: '₹1,200',
    popularIn: ['Diwali Grand Rangoli', 'Wedding Floor Art', 'Corporate Logos', 'Floral Pookkalam'],
    cover: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mehendi-artists',
    name: 'Mehendi Artists',
    tagline: 'Bridal, Arabic, Rajasthani & Minimalist Henna',
    icon: 'Feather',
    count: '420+ Pros',
    startingRate: '₹1,400',
    popularIn: ['Bridal Both Hands & Feet', 'Arabic Negative Space', 'Portrait Henna', 'Family Events'],
    cover: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'photographers',
    name: 'Photographers',
    tagline: 'Event, Candid, Pre-Wedding & Portrait Shoots',
    icon: 'Camera',
    count: '510+ Pros',
    startingRate: '₹3,800',
    popularIn: ['Candid Wedding', 'Pre-Wedding Drone', 'Maternity Shoot', 'Birthday Parties'],
    cover: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'event-decorators',
    name: 'Event Decorators',
    tagline: 'Balloon, Floral, Haldi-Mehendi & Stage Decor',
    icon: 'PartyPopper',
    count: '290+ Pros',
    startingRate: '₹5,000',
    popularIn: ['Balloon Styling', 'Haldi Marigold Canopy', 'Engagement Backdrops', 'Corporate Stages'],
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'home-tutors',
    name: 'Home Tutors',
    tagline: 'CBSE, ICSE, Coding, Languages & Exam Prep',
    icon: 'GraduationCap',
    count: '480+ Pros',
    startingRate: '₹600/hr',
    popularIn: ['Class 8-12 Maths & Science', 'Coding for Kids', 'IELTS / Spoken English', 'Vocal Music & Guitar'],
    cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'interior-designers',
    name: 'Interior Designers',
    tagline: 'Modular Kitchens, Renovation & 3D Spatial Design',
    icon: 'Home',
    count: '310+ Pros',
    startingRate: '₹12,000',
    popularIn: ['Modular Kitchen Design', '1BHK/2BHK Full Makeover', 'False Ceiling & Lighting', 'Custom Wardrobes'],
    cover: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  }
];

export const localProvidersData = [
  // ==========================================
  // PLUMBERS (3-5 Profiles, including required)
  // ==========================================
  {
    id: 'loc-rahul-sharma',
    name: 'Rahul Sharma',
    profession: 'Residential Plumber',
    category: 'plumbers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 148,
    startingPrice: 499,
    priceUnit: 'per visit',
    priceDisplay: '₹499 / visit',
    city: 'Thane',
    area: 'Naupada, Panchpakhadi & Ghodbunder Rd',
    pinCode: '400602',
    distanceKm: 2.1,
    serviceRadiusKm: 20,
    serviceArea: 'Thane West, Thane East, Mulund & Kalwa',
    availability: 'Available Today',
    availabilityNote: 'Can arrive within 45 minutes',
    experienceYears: 8,
    badges: ['Verified Pro', 'Fast Response', 'Standard Warranty'],
    phone: '+91 98203 11842',
    whatsapp: '919820311842',
    bio: 'Experienced residential plumber handling concealed pipe leaks, Jaguar/Kohler tap replacements, overhead water tank valves, and pressure pump diagnostics.',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'General Plumbing Inspection & Visit', price: '₹499', duration: '45 mins' },
      { name: 'Concealed Pipe Leakage Repair', price: '₹950', duration: '1.5 hrs' },
      { name: 'Water Tank Float Valve & Cleaning', price: '₹1,200', duration: '2 hrs' },
      { name: 'Bathroom Tap / Mixer Installation', price: '₹550', duration: '40 mins' }
    ],
    reviews: [
      { author: 'Pradeep Joshi', rating: 5, date: '1 day ago', comment: 'Rahul detected our hidden wall leakage without breaking extra tiles. Very polite and prompt.' },
      { author: 'Snehal More', rating: 5, date: '1 week ago', comment: 'Arrived within 30 mins in Thane West and fixed our mixer unit.' }
    ],
    coordinates: { lat: 19.2183, lng: 72.9781 }
  },
  {
    id: 'loc-amit-patil',
    name: 'Amit Patil',
    profession: 'Plumbing Specialist',
    category: 'plumbers',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    rating: 4.88,
    reviewsCount: 112,
    startingPrice: 699,
    priceUnit: 'per visit',
    priceDisplay: '₹699 / visit',
    city: 'Kalyan',
    area: 'Kalyan West & Dombivli East',
    pinCode: '421301',
    distanceKm: 3.4,
    serviceRadiusKm: 25,
    serviceArea: 'Kalyan, Dombivli, Ulhasnagar & Ambernath',
    availability: 'Available Today',
    availabilityNote: 'Slots open for afternoon visits',
    experienceYears: 10,
    badges: ['Top Rated', 'Heavy Machinery Cert'],
    phone: '+91 98194 77319',
    whatsapp: '919819477319',
    bio: 'Specialist in society pipeline maintenance, motorized water pump repairs, high-rise drain unblocking, and commercial sanitary overhauls.',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Specialist Visit & Diagnostics', price: '₹699', duration: '1 hr' },
      { name: 'Motor Pump Repair & Servicing', price: '₹1,400', duration: '2 hrs' },
      { name: 'Drainage Jet Unblocking', price: '₹1,100', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Girish Kadam', rating: 5, date: '4 days ago', comment: 'Amit resolved our building main line choke efficiently. Very experienced.' }
    ],
    coordinates: { lat: 19.2437, lng: 73.1355 }
  },
  {
    id: 'loc-suresh-kumar',
    name: 'Suresh Kumar',
    profession: 'Emergency Plumber',
    category: 'plumbers',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 194,
    startingPrice: 599,
    priceUnit: 'per visit',
    priceDisplay: '₹599 / visit',
    city: 'Mumbai',
    area: 'Andheri West, Juhu & Vile Parle',
    pinCode: '400053',
    distanceKm: 1.8,
    serviceRadiusKm: 18,
    serviceArea: 'Andheri, Bandra, Goregaon & Santacruz',
    availability: '24x7 Emergency Ready',
    availabilityNote: 'Night emergency response available',
    experienceYears: 12,
    badges: ['24x7 Emergency', 'Verified Pro', 'Top Rated'],
    phone: '+91 98200 44921',
    whatsapp: '919820044921',
    bio: '24/7 on-call emergency plumber in Western Mumbai. Expert in burst pipes, geyser water backflow, overflow crises, and bathroom emergencies.',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Emergency Leakage Response', price: '₹599', duration: '40 mins' },
      { name: 'Geyser Water Inlet Repair', price: '₹850', duration: '1 hr' },
      { name: 'Complete Bathroom Line Servicing', price: '₹1,500', duration: '2.5 hrs' }
    ],
    reviews: [
      { author: 'Vikram Merchant', rating: 5, date: '2 days ago', comment: 'Suresh came at 11:30 PM when our geyser pipe burst. Life saver!' }
    ],
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: 'loc-vikram-singh',
    name: 'Vikram Singh',
    profession: 'Pipe Fitting Expert',
    category: 'plumbers',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviewsCount: 88,
    startingPrice: 799,
    priceUnit: 'per visit',
    priceDisplay: '₹799 / visit',
    city: 'Navi Mumbai',
    area: 'Vashi, Nerul & Belapur',
    pinCode: '400703',
    distanceKm: 4.2,
    serviceRadiusKm: 22,
    serviceArea: 'All Navi Mumbai & Kharghar',
    availability: 'Available Tomorrow',
    availabilityNote: 'Morning slot 9:30 AM open',
    experienceYears: 11,
    badges: ['CPVC Specialist', 'Verified Pro'],
    phone: '+91 98331 55670',
    whatsapp: '919833155670',
    bio: 'Precision CPVC, UPVC and composite pipe fitting specialist. Commercial kitchen plumbing, new apartment bathroom lines, and water meter fitting.',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Pipe Fitting & Routing Inspection', price: '₹799', duration: '1 hr' },
      { name: 'CPVC Pipeline Overhaul (Per Line)', price: '₹1,600', duration: '2 hrs' },
      { name: 'Water Meter & Valve Fitting', price: '₹950', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Deepak Nayak', rating: 5, date: '1 week ago', comment: 'Vikram redid our entire balcony pipeline neatly. Clean work and fair price.' }
    ],
    coordinates: { lat: 19.0748, lng: 72.9978 }
  },

  // ==========================================
  // ELECTRICIANS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-ramesh-chavan',
    name: 'Ramesh Chavan',
    profession: 'Licensed Master Electrician',
    category: 'electricians',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 160,
    startingPrice: 399,
    priceUnit: 'per visit',
    priceDisplay: '₹399 / visit',
    city: 'Thane',
    area: 'Wagle Estate, Majiwada & Teen Hath Naka',
    pinCode: '400604',
    distanceKm: 2.5,
    serviceRadiusKm: 18,
    serviceArea: 'Thane, Kalwa, Airoli',
    availability: 'Available Today',
    availabilityNote: 'Fast service within 1 hour',
    experienceYears: 13,
    badges: ['PWD Licensed', 'Verified Pro', 'Top Rated'],
    phone: '+91 98205 33214',
    whatsapp: '919820533214',
    bio: 'Government PWD licensed wireman. Expert in MCB trippings, 3-phase balancing, home inverter wiring, and smart home switchboard upgrades.',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Electrical Diagnostics & Visit', price: '₹399', duration: '45 mins' },
      { name: 'MCB Box & Circuit Breaker Replacement', price: '₹850', duration: '1 hr' },
      { name: 'Inverter & Battery Setup / Wiring', price: '₹1,200', duration: '2 hrs' },
      { name: 'Ceiling Fan & Chandelier Fitting', price: '₹450', duration: '45 mins' }
    ],
    reviews: [
      { author: 'Manish Parab', rating: 5, date: '3 days ago', comment: 'Ramesh sorted our frequent tripping issue within 20 mins. Very skilled.' }
    ],
    coordinates: { lat: 19.1950, lng: 72.9554 }
  },
  {
    id: 'loc-deepak-jha',
    name: 'Deepak Jha',
    profession: 'Home & Appliance Electrician',
    category: 'electricians',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    rating: 4.89,
    reviewsCount: 104,
    startingPrice: 499,
    priceUnit: 'per visit',
    priceDisplay: '₹499 / visit',
    city: 'Mumbai',
    area: 'Powai, Chandivali & Ghatkopar',
    pinCode: '400076',
    distanceKm: 2.8,
    serviceRadiusKm: 15,
    serviceArea: 'Powai, Kanjurmarg, Vikhroli, Ghatkopar',
    availability: 'Available Today',
    availabilityNote: 'Open slots this afternoon',
    experienceYears: 9,
    badges: ['Verified Pro', 'Top Rated'],
    phone: '+91 98192 44321',
    whatsapp: '919819244321',
    bio: 'Specialist in modular kitchen appliance connections, AC power point installation, LED false ceiling cove lighting, and rewiring.',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Standard Visit & Inspection', price: '₹499', duration: '45 mins' },
      { name: 'AC Heavy Power Point Installation', price: '₹750', duration: '1 hr' },
      { name: 'Cove LED Profile Light Installation', price: '₹1,400', duration: '2.5 hrs' }
    ],
    reviews: [
      { author: 'Tanvi Shah', rating: 5, date: '1 week ago', comment: 'Deepak installed our false ceiling profile lights flawlessly.' }
    ],
    coordinates: { lat: 19.1176, lng: 72.9060 }
  },
  {
    id: 'loc-ganesh-shinde',
    name: 'Ganesh Shinde',
    profession: 'Wiring & Short Circuit Expert',
    category: 'electricians',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    rating: 4.93,
    reviewsCount: 79,
    startingPrice: 349,
    priceUnit: 'per visit',
    priceDisplay: '₹349 / visit',
    city: 'Navi Mumbai',
    area: 'Kopar Khairane & Ghansoli',
    pinCode: '400709',
    distanceKm: 3.1,
    serviceRadiusKm: 20,
    serviceArea: 'Navi Mumbai & Thane Belapur Rd',
    availability: 'Available Tomorrow',
    availabilityNote: 'Book in advance for morning inspection',
    experienceYears: 7,
    badges: ['Verified Pro', 'Affordable Rate'],
    phone: '+91 98334 88129',
    whatsapp: '919833488129',
    bio: 'Dedicated electrician for rapid short circuit tracing, earthing rod installation, and domestic circuit breaker troubleshooting.',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Short Circuit Emergency Inspection', price: '₹349', duration: '40 mins' },
      { name: 'Copper Earthing Setup', price: '₹1,500', duration: '2 hrs' },
      { name: 'Modular Switchboard Replacement', price: '₹400', duration: '30 mins' }
    ],
    reviews: [
      { author: 'Nitin Gore', rating: 5, date: '5 days ago', comment: 'Fair rates and quick resolution of our neutral wire problem.' }
    ],
    coordinates: { lat: 19.1034, lng: 73.0076 }
  },
  {
    id: 'loc-manoj-gaikwad',
    name: 'Manoj Gaikwad',
    profession: 'Industrial & Domestic Electrician',
    category: 'electricians',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    reviewsCount: 115,
    startingPrice: 449,
    priceUnit: 'per visit',
    priceDisplay: '₹449 / visit',
    city: 'Pune',
    area: 'Kothrud, Baner & Hinjewadi',
    pinCode: '411038',
    distanceKm: 3.6,
    serviceRadiusKm: 25,
    serviceArea: 'West Pune, Aundh, Wakad, Hinjewadi Phase 1-3',
    availability: 'Available Today',
    availabilityNote: 'Slots open for today',
    experienceYears: 11,
    badges: ['Top Rated Pune', 'Licensed Pro'],
    phone: '+91 98220 77651',
    whatsapp: '919822077651',
    bio: 'Serving West Pune apartments and tech parks. Specializing in home automation switches, inverter wiring, and electrical load audits.',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Service Visit & Electrical Check', price: '₹449', duration: '45 mins' },
      { name: 'Smart WiFi Switchboard Conversion', price: '₹999', duration: '1.5 hrs' },
      { name: 'Full Apartment Rewiring Audit', price: '₹1,800', duration: '3 hrs' }
    ],
    reviews: [
      { author: 'Omkar Dandekar', rating: 5, date: '2 weeks ago', comment: 'Manoj converted our entire 3BHK to smart touch switches effortlessly.' }
    ],
    coordinates: { lat: 18.5074, lng: 73.8077 }
  },

  // ==========================================
  // MAKEUP ARTISTS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-pooja-sharma',
    name: 'Pooja Sharma',
    profession: 'Celebrity & Bridal HD Makeup Artist',
    category: 'makeup-artists',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 128,
    startingPrice: 3500,
    priceUnit: 'per session',
    priceDisplay: '₹3,500 onwards',
    city: 'Mumbai',
    area: 'Bandra West & Khar',
    pinCode: '400050',
    distanceKm: 1.4,
    serviceRadiusKm: 18,
    serviceArea: 'Within 18 km of Bandra, Juhu, Andheri & South Mumbai',
    availability: 'Available Today',
    availabilityNote: 'Slots open for tomorrow morning',
    experienceYears: 7,
    badges: ['Verified Pro', 'Top Rated', 'Bridal Specialist'],
    phone: '+91 98201 44521',
    whatsapp: '919820144521',
    bio: 'Certified by London School of Makeup. Specializing in weightless HD bridal makeup, dewy reception aesthetics, and traditional Marathi/North Indian bridal looks.',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Bridal HD & Airbrush Package', price: '₹14,500', duration: '3.5 hrs' },
      { name: 'Engagement / Sangeet Glam', price: '₹6,500', duration: '2 hrs' },
      { name: 'Party Glow & Hairstyling', price: '₹3,500', duration: '1.5 hrs' },
      { name: 'Saree Draping & Dupatta Setting', price: '₹1,200', duration: '45 mins' }
    ],
    reviews: [
      { author: 'Ananya Deshmukh', rating: 5, date: '3 days ago', comment: 'Pooja did my wedding makeup and it stayed flawless through 12 hours of dancing and humidity. Loved her calm presence!' },
      { author: 'Rhea Sen', rating: 5, date: '2 weeks ago', comment: 'Very professional, arrived 15 mins early with sterilized international makeup kits. Highly recommended.' }
    ],
    coordinates: { lat: 19.0596, lng: 72.8295 }
  },
  {
    id: 'loc-shruti-rao',
    name: 'Shruti Rao',
    profession: 'Airbrush & Editorial Makeup Artist',
    category: 'makeup-artists',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    rating: 4.97,
    reviewsCount: 94,
    startingPrice: 4500,
    priceUnit: 'per session',
    priceDisplay: '₹4,500 onwards',
    city: 'Pune',
    area: 'Kalyani Nagar & Koregaon Park',
    pinCode: '411006',
    distanceKm: 2.9,
    serviceRadiusKm: 25,
    serviceArea: 'Pune & PCMC wedding destinations',
    availability: 'Accepting Wedding Bookings',
    availabilityNote: 'Weekend dates filling fast',
    experienceYears: 9,
    badges: ['Airbrush Certified', 'Top Rated Plus'],
    phone: '+91 98230 66542',
    whatsapp: '919823066542',
    bio: 'MAC and Kryolan certified airbrush artist. Renowned for natural skin finish, long-wear bridal looks, and dramatic reception eyes.',
    gallery: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Signature Airbrush Bridal Look', price: '₹18,000', duration: '3.5 hrs' },
      { name: 'Cocktail / Reception Look', price: '₹7,500', duration: '2 hrs' },
      { name: 'Guest / Mother of the Bride Makeup', price: '₹4,500', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Pooja Agarwal', rating: 5, date: '1 week ago', comment: 'Shruti made me look like a royal queen on my wedding day without making my skin look cakey.' }
    ],
    coordinates: { lat: 18.5481, lng: 73.9022 }
  },
  {
    id: 'loc-megha-kulkarni',
    name: 'Megha Kulkarni',
    profession: 'Bridal & Traditional Makeup Artist',
    category: 'makeup-artists',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 76,
    startingPrice: 2999,
    priceUnit: 'per session',
    priceDisplay: '₹2,999 onwards',
    city: 'Thane',
    area: 'Ghodbunder Rd & Hiranandani Estate',
    pinCode: '400607',
    distanceKm: 3.2,
    serviceRadiusKm: 20,
    serviceArea: 'Thane, Dombivli, Mulund',
    availability: 'Available Tomorrow',
    availabilityNote: 'Morning trial available',
    experienceYears: 6,
    badges: ['Verified Pro', 'Bridal Expert'],
    phone: '+91 98211 99082',
    whatsapp: '919821199082',
    bio: 'Specialist in Maharashtrian Nauvari drape and makeup, South Indian temple bridal looks, and subtle family event makeovers.',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Nauvari & Traditional Bridal Styling', price: '₹9,500', duration: '3 hrs' },
      { name: 'Party Makeup with Lashes & Hairdo', price: '₹2,999', duration: '1.5 hrs' },
      { name: 'Pre-Wedding Shoot Makeup', price: '₹5,000', duration: '2 hrs' }
    ],
    reviews: [
      { author: 'Smita Salvi', rating: 5, date: '3 weeks ago', comment: 'Megha’s Nauvari draping and makeup were so authentic and stay-put.' }
    ],
    coordinates: { lat: 19.2618, lng: 72.9712 }
  },
  {
    id: 'loc-tanvi-kapoor',
    name: 'Tanvi Kapoor',
    profession: 'Luxury Destination Makeup Artist',
    category: 'makeup-artists',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    rating: 4.99,
    reviewsCount: 142,
    startingPrice: 5000,
    priceUnit: 'per session',
    priceDisplay: '₹5,000 onwards',
    city: 'Bengaluru',
    area: 'Indiranagar & Koramangala',
    pinCode: '560038',
    distanceKm: 2.0,
    serviceRadiusKm: 30,
    serviceArea: 'Bengaluru & Destination Resorts',
    availability: 'Accepting Brides 2025/2026',
    availabilityNote: 'Destination packages available',
    experienceYears: 10,
    badges: ['Vogue Featured', 'Luxury Pro'],
    phone: '+91 98450 11984',
    whatsapp: '919845011984',
    bio: 'Vogue-featured luxury artist. Known for glass skin, sculpted cheekbones, and bespoke luxury bridal styling for modern Indian brides.',
    gallery: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Luxury Full Wedding Day Package', price: '₹25,000', duration: '5 hrs' },
      { name: 'Signature Glass Skin Party Glow', price: '₹5,000', duration: '2 hrs' }
    ],
    reviews: [
      { author: 'Divya Reddy', rating: 5, date: '1 month ago', comment: 'Tanvi is the gold standard for bridal makeup in South India. Unbelievable work.' }
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },

  // ==========================================
  // RANGOLI ARTISTS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-ananya-rangoli',
    name: 'Ananya Vaidya',
    profession: 'Sanskar Bharti & Floral Rangoli Specialist',
    category: 'rangoli-artists',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    reviewsCount: 84,
    startingPrice: 1500,
    priceUnit: 'per design',
    priceDisplay: '₹1,500 onwards',
    city: 'Mumbai',
    area: 'Dadar & Shivaji Park',
    pinCode: '400028',
    distanceKm: 3.2,
    serviceRadiusKm: 25,
    serviceArea: 'All Mumbai, Thane & Navi Mumbai',
    availability: 'Available Tomorrow',
    availabilityNote: 'Accepting Diwali & wedding weekend bookings',
    experienceYears: 9,
    badges: ['Award Winning', 'Verified Pro'],
    phone: '+91 98204 88712',
    whatsapp: '919820488712',
    bio: 'State-level gold medalist in Sanskar Bharti rangoli. Expert in giant festival centerpieces, intricate geometric motifs, and fragrant floral carpet rangolis.',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Sanskar Bharti Wedding Entrance (8x8 ft)', price: '₹4,500', duration: '3 hrs' },
      { name: 'Fresh Marigold & Rose Floral Pookkalam', price: '₹3,500', duration: '2.5 hrs' },
      { name: 'Home Entrance Festival Design (4x4 ft)', price: '₹1,500', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Meera Gupte', rating: 5, date: '1 week ago', comment: 'Ananya created an ethereal 10ft rangoli for our housewarming. Guests were taking pictures all evening.' }
    ],
    coordinates: { lat: 19.0282, lng: 72.8397 }
  },
  {
    id: 'loc-pallavi-joshi',
    name: 'Pallavi Joshi',
    profession: 'Traditional & Portrait Rangoli Artist',
    category: 'rangoli-artists',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
    rating: 4.97,
    reviewsCount: 68,
    startingPrice: 1800,
    priceUnit: 'per design',
    priceDisplay: '₹1,800 onwards',
    city: 'Pune',
    area: 'Sadashiv Peth & Tilak Rd',
    pinCode: '411030',
    distanceKm: 2.1,
    serviceRadiusKm: 20,
    serviceArea: 'All Pune, Pimpri Chinchwad',
    availability: 'Available This Weekend',
    availabilityNote: 'Festival booking open',
    experienceYears: 12,
    badges: ['Portrait Specialist', 'State Awardee'],
    phone: '+91 98224 55190',
    whatsapp: '919822455190',
    bio: 'Recognized for lifelike portrait rangolis of deities, historical figures, and couple portraits for sangeet and wedding entrances.',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Couple Portrait Rangoli for Wedding', price: '₹7,500', duration: '4 hrs' },
      { name: 'Ganesh Festival Custom Centerpiece', price: '₹3,200', duration: '2.5 hrs' },
      { name: 'Traditional Kolam / Sanskar Bharti', price: '₹1,800', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Chaitanya Kulkarni', rating: 5, date: '2 weeks ago', comment: 'The Ganesha portrait rangoli made by Pallavi was pure divinity.' }
    ],
    coordinates: { lat: 18.5126, lng: 73.8524 }
  },
  {
    id: 'loc-snehal-pawar',
    name: 'Snehal Pawar',
    profession: 'Eco-Friendly & Floral Rangoli Designer',
    category: 'rangoli-artists',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviewsCount: 52,
    startingPrice: 1200,
    priceUnit: 'per design',
    priceDisplay: '₹1,200 onwards',
    city: 'Nashik',
    area: 'College Road & Gangapur Rd',
    pinCode: '422005',
    distanceKm: 2.0,
    serviceRadiusKm: 20,
    serviceArea: 'Nashik & Panchavati',
    availability: 'Available Today',
    availabilityNote: 'Same day bookings accepted',
    experienceYears: 6,
    badges: ['Eco-Friendly Colors', 'Verified Pro'],
    phone: '+91 98235 11984',
    whatsapp: '919823511984',
    bio: 'Crafting non-toxic, organic colored rangolis and fresh flower petal carpets for corporate lobbies, hotels, and family celebrations.',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Fresh Flower Carpet Design', price: '₹2,500', duration: '2 hrs' },
      { name: 'Organic Powder Kolam Design', price: '₹1,200', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Rupali Shinde', rating: 5, date: '1 month ago', comment: 'Snehal used purely organic petals and powders, safe for kids and pets.' }
    ],
    coordinates: { lat: 19.9975, lng: 73.7898 }
  },

  // ==========================================
  // MEHENDI ARTISTS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-shabnam-mehendi',
    name: 'Shabnam Shaikh',
    profession: 'Bridal Henna & Organic Mehendi Specialist',
    category: 'mehendi-artists',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 164,
    startingPrice: 1800,
    priceUnit: 'per package',
    priceDisplay: '₹1,800 onwards',
    city: 'Mumbai',
    area: 'Bandra, Santacruz & Kurla',
    pinCode: '400054',
    distanceKm: 2.1,
    serviceRadiusKm: 20,
    serviceArea: 'Mumbai & Thane',
    availability: 'Available This Week',
    availabilityNote: 'Fresh organic henna cones handmade every day',
    experienceYears: 11,
    badges: ['100% Organic Henna', 'Top Rated Plus'],
    phone: '+91 98207 66541',
    whatsapp: '919820766541',
    bio: 'Renowned for intricate Rajasthani figures, Arabic reverse negative space, and deep dark organic stain guaranteed without chemical dye.',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Full Royal Bridal (Elbows to Feet)', price: '₹11,000', duration: '5 hrs' },
      { name: 'Arabic Modern Henna (Both Palms)', price: '₹1,800', duration: '1.5 hrs' },
      { name: 'Sangeet Party Guest Package (10 Persons)', price: '₹8,500', duration: '4 hrs' }
    ],
    reviews: [
      { author: 'Priyanka Dhingra', rating: 5, date: '3 days ago', comment: 'The stain was chocolate brown and lasted almost 3 weeks! Everyone at my wedding asked about Shabnam.' }
    ],
    coordinates: { lat: 19.0833, lng: 72.8406 }
  },
  {
    id: 'loc-farha-khan',
    name: 'Farha Khan',
    profession: 'Rajasthani & Portrait Henna Artist',
    category: 'mehendi-artists',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 110,
    startingPrice: 2200,
    priceUnit: 'per package',
    priceDisplay: '₹2,200 onwards',
    city: 'Navi Mumbai',
    area: 'Seawoods & Palm Beach Rd',
    pinCode: '400706',
    distanceKm: 3.5,
    serviceRadiusKm: 25,
    serviceArea: 'Navi Mumbai, Chembur, Panvel',
    availability: 'Available Today',
    availabilityNote: 'Evening appointments open',
    experienceYears: 8,
    badges: ['Portrait Henna', 'Verified Pro'],
    phone: '+91 98339 22109',
    whatsapp: '919833922109',
    bio: 'Crafting customized bride-groom portrait henna, wedding hashtag calligraphy, and detailed floral mandala art.',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Customized Portrait Bridal Henna', price: '₹14,000', duration: '6 hrs' },
      { name: 'Engagement Designer Henna', price: '₹3,500', duration: '2 hrs' },
      { name: 'Minimalist Floral Palms', price: '₹2,200', duration: '1.5 hrs' }
    ],
    reviews: [
      { author: 'Heena Merchant', rating: 5, date: '1 week ago', comment: 'Farha drew our exact faces and proposal moment in henna. Truly talented.' }
    ],
    coordinates: { lat: 19.0213, lng: 73.0184 }
  },
  {
    id: 'loc-neeta-goswami',
    name: 'Neeta Goswami',
    profession: 'Bridal & Traditional Henna Expert',
    category: 'mehendi-artists',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 84,
    startingPrice: 1400,
    priceUnit: 'per package',
    priceDisplay: '₹1,400 onwards',
    city: 'Kalyan',
    area: 'Kalyan West & Khadakpada',
    pinCode: '421301',
    distanceKm: 2.2,
    serviceRadiusKm: 20,
    serviceArea: 'Kalyan, Dombivli, Titwala, Ulhasnagar',
    availability: 'Available Tomorrow',
    availabilityNote: 'Weekend dates open',
    experienceYears: 7,
    badges: ['Top Rated Local', 'Affordable Pro'],
    phone: '+91 98197 33418',
    whatsapp: '919819733418',
    bio: 'Affordable, fast, and neat henna application for family functions, karwa chauth, and bridal ceremonies across Kalyan-Dombivli.',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Bridal Traditional Henna', price: '₹6,500', duration: '4 hrs' },
      { name: 'Party Mehendi (Both Hands)', price: '₹1,400', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Kavita Tare', rating: 5, date: '2 weeks ago', comment: 'Super speedy and very clean designs for all my cousins.' }
    ],
    coordinates: { lat: 19.2437, lng: 73.1355 }
  },

  // ==========================================
  // PHOTOGRAPHERS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-rohan-kelkar',
    name: 'Rohan Kelkar',
    profession: 'Candid Wedding & Lifestyle Photographer',
    category: 'photographers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    rating: 4.97,
    reviewsCount: 145,
    startingPrice: 4500,
    priceUnit: 'per hour / shoot',
    priceDisplay: '₹4,500 / hr',
    city: 'Mumbai',
    area: 'Andheri West, Bandra & Versova',
    pinCode: '400058',
    distanceKm: 2.3,
    serviceRadiusKm: 30,
    serviceArea: 'Mumbai, Alibaug, Lonavala shoots',
    availability: 'Accepting 2025 Shoots',
    availabilityNote: 'Pre-wedding outdoor dates available',
    experienceYears: 10,
    badges: ['Sony Alpha Pro', 'Top Rated Plus', 'Award Winning'],
    phone: '+91 98209 88310',
    whatsapp: '919820988310',
    bio: 'Sony Alpha ambassador shooting candid moments, emotions, and documentary-style wedding stories with natural light and cinematic color science.',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Half-Day Candid Wedding Coverage', price: '₹22,000', duration: '5 hrs' },
      { name: 'Sunset Pre-Wedding Beach Shoot', price: '₹14,000', duration: '3 hrs' },
      { name: 'Maternity / Family Studio Session', price: '₹4,500', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Tanmay Bhattacharya', rating: 5, date: '5 days ago', comment: 'Rohan has an incredible eye for real moments. None of that stiff awkward posing.' }
    ],
    coordinates: { lat: 19.1363, lng: 72.8277 }
  },
  {
    id: 'loc-ashwin-nair',
    name: 'Ashwin Nair',
    profession: 'Commercial & Drone Visuals Specialist',
    category: 'photographers',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 92,
    startingPrice: 6000,
    priceUnit: 'per shoot',
    priceDisplay: '₹6,000 / hr',
    city: 'Bengaluru',
    area: 'Whitefield & Koramangala',
    pinCode: '560066',
    distanceKm: 3.8,
    serviceRadiusKm: 35,
    serviceArea: 'Bengaluru & Karnataka Resorts',
    availability: 'Available Next Week',
    availabilityNote: 'Licensed DGCA drone pilot',
    experienceYears: 8,
    badges: ['DGCA Certified Pilot', 'Top Rated'],
    phone: '+91 98452 77019',
    whatsapp: '919845277019',
    bio: 'DGCA licensed drone pilot and high-resolution commercial photographer. Capturing luxury properties, corporate conferences, and majestic destination weddings.',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Aerial Drone 4K Coverage', price: '₹18,000', duration: '3 hrs' },
      { name: 'Corporate Event Photojournalism', price: '₹6,000', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Siddharth Rao', rating: 5, date: '2 weeks ago', comment: 'Ashwin delivered stunning 4K drone cinematography for our product summit.' }
    ],
    coordinates: { lat: 12.9698, lng: 77.7500 }
  },
  {
    id: 'loc-varun-deshpande',
    name: 'Varun Deshpande',
    profession: 'Portrait & Pre-Wedding Photographer',
    category: 'photographers',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 78,
    startingPrice: 5000,
    priceUnit: 'per session',
    priceDisplay: '₹5,000 / session',
    city: 'Pune',
    area: 'Aundh, Baner & Pashan',
    pinCode: '411007',
    distanceKm: 2.8,
    serviceRadiusKm: 25,
    serviceArea: 'Pune, Lavasa, Mulshi',
    availability: 'Available This Weekend',
    availabilityNote: 'Outdoor shoot slots open',
    experienceYears: 7,
    badges: ['Verified Pro', 'Portrait Specialist'],
    phone: '+91 98229 11094',
    whatsapp: '919822911094',
    bio: 'Specializing in cinematic couple shoots at scenic locations around Pune, newborn photography, and personal branding portraits.',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Outdoor Pre-Wedding Session (Mulshi/Lavasa)', price: '₹15,000', duration: '4 hrs' },
      { name: 'Studio Professional Headshot Session', price: '₹5,000', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Aditi Joshi', rating: 5, date: '3 weeks ago', comment: 'Varun captured pure magic during our sunset shoot at Mulshi lake.' }
    ],
    coordinates: { lat: 18.5580, lng: 73.8075 }
  },

  // ==========================================
  // EVENT DECORATORS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-harsh-events',
    name: 'Harsh Vora',
    profession: 'Luxury Wedding & Haldi Decorator',
    category: 'event-decorators',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 118,
    startingPrice: 6500,
    priceUnit: 'per setup',
    priceDisplay: '₹6,500 onwards',
    city: 'Mumbai',
    area: 'Juhu, Santacruz & Ghatkopar',
    pinCode: '400049',
    distanceKm: 3.1,
    serviceRadiusKm: 30,
    serviceArea: 'Mumbai, Thane, Navi Mumbai',
    availability: 'Accepting Wedding Dates',
    availabilityNote: 'Book 2 weeks in advance',
    experienceYears: 9,
    badges: ['Turnkey Decor', 'Top Rated Plus'],
    phone: '+91 98208 44219',
    whatsapp: '919820844219',
    bio: 'Curating bespoke thematic setups: Marigold yellow Haldi canopies, fairy light mandaps, floral entrance tunnels, and whimsical balloon arches.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Haldi & Mehendi Marigold Canopy Setup', price: '₹28,000', duration: 'Full Day' },
      { name: 'Birthday Pastel Balloon Arch & Backdrop', price: '₹6,500', duration: '3 hrs' },
      { name: 'Full Banquet Stage & Mandap Floral Decor', price: '₹85,000', duration: 'Turnkey' }
    ],
    reviews: [
      { author: 'Karan Somaiya', rating: 5, date: '1 week ago', comment: 'The Haldi setup looked like a Pinterest board brought to life. Flawless execution.' }
    ],
    coordinates: { lat: 19.1075, lng: 72.8263 }
  },
  {
    id: 'loc-balaji-decor',
    name: 'Balaji Celebrations',
    profession: 'Traditional & Floral Mandap Decorators',
    category: 'event-decorators',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    rating: 4.93,
    reviewsCount: 86,
    startingPrice: 8000,
    priceUnit: 'per setup',
    priceDisplay: '₹8,000 onwards',
    city: 'Pune',
    area: 'Hadapsar & Magarpatta',
    pinCode: '411028',
    distanceKm: 4.0,
    serviceRadiusKm: 25,
    serviceArea: 'All Pune & Lawns',
    availability: 'Available This Month',
    availabilityNote: 'Custom floral themes ready',
    experienceYears: 12,
    badges: ['Floral Specialists', 'Top Rated Pune'],
    phone: '+91 98226 77102',
    whatsapp: '919822677102',
    bio: 'Fresh flower mandaps, brass vilakku traditional lighting, Jasmine ceiling curtains, and eco-friendly wedding stage designs.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Fresh Carnation & Jasmine Mandap', price: '₹45,000', duration: 'Full Day' },
      { name: 'Engagement Ring Ceremony Backdrop', price: '₹8,000', duration: '4 hrs' }
    ],
    reviews: [
      { author: 'Vikram Jadhav', rating: 5, date: '2 weeks ago', comment: 'Very professional team, arrived at 4 AM to prepare fresh blooms.' }
    ],
    coordinates: { lat: 18.5089, lng: 73.9259 }
  },
  {
    id: 'loc-royal-touch-thane',
    name: 'Royal Touch Events',
    profession: 'Birthday & Corporate Event Stylists',
    category: 'event-decorators',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviewsCount: 65,
    startingPrice: 5500,
    priceUnit: 'per setup',
    priceDisplay: '₹5,500 onwards',
    city: 'Thane',
    area: 'Ghodbunder Rd & Kasarvadavali',
    pinCode: '400615',
    distanceKm: 3.5,
    serviceRadiusKm: 20,
    serviceArea: 'Thane & Mulund',
    availability: 'Available Today',
    availabilityNote: 'Quick setup within 3 hours',
    experienceYears: 7,
    badges: ['Verified Pro', 'Quick Turnaround'],
    phone: '+91 98198 22190',
    whatsapp: '919819822190',
    bio: 'Specializing in kid birthday themes, jungle safari balloons, neon party backdrops, and corporate townhall stages.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Kids Themed Birthday Balloon Styling', price: '₹5,500', duration: '2.5 hrs' },
      { name: 'Neon Lights & Sequin Wall Backdrop', price: '₹9,000', duration: '3 hrs' }
    ],
    reviews: [
      { author: 'Pooja Tandon', rating: 5, date: '1 month ago', comment: 'Our daughter loved her frozen-themed wonderland setup!' }
    ],
    coordinates: { lat: 19.2801, lng: 72.9667 }
  },

  // ==========================================
  // HOME TUTORS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-radhika-tutor',
    name: 'Radhika Menon',
    profession: 'Senior ICSE & CBSE Maths Educator',
    category: 'home-tutors',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    rating: 4.97,
    reviewsCount: 94,
    startingPrice: 750,
    priceUnit: 'per hour',
    priceDisplay: '₹750 / hr',
    city: 'Mumbai',
    area: 'Chembur, Ghatkopar & Sion',
    pinCode: '400071',
    distanceKm: 2.1,
    serviceRadiusKm: 12,
    serviceArea: 'Chembur, Kurla, Sion, Matunga',
    availability: 'Accepting 2 Students',
    availabilityNote: 'Evening batch 5-6 PM open',
    experienceYears: 9,
    badges: ['Gold Medalist MSc', '92% 90+ Score Record'],
    phone: '+91 98335 11982',
    whatsapp: '919833511982',
    bio: 'Ex-DPS Senior Educator with 9 years coaching students for ICSE Board, CBSE 10th/12th, and Foundation JEE/NEET. 92% of students achieved 90%+ in board exams.',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: '1-on-1 Class 10th Maths & Science (In-Home)', price: '₹750/hr', duration: '1.5 hrs' },
      { name: '1-on-1 Class 12th Physics & Calculus', price: '₹950/hr', duration: '2 hrs' },
      { name: 'Doubt Solving & Board Exam Crash Course', price: '₹6,000', duration: '8 Sessions' }
    ],
    reviews: [
      { author: 'Col. K. Sharma', rating: 5, date: '1 month ago', comment: 'Radhika helped my son jump from 64% to 94% in 10th ICSE Maths. Patient and methodical approach.' }
    ],
    coordinates: { lat: 19.0622, lng: 72.8973 }
  },
  {
    id: 'loc-anand-joshi',
    name: 'Prof. Anand Joshi',
    profession: 'Physics & Chemistry Specialist (JEE/NEET)',
    category: 'home-tutors',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 112,
    startingPrice: 850,
    priceUnit: 'per hour',
    priceDisplay: '₹850 / hr',
    city: 'Pune',
    area: 'Kothrud, Law College Rd & FC Rd',
    pinCode: '411004',
    distanceKm: 2.4,
    serviceRadiusKm: 15,
    serviceArea: 'Central Pune & Deccan',
    availability: 'Weekend Slots Open',
    availabilityNote: 'JEE Foundation batches',
    experienceYears: 14,
    badges: ['Ex-Allen Faculty', 'Top Rated'],
    phone: '+91 98223 88102',
    whatsapp: '919822388102',
    bio: 'Ex-premier coaching faculty teaching Physics and Physical Chemistry. Special emphasis on conceptual clarity, numerical problem solving, and past 15-year questions.',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: '1-on-1 Physics for 11th/12th JEE/NEET', price: '₹850/hr', duration: '2 hrs' },
      { name: 'Board Revision Module (10 Sessions)', price: '₹8,000', duration: '10 Sessions' }
    ],
    reviews: [
      { author: 'Dr. Mukund Vaidya', rating: 5, date: '2 weeks ago', comment: 'Prof. Joshi makes Rotational Motion and Electrostatics remarkably easy to grasp.' }
    ],
    coordinates: { lat: 18.5196, lng: 73.8340 }
  },
  {
    id: 'loc-sunita-deshmukh',
    name: 'Sunita Deshmukh',
    profession: 'Primary & Middle School Foundation Tutor',
    category: 'home-tutors',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    rating: 4.94,
    reviewsCount: 70,
    startingPrice: 600,
    priceUnit: 'per hour',
    priceDisplay: '₹600 / hr',
    city: 'Kalyan',
    area: 'Khadakpada & Wayle Nagar',
    pinCode: '421301',
    distanceKm: 1.9,
    serviceRadiusKm: 15,
    serviceArea: 'Kalyan & Dombivli',
    availability: 'Available Daily',
    availabilityNote: 'Afternoon batches 3:30 PM open',
    experienceYears: 8,
    badges: ['Verified Teacher', 'Patience & Care'],
    phone: '+91 98199 44120',
    whatsapp: '919819944120',
    bio: 'Dedicated home educator for Class 1 to 8 students. Specializes in building strong fundamentals in Maths, English grammar, and Hindi with daily homework assistance.',
    gallery: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'All Subjects In-Home Tutoring (Class 1-8)', price: '₹600/hr', duration: '1 hr' },
      { name: 'Monthly Daily Study Support (Mon-Fri)', price: '₹7,500/mo', duration: '20 hrs' }
    ],
    reviews: [
      { author: 'Neelam Kadam', rating: 5, date: '3 weeks ago', comment: 'Sunita ma’am is extremely affectionate and disciplined. My daughter’s grades improved significantly.' }
    ],
    coordinates: { lat: 19.2480, lng: 73.1400 }
  },

  // ==========================================
  // INTERIOR DESIGNERS (3-5 Profiles)
  // ==========================================
  {
    id: 'loc-kavita-interiors',
    name: 'Kavita Somaiya',
    profession: 'Principal Interior Architect & Modular Specialist',
    category: 'interior-designers',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    rating: 4.93,
    reviewsCount: 78,
    startingPrice: 15000,
    priceUnit: 'consultation & 3D plan',
    priceDisplay: '₹15,000 onwards',
    city: 'Mumbai',
    area: 'Juhu & Vile Parle West',
    pinCode: '400049',
    distanceKm: 3.8,
    serviceRadiusKm: 25,
    serviceArea: 'Mumbai Metropolitan Region',
    availability: 'Consulting Appointments Open',
    availabilityNote: 'Turnkey 45-day execution guarantee',
    experienceYears: 10,
    badges: ['IIID Member', 'Verified Architect', 'Turnkey Warranty'],
    phone: '+91 98202 99876',
    whatsapp: '919820299876',
    bio: 'B.Arch from Sir J.J. College of Architecture. Transforming compact 1BHK/2BHKs and sprawling penthouses into serene, light-filled spaces with bespoke Italian acrylic modular cabinetry.',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Site Visit & 3D Concept Plan (Per Room)', price: '₹15,000', duration: '5 Days' },
      { name: 'Modular Acrylic Kitchen Turnkey Makeover', price: '₹1,85,000', duration: '20 Days' },
      { name: 'Complete 2BHK Renovation Project Management', price: '₹4,50,000 onwards', duration: '45 Days' }
    ],
    reviews: [
      { author: 'Manish Doshi', rating: 5, date: '2 months ago', comment: 'Kavita made our 2BHK in Juhu look twice as spacious with clever concealed storage. Top notch detailing.' }
    ],
    coordinates: { lat: 19.1027, lng: 72.8272 }
  },
  {
    id: 'loc-studio-vistara',
    name: 'Studio Vistara (Ar. Pranav & Ritu)',
    profession: 'Contemporary Residential Architects',
    category: 'interior-designers',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    rating: 4.96,
    reviewsCount: 62,
    startingPrice: 18000,
    priceUnit: 'consultation & 3D plan',
    priceDisplay: '₹18,000 onwards',
    city: 'Pune',
    area: 'Kalyani Nagar, Koregaon Park & Baner',
    pinCode: '411006',
    distanceKm: 2.7,
    serviceRadiusKm: 30,
    serviceArea: 'Pune & Lonavala Villas',
    availability: 'Accepting New Projects',
    availabilityNote: 'Turnkey interior execution',
    experienceYears: 12,
    badges: ['Top Rated Studio', 'Turnkey 45 Days'],
    phone: '+91 98228 11940',
    whatsapp: '919822811940',
    bio: 'Award-winning architectural duo creating Japandi, Scandinavian, and modern Indian interiors with sustainable cane, oak wood, and ambient circadian lighting.',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Full 3BHK 3D Virtual Reality Walkthrough', price: '₹25,000', duration: '7 Days' },
      { name: 'Modular Wardrobes & False Ceiling Design', price: '₹18,000', duration: '5 Days' },
      { name: 'Villa Turnkey Architecture & Execution', price: '₹8,00,000 onwards', duration: '60 Days' }
    ],
    reviews: [
      { author: 'Shrinivas Bapat', rating: 5, date: '1 month ago', comment: 'Studio Vistara delivered our Koregaon Park penthouse on time and within budget. Remarkable design taste.' }
    ],
    coordinates: { lat: 18.5362, lng: 73.8958 }
  },
  {
    id: 'loc-nikhil-shah-interiors',
    name: 'Ar. Nikhil Shah',
    profession: 'Minimalist & Smart Space Designer',
    category: 'interior-designers',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    rating: 4.92,
    reviewsCount: 54,
    startingPrice: 12000,
    priceUnit: 'consultation & 3D plan',
    priceDisplay: '₹12,000 onwards',
    city: 'Ahmedabad',
    area: 'Bodakdev, SG Highway & Prahlad Nagar',
    pinCode: '380054',
    distanceKm: 3.4,
    serviceRadiusKm: 25,
    serviceArea: 'Ahmedabad & Gandhinagar',
    availability: 'Site Visits Open',
    availabilityNote: 'Next slot this Thursday',
    experienceYears: 8,
    badges: ['Verified Architect', 'Budget Efficient'],
    phone: '+91 98250 33819',
    whatsapp: '919825033819',
    bio: 'Specializing in compact urban apartments, acoustic home theaters, factory-finish German modular kitchens, and cost-efficient luxury makeovers.',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Complete 3D Interior Plan & BOQ', price: '₹12,000', duration: '4 Days' },
      { name: 'German Hardware Modular Kitchen', price: '₹1,45,000', duration: '15 Days' }
    ],
    reviews: [
      { author: 'Chirag Patel', rating: 5, date: '2 months ago', comment: 'Nikhil optimized every square inch of our 3BHK flat in Bodakdev. Super transparent billing.' }
    ],
    coordinates: { lat: 23.0338, lng: 72.5085 }
  }
];

export const POPULAR_CITIES = [
  { name: 'Mumbai', areas: ['Bandra West', 'Andheri East', 'Powai', 'Colaba', 'Juhu', 'Dadar', 'Khar'], defaultPin: '400050' },
  { name: 'Thane', areas: ['Naupada', 'Ghodbunder Rd', 'Panchpakhadi', 'Majiwada', 'Hiranandani Estate', 'Wagle Estate'], defaultPin: '400602' },
  { name: 'Kalyan', areas: ['Kalyan West', 'Khadakpada', 'Dombivli East', 'Dombivli West', 'Wayle Nagar'], defaultPin: '421301' },
  { name: 'Pune', areas: ['Kothrud', 'Baner', 'Viman Nagar', 'Hinjewadi', 'Kalyani Nagar', 'Aundh'], defaultPin: '411038' },
  { name: 'Nashik', areas: ['College Road', 'Gangapur Rd', 'Panchavati', 'Indira Nagar', 'Cidco'], defaultPin: '422005' },
  { name: 'Navi Mumbai', areas: ['Vashi', 'Nerul', 'Belapur', 'Seawoods', 'Kharghar', 'Kopar Khairane'], defaultPin: '400703' },
  { name: 'Bengaluru', areas: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'JP Nagar', 'Bellandur'], defaultPin: '560038' },
  { name: 'Hyderabad', areas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Madhapur', 'Kondapur', 'Hitec City'], defaultPin: '500034' },
  { name: 'Delhi NCR', areas: ['Connaught Place', 'South Extension', 'Gurgaon Sector 45', 'Noida Sector 62', 'Indirapuram'], defaultPin: '110001' },
  { name: 'Ahmedabad', areas: ['Bodakdev', 'SG Highway', 'Prahlad Nagar', 'Vastrapur', 'Satellite', 'Navrangpura'], defaultPin: '380054' }
];
