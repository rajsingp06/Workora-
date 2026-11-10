// Mock Database of Local Service Categories and Vetted Local Providers

export const localCategoriesData = [
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
    startingRate: '₹1,500',
    popularIn: ['Diwali Grand Rangoli', 'Wedding Floor Art', 'Corporate Logos', 'Floral Pookkalam'],
    cover: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mehendi-artists',
    name: 'Mehendi Artists',
    tagline: 'Bridal, Arabic, Rajasthani & Minimalist Henna',
    icon: 'Feather',
    count: '420+ Pros',
    startingRate: '₹1,800',
    popularIn: ['Bridal Both Hands & Feet', 'Arabic Negative Space', 'Portrait Henna', 'Family Events'],
    cover: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'photographers',
    name: 'Photographers',
    tagline: 'Event, Candid, Pre-Wedding & Portrait Shoots',
    icon: 'Camera',
    count: '510+ Pros',
    startingRate: '₹4,000',
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
    id: 'electricians',
    name: 'Electricians',
    tagline: 'Licensed Wiring, Appliance Setup & Emergency Repairs',
    icon: 'Zap',
    count: '640+ Pros',
    startingRate: '₹299',
    popularIn: ['Short Circuit Diagnostics', 'Ceiling Fan & Lights', 'Inverter Wiring', 'MCB Box Replacement'],
    cover: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'plumbers',
    name: 'Plumbers',
    tagline: 'Leakages, Bathroom Fitting, Pumps & Pipe Repairs',
    icon: 'Wrench',
    count: '580+ Pros',
    startingRate: '₹299',
    popularIn: ['Water Tank Cleaning', 'Tap & Pipe Leakages', 'Sanitary Fittings', 'Blockage Removal'],
    cover: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'home-tutors',
    name: 'Home Tutors',
    tagline: 'CBSE, ICSE, Coding, Languages & Exam Prep',
    icon: 'GraduationCap',
    count: '480+ Pros',
    startingRate: '₹500/hr',
    popularIn: ['Class 8-12 Maths & Science', 'Coding for Kids', 'IELTS / Spoken English', 'Vocal Music & Guitar'],
    cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'interior-designers',
    name: 'Interior Designers',
    tagline: 'Modular Kitchens, Renovation & 3D Spatial Design',
    icon: 'Home',
    count: '310+ Pros',
    startingRate: '₹15,000',
    popularIn: ['Modular Kitchen Design', '1BHK/2BHK Full Makeover', 'False Ceiling & Lighting', 'Custom Wardrobes'],
    cover: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
  }
];

export const localProvidersData = [
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
    badges: ['Verified Pro', 'Top Rated', 'Police Verified'],
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
    phone: '+91 98192 33412',
    whatsapp: '919819233412',
    bio: 'State Awardee in traditional Sanskar Bharti Rangoli. Specializing in intricate floral Pookkalam, portrait rangolis, and large corporate welcome rangolis.',
    gallery: [
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Traditional Entrance Floral Rangoli (5x5 ft)', price: '₹2,500', duration: '2 hrs' },
      { name: 'Sanskar Bharti Intricate Floor Art (8x8 ft)', price: '₹4,500', duration: '3.5 hrs' },
      { name: 'Grand Wedding Mandap Carpet Rangoli', price: '₹9,000', duration: '5 hrs' },
      { name: 'Corporate Logo & Festival Rangoli', price: '₹6,000', duration: '3 hrs' }
    ],
    reviews: [
      { author: 'Meera Kulkarni', rating: 5, date: '1 week ago', comment: 'The Sanskar Bharti rangoli for our housewarming was a masterpiece. All guests took pictures!' }
    ],
    coordinates: { lat: 19.0222, lng: 72.8428 }
  },
  {
    id: 'loc-sultana-mehendi',
    name: 'Sultana Begum',
    profession: 'Master Bridal & Organic Henna Artist',
    category: 'mehendi-artists',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    rating: 4.99,
    reviewsCount: 215,
    startingPrice: 1800,
    priceUnit: 'per hand',
    priceDisplay: '₹1,800 onwards',
    city: 'Mumbai',
    area: 'Andheri West & Lokhandwala',
    pinCode: '400053',
    distanceKm: 4.5,
    serviceRadiusKm: 20,
    serviceArea: 'Doorstep service across Western & Central suburbs',
    availability: 'Available Today',
    availabilityNote: 'Chemical-free Sojat triple-filtered organic henna',
    experienceYears: 12,
    badges: ['Top Rated Pro', 'Organic Certified', 'Verified Identity'],
    phone: '+91 97693 88102',
    whatsapp: '919769388102',
    bio: '12+ years adorning brides with 100% natural organic henna with rich dark stain guarantee. Known for customized couple portraits and micro-intricate Rajasthani jaal.',
    gallery: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Full Bridal Package (Elbows + Feet)', price: '₹8,500', duration: '5 hrs' },
      { name: 'Arabic Contemporary Style (Both Hands)', price: '₹2,500', duration: '1.5 hrs' },
      { name: 'Family & Guest Henna (Per Hand)', price: '₹400', duration: '20 mins' },
      { name: 'Figure & Portrait Special Bridal Design', price: '₹12,000', duration: '6 hrs' }
    ],
    reviews: [
      { author: 'Tanvi Shroff', rating: 5, date: 'Yesterday', comment: 'Her organic henna gave the deepest mahogany color without any burning or skin irritation. 10/10!' }
    ],
    coordinates: { lat: 19.1363, lng: 72.8277 }
  },
  {
    id: 'loc-arjun-captures',
    name: 'Arjun Kapoor',
    profession: 'Candid Wedding & Event Photographer',
    category: 'photographers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80',
    rating: 4.95,
    reviewsCount: 160,
    startingPrice: 5000,
    priceUnit: 'per 4-hour shoot',
    priceDisplay: '₹5,000 onwards',
    city: 'Mumbai',
    area: 'Powai & Hiranandani',
    pinCode: '400076',
    distanceKm: 6.8,
    serviceRadiusKm: 35,
    serviceArea: 'Pan-Mumbai, Navi Mumbai, Lonavala & Destination Shoots',
    availability: 'Available This Weekend',
    availabilityNote: 'Sony A7IV 4K + 35mm f/1.4 prime gear with drone setup',
    experienceYears: 8,
    badges: ['Sony Certified', 'Verified Pro', 'Top Rated'],
    phone: '+91 99204 77218',
    whatsapp: '919920477218',
    bio: 'Storyteller with a passion for unscripted authentic emotions. Over 200+ weddings, pre-weddings, and private luxury parties shot across India.',
    gallery: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Half-Day Event Coverage (4 hrs)', price: '₹9,500', duration: '4 hrs' },
      { name: 'Pre-Wedding Drone & Cinematic Reel Shoot', price: '₹18,000', duration: 'Full Day' },
      { name: 'Full Wedding Photo + Cinematic Teaser', price: '₹45,000', duration: '2 Days' },
      { name: 'Studio & Maternity Portrait Session', price: '₹6,500', duration: '2 hrs' }
    ],
    reviews: [
      { author: 'Vikram & Simran', rating: 5, date: '3 weeks ago', comment: 'Arjun captured candid moments we did not even realize were happening. Delivery in 7 days was incredible.' }
    ],
    coordinates: { lat: 19.1176, lng: 72.906 }
  },
  {
    id: 'loc-utsav-decor',
    name: 'Rajesh & Utsav Decorators',
    profession: 'Luxury Stage, Floral & Balloon Decorators',
    category: 'event-decorators',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    rating: 4.88,
    reviewsCount: 94,
    startingPrice: 4500,
    priceUnit: 'per setup',
    priceDisplay: '₹4,500 onwards',
    city: 'Mumbai',
    area: 'Santacruz & Vile Parle',
    pinCode: '400054',
    distanceKm: 2.1,
    serviceRadiusKm: 20,
    serviceArea: 'Western Suburbs to South Bombay',
    availability: 'Available Today',
    availabilityNote: 'Fast 2-hour setup team ready',
    experienceYears: 10,
    badges: ['Verified Pro', 'Event Specialist'],
    phone: '+91 98205 66789',
    whatsapp: '919820566789',
    bio: 'Transforming banquets, terraces, and living rooms into fairytale venues. Experts in Marigold Haldi setups, pastel balloon rings, and LED stage backdrops.',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Organic Pastel Balloon Arch + Neon Sign', price: '₹4,500', duration: '2 hrs setup' },
      { name: 'Traditional Haldi Marigold Drapes & Urlis', price: '₹9,500', duration: '3 hrs setup' },
      { name: 'Engagement Floral Backdrop with Fairy Lights', price: '₹14,000', duration: '4 hrs setup' }
    ],
    reviews: [
      { author: 'Sneha Patel', rating: 5, date: '2 weeks ago', comment: 'Setup was completed exactly as shown in the 3D moodboard. Extremely neat and polite team.' }
    ],
    coordinates: { lat: 19.0843, lng: 72.836 }
  },
  {
    id: 'loc-suresh-electrician',
    name: 'Suresh Mistry',
    profession: 'Government Licensed Master Electrician',
    category: 'electricians',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    rating: 4.97,
    reviewsCount: 310,
    startingPrice: 299,
    priceUnit: 'visiting charge',
    priceDisplay: '₹299 onwards',
    city: 'Mumbai',
    area: 'Bandra East & BKC',
    pinCode: '400051',
    distanceKm: 1.8,
    serviceRadiusKm: 12,
    serviceArea: 'Bandra, Khar, Santacruz, Kurla, BKC & Mahim',
    availability: 'Available in 30 Mins',
    availabilityNote: 'Emergency callouts accepted 24/7',
    experienceYears: 14,
    badges: ['Government Licensed', 'Police Verified', 'Insured Work'],
    phone: '+91 98691 22340',
    whatsapp: '919869122340',
    bio: 'Wireman License No. 4481. Equipped with digital multi-meters and commercial toolsets for instantaneous short-circuit diagnostics, inverter setups, and smart home automation.',
    gallery: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Emergency Short Circuit Diagnostics', price: '₹499', duration: '45 mins' },
      { name: 'Ceiling Fan / Chandelier Installation', price: '₹349', duration: '30 mins' },
      { name: 'Complete Inverter & Battery Wiring', price: '₹1,200', duration: '1.5 hrs' },
      { name: 'Distribution Box (MCB) Overhaul', price: '₹850', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Rahul Mehta', rating: 5, date: 'Yesterday', comment: 'Reached within 25 minutes of booking when my main MCB tripped at night. Fixed it with transparent pricing.' }
    ],
    coordinates: { lat: 19.0607, lng: 72.8524 }
  },
  {
    id: 'loc-ramesh-plumber',
    name: 'Ramesh Kanojia',
    profession: 'Master Plumber & Sanitary Specialist',
    category: 'plumbers',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    rating: 4.91,
    reviewsCount: 240,
    startingPrice: 299,
    priceUnit: 'visiting charge',
    priceDisplay: '₹299 onwards',
    city: 'Mumbai',
    area: 'Lower Parel & Worli',
    pinCode: '400013',
    distanceKm: 5.2,
    serviceRadiusKm: 15,
    serviceArea: 'South & Central Mumbai (Dadar, Worli, Parel, Marine Lines)',
    availability: 'Available Today',
    availabilityNote: 'Carries genuine Jaguar & Kohler replacement fittings',
    experienceYears: 11,
    badges: ['Verified Pro', 'Background Checked', '30-Day Warranty'],
    phone: '+91 98211 44098',
    whatsapp: '919821144098',
    bio: 'Expert in non-invasive concealed pipe leak detection, water pump servicing, and luxury bath fittings. 30-day rework warranty on all plumbing services.',
    gallery: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
    ],
    servicesList: [
      { name: 'Concealed Pipe Leakage Detection & Repair', price: '₹650', duration: '1 hr' },
      { name: 'Water Tank Pressure Pump Installation', price: '₹1,500', duration: '2 hrs' },
      { name: 'Kitchen & Basin Tap Fitting Replacement', price: '₹350', duration: '30 mins' },
      { name: 'Severe Drain Blockage Clearing (Machine)', price: '₹850', duration: '1 hr' }
    ],
    reviews: [
      { author: 'Deepa Agarwal', rating: 5, date: '4 days ago', comment: 'Solved a dampness leak three other plumbers could not diagnose. Very honest and efficient technician.' }
    ],
    coordinates: { lat: 18.9986, lng: 72.8311 }
  },
  {
    id: 'loc-radhika-tutor',
    name: 'Radhika Iyer, M.Sc.',
    profession: 'Senior Mathematics & Physics Tutor (CBSE / ICSE / IB)',
    category: 'home-tutors',
    avatar: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    coverImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
    rating: 4.98,
    reviewsCount: 145,
    startingPrice: 600,
    priceUnit: 'per hour',
    priceDisplay: '₹600 / hr',
    city: 'Mumbai',
    area: 'Chembur & Ghatkopar',
    pinCode: '400071',
    distanceKm: 7.1,
    serviceRadiusKm: 15,
    serviceArea: 'Chembur, Ghatkopar, Sion, Wadala & Online hybrid',
    availability: 'Slots Open This Week',
    availabilityNote: 'Evening batches available for 9th-12th standard',
    experienceYears: 9,
    badges: ['M.Sc. Gold Medalist', 'Police Verified', 'Top Rated'],
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
  }
];

export const POPULAR_CITIES = [
  { name: 'Mumbai', areas: ['Bandra West', 'Andheri East', 'Powai', 'Colaba', 'Juhu', 'Dadar', 'Khar'], defaultPin: '400050' },
  { name: 'Delhi NCR', areas: ['Connaught Place', 'South Extension', 'Gurgaon Sector 45', 'Noida Sector 62', 'Indirapuram'], defaultPin: '110001' },
  { name: 'Bengaluru', areas: ['Indiranagar', 'Koramangala', 'HSR Layout', 'Whitefield', 'JP Nagar'], defaultPin: '560038' },
  { name: 'Pune', areas: ['Kothrud', 'Baner', 'Viman Nagar', 'Hinjewadi', 'Kalyani Nagar'], defaultPin: '411038' },
  { name: 'Hyderabad', areas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Madhapur', 'Kondapur'], defaultPin: '500034' },
  { name: 'Chennai', areas: ['Anna Nagar', 'T. Nagar', 'Adyar', 'Velachery', 'Alwarpet'], defaultPin: '600017' }
];
