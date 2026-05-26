import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';
import {
  Award,
  BadgeCheck,
  Building2,
  CalendarClock,
  ClipboardCheck,
  Clock,
  Droplets,
  FlaskConical,
  Heart,
  Home,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Umbrella,
  Users,
  Wrench,
  Zap,
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '../components/SocialIcons';

export type IconName =
  | 'award'
  | 'badgeCheck'
  | 'building2'
  | 'calendarClock'
  | 'clipboardCheck'
  | 'clock'
  | 'droplets'
  | 'facebook'
  | 'flaskConical'
  | 'heart'
  | 'home'
  | 'instagram'
  | 'mail'
  | 'mapPin'
  | 'monitor'
  | 'phone'
  | 'search'
  | 'settings'
  | 'shieldCheck'
  | 'snowflake'
  | 'sparkles'
  | 'umbrella'
  | 'users'
  | 'wrench'
  | 'zap';

export type IconComponent = ComponentType<LucideProps>;

export const iconMap: Record<IconName, IconComponent> = {
  award: Award,
  badgeCheck: BadgeCheck,
  building2: Building2,
  calendarClock: CalendarClock,
  clipboardCheck: ClipboardCheck,
  clock: Clock,
  droplets: Droplets,
  facebook: FacebookIcon,
  flaskConical: FlaskConical,
  heart: Heart,
  home: Home,
  instagram: InstagramIcon,
  mail: Mail,
  mapPin: MapPin,
  monitor: Monitor,
  phone: Phone,
  search: Search,
  settings: Settings,
  shieldCheck: ShieldCheck,
  snowflake: Snowflake,
  sparkles: Sparkles,
  umbrella: Umbrella,
  users: Users,
  wrench: Wrench,
  zap: Zap,
};

export type NavItem = {
  label: string;
  path: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconName;
};

export type ServiceSummary = {
  title: string;
  description: string;
  path: string;
  image: string;
  features: string[];
};

export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  summary: ServiceSummary;
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    description: string;
    ctaLabel: string;
    badgeLabel: string;
    badgeIcon: IconName;
    image: string;
    imageAlt: string;
  };
  process: {
    label: string;
    title: string;
    steps: Array<{
      icon: IconName;
      title: string;
      description: string;
    }>;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
    card: {
      icon: IconName;
      title: string;
      description: string;
      ctaLabel: string;
    };
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export type ScheduleItem = {
  title: string;
  sub: string;
  freq: string;
};

export const quoteRequestUrl =
  'https://clienthub.getjobber.com/hubs/973e942c-b042-467b-b58a-14fc8d22ca11/public/requests/1578007/new?source=social_media';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Service Area', path: '/service-area' },
  { label: 'Our Clients', path: '/our-clients' },
  { label: 'Contact', path: '/contact' },
];

export const siteContact = {
  status: '24/7 Availability',
  requestServiceLabel: 'Request Service',
  phones: ['+1 (807) 358-7899', '+1 (807) 708-9672'],
  phoneHrefs: ['tel:+18073587899', 'tel:+18077089672'],
  email: 'info@vpsclean.ca',
  emailHref: 'mailto:info@vpsclean.ca',
  locations: ['Head Office: Thunder Bay', 'Branch 1: Kitchener', 'Branch 2: Sudbury'],
  socialLinks: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
  ] as SocialLink[],
  compliance: ['NFPA 96 Certified', 'Fully Insured', 'WSIB Compliant'],
  logo: '/img/logo-1.jpeg',
  footerDescription:
    'Kitchen hood, exhaust cleaning, grease containment, and NFPA-compliant commercial kitchen maintenance in Thunder Bay.',
  copyright: "© 2026 VP's Cleaning Service. All Rights Reserved.",
  footerTagline: 'Precision Industrial Maintenance',
};

export const serviceSummaries: ServiceSummary[] = [
  {
    title: 'Certified Hood Cleaning',
    description:
      'Removes grease buildup ensuring fire safety and inspection compliance standards.',
    features: ['Deep grease removal', 'Filter washing', 'NFPA compliance'],
    image: '/img/servicesimg/image1.png',
    path: '/services/certified-hood-cleaning',
  },
  {
    title: 'Rooftop Grease Containment',
    description:
      'Prevents roof damage from grease leaks protecting environment and drainage systems.',
    features: ['Roof protection', 'Grease containment pads', 'Leak prevention'],
    image: '/img/servicesimg/image2.png',
    path: '/services/rooftop-grease-containment',
  },
  {
    title: 'Equipment Maintenance',
    description:
      'Extends kitchen equipment lifespan improving efficiency and performance reliability daily.',
    features: ['Routine inspections', 'Performance optimization', 'Preventive servicing'],
    image: '/img/servicesimg/image3.png',
    path: '/services/equipment-maintenance',
  },
  {
    title: 'Surface Cleaning',
    description:
      'Cleans walkways and dumpster areas keeping exterior spaces safe, clean and compliant.',
    features: ['Walkway washing', 'Dumpster area cleaning', 'Exterior sanitation'],
    image: '/img/servicesimg/image4.png',
    path: '/services/surface-cleaning',
  },
  {
    title: 'Office Cleaning',
    description:
      'Maintains hygienic offices supporting healthier staff productivity and professional appearance.',
    features: ['Workspace sanitation', 'Dust removal', 'Floor maintenance'],
    image: '/img/servicesimg/image5.png',
    path: '/services/office-cleaning',
  },
  {
    title: 'Cleaning Commercial Ice Machines (Coming soon...)',
    description:
      'Removes scale and bacteria ensuring safe ice production standards for businesses.',
    features: ['Scale removal', 'Sanitization process', 'Health compliance'],
    image: '/img/servicesimg/image7.png',
    path: '#'
    // path: '/services/ice-machine-cleaning',
  },
  {
    title: 'House Cleaning',
    description:
      'Reliable residential cleaning delivering fresh sanitized comfortable living spaces consistently.',
    features: ['Kitchen cleaning', 'Bathroom sanitation', 'Living space refresh'],
    image: '/img/servicesimg/image6.png',
    path: '/services/house-cleaning',
  }
];

export const homeContent = {
  metaTitle: "VP's Cleaning Service | Professional Cleaning Service Across Ontario",
  metaDescription:
    "Professional cleaning service based in Northwestern Ontario. VP's Cleaning Service provides elite hood cleaning, exhaust cleaning, and now commercial hood and residential HVAC installations across Ontario.",
  hero: {
    eyebrow: 'Professional cleaning service',
    title: "VP's Cleaning Service",
    subtitle: 'Professional cleaning service',
    description:
      "In the heart of Northwestern Ontario, we're not just cleaning hoods. We're setting the standard for excellence. Now expanding our elite services across Ontario.",
    announcementLabel: 'NEW',
    announcementText:
      'Now providing commercial hood & exhaust installations and residential HVAC installations.',
    primaryAction: 'Get Free Quote',
    secondaryAction: 'Call Now',
    highlights: ['NFPA 96 Compliant', '24/7 Availability', 'Certified & Insured'],
    image: '/img/servicesimg/hero.webp',
    imageAlt: 'Certified hood cleaning service',
    statValue: '10+',
    statLabel: 'Years Experience',
  },
  credibilityBar: {
    intro: 'Trusted by restaurants, hotels, and industrial facilities across Thunder Bay',
    items: [
      '10+ Years Experience',
      'Fully Insured & Bonded',
      'Fire Safety Compliant',
      '24/7 Support',
    ],
  },
  whyChooseUs: {
    eyebrow: 'Why Choose VPSClean?',
    title: 'Why Businesses Trust Us',
    features: [
      { title: 'Certified & Compliant Service', icon: 'shieldCheck' as IconName },
      { title: 'Experienced Technicians', icon: 'users' as IconName },
      { title: 'Fully Insured Team', icon: 'badgeCheck' as IconName },
      { title: 'Detailed Deep Cleaning', icon: 'sparkles' as IconName },
      { title: 'Flexible Scheduling Options', icon: 'calendarClock' as IconName },
      { title: 'Reliable & On-Time Service', icon: 'clock' as IconName },
    ],
    images: ['/img/servicesimg/office-cleaning.png', '/img/servicesimg/equipment-maintenance.png'],
    badgeValue: '10+',
    badgeLabel: 'Years Experience',
  },
  servicesPreview: {
    eyebrow: 'Our Expertise',
    title: 'Cleaning Services',
    actionLabel: 'View All Services',
    items: serviceSummaries.slice(0, 6),
  },
  nfpaSchedule: {
    eyebrow: 'Compliance Standards',
    title: 'NFPA96 - Compliant Cleaning Schedule',
    description: 'Required cleaning frequency according to NFPA96 Codes:',
    statValue: '10+',
    statLabel: 'Years Experience',
    ctaLabel: 'Request Service',
    image: '/img/cleaning-schedule.png',
    imageAlt: 'NFPA96 Compliant Cleaning',
    items: [
      { title: 'Low-Volume Cooking', sub: '(Churches, Seniors Centers)', freq: 'Annually' },
      { title: 'Moderate-Volume Cooking', sub: '(Standard Restaurants, Cafes)', freq: 'Semi-Annually' },
      { title: 'High-Volume Cooking', sub: '(24hr, Charbroil, Wok)', freq: 'Quarterly' },
      { title: 'Solid Fuel Cooking', sub: '(Wood, Charcoal)', freq: 'Monthly' },
    ] as ScheduleItem[],
  },
  transformations: {
    eyebrow: 'Proven Results',
    title: 'Transformations',
    description:
      'Hover over images to see the transformation from grease-heavy to kitchen-clean.',
    items: [1, 2, 3, 4, 5, 6].map((value) => ({
      title: `Project 0${value}`,
      subtitle: 'Transformation',
      before: `/img/before after/bf${value}.png`,
      after: `/img/before after/af${value}.png`,
    })),
  },
  featuredVideo: {
    eyebrow: 'Live Service Footage',
    title: 'Watch Our Team In Action',
    description:
      'Real hood and duct cleaning footage from the field. Use the controls to play, pause, and review the cleaning process at your own pace.',
    src: '/img/home%20video/Hood-and-Duct-Cleaning-Foaming-Degreaser-1.mp4',
    poster: '/img/servicesimg/hood-cleaning.png',
    note: 'Professional hood and duct cleaning in progress',
  },
  certifications: {
    eyebrow: 'Industry Certifications',
    title: 'Certified & Trusted Standards',
    items: ['/img/img1.png', '/img/img2.png', '/img/img3.png', '/img/img4.png'],
  },
  clientsPreview: {
    eyebrow: 'Trusted By',
    title: 'Our Clients',
    description: 'Trusted by restaurants, hotels, and industrial facilities across Thunder Bay.',
    logos: [
      '/img/logo/1.png',
      '/img/logo/2.png',
      '/img/logo/3.png',
      '/img/logo/4.png',
      '/img/logo/5.png',
      '/img/logo/6.png',
    ],
    actionLabel: 'More Clients',
  },
  homeCta: {
    title: 'Ready to Make Your Kitchen Safe?',
    description:
      'Book your professional cleaning service today and stay compliant with safety standards.',
    primaryAction: 'Get Free Quote',
    secondaryAction: 'Contact Us',
  },
  process: {
    eyebrow: 'The Workflow',
    title: 'Our Cleaning Process',
    steps: [
      {
        title: 'Inspection & Assessment',
        description:
          'We evaluate your hood and exhaust system to identify grease buildup and compliance needs.',
      },
      {
        title: 'Preparation & Protection',
        description:
          'Our team protects kitchen equipment and surrounding areas before starting the cleaning process.',
      },
      {
        title: 'Deep System Cleaning',
        description:
          'We remove grease from hoods, filters, ducts, and exhaust fans using professional-grade methods.',
      },
      {
        title: 'Final Check & Reporting',
        description:
          'We perform a quality check and ensure your system meets safety and compliance standards.',
      },
    ],
  },
};

export const aboutPageContent = {
  metaTitle: 'About Us | VP\'s Cleaning Service',
  metaDescription:
    "Learn how VP's Cleaning Service delivers NFPA 96-aligned hood cleaning, grease containment, and dependable service across Northwest Ontario and into the Toronto market.",
  eyebrow: 'About VP\'s Cleaning Service',
  title: 'Your Trusted Partner in Kitchen Hood Cleaning & Grease Containment Solutions',
  description:
    'Proudly based in Northwest Ontario, we deliver dependable hood cleaning, grease containment, and sanitation solutions with a growing presence across Ontario.',
  intro: {
    label: 'Northwest Ontario Based',
    title: 'Built on regional trust, growing with purpose.',
    paragraphs: [
      'We are proudly based in Northwest Ontario, with a strong presence and deep roots in the region. As we continue to grow, we are excited to expand our operations into the dynamic Toronto market.',
      "Founded in 2021, VP's Cleaning Services has grown into a respected industry leader by consistently delivering reliable, high-quality cleaning solutions. We specialize in kitchen exhaust and hood cleaning, rooftop grease containment, and surface sanitation, all of which meet or exceed rigorous NFPA 96 safety standards.",
    ],
    highlights: ['Founded in 2021', 'NFPA 96-aligned service', 'Ontario-focused growth'],
    badgeValue: '2021',
    badgeLabel: 'Founded',
    image: '/img/about/about.webp',
    imageAlt: 'VP’s Cleaning Service about page feature image',
  },
  associations: {
    eyebrow: 'Industry Alignment',
    title: 'We proudly align ourselves with top industry associations.',
    description:
      'Our standards and service approach are shaped by respected organizations that influence fire safety, restaurant facility maintenance, and professional washing practices.',
    items: [
      'National Fire Protection Association',
      'Restaurant Facility Management Association',
      'Power Washers of North America',
    ],
  },
  reasons: {
    eyebrow: 'Why Customers Choose Us',
    title: 'Quality, safety, and reliability built into every visit.',
    description:
      "At VP's Cleaning Service, we take pride in providing top-tier cleaning solutions tailored to meet the unique needs of your business.",
    items: [
      {
        icon: 'shieldCheck' as IconName,
        title: 'Quality & Safety at Its Best',
        description:
          'Cleaning is more than appearance. Our team uses industry-leading techniques and equipment to keep your kitchen and facility clean, safe, hygienic, and compliant.',
      },
      {
        icon: 'sparkles' as IconName,
        title: 'No Mess Left Behind',
        description:
          'We work carefully and leave your space spotless so your business can keep operating smoothly without extra cleanup or disruption.',
      },
      {
        icon: 'badgeCheck' as IconName,
        title: 'Certified Cleaners',
        description:
          'Our fully trained professionals bring the experience, certified methods, and product knowledge needed to deliver safe, high-quality results.',
      },
      {
        icon: 'calendarClock' as IconName,
        title: 'Reliable: Automated Scheduling',
        description:
          'Recurring service is easy to manage with automated scheduling, helping you stay on track without the hassle of constant follow-up.',
      },
      {
        icon: 'monitor' as IconName,
        title: 'Streamlined Communication',
        description:
          'Need to reschedule or request something specific? Our communication process is clear and responsive, so you get prompt answers when you need them.',
      },
      {
        icon: 'award' as IconName,
        title: 'Guaranteed Satisfaction',
        description:
          'We stand behind our work and aim to clean to the highest standard every time. If something misses the mark, we make it right.',
      },
    ],
  },
  statement: {
    label: 'Our Quality Promise',
    title: 'Great Hood Cleaning Starts with Quality, Not Price.',
    description:
      "At VP's Cleaning Service, we prioritize quality over cost. We believe that top-notch service does not need hidden fees or compromised results. With us, you get quality cleaning and reliable service at a fair price.",
    note: 'Quality cleaning. Fair pricing. No shortcuts.',
  },
};

export const servicesPageContent = {
  metaTitle: 'Our Services | VP\'s Cleaning Service',
  metaDescription:
    'Comprehensive cleaning solutions for commercial kitchens and industrial facilities: Hood cleaning, rooftop grease containment, equipment maintenance, and more.',
  eyebrow: 'Full Catalog',
  title: 'Our Services',
  description:
    'Comprehensive cleaning solutions for commercial kitchens and industrial facilities across Thunder Bay.',
  cta: {
    title: 'Need a Custom Solution?',
    description:
      'We tailor our cleaning programs to meet the specific needs of your facility and volume.',
    actionLabel: 'Request Custom Quote',
  },
};

export const contactPageContent = {
  metaTitle: 'Contact Us | VP\'s Cleaning Service',
  metaDescription:
    'Ready to schedule a cleaning or need a free quote? Contact VP\'s Cleaning Service today for professional industrial cleaning in Ontario.',
  eyebrow: 'Get in Touch',
  title: 'Contact Us',
  description:
    'Ready to schedule a cleaning or need a free quote? Reach out to our team today.',
  formTitle: 'Send a Message',
  infoTitle: 'Contact Information',
  form: {
    labels: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      service: 'Service Required',
      message: 'Message',
      security: 'Security Verification',
    },
    placeholders: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 (807) 000-0000',
      message: 'Tell us about your project...',
      security: '?',
    },
    serviceOptions: [
      'Certified Hood Cleaning',
      'Rooftop Grease Containment',
      'Equipment Maintenance',
      'Surface Cleaning',
      'Office Cleaning',
      'House Cleaning',
      'Cleaning Commercial Ice Machines',
      'Other',
    ],
    submitLabel: 'Send Message',
  },
};

export const ourClientsPageContent = {
  metaTitle: 'Our Clients | VP\'s Cleaning Service',
  metaDescription:
    'See the businesses across industries that trust VPSClean for reliable, compliant, and professional cleaning services.',
  eyebrow: 'Trusted Partnerships',
  title: 'Our Clients',
  description:
    'Businesses across industries trust VPSClean for reliable, compliant, and professional cleaning services.',
  gridEyebrow: 'Organizations We Serve',
  ctaEyebrow: 'Join Our Client Network',
  ctaTitle: 'Work With VPSClean',
  ctaAction: 'Request Service',
  logos: Array.from({ length: 66 }, (_, index) => `/img/logo/${index + 1}.png`),
};

export const serviceDetails: Record<string, ServiceDetail> = {
  certifiedHoodCleaning: {
    metaTitle: 'Certified Hood Cleaning | VP\'s Cleaning Service',
    metaDescription:
      'Professional NFPA 96 certified kitchen exhaust hood cleaning. Protect your business from fire hazards with our deep degreasing services.',
    summary: serviceSummaries[0],
    hero: {
      eyebrow: 'Fire Safety First',
      titleLines: ['Certified', 'Hood Cleaning'],
      description:
        'Kitchen hood cleaning protects your facility, staff, and customers. Cooking oils collect inside exhaust systems creating dangerous flammable residue. Regular cleaning removes grease buildup and reduces fire risk while keeping your system inspection-ready.',
      ctaLabel: 'Book Now',
      badgeLabel: 'NFPA 96 Certified',
      badgeIcon: 'award',
      image: '/img/servicesimg/hood-cleaning.png',
      imageAlt: 'Certified Hood Cleaning',
    },
    process: {
      label: 'Our Methodology',
      title: 'The Cleaning Process',
      steps: [
        {
          icon: 'search',
          title: 'Inspection',
          description:
            'We begin with a thorough assessment of your entire exhaust system to identify critical grease accumulation areas.',
        },
        {
          icon: 'shieldCheck',
          title: 'Protection',
          description:
            'Our team meticulously covers your kitchen equipment and floors with plastic sheeting to ensure a mess-free environment.',
        },
        {
          icon: 'wrench',
          title: 'Deep Degreasing',
          description:
            'Using high-pressure hot water and professional-grade degreasers, we strip grease from hoods, ducts, and fans.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Certification',
          description:
            'After cleaning, we provide a detailed report and a certification sticker for your hood, ensuring you are audit-ready.',
        },
      ],
    },
    benefits: {
      title: 'Why Regular Cleaning?',
      items: [
        {
          title: 'Fire Prevention',
          description:
            'Over 90% of kitchen fires spread through the exhaust system. We eliminate the fuel source.',
        },
        {
          title: 'Health Compliance',
          description:
            'Meet all health department and insurance requirements with our certified documentation.',
        },
        {
          title: 'Better Airflow',
          description:
            'Clean systems pull more heat and smoke out of the kitchen, improving working conditions.',
        },
        {
          title: 'Equipment Longevity',
          description:
            'Reduce the strain on your exhaust fan motor, extending its operational life.',
        },
      ],
      card: {
        icon: 'award',
        title: 'Fully Bonded & Insured',
        description:
          'We take fire safety seriously. Our technicians are fully trained in the latest industry standards to provide you with complete peace of mind.',
        ctaLabel: 'Request A Safety Audit',
      },
    },
    faqs: [
      {
        question: 'How often should my hood be cleaned?',
        answer:
          'Frequency depends on your cooking volume. High-volume kitchens (24h, charbroiling) usually require quarterly cleaning, while low-volume facilities may only need it annually.',
      },
      {
        question: 'Are you NFPA 96 compliant?',
        answer:
          'Yes, all our services follow the strict guidelines set by the National Fire Protection Association (NFPA) Standard 96.',
      },
      {
        question: 'Do you provide service after hours?',
        answer:
          'Absolutely. We understand that kitchens are busy during the day, so we offer flexible scheduling, including overnight shifts, to avoid interrupting your operations.',
      },
    ],
  },
  rooftopGreaseContainment: {
    metaTitle: 'Rooftop Grease Containment | VP\'s Cleaning Service',
    metaDescription:
      'Prevent roof damage from grease leaks with professional rooftop grease containment systems. Protect your drainage and environment.',
    summary: serviceSummaries[1],
    hero: {
      eyebrow: 'Infrastructure Protection',
      titleLines: ['Rooftop Grease', 'Containment'],
      description:
        'Rooftop grease containment systems are essential for preventing grease overflow from damaging roofing materials, drainage systems, and surrounding structures. Protect your investment and stay compliant with environmental standards.',
      ctaLabel: 'Get Protected',
      badgeLabel: 'Roof Protection Guaranteed',
      badgeIcon: 'umbrella',
      image: '/img/servicesimg/rooftop-grease.png',
      imageAlt: 'Rooftop Grease Containment',
    },
    process: {
      label: 'How We Work',
      title: 'Installation & Maintenance',
      steps: [
        {
          icon: 'search',
          title: 'Roof Analysis',
          description:
            'We evaluate your roof type and existing grease exposure to recommend the most effective containment solution.',
        },
        {
          icon: 'droplets',
          title: 'Grease Cleanup',
          description:
            'Before installation, we clean any existing grease from the roof surface to prevent further material degradation.',
        },
        {
          icon: 'wrench',
          title: 'System Install',
          description:
            'We install high-capacity containment systems designed to capture and hold grease before it reaches your roof.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Maintenance',
          description:
            'Scheduled filter replacements and system checks ensure continuous protection for your building\'s infrastructure.',
        },
      ],
    },
    benefits: {
      title: 'The Impact of Grease',
      items: [
        {
          title: 'Avoid Roof Failure',
          description:
            'Grease degradation can void your roof warranty and lead to structural failure if left unchecked.',
        },
        {
          title: 'Environmental Safety',
          description:
            'Keep grease out of storm drains to avoid heavy environmental fines and legal issues.',
        },
        {
          title: 'Fire Hazard Reduction',
          description:
            'Grease on the roof can become an ignition point for lightning or nearby sparks.',
        },
        {
          title: 'Stormwater Management',
          description:
            'Ensure your rooftop drains remain clear of grease clogs to prevent water pooling.',
        },
      ],
      card: {
        icon: 'shieldCheck',
        title: 'Long-Term Savings',
        description:
          'A small investment in grease containment today can save you tens of thousands of dollars in premature roof replacements tomorrow.',
        ctaLabel: 'Schedule A Roof Audit',
      },
    },
    faqs: [
      {
        question: 'Why is grease bad for my roof?',
        answer:
          'Kitchen grease is acidic and petroleum-based. It chemically breaks down roofing materials like TPO, EPDM, and Asphalt, leading to leaks and costly repairs.',
      },
      {
        question: 'How often should filters be replaced?',
        answer:
          'Typically every 3 to 6 months, depending on the cooking volume of your kitchen. We offer scheduled maintenance programs to handle this automatically.',
      },
      {
        question: 'Will this prevent environmental fines?',
        answer:
          'Yes. Many municipalities have strict codes regarding grease runoff entering storm drains. Our systems ensure you stay in compliance with environmental regulations.',
      },
    ],
  },
  equipmentMaintenance: {
    metaTitle: 'Equipment Maintenance | VP\'s Cleaning Service',
    metaDescription:
      'Extend kitchen equipment lifespan with professional preventive maintenance. Routine inspections, performance testing, and servicing.',
    summary: serviceSummaries[2],
    hero: {
      eyebrow: 'Operational Excellence',
      titleLines: ['Equipment', 'Maintenance'],
      description:
        'Routine maintenance ensures reliable performance of your kitchen systems and prevents unexpected breakdowns. Our professional technicians identify issues before they become costly emergencies, extending the life of your investment.',
      ctaLabel: 'Schedule Service',
      badgeLabel: 'Efficiency Optimized',
      badgeIcon: 'zap',
      image: '/img/servicesimg/equipment-maintenance.png',
      imageAlt: 'Equipment Maintenance',
    },
    process: {
      label: 'The Workflow',
      title: 'Preventive Maintenance',
      steps: [
        {
          icon: 'search',
          title: 'System Audit',
          description:
            'We perform a comprehensive evaluation of your kitchen equipment to identify wear and tear or efficiency drops.',
        },
        {
          icon: 'wrench',
          title: 'Deep Cleaning',
          description:
            'Internal components are cleaned and lubricated to ensure smooth operation and prevent overheating.',
        },
        {
          icon: 'settings',
          title: 'Calibration',
          description:
            'We calibrate thermostats and sensors to ensure your equipment is operating at peak performance and energy efficiency.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Reporting',
          description:
            'You receive a detailed service log documenting all actions taken and recommendations for future upkeep.',
        },
      ],
    },
    benefits: {
      title: 'Performance Benefits',
      items: [
        {
          title: 'Minimize Downtime',
          description:
            'Identify and replace failing components during scheduled hours instead of during a busy dinner rush.',
        },
        {
          title: 'Energy Efficiency',
          description:
            'Well-maintained fans and motors draw less power, significantly reducing your monthly utility costs.',
        },
        {
          title: 'Safety Compliance',
          description:
            'Ensure your equipment continues to meet fire and safety regulations with regular expert check-ups.',
        },
        {
          title: 'Asset Protection',
          description:
            'Maximize the return on your kitchen investment by adding years to the life of your machinery.',
        },
      ],
      card: {
        icon: 'shieldCheck',
        title: 'Expert Technicians',
        description:
          'Our team is trained to work on a wide variety of commercial kitchen brands and systems, providing reliable results every time.',
        ctaLabel: 'Request Maintenance Plan',
      },
    },
    faqs: [
      {
        question: 'What types of equipment do you service?',
        answer:
          'We specialize in commercial kitchen ventilation systems, exhaust fans, and basic mechanical components of cooking equipment. Contact us for specific machine inquiries.',
      },
      {
        question: 'Do you offer maintenance contracts?',
        answer:
          'Yes, we provide customizable service agreements that ensure your kitchen remains compliant and operational year-round with automated scheduling.',
      },
      {
        question: 'How much can I save with preventive maintenance?',
        answer:
          'Studies show that regular maintenance can reduce emergency repair costs by up to 50% and energy bills by 15-20% through improved efficiency.',
      },
    ],
  },
  surfaceCleaning: {
    metaTitle: 'Surface Cleaning | VP\'s Cleaning Service',
    metaDescription:
      'Professional exterior surface cleaning for walkways, dumpster areas, and service zones. Keep your property safe and compliant.',
    summary: serviceSummaries[3],
    hero: {
      eyebrow: 'Curb Appeal & Safety',
      titleLines: ['Exterior Surface', 'Cleaning'],
      description:
        'Maintain a clean and safe environment for your staff and customers. Our professional exterior surface cleaning removes slip hazards, sanitizes dumpster areas, and keeps your property looking its absolute best.',
      ctaLabel: 'Book Service',
      badgeLabel: 'Property Protection',
      badgeIcon: 'building2',
      image: '/img/servicesimg/surface-cleaning.png',
      imageAlt: 'Surface Cleaning',
    },
    process: {
      label: 'Our Method',
      title: 'Precision Pressure Washing',
      steps: [
        {
          icon: 'search',
          title: 'Area Audit',
          description:
            'We identify high-traffic zones and specific stain types to select the most effective cleaning agents.',
        },
        {
          icon: 'wrench',
          title: 'Pressure Wash',
          description:
            'Industrial-grade high-pressure systems are used to lift deep-seated dirt, grime, and environmental buildup.',
        },
        {
          icon: 'sparkles',
          title: 'Degreasing',
          description:
            'Specialized eco-friendly degreasers are applied to oil and grease spots, common in dumpster and service areas.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Final Rinse',
          description:
            'A thorough final rinse ensures all residues are removed, leaving a clean, slip-resistant surface.',
        },
      ],
    },
    benefits: {
      title: 'Why Surface Cleaning?',
      items: [
        {
          title: 'Slip & Fall Prevention',
          description:
            'Remove algae, oil, and moss that create dangerous slip hazards for your guests and employees.',
        },
        {
          title: 'Sanitation Standards',
          description:
            'Eliminate odors and bacteria buildup in dumpster pads and loading zones.',
        },
        {
          title: 'Professional Image',
          description:
            'A clean exterior is the first thing customers see. Make a positive first impression every time.',
        },
        {
          title: 'Pest Control',
          description:
            'Removing food residue and organic waste discourages rodents and insects from nesting near your facility.',
        },
      ],
      card: {
        icon: 'shieldCheck',
        title: 'Fully Equipped',
        description:
          'We utilize commercial-grade hot water units and specialized surface cleaners to provide a deeper clean than standard consumer machines.',
        ctaLabel: 'Request A Property Audit',
      },
    },
    faqs: [
      {
        question: 'Can you remove old oil and grease stains?',
        answer:
          'Yes, we use professional-grade hot water pressure washers and specialized chemicals that can significantly fade or completely remove even deep-seated oil stains.',
      },
      {
        question: 'Is the process safe for nearby landscaping?',
        answer:
          'Absolutely. We use environmentally responsible cleaning agents and controlled pressure techniques to protect your plants and surrounding property.',
      },
      {
        question: 'How often should commercial surfaces be cleaned?',
        answer:
          'Dumpster pads and high-traffic walkways typically require monthly or quarterly service to maintain safety and hygiene standards.',
      },
    ],
  },
  officeCleaning: {
    metaTitle: 'Office Cleaning | VP\'s Cleaning Service',
    metaDescription:
      'Professional office cleaning services. Maintain a hygienic, productive workspace with desk sanitation, floor maintenance, and more.',
    summary: serviceSummaries[4],
    hero: {
      eyebrow: 'Productive Environments',
      titleLines: ['Professional', 'Office Cleaning'],
      description:
        'Maintain a hygienic, productive workspace with our consistent professional cleaning. A clean office is not just about appearance—it is about employee health, morale, and creating a professional impression for every client.',
      ctaLabel: 'Get A Quote',
      badgeLabel: 'Employee Health First',
      badgeIcon: 'users',
      image: '/img/servicesimg/office-cleaning.png',
      imageAlt: 'Office Cleaning',
    },
    process: {
      label: 'Our Approach',
      title: 'Office Sanitization',
      steps: [
        {
          icon: 'search',
          title: 'Needs Audit',
          description:
            'We assess your office layout and high-traffic areas to create a customized cleaning schedule that fits your operations.',
        },
        {
          icon: 'sparkles',
          title: 'Deep Sanitize',
          description:
            'Our team uses medical-grade disinfectants on high-touch surfaces like keyboards, door handles, and breakroom counters.',
        },
        {
          icon: 'monitor',
          title: 'Workspace Care',
          description:
            'We provide careful dusting and cleaning of electronics, desks, and glass surfaces to maintain a professional look.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Quality Check',
          description:
            'A final walkthrough ensures every corner meets our high standards before your team arrives for work.',
        },
      ],
    },
    benefits: {
      title: "Why Choose VP's?",
      items: [
        {
          title: 'Reduced Sick Days',
          description:
            'Thorough disinfection of high-touch points significantly reduces the spread of germs and seasonal illnesses.',
        },
        {
          title: 'Custom Cleaning Plans',
          description:
            'We do not believe in one-size-fits-all. Every office has unique requirements that we cater to specifically.',
        },
        {
          title: 'Reliable Staff',
          description:
            'Our team is vetted, trained, and supervised to ensure consistent quality and absolute security for your office.',
        },
        {
          title: 'Attention to Detail',
          description:
            'From dusting ceiling vents to polishing baseboards, we focus on the small details that others miss.',
        },
      ],
      card: {
        icon: 'shieldCheck',
        title: 'Fully Bonded & Insured',
        description:
          'Your office security is paramount. We are fully insured and bonded, providing you with total peace of mind while we are on your premises.',
        ctaLabel: 'Request A Workspace Audit',
      },
    },
    faqs: [
      {
        question: 'Do you offer after-hours cleaning?',
        answer:
          'Yes, we specialize in overnight and early morning cleaning to ensure your operations are never disrupted by our team.',
      },
      {
        question: 'Are your cleaning products eco-friendly?',
        answer:
          'We prioritize green cleaning solutions that are effective yet safe for your employees and the environment, reducing indoor allergens.',
      },
      {
        question: 'Is there a minimum frequency for commercial contracts?',
        answer:
          'We offer everything from daily service to weekly or bi-weekly deep cleans. We tailor our frequency to your specific office needs.',
      },
    ],
  },
  houseCleaning: {
    metaTitle: 'House Cleaning | VP\'s Cleaning Service',
    metaDescription:
      'Reliable residential cleaning services delivering fresh, sanitized, and comfortable living spaces consistently.',
    summary: serviceSummaries[5],
    hero: {
      eyebrow: 'Your Personal Sanctuary',
      titleLines: ['Residential', 'House Cleaning'],
      description:
        'Keep your home clean, fresh, and comfortable with our professional cleaning services. We handle the chores so you can spend your time on what truly matters—family, hobbies, and well-deserved relaxation in a sanitized environment.',
      ctaLabel: 'Book A Clean',
      badgeLabel: 'Caring For Your Home',
      badgeIcon: 'heart',
      image: '/img/servicesimg/house-cleaning.png',
      imageAlt: 'House Cleaning',
    },
    process: {
      label: "The VP's Standard",
      title: 'Our Home Care Process',
      steps: [
        {
          icon: 'search',
          title: 'Room Audit',
          description:
            'We discuss your specific priorities for each room to ensure we focus on the areas that matter most to you.',
        },
        {
          icon: 'sparkles',
          title: 'Dust & Polish',
          description:
            'From ceiling fans to baseboards, we remove dust and allergens, then polish surfaces to a brilliant shine.',
        },
        {
          icon: 'shieldCheck',
          title: 'Sanitize',
          description:
            'Kitchens and bathrooms receive deep sanitization using family-safe products to eliminate germs and bacteria.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Final Walk',
          description:
            'A final inspection ensures every detail is perfect, leaving your home fresh, clean, and ready for relaxation.',
        },
      ],
    },
    benefits: {
      title: 'Benefits of Service',
      items: [
        {
          title: 'Improved Air Quality',
          description:
            'Our HEPA vacuums and detailed dusting remove pet dander, dust mites, and allergens from your living space.',
        },
        {
          title: 'Consistent Excellence',
          description:
            'We follow a rigorous checklist to ensure you receive the same high-quality clean every single visit.',
        },
        {
          title: 'Time Recovery',
          description:
            'Reclaim your weekends. Let us handle the deep scrubbing while you enjoy your free time.',
        },
        {
          title: 'Stress Reduction',
          description:
            'A clutter-free and sanitized home is proven to reduce stress and improve mental well-being.',
        },
      ],
      card: {
        icon: 'home',
        title: 'Your Trusted Partner',
        description:
          'We treat every home with the same respect and care as our own. Our staff is background-checked and highly trained for your protection.',
        ctaLabel: 'Get A Free Estimate',
      },
    },
    faqs: [
      {
        question: 'Do I need to be home during the cleaning?',
        answer:
          'Not at all. Many of our clients provide a key or entry code. We are fully bonded and insured, so your home is in safe hands.',
      },
      {
        question: 'Are your cleaning products safe for pets?',
        answer:
          'Yes, we use non-toxic, eco-friendly cleaning solutions that are safe for your furry family members and the environment.',
      },
      {
        question: 'What is the difference between a standard and deep clean?',
        answer:
          'A standard clean maintains your home\'s cleanliness, while a deep clean includes detailed tasks like cleaning inside appliances and scrubbing grout.',
      },
    ],
  },
  iceMachineCleaning: {
    metaTitle: 'Ice Machine Cleaning | VP\'s Cleaning Service',
    metaDescription:
      'Commercial ice machine cleaning services. Remove scale buildup and bacteria ensuring safe and hygienic ice production.',
    summary: serviceSummaries[6],
    hero: {
      eyebrow: 'Hygienic Ice Production',
      titleLines: ['Ice Machine', 'Sanitization'],
      description:
        'Ice is food. Treat it with the same safety standards. Our specialized cleaning removes dangerous scale buildup, biofilm, and bacteria, ensuring your ice is safe, clear, and free of unpleasant odors or tastes.',
      ctaLabel: 'Book Service',
      badgeLabel: 'Pure Ice Guaranteed',
      badgeIcon: 'snowflake',
      image: '/img/servicesimg/ice-machine-cleaning.png',
      imageAlt: 'Ice Machine Cleaning',
    },
    process: {
      label: 'The Sanitization Cycle',
      title: 'Our Cleaning Standard',
      steps: [
        {
          icon: 'search',
          title: 'Initial Audit',
          description:
            'We inspect for mold, slime, and scale buildup within the bin and internal water distribution systems.',
        },
        {
          icon: 'wrench',
          title: 'Teardown',
          description:
            'Critical components like the water pump, distributors, and sensors are removed for individual deep cleaning.',
        },
        {
          icon: 'flaskConical',
          title: 'Descaling',
          description:
            'We use food-safe acids to remove calcium and lime deposits that impede ice production and quality.',
        },
        {
          icon: 'clipboardCheck',
          title: 'Sanitize',
          description:
            'The entire system is sanitized to eliminate biofilm and bacteria, followed by a thorough production test.',
        },
      ],
    },
    benefits: {
      title: 'Health & Efficiency',
      items: [
        {
          title: 'Bacteria Elimination',
          description:
            'Ice machines are breeding grounds for E. coli, Norovirus, and Legionella if not properly sanitized.',
        },
        {
          title: 'Faster Production',
          description:
            'Removing scale from the evaporator allows for faster heat transfer, making ice cycles shorter and more efficient.',
        },
        {
          title: 'Reduced Component Stress',
          description:
            'Scale buildup forces pumps and motors to work harder. Cleaning prevents premature mechanical failure.',
        },
        {
          title: 'Compliance Readiness',
          description:
            'Health inspectors check ice machines closely. Our documentation ensures you are always ready for an audit.',
        },
      ],
      card: {
        icon: 'shieldCheck',
        title: 'Certified Food Safety',
        description:
          'We follow strict food safety guidelines to ensure your ice machine remains a safe part of your kitchen\'s operations.',
        ctaLabel: 'Request A Health Audit',
      },
    },
    faqs: [
      {
        question: 'Why does my ice have a strange smell or taste?',
        answer:
          "This is usually caused by 'biofilm' or mold growth within the machine. Regular professional sanitization eliminates these contaminants completely.",
      },
      {
        question: 'How often should commercial ice machines be cleaned?',
        answer:
          'Health codes typically require a full deep clean and sanitization at least every 6 months, though high-volume kitchens may need it quarterly.',
      },
      {
        question: 'Do you replace water filters as part of the service?',
        answer:
          'We can certainly include filter replacements as part of your maintenance plan to ensure the highest possible water quality for your ice.',
      },
    ],
  },
};

export const serviceAreaPageContent = {
  metaTitle: 'Service Area | VP\'s Cleaning Service',
  metaDescription:
    'Dedicated commercial kitchen cleaning and exhaust safety compliance services across Ontario, with hubs in Thunder Bay, Kitchener, and Sudbury.',
  eyebrow: 'Our Coverage',
  title: 'Service Areas',
  description:
    'VP\'s Cleaning Service provides professional, NFPA 96-compliant cleaning and commercial kitchen maintenance across Ontario and surrounding regions. With dedicated local service areas, we are fully equipped to serve local businesses with prompt response times and certified expertise.',
  hubs: [
    {
      name: 'Head Office: Thunder Bay',
      description:
        'Serving Northwestern Ontario, including commercial kitchens, dining facilities, and industrial premises in and around the Thunder Bay region.',
      phone: '+1 (807) 358-7899',
      image: '/img/img1.png',
    },
    {
      name: 'Branch 1: Kitchener',
      description:
        'Serving the Waterloo Region, Southern Ontario, and surrounding municipal areas with full exhaust and kitchen deep-cleaning services.',
      phone: '+1 (807) 708-9672',
      image: '/img/img2.png',
    },
    {
      name: 'Branch 2: Sudbury',
      description:
        'Serving Greater Sudbury and Northern Ontario with certified fire safety inspections, commercial cleaning, and restaurant compliance services.',
      phone: '+1 (807) 708-9672',
      image: '/img/img3.png',
    },
  ],
  cities: [
    'Thunder Bay',
    'Timmins',
    'Sudbury',
    'Kapuskasing',
    'Sault Ste Marie',
    'Hamilton',
    'Barrie',
    'Dryden',
    'Fort Frances',
    'Kenora',
    'North Bay',
    'Winnipeg',
    'Across Ontario',
  ],
  ctaEyebrow: 'Schedule Local Service',
  ctaTitle: 'Ready to book certified safety maintenance in your area?',
  ctaAction: 'Book A Service',
};
