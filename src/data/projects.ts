import { Project, Category } from '../types/project';

export const categories: Category[] = [
  { id: 'social-media', name: 'Social Media Marketing' },
  { id: 'video-editing', name: 'Video Editing' },
  { id: 'graphics', name: 'Graphics Design' },
  { id: 'advertising', name: 'Paid Advertising' },
  { id: 'consulting', name: 'Consulting & Management' }
];

export const allProjects: Project[] = [
  // Social Media Marketing
  {
    id: 'sm-brand-revival',
    title: 'Brand Revival Campaign',
    description: 'A strategic social media campaign that revitalized a struggling retail brand with engaging content and community building.',
    category: 'social-media',
    client: 'RetailPlus',
    completionDate: 'August 2024',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'RetailPlus was experiencing declining engagement across social platforms, with an outdated brand voice that failed to connect with younger demographics.',
    solution: 'We developed a comprehensive social media strategy that included platform-specific content calendars, interactive campaigns, and community management protocols.',
    results: 'Within three months, engagement increased by 187%, follower growth by 45%, and direct sales attributable to social media rose by 32%.',
    testimonial: {
      quote: "CreativeStudio transformed our social media presence completely. Their strategic approach and creative content helped us reconnect with our audience in ways we didn't think possible.",
      author: "Sarah Johnson",
      position: "Marketing Director, RetailPlus"
    }
  },
  {
    id: 'sm-product-launch',
    title: 'New Product Launch',
    description: 'Orchestrated a successful product launch campaign across multiple social platforms with teaser content and influencer partnerships.',
    category: 'social-media',
    client: 'TechNova',
    completionDate: 'June 2024',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Launching a new tech product in a saturated market with limited brand recognition and a modest marketing budget.',
    solution: 'Created a phased social media campaign with teaser content, behind-the-scenes features, influencer partnerships, and user-generated content strategies.',
    results: 'The product sold out within 48 hours of launch, with over 15,000 waitlist signups and coverage in major tech publications.',
    testimonial: {
      quote: "The launch exceeded all our expectations. CreativeStudio's strategy created genuine buzz that translated directly to sales.",
      author: "Michael Chen",
      position: "CEO, TechNova"
    }
  },

  // Video Editing
  {
    id: 'video-brand-story',
    title: 'Brand Story Documentary',
    description: 'A compelling mini-documentary that captured the authentic story behind a sustainable fashion brand.',
    category: 'video-editing',
    client: 'EcoThreads',
    completionDate: 'July 2024',
    image: 'https://images.pexels.com/photos/7691466/pexels-photo-7691466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/7691466/pexels-photo-7691466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7692283/pexels-photo-7692283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Translating EcoThreads\' complex manufacturing process and ethical commitments into an engaging visual narrative.',
    solution: 'Created a 10-minute documentary with cinematic visuals, authentic interviews, and emotional storytelling that highlighted the human aspect of sustainable production.',
    results: 'The video garnered over 2 million organic views across platforms and was featured in several sustainability film festivals.',
    testimonial: {
      quote: "They captured our mission with such authenticity and visual beauty. This documentary has become a cornerstone of our brand communication.",
      author: "Emma Rodriguez",
      position: "Founder, EcoThreads"
    }
  },
  {
    id: 'video-product-showcase',
    title: 'Product Showcase Series',
    description: 'A series of high-quality product videos that highlighted key features and benefits for a premium cookware line.',
    category: 'video-editing',
    client: 'CulinaryElite',
    completionDate: 'May 2024',
    image: 'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7691466/pexels-photo-7691466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7692331/pexels-photo-7692331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Showcasing technical product features while creating an emotional connection with home cooking enthusiasts.',
    solution: 'Developed a series of short, visually stunning videos that demonstrated product benefits through real cooking scenarios with professional cinematography.',
    results: 'Product sales increased by 85% during the campaign period, with the videos achieving a 76% view-through rate.',
    testimonial: {
      quote: "These videos transformed how we showcase our products. They're informative but also inspire customers to cook - exactly what we needed.",
      author: "Thomas Gray",
      position: "Marketing Manager, CulinaryElite"
    }
  },

  // Graphics Design
  {
    id: 'graphics-brand-identity',
    title: 'Complete Brand Identity',
    description: 'A comprehensive brand identity system for a new wellness company, including logo, typography, color palette, and brand guidelines.',
    category: 'graphics',
    client: 'ZenLife',
    completionDate: 'July 2024',
    image: 'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5833743/pexels-photo-5833743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Creating a distinctive visual identity in the crowded wellness market that communicated calm, authenticity, and scientific credibility.',
    solution: 'Developed a minimalist yet warm visual system with custom typography, a harmonious color palette, and versatile logo variations for different applications.',
    results: 'The brand successfully launched with immediate visual recognition, receiving praise for its coherence and emotional resonance.',
    testimonial: {
      quote: "CreativeStudio didn't just design our brand - they captured its essence. Our visual identity perfectly communicates our values without saying a word.",
      author: "Daniel Foster",
      position: "CEO, ZenLife"
    }
  },
  {
    id: 'graphics-packaging-design',
    title: 'Premium Packaging Design',
    description: 'Eye-catching packaging design for a limited edition cosmetics collection with sustainable materials.',
    category: 'graphics',
    client: 'Lumina Beauty',
    completionDate: 'April 2024',
    image: 'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Designing packaging that communicated luxury while highlighting the brand\'s commitment to sustainability.',
    solution: 'Created a minimalist design with subtle embossing, eco-friendly materials, and innovative structural design that reduced material use.',
    results: 'The collection sold out within three weeks, with 68% of customers mentioning the packaging as a key factor in their purchase decision.',
    testimonial: {
      quote: "The packaging design was perfect - luxurious yet environmentally conscious, exactly like our products. It elevated the entire collection.",
      author: "Victoria King",
      position: "Creative Director, Lumina Beauty"
    }
  },

  // Paid Advertising
  {
    id: 'ads-conversion-campaign',
    title: 'High-Conversion Ad Campaign',
    description: 'A strategic multi-platform paid advertising campaign that dramatically increased conversions for an e-learning platform.',
    category: 'advertising',
    client: 'SkillPath',
    completionDate: 'June 2024',
    image: 'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Reducing customer acquisition costs while scaling enrollment in a competitive e-learning market.',
    solution: 'Developed a comprehensive campaign with custom audiences, A/B tested creative variants, and optimized conversion funnels across Facebook, Instagram, and Google platforms.',
    results: 'Achieved a 43% reduction in acquisition costs, 215% increase in conversions, and positive ROAS of 4.7 within two months.',
    testimonial: {
      quote: "The ROI speaks for itself. Their data-driven approach and creative execution transformed our paid acquisition strategy completely.",
      author: "James Wilson",
      position: "Growth Manager, SkillPath"
    }
  },
  {
    id: 'ads-rebranding-campaign',
    title: 'Post-Rebrand Awareness Campaign',
    description: 'A strategic paid media campaign to establish brand awareness after a major company rebrand.',
    category: 'advertising',
    client: 'FutureFinance',
    completionDate: 'May 2024',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Transitioning brand perception from a traditional financial services company to a modern fintech leader while retaining customer trust.',
    solution: 'Created a phased campaign targeting existing customers and new prospects with educational content, comparative messaging, and trust-building creative across search, social, and display networks.',
    results: 'Achieved 92% brand recognition among existing customers within 30 days and acquired 15,000 new customers during the campaign.',
    testimonial: {
      quote: "Their strategic approach to our rebrand campaign was exceptional. They maintained our credibility while successfully positioning us as innovative.",
      author: "Rebecca Taylor",
      position: "CMO, FutureFinance"
    }
  },

  // Consulting
  {
    id: 'consulting-social-strategy',
    title: 'Social Media Strategy Overhaul',
    description: 'A comprehensive social media audit and strategy development for a multinational hospitality brand.',
    category: 'consulting',
    client: 'GrandStay Hotels',
    completionDate: 'July 2024',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6457544/pexels-photo-6457544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Unifying social media approach across 35 properties while allowing for local market customization and improving overall ROI.',
    solution: 'Conducted a comprehensive audit, developed central content strategies with localization frameworks, created content calendars, and established measurement protocols.',
    results: 'Increased overall engagement by 127%, reduced content production costs by 42%, and improved booking attributions by 38% within six months.',
    testimonial: {
      quote: "Their consulting completely transformed how we approach social media. We now have a cohesive strategy that still allows each property to maintain its unique voice.",
      author: "Christopher Martinez",
      position: "VP of Marketing, GrandStay Hotels"
    }
  },
  {
    id: 'consulting-marketing-transformation',
    title: 'Digital Marketing Transformation',
    description: 'A strategic consulting engagement to transition a traditional business to digital-first marketing operations.',
    category: 'consulting',
    client: 'Heritage Crafts',
    completionDate: 'April 2024',
    image: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3182794/pexels-photo-3182794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Transitioning a 50-year-old crafts business from print and wholesale to direct-to-consumer e-commerce and digital marketing.',
    solution: 'Developed a phased transformation roadmap, built internal capabilities through training, implemented marketing technology stack, and created measurement frameworks.',
    results: 'Successfully launched e-commerce platform with 200% ROI in first quarter, reduced marketing costs by 35%, and established direct consumer relationships.',
    testimonial: {
      quote: "They guided us through what seemed like an impossible transformation with expertise and patience. Our business is thriving in the digital space now.",
      author: "Eleanor Hughes",
      position: "Owner, Heritage Crafts"
    }
  }
];

// Featured projects for the homepage
export const featuredProjects = [
  allProjects[0], // Social Media Marketing - Brand Revival
  allProjects[2], // Video Editing - Brand Story
  allProjects[4], // Graphics - Brand Identity
];