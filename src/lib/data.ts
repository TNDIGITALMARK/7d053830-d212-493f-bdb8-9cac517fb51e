// Mock data for the holistic medicine website

export interface Practitioner {
  id: string
  name: string
  title: string
  specialty: string[]
  experience: number
  image: string
  rating: number
  reviewCount: number
  location: string
  bio: string
  education: string[]
  certifications: string[]
  treatmentApproach: string
  availability: {
    day: string
    slots: string[]
  }[]
  priceRange: string
  acceptsInsurance: boolean
}

export interface Treatment {
  id: string
  name: string
  icon: string
  description: string
  practitionerCount: number
}

export interface Article {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
}

export const practitioners: Practitioner[] = [
  {
    id: 'dr-sarah-chen',
    name: 'Dr. Sarah Chen',
    title: 'Licensed Acupuncturist',
    specialty: ['Acupuncture', 'Traditional Chinese Medicine', 'Chronic Pain Management', 'Fertility Support'],
    experience: 12,
    image: '/generated/practitioner-sarah.jpg',
    rating: 4.9,
    reviewCount: 127,
    location: 'San Francisco, CA',
    bio: 'Dr. Sarah Chen specializes in integrative acupuncture and Traditional Chinese Medicine with over 12 years of clinical experience. She focuses on treating chronic pain conditions and supporting fertility through holistic approaches.',
    education: [
      'Doctor of Acupuncture and Oriental Medicine, Pacific College',
      'Bachelor of Science in Biology, UC Berkeley'
    ],
    certifications: [
      'Licensed Acupuncturist (CA)',
      'National Certification Commission for Acupuncture (NCCAOM)',
      'Fertility Acupuncture Specialist'
    ],
    treatmentApproach: 'I combine traditional acupuncture techniques with modern diagnostic methods to create personalized treatment plans. My approach focuses on addressing the root cause of health issues while providing immediate symptom relief.',
    availability: [
      { day: 'Monday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Wednesday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '11:00 AM', '2:00 PM'] }
    ],
    priceRange: '$150-$200 per session',
    acceptsInsurance: true
  },
  {
    id: 'michael-torres',
    name: 'Michael Torres',
    title: 'Master Herbalist',
    specialty: ['Herbal Medicine', 'Custom Formulations', 'Digestive Wellness', 'Immune Support'],
    experience: 15,
    image: '/generated/practitioner-michael.jpg',
    rating: 4.8,
    reviewCount: 94,
    location: 'Portland, OR',
    bio: 'Michael Torres is a Master Herbalist with 15 years of experience creating custom herbal formulations. He specializes in digestive health and immune system support using traditional herbal wisdom combined with modern phytotherapy.',
    education: [
      'Master Herbalist Certification, American Herbalists Guild',
      'Clinical Phytotherapy Program, National College of Natural Medicine'
    ],
    certifications: [
      'Registered Herbalist (AHG)',
      'Clinical Phytotherapy Specialist',
      'Organic Farming Certification'
    ],
    treatmentApproach: 'I believe in the power of plant medicine to support the body\'s natural healing processes. Each formulation is custom-created based on individual constitution and specific health goals.',
    availability: [
      { day: 'Tuesday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
      { day: 'Thursday', slots: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Saturday', slots: ['10:00 AM', '12:00 PM'] }
    ],
    priceRange: '$120-$180 per consultation',
    acceptsInsurance: false
  },
  {
    id: 'lisa-patel',
    name: 'Lisa Patel',
    title: 'Reiki Master',
    specialty: ['Reiki', 'Energy Healing', 'Chakra Balancing', 'Stress Relief'],
    experience: 8,
    image: '/generated/practitioner-lisa.jpg',
    rating: 5.0,
    reviewCount: 156,
    location: 'Austin, TX',
    bio: 'Lisa Patel is a certified Reiki Master and energy healing practitioner. She specializes in chakra balancing and stress relief through gentle, non-invasive energy work that promotes deep relaxation and healing.',
    education: [
      'Reiki Master Certification, International Center for Reiki Training',
      'Energy Medicine Practitioner, Healing Touch Program'
    ],
    certifications: [
      'Reiki Master Teacher',
      'Certified Healing Touch Practitioner',
      'Chakra Balancing Specialist'
    ],
    treatmentApproach: 'My sessions create a safe, nurturing space for deep healing and relaxation. I work with the body\'s natural energy systems to release blockages and restore balance, promoting overall wellness.',
    availability: [
      { day: 'Monday', slots: ['10:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'] },
      { day: 'Wednesday', slots: ['11:00 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Friday', slots: ['10:00 AM', '1:00 PM', '3:00 PM'] },
      { day: 'Saturday', slots: ['9:00 AM', '11:00 AM'] }
    ],
    priceRange: '$85-$120 per session',
    acceptsInsurance: false
  }
]

export const treatments: Treatment[] = [
  {
    id: 'acupuncture',
    name: 'Acupuncture',
    icon: '🎋',
    description: 'Traditional needle therapy to restore energy balance and promote healing',
    practitionerCount: 47
  },
  {
    id: 'herbal-medicine',
    name: 'Herbal Medicine',
    icon: '🌿',
    description: 'Natural plant-based remedies for various health conditions',
    practitionerCount: 23
  },
  {
    id: 'meditation',
    name: 'Meditation',
    icon: '🦋',
    description: 'Mindfulness practices for mental clarity and stress reduction',
    practitionerCount: 31
  },
  {
    id: 'energy-healing',
    name: 'Energy Healing',
    icon: '✨',
    description: 'Reiki and other energy-based healing modalities',
    practitionerCount: 31
  },
  {
    id: 'massage-therapy',
    name: 'Massage Therapy',
    icon: '💆',
    description: 'Therapeutic bodywork for pain relief and relaxation',
    practitionerCount: 52
  },
  {
    id: 'nutrition',
    name: 'Nutrition',
    icon: '🥗',
    description: 'Holistic nutritional counseling and dietary guidance',
    practitionerCount: 18
  }
]

export const articles: Article[] = [
  {
    id: 'acupuncture-guide',
    title: 'Complete Guide to Acupuncture: What to Expect',
    excerpt: 'Learn about the ancient practice of acupuncture, how it works, what conditions it treats, and what to expect during your first session.',
    content: 'Acupuncture is a traditional Chinese medicine practice that involves inserting thin needles into specific points on the body...',
    category: 'Acupuncture & TCM',
    author: 'Dr. Sarah Chen',
    date: '2025-01-15',
    readTime: '8 min read',
    image: '/generated/hero-healing.jpg'
  },
  {
    id: 'herbal-remedies',
    title: 'Top 10 Herbal Remedies for Common Ailments',
    excerpt: 'Discover powerful herbal remedies that can help with everyday health concerns, from digestive issues to sleep problems.',
    content: 'Herbal medicine has been used for thousands of years to treat various health conditions naturally...',
    category: 'Herbal Medicine',
    author: 'Michael Torres',
    date: '2025-01-10',
    readTime: '10 min read',
    image: '/generated/hero-healing.jpg'
  },
  {
    id: 'meditation-beginners',
    title: 'Meditation for Beginners: A Step-by-Step Guide',
    excerpt: 'Start your meditation practice with this comprehensive guide covering techniques, benefits, and tips for success.',
    content: 'Meditation is a powerful tool for reducing stress, improving focus, and promoting overall wellness...',
    category: 'Mindfulness',
    author: 'Lisa Patel',
    date: '2025-01-05',
    readTime: '6 min read',
    image: '/generated/hero-healing.jpg'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    treatment: 'Acupuncture',
    text: 'After years of chronic back pain, Dr. Chen\'s acupuncture treatments have given me my life back. I\'m pain-free and more active than I\'ve been in years.',
    rating: 5
  },
  {
    id: 2,
    name: 'David Thompson',
    treatment: 'Herbal Medicine',
    text: 'Michael\'s custom herbal formulations resolved my digestive issues when nothing else worked. His knowledge and care are exceptional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Williams',
    treatment: 'Reiki',
    text: 'Lisa\'s energy healing sessions have transformed my stress levels and overall wellbeing. Each session leaves me feeling refreshed and balanced.',
    rating: 5
  }
]

export const faqs = [
  {
    question: 'What is holistic medicine?',
    answer: 'Holistic medicine is an approach to health that considers the whole person — body, mind, spirit, and emotions — in the quest for optimal health and wellness. It combines conventional and alternative therapies to prevent and treat disease, and to promote optimal health.'
  },
  {
    question: 'Is holistic medicine covered by insurance?',
    answer: 'Coverage varies by insurance provider and treatment type. Many insurance plans now cover acupuncture and some massage therapy. Check with your specific insurance provider and the practitioner to understand coverage options.'
  },
  {
    question: 'How do I choose the right practitioner?',
    answer: 'Look for licensed practitioners with relevant certifications and experience in treating your specific condition. Read reviews, check their treatment approach, and don\'t hesitate to schedule a consultation to ensure they\'re the right fit for you.'
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit typically includes a comprehensive health assessment, discussion of your concerns and goals, and possibly a treatment session. Practitioners will explain their approach and create a personalized treatment plan for you.'
  },
  {
    question: 'Are holistic treatments safe?',
    answer: 'When performed by licensed and certified practitioners, holistic treatments are generally very safe. Always inform your practitioner of any health conditions, medications, or concerns before beginning treatment.'
  }
]
