export const site = {
  name: "Gurudas Seva Ashram",
  shortName: "Gurudas Ashram",
  tagline: "Seva is the highest worship",
  founded: 1985,
  description:
    "A spiritual and social welfare ashram in Ghatnandur, Beed — serving underprivileged students, the elderly and rural women since 1985, in the tradition of Rashtrasant Tukdoji Maharaj.",
  address: {
    line1: "Gurudas Nagar, Ghatnandur",
    line2: "Tal. Ambajogai, Dist. Beed",
    state: "Maharashtra 431519, India",
  },
  phone: "+91 00000 00000",
  email: "info@gurudassevaashram.org",
  hours: "Open to visitors daily, 7:00 AM – 7:00 PM",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  bank: {
    accountName: "Gurudas Seva Ashram",
    bankName: "Add your bank name",
    accountNumber: "Add your account number",
    ifsc: "Add your IFSC code",
    upi: "Add your UPI ID",
  },
  taxSection: "80G of the Income Tax Act, 1961",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gall" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const;

/**
 * Photographs live in /public/assets. A missing file falls back to a branded
 * placeholder, so the layout never breaks while photos are being swapped.
 */
export const images = {
  hero: "/assets/ashram20.jpg",
  gate: "/assets/ashrampage.jpg",
  founding: "/assets/ashram16.jpg",
  gurudev: "/assets/maharaj1.jpg",
  mission: "/assets/ashram14.jpg",
  campus: "/assets/ashram15.jpg",
  hostel: "/assets/ashram18.jpg",
  oldAge: "/assets/ashram12.jpg",
  women: "/assets/ashram17.jpg",
  music: "/assets/ashram19.jpg",
  awareness: "/assets/ashram1.jpg",
  prayer: "/assets/ashram13.jpg",
} as const;

export const impactStats = [
  { value: 40, suffix: "+", label: "Years of service", hint: "Serving without a break since 1985" },
  { value: 500, suffix: "+", label: "Lives transformed", hint: "Students, elders and women supported" },
  { value: 14, suffix: " acres", label: "Green campus", hint: "Barren land turned into forest" },
  { value: 150, suffix: "+", label: "Active volunteers", hint: "Villagers, alumni and well-wishers" },
] as const;

export const services = [
  {
    icon: "hostel",
    title: "Boys' Hostel for Backward Classes",
    description:
      "Free lodging, meals and mentoring for rural students, with health camps, yoga and personality development workshops.",
    image: images.hostel,
    stat: "120 students housed each year",
  },
  {
    icon: "elder",
    title: "Gurudas Old Age Home",
    description:
      "A family-like home for elders — daily care, medical attention, companionship and dignity in their later years.",
    image: images.oldAge,
    stat: "35 elders in full-time care",
  },
  {
    icon: "women",
    title: "Women Empowerment & Self-Help Groups",
    description:
      "Tailoring, handicraft and micro-enterprise training that helps rural women build their own independent income.",
    image: images.women,
    stat: "18 self-help groups running",
  },
  {
    icon: "music",
    title: "Gurudas Music School",
    description:
      "Classical and devotional music training for children who show aptitude, at no cost to their families.",
    image: images.music,
    stat: "60 young musicians trained",
  },
  {
    icon: "leaf",
    title: "Social Awareness & Environment",
    description:
      "Campaigns against untouchability, dowry and addiction, alongside tree plantation and village cleanliness drives.",
    image: images.awareness,
    stat: "9,000+ trees planted",
  },
  {
    icon: "book",
    title: "Gramgeeta Granth Week",
    description:
      "An annual week of readings, cultural programmes and competitions built around Rashtrasant Tukdoji Maharaj's teachings.",
    image: images.prayer,
    stat: "Held every year since 1992",
  },
] as const;

export const milestones = [
  {
    year: "1985",
    title: "The ashram is founded",
    description:
      "Inspired by Rashtrasant Tukdoji Maharaj, P.P. Shri Gurudev Maharaj establishes the ashram on 1 August 1985 with a vision of spiritual and social transformation.",
  },
  {
    year: "1986",
    title: "Land gift and afforestation",
    description:
      "Fourteen acres of barren land are donated and, over years of patient labour, turned into a shaded, self-sustaining campus.",
  },
  {
    year: "1990",
    title: "Hostel for rural students",
    description:
      "A residential hostel opens for students from marginalised communities, focused on education, confidence and self-reliance.",
  },
  {
    year: "2000",
    title: "Gurudas Old Age Home",
    description:
      "The old age home begins, offering elders a home rather than an institution — with care, companionship and respect.",
  },
  {
    year: "2010",
    title: "Women's livelihood programmes",
    description:
      "Vocational training and self-help groups launch, enabling rural women to earn independently and lead in their villages.",
  },
  {
    year: "2020",
    title: "Environment and health drives",
    description:
      "Tree plantation, water conservation and free medical camps expand the ashram's work across surrounding villages.",
  },
] as const;

export const events = [
  {
    date: "15 January",
    title: "Annual Health Camp",
    description:
      "Free medical check-ups, eye screening and consultations for residents of the ashram and nearby villages.",
    venue: "Ashram grounds, Gurudas Nagar",
  },
  {
    date: "25 February",
    title: "Spiritual Retreat",
    description:
      "A three-day retreat of meditation, kirtan and discourses on the teachings of Gurudev Maharaj.",
    venue: "Prayer hall",
  },
  {
    date: "10 March",
    title: "Volunteer Day",
    description:
      "Spend a day with our residents — teach, cook, plant trees, or simply sit and listen to their stories.",
    venue: "Across the campus",
  },
] as const;

export const donationTiers = [
  { amount: 1000, impact: "Books and stationery for one student for a full term" },
  { amount: 2500, impact: "A month of nutritious meals for an elderly resident" },
  { amount: 5000, impact: "Tailoring kit and training for one woman's livelihood" },
  { amount: 10000, impact: "Full hostel support — food, lodging and tuition — for one student for a month" },
] as const;

export const fundAllocation = [
  { label: "Welfare programmes", value: 60 },
  { label: "Infrastructure & upkeep", value: 30 },
  { label: "Administration", value: 10 },
] as const;

export const testimonials = [
  {
    quote:
      "I came to the hostel in Class 8 with nothing. The ashram fed me, taught me and believed in me. I am a schoolteacher today because of this place.",
    name: "Sandeep K.",
    role: "Hostel alumnus, 2004 batch",
  },
  {
    quote:
      "After my husband passed away, my sons could not keep me. Here I have a room, a garden and forty people who ask how I slept. This is not an institution, it is a family.",
    name: "Kamalabai P.",
    role: "Resident, Gurudas Old Age Home",
  },
  {
    quote:
      "The tailoring group changed my household. I earn my own money, my daughter stays in school, and I no longer ask anyone for permission to spend.",
    name: "Rekha M.",
    role: "Member, women's self-help group",
  },
] as const;

export const gallery = [
  { src: images.hero, title: "The main temple", description: "The prayer hall at the heart of the campus, where every day begins." },
  { src: images.gurudev, title: "Shri Gurudev Maharaj", description: "The founder's shrine, garlanded fresh each morning." },
  { src: images.founding, title: "The founding years", description: "Where the ashram began — one hall and a great deal of faith." },
  { src: images.prayer, title: "Community gatherings", description: "Villagers, students and elders at a Gramgeeta reading." },
  { src: images.campus, title: "The green campus", description: "Fourteen acres of once-barren land, now shaded and alive." },
  { src: images.hostel, title: "The students' hostel", description: "Where rural boys live, study and are mentored." },
  { src: images.oldAge, title: "Our elders", description: "Mornings on the veranda at the old age home." },
  { src: images.women, title: "Women's self-help groups", description: "Tailoring and handicraft training in progress." },
  { src: images.mission, title: "Annadan", description: "Nutritious meals served to residents and visitors every day." },
  { src: images.music, title: "Gurudas Music School", description: "Devotional and classical training for children who show aptitude." },
  { src: images.awareness, title: "Awareness drives", description: "Campaigns on cleanliness, addiction and social harmony." },
  { src: images.gate, title: "The ashram gate", description: "Open to anyone who needs it, every day of the year." },
] as const;

export const faqs = [
  {
    q: "Is my donation eligible for tax exemption?",
    a: `Yes. Donations to ${site.name} are eligible for exemption under ${site.taxSection}. Share your PAN and postal address with your transfer and we will issue a receipt within seven working days.`,
  },
  {
    q: "How is my money actually spent?",
    a: "Sixty percent goes directly to welfare programmes, thirty percent to infrastructure and upkeep of the hostel and old age home, and ten percent to administration. Annual accounts are available on request.",
  },
  {
    q: "Can I donate goods instead of money?",
    a: "Absolutely. Books and stationery, grains and food supplies, blankets and clothing, and medical equipment are all welcome. Please call ahead so we can plan storage.",
  },
  {
    q: "Can I visit before donating?",
    a: "We would prefer it. Visitors are welcome daily between 7:00 AM and 7:00 PM. Meet the students and elders, see the kitchen and the classrooms, then decide.",
  },
] as const;
