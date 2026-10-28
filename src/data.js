

// Published paper (resume labels this "DOI", but it is a web address, not a DOI).
// REVIEW: confirm the link resolves, and add the actual DOI if the journal issued one.
const PAPER_URL =
  "https://rsisinternational.org/journals/ijrsi/view/the-non-existence-of-integer-solutions-to-the-quartic-cubic-diophantine-equation-y-3-xy-x-4-4-a-complete-resolution-via-factorization-and-modular-arithmetic";

export const PROFILE = {
  first: "Aditya",
  last: "Patil",
  fullName: "Aditya Patil",
  // Drafted from the resume — the resume has no tagline of its own.
  tagline: "MATHEMATICIAN • RESEARCHER • FOUNDER",
  // Closer to the resume's own summary line, kept here in case you prefer it:
  altTagline: "Mathematics & STEM Researcher",
  location: "Bengaluru, India",
  email: "", // TODO: not stated in the resume
  phone: "", // TODO: not stated in the resume
  // REVIEW: the bio is drafted from resume facts in first person — have Aditya read it.
  bio: [
    "I'm drawn to questions that sound simple and turn out to be deep — whether an equation has any integer solutions at all, or which numbers in a non-commutative number system can be written as the sum of two primes. Number theory sits at the centre of my work, and it has grown from Olympiad preparation into independent research, a peer-reviewed publication, and presentations to national and international audiences.",
    "I'm currently in Class 12 at Global Indian International School, Whitefield, as a Global Citizen Scholar — one of 10 students selected from 11,000 applicants for a full-ride scholarship — after completing Class 10 at Podar International School, Chalisgaon, with 96/100. Under Prof. Ila Varma at the University of Toronto, I proved the non-existence of integer solutions to a previously unsolved cubic-quartic Diophantine equation; the work was published and won a Silver Medal at the IRIS National Fair. I'm now researching Hurwitz quaternions with Prof. Ramesh Shreekantan at the Indian Statistical Institute, building on coursework in number theory and Galois theory at PROMYS India, where I was a Mehta Fellow and later returned to lecture.",
    "I also like turning ideas into things people can use. I've led teams building SOLAR-SMART, a low-cost retrofit device to recover lost solar energy, and BreathNext, a bio-panel for indoor air quality developed with ASHA community members, and I built a private-equity valuation model that Motilal Oswal's team adopted for live deal screening. Through Xponentia, the initiative I founded, I've brought research guidance and mentorship to 1,000+ students across 20+ schools, many from under-resourced communities.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    // Key name kept for component compatibility; it now holds the published paper.
    achievement: PAPER_URL,
    wespa: "",
    twitter: "",
    youtube: "",
    instagram: "",
  },
  cv: "/cv.pdf", // TODO: add the resume PDF here
  photo: "/placeholder.png", // TODO: add Aditya's photo
  aboutPhoto: "/placeholder.png", // TODO: add Aditya's about-page photo
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Community & Leadership", to: "/volunteering",
  },

  { label: "Beyond Academics", to: "/sports" },
];

/* ---- Experience & engagement (renders as "Work Experience" cards) ----
   The whole card already links to /work/{slug}. Use `links` for anything
   extra: a write-up, a certificate, a video. ---- */

export const EXPERIENCE = [
  {
    slug: "uoft-number-theory-research",
    role: "Student Researcher — Number Theory",
    org: "University of Toronto (Online) — with Prof. Ila Varma",
    logo: "",
    location: "Online",
    dates: "Jun 2025 – Jan 2026",
    meta: "Jun 2025 – Jan 2026 · Online ·",
    badge: "Published Research",
    desc: "Independent number theory research under Prof. Ila Varma of the Department of Mathematics, resolving a previously unsolved Diophantine equation and extending the work into cryptography.",
    bullets: [
      "Proved the non-existence of integer solutions for a previously unsolved cubic-quartic Diophantine equation, and examined related infinite families",
      // REVIEW: "99% security" is the resume's wording; readers may ask what it measures.
      "Developed signing and verification algorithms demonstrating 99% security within the project's evaluation framework, and proposed a framework for a new post-quantum cryptosystem",
      // REVIEW: the journal's URL suggests its name is "International Journal of
      // Research and Scientific Innovation" (IJRSI); the resume says "Science Innovation".
      "Published in the International Journal of Research and Science Innovation and presented at the IRIS National Fair, earning a Silver Medal",
      "Presented at the International Mathematics and Statistics Student Research Symposium, and selected to present at the International Conference of Number Theory and Diophantine Analysis in Mauritius",
    ],
    tags: ["Number Theory", "Diophantine Equations", "Modular Arithmetic", "Cryptography", "Published Research"],
    links: [{ label: "Published Paper", href: PAPER_URL }],
    featured: true,
  },
  {
    slug: "isi-hurwitz-quaternion-research",
    role: "Student Researcher — Hurwitz Quaternions",
    // REVIEW: resume spells the mentor "Shreekantan"; the ISI mathematician's
    // name is usually spelled "Sreekantan". Confirm the spelling.
    org: "Indian Statistical Institute — with Prof. Ramesh Shreekantan",
    logo: "",
    location: "India", // TODO: resume does not say which ISI centre
    dates: "Oct 2025 – Present",
    meta: "Oct 2025 – Present · India ·",
    badge: "Research",
    desc: "Ongoing research into the additive structure of the Hurwitz quaternions, under Prof. Ramesh Shreekantan of the Department of Mathematics.",
    bullets: [
      "Investigates which Hurwitz integers can be represented as the sum of two Hurwitz primes — elements of the maximal order whose reduced norm is a rational prime",
      "Introduced a Norm Interval Theorem and formulated conjectures connected to ternary Goldbach-type questions",
      "Presented the work at the International Mathematics and Statistics Student Research Symposium",
      "Qualified among the Top 46 projects in the Asia Region in Round 1 of the S.-T. Yau High School Science Award, Mathematics category",
    ],
    tags: ["Hurwitz Quaternions", "Algebraic Number Theory", "Goldbach-type Problems", "Research"],
    links: [],
    featured: true,
  },
  {
    slug: "promys-india",
    role: "Mehta Fellow",
    org: "PROMYS India, IISc Bengaluru",
    logo: "",
    location: "Bengaluru, India",
    dates: "May 2025 – Jun 2025",
    meta: "May – Jun 2025 · Bengaluru, India ·",
    badge: "Fully Funded Fellowship",
    desc: "A highly selective, proof-intensive mathematics programme, attended on a fully funded Mehta Fellowship.",
    bullets: [
      "Completed rigorous coursework in number theory and Galois theory through proof-intensive problem sets, lectures, and collaborative exploration",
      "Received the Mehta Fellowship for fully funded participation",
      "Returned as an alumnus to deliver a lecture titled “Additive Properties of Hurwitz Quaternions”",
    ],
    tags: ["Number Theory", "Galois Theory", "Proof Writing", "Lecturing"],
    links: [],
    featured: true,
  },
  {
    slug: "yale-young-global-scholars",
    role: "Full-Ride Scholar — Innovation, Science & Technology",
    org: "Yale Young Global Scholars, Yale University",
    logo: "",
    location: "USA",
    dates: "Jul 2026",
    meta: "Jul 2026 · Yale University, USA ·",
    badge: "Full-Ride Scholar",
    desc: "A two-week on-campus programme in the Innovation, Science & Technology track, attended as a full-ride scholar.",
    bullets: [
      "Studied mathematics and medical sciences through seminars and interdisciplinary classes",
      "Completed a capstone project examining the impact of artificial intelligence on cognitive ability",
    ],
    tags: ["Mathematics", "Medical Sciences", "Artificial Intelligence", "Interdisciplinary"],
    links: [],
    featured: true,
  },
  {
    slug: "motilal-oswal-internship",
    role: "Investment Analyst Intern",
    org: "Motilal Oswal",
    logo: "",
    location: "India", // TODO: resume does not give the city
    dates: "Apr 2024 – May 2024",
    meta: "Apr – May 2024 · India ·",
    badge: "Internship",
    desc: "A six-week residential internship in private-equity analysis — the only high-school intern in the cohort.",
    bullets: [
      "Built a mathematical valuation model for private-equity investments that the team adopted for live deal screening",
      "Developed three-statement, leveraged buyout, and waterfall-distribution models to evaluate investment outcomes and capital structures",
      "Earned a letter of recommendation for performance and contribution during the internship",
    ],
    tags: ["Private Equity", "Financial Modeling", "LBO", "Valuation"],
    links: [],
    featured: true,
  },
  {
    slug: "xponentia-founder",
    role: "Founder",
    org: "Xponentia",
    logo: "",
    location: "India",
    dates: "Dec 2024 – Present",
    meta: "Dec 2024 – Present · India ·",
    badge: "Founder",
    desc: "An initiative giving high-school students — particularly those from under-resourced communities — access to research guidance, mentorship, and foundational learning resources.",
    bullets: [
      "Reached 1,000+ students across 20+ schools through educational outreach supporting independent scientific inquiry",
      "Manages a 7,000-member Telegram community that evolved from Olympiad support into a broader mathematics and STEM learning network",
    ],
    tags: ["Founder", "STEM Access", "Mentorship", "Community Building"],
    links: [],
    featured: true,
  },
  {
    slug: "seva-pledge-a-smile",
    // REVIEW: the resume's heading says "Project Lead, Fundraiser & Social Media
    // Manager", but its bullet says he advanced to "Social Media and Fundraising
    // Intern". Confirm the current title.
    role: "Project Lead, Fundraiser & Social Media Manager",
    org: "SEVA under Pledge a Smile Foundation",
    logo: "",
    location: "India",
    dates: "Dec 2023 – Present",
    meta: "Dec 2023 – Present · India ·",
    badge: "Volunteer",
    desc: "Fundraising, campaigns and on-the-ground food drives for vulnerable communities.",
    bullets: [
      "Advanced from core volunteer to Social Media and Fundraising Intern based on sustained contribution",
      "Raised USD 2,500 through targeted digital-marketing, social-media, and fundraising campaigns",
      "Organised three on-the-ground food drives, and created posters, stickers, reels, advertisements, and campaign materials",
    ],
    tags: ["Fundraising", "Social Media", "Community Service"],
    links: [],
    featured: false,
  },
  {
    slug: "alpha-pi-rates-math-club",
    role: "Founder",
    // REVIEW: founded Jan 2023, when Aditya was at Podar International School,
    // Chalisgaon — but listed as "Present" after his move to GIIS. Confirm which
    // school the club belongs to and whether he still runs it.
    org: "Alpha Pi-rates Mathematics Club",
    logo: "",
    location: "India",
    dates: "Jan 2023 – Present",
    meta: "Jan 2023 – Present · India ·",
    badge: "Founder",
    desc: "The school's first mathematics club, built into a 22-member community of students and teachers.",
    bullets: [
      "Founded the school's first mathematics club and built a 22-member community of students and teachers",
      "Guides peers in proof techniques, advanced problem-solving, and preparation for mathematics competitions",
      "Represented the school at mathematics meets including the Stanford Math Tournament and Purple Comet! Math Meet",
    ],
    tags: ["Mathematics", "Peer Mentoring", "Competition Math"],
    links: [],
    featured: false,
  },
];

/* ---- Projects ----
   `link` makes the whole card clickable (a live site, a repo, a paper).
   `links` adds a named row instead — use it when there are several. ---- */

export const PROJECTS = [
  {
    // REVIEW: the paper's title says "quartic-cubic"; the resume text says
    // "cubic-quartic". Match whichever the published title uses.
    name: "Integer Solutions of a Cubic-Quartic Diophantine Equation",
    org: "University of Toronto (Online) · Published Research",
    meta: "Published · IRIS National Fair Silver Medal",
    desc: "A complete resolution, via factorization and modular arithmetic, showing that a previously unsolved cubic-quartic Diophantine equation has no integer solutions, together with an examination of related infinite families. Published in the International Journal of Research and Science Innovation, it ranked 2nd among 15,000 submissions at the IRIS National Fair and was selected for the International Conference of Number Theory and Diophantine Analysis in Mauritius.",
    tags: ["Number Theory", "Diophantine Equations", "Modular Arithmetic", "Published", "Award-winning"],
    link: PAPER_URL,
    links: [],
    featured: true,
  },
  {
    name: "Sums of Two Hurwitz Primes",
    org: "Indian Statistical Institute",
    meta: "Ongoing · S.-T. Yau Asia Top 46",
    desc: "Research into which Hurwitz integers can be written as the sum of two Hurwitz primes. The work introduces a Norm Interval Theorem and formulates conjectures connected to ternary Goldbach-type questions, and ranked among Asia's Top 46 mathematics projects in Round 1 of the S.-T. Yau High School Science Award.",
    tags: ["Hurwitz Quaternions", "Number Theory", "Conjectures", "Research"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "Signature Algorithms & Post-Quantum Cryptosystem Framework",
    org: "University of Toronto (Online)",
    meta: "Cryptography",
    desc: "Signing and verification algorithms developed alongside the Diophantine research, demonstrating 99% security within the project's evaluation framework, together with a proposed framework for a new post-quantum cryptosystem.",
    tags: ["Cryptography", "Post-Quantum", "Digital Signatures"],
    link: "",
    links: [],
    featured: true,
  },
  {
    name: "SOLAR-SMART: Intelligent Solar-Energy Retrofit Device",
    org: "Team Lead · New York Junior Academy of Sciences Energy Infrastructure Challenge",
    meta: "Aug 2023 – Present · Projects of Distinction",
    // REVIEW: "SER-1 engine" is the resume's term — add a short explanation if
    // visitors won't know what it is.
    desc: "A compact, low-cost retrofit device that uses the SER-1 engine to route energy automatically, protect battery health through smart thresholds, and alert users to performance drops. Designed to address dust accumulation and battery degradation, with the goal of recovering 20–30% more usable solar energy. Led a six-student team, supported renewable-energy adoption for 30+ households, and earned a Projects of Distinction award — Top 11 of 400 teams.",
    tags: ["Renewable Energy", "Hardware", "Team Leadership", "Award-winning"],
    link: "",
    links: [{ label: "Project Portfolio", href: "https://drive.google.com/file/d/1o4sifzjBZ28RP_fcQ1tIHJ166_ywMHGT/view?usp=sharing" }],
    featured: true,
  },
  {
    name: "BreathNext: Portable Passive Bio-Panel for Indoor Air Quality",
    org: "Team Lead · Four-member school research team",
    meta: "Oct 2025 – Present · GIIS Young Scientist Challenge Winner",
    desc: "An AI-integrated synthetic-biology device designed to detect indoor pollutants and reduce wall dampness and respiratory-health risks. Data collection and field research are carried out with ASHA community members. Won the GIIS Young Scientist Challenge and qualified for Round 1 of the S.-T. Yau High School Science Award, Asia Region, Biology category.",
    tags: ["Synthetic Biology", "Air Quality", "Public Health", "AI", "Award-winning"],
    link: "",
    links: [{ label: "Project", href: "https://drive.google.com/drive/folders/1uSoANOW0_xid1Qqz0Nf0ba_zKPA2rYy-" }],
    featured: true,
  },
  {
    name: "Private-Equity Valuation Model",
    org: "Motilal Oswal",
    meta: "Adopted for live deal screening",
    desc: "A mathematical valuation model for private-equity investments, adopted by the team for live deal screening, alongside three-statement, leveraged buyout, and waterfall-distribution models.",
    tags: ["Financial Modeling", "Private Equity", "Valuation"],
    link: "",
    links: [],
    featured: false,
  },
  {
    name: "AI and Cognitive Ability — Capstone",
    org: "Yale Young Global Scholars",
    meta: "Jul 2026",
    desc: "A capstone project examining the impact of artificial intelligence on cognitive ability, completed in the Innovation, Science & Technology track.",
    tags: ["Artificial Intelligence", "Cognitive Science", "Capstone"],
    link: "",
    links: [],
    featured: false,
  },
  {
    name: "Additive Properties of Hurwitz Quaternions — Alumni Lecture",
    org: "PROMYS India, IISc Bengaluru",
    meta: "Invited lecture",
    desc: "A lecture delivered to PROMYS India participants after returning to the programme as an alumnus.",
    tags: ["Hurwitz Quaternions", "Lecturing"],
    link: "",
    links: [],
    featured: false,
  },
];

/* ---- Achievements ----
   `link` makes the whole row clickable. `links` adds named links below
   the description — handy for "Certificate" plus "Write-up". ---- */

export const AWARDS = [
  {
    icon: "🥈",
    title: "Silver Medal — IRIS National Fair",
    meta: "Mathematics · Ranked 2nd of 15,000 submissions",
    // REVIEW: confirm whether 15,000 is the Mathematics category or the whole fair.
    detail: "Ranked 2nd among 15,000 submissions (Top 0.013%) in the Mathematics category for independent research in pure mathematics and cryptography.",
    link: "",
    links: [{ label: "Published paper", href: PAPER_URL }],
    featured: true,
  },
  {
    icon: "🌏",
    title: "S.-T. Yau High School Science Award — Asia Top 46",
    meta: "Round 1 · Mathematics & Biology",
    detail: "Qualified Round 1 in both Mathematics and Biology; the Mathematics project on Hurwitz quaternions ranked among Asia's Top 46.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🧮",
    title: "Indian National Mathematical Olympiad Qualifier",
    meta: "Top 900 of 100,000+",
    detail: "Qualified for INMO after clearing IOQM and RMO, placing in the top 900 of more than 100,000 competitors nationwide.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🎓",
    title: "Global Citizen Scholarship — GIIS",
    meta: "1 of 10 from 11,000 applicants",
    detail: "One of 10 students selected from 11,000 applicants for a full-ride scholarship at Global Indian International School.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "📐",
    title: "Mehta Fellowship — PROMYS India",
    meta: "IISc Bengaluru · 2025",
    detail: "Fully funded fellowship for the highly selective PROMYS India programme.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🇺🇸",
    title: "Yale Young Global Scholars — Full-Ride Scholar",
    meta: "Jul 2026 · Innovation, Science & Technology",
    detail: "Attended the two-week on-campus programme at Yale University on a full-ride scholarship.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "☀️",
    title: "Projects of Distinction — NYAS Energy Infrastructure Challenge",
    meta: "Top 11 of 400 teams",
    detail: "Awarded by the New York Junior Academy of Sciences for SOLAR-SMART, an intelligent solar-energy retrofit device.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🔬",
    title: "Winner — GIIS Young Scientist Challenge",
    meta: "BreathNext",
    detail: "Won for BreathNext, an affordable respiratory-health platform for indoor air quality.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🥇",
    title: "First Place in India — Purple Comet! Math Meet",
    meta: "Small High School category · 30/30",
    detail: "Scored a perfect 30/30 to place first in India in the Small High School category.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🏅",
    title: "Stanford Math Tournament — Two Honorable Mentions",
    meta: "Number Theory & Calculus",
    detail: "Received Honorable Mentions in both Number Theory and Calculus.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🎤",
    title: "Dual Presenter — IMSSRS Symposium",
    meta: "International Mathematics and Statistics Student Research Symposium",
    detail: "Selected for live and asynchronous presentations on Diophantine equations, cryptography, and quaternions.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "🇲🇺",
    title: "Selected Presenter — International Conference of Number Theory and Diophantine Analysis",
    meta: "Mauritius",
    detail: "Selected to present the Diophantine equation research at the conference in Mauritius.",
    link: "",
    links: [],
    featured: true,
  },
  {
    icon: "📊",
    title: "All India Rank 16 — TALLENTEX 2024",
    meta: "300/320 · 90% scholarship",
    detail: "Scored 300/320 in the national STEM talent search, earning a 90% scholarship.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "📊",
    title: "All India Rank 24 — PW-NSAT",
    meta: "Top 0.01% nationally",
    // REVIEW: the resume does not say how many took the test; confirm "Top 0.01%".
    detail: "Ranked in the top 0.01% nationally, receiving a 90% scholarship and a cash award.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "📊",
    title: "100% Tuition Scholarship — FIITJEE Talent Reward Exam",
    meta: "220/275",
    detail: "Scored 220/275 and earned a complete tuition waiver.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🏫",
    title: "Jawahar Navodaya Vidyalaya Selection Test",
    meta: "Seven-year government scholarship",
    detail: "Selected for a fully funded seven-year government scholarship.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🌍",
    title: "International Rank 12 — SOF Mathematics Olympiad",
    meta: "2024 · Rank 150 in 2023",
    detail: "Achieved International Rank 12 in 2024, up from Rank 150 in 2023.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🏆",
    title: "National Finalist — SilverZone Olympiads",
    meta: "Mathematics, English & Science",
    detail: "Level 3 qualifier in Mathematics and English; Level 2 in Science.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🌿",
    title: "Top 1% Nationally — TERI Green Olympiad",
    meta: "2023 & 2024",
    detail: "Two-time Certificate of Excellence recipient.",
    link: "",
    links: [],
    featured: false,
  },
  {
    icon: "🎖️",
    title: "CBSE & Institutional Honors",
    meta: "100/100 in Class 10 English",
    detail: "Scored 100/100 in Class 10 English; received the Academic Excellence, Math Maestro, Best English Communicator, and GIIS Young Scientist awards.",
    link: "",
    links: [],
    featured: false,
  },
];

/* ---- Areas of interest & independent learning ---- */

export const ARTICLES = [
  {
    title: "Number Theory & Diophantine Equations",
    outlet: "Integer solutions, factorization, and modular arithmetic — from Olympiad problems to a published resolution of an unsolved equation",
    link: PAPER_URL,
    links: [],
  },
  {
    title: "Hurwitz Quaternions & Additive Problems",
    outlet: "Sums of Hurwitz primes, the Norm Interval Theorem, and ternary Goldbach-type questions",
    link: "",
    links: [],
  },
  {
    title: "Algebra & Galois Theory",
    outlet: "Proof-intensive study through PROMYS India at IISc Bengaluru",
    link: "",
    links: [],
  },
  {
    title: "Cryptography",
    outlet: "Signing and verification algorithms, and a proposed framework for a post-quantum cryptosystem",
    link: "",
    links: [],
  },
  {
    title: "Renewable Energy & Applied Engineering",
    outlet: "Low-cost solar retrofits that protect battery health and recover lost energy",
    link: "",
    links: [],
  },
  {
    title: "Synthetic Biology & Public Health",
    outlet: "Affordable indoor air-quality monitoring and field research with ASHA community members",
    link: "",
    links: [],
  },
  {
    title: "Finance & Quantitative Modeling",
    outlet: "Private-equity valuation, three-statement, leveraged buyout, and waterfall-distribution models",
    link: "",
    links: [],
  },
  {
    title: "STEM Access & Education",
    outlet: "Research guidance and mentorship for students from under-resourced communities through Xponentia",
    link: "",
    links: [],
  },
];

/* ---- Leadership, service & activities ----
   Stats take a single `link` (the chip becomes clickable).
   Orgs take `link` for the whole card and `links` for named links. ---- */

export const VOLUNTEER = {
  stats: [
    // Other numbers from the resume you could swap in:
    // { value: "20+", label: "Schools Reached by Xponentia" },
    // { value: "30+", label: "Households Supported with Solar Adoption" },
    { value: "1,000+", label: "Students Reached", link: "" },
    { value: "7,000", label: "Members in the STEM Telegram Community", link: "" },
    { value: "USD 2,500", label: "Raised for SEVA", link: "" },
  ],
  orgs: [
    {
      name: "Xponentia",
      role: "Founder · Dec 2024 – Present",
      desc: "Founded an initiative giving high-school students, particularly those from under-resourced communities, access to research guidance, mentorship, and foundational learning resources. It has reached 1,000+ students across 20+ schools, and its 7,000-member Telegram community has grown from Olympiad support into a broader mathematics and STEM learning network.",
      link: "",
      links: [],
    },
    {
      name: "SEVA under Pledge a Smile Foundation",
      role: "Project Lead, Fundraiser & Social Media Manager · Dec 2023 – Present", // REVIEW: see title note under EXPERIENCE
      desc: "Advanced from core volunteer to Social Media and Fundraising Intern. Raised USD 2,500 through digital-marketing, social-media, and fundraising campaigns, organised three on-the-ground food drives, and created posters, stickers, reels, advertisements, and campaign materials for vulnerable communities.",
      link: "",
      links: [],
    },
    {
      name: "SOLAR-SMART Community Outreach",
      role: "Team Lead",
      desc: "Supported renewable-energy adoption for 30+ households through awareness initiatives, installation assistance, and guidance on accessing subsidies.",
      link: "",
      links: [],
    },
  ],
};

/* ---- Beyond academics (renders on the /sports route) ----
   REVIEW: the resume lists no sports, music or hobbies, so this section
   holds competitions, finance, speaking and outreach instead. Add any
   sports or hobbies Aditya has, or hide the route.
   `links` is the useful one here — clubs, performance videos,
   certificates — since one activity usually has several. ---- */

export const SPORTS = [
  {
    icon: "🧮",
    name: "Competitive Mathematics",
    desc: "INMO qualifier after clearing IOQM and RMO, placing in the top 900 of 100,000+ competitors. First in India at the Purple Comet! Math Meet with a perfect 30/30, two Honorable Mentions at the Stanford Math Tournament, International Rank 12 at the SOF Mathematics Olympiad, and a SilverZone Olympiads national finalist.",
    link: "",
    links: [],
  },
  {
    icon: "🎤",
    name: "Research Presentations & Lecturing",
    desc: "Dual presenter at the International Mathematics and Statistics Student Research Symposium, Silver Medal presenter at the IRIS National Fair, selected presenter at the International Conference of Number Theory and Diophantine Analysis in Mauritius, and an alumni lecturer at PROMYS India.",
    link: "",
    links: [],
  },
  {
    icon: "📈",
    name: "Finance & Investment",
    desc: "The only high-school intern in a six-week residential cohort at Motilal Oswal, building a private-equity valuation model the team adopted for live deal screening, plus three-statement, LBO, and waterfall-distribution models. Earned a letter of recommendation.",
    link: "",
    links: [],
  },
  {
    icon: "🔬",
    name: "Science & Innovation Challenges",
    desc: "Projects of Distinction at the New York Junior Academy of Sciences Energy Infrastructure Challenge (Top 11 of 400), winner of the GIIS Young Scientist Challenge, S.-T. Yau Round 1 qualifier in Mathematics and Biology, and twice in the top 1% nationally at the TERI Green Olympiad.",
    link: "",
    links: [],
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Mathematics & Research",
    items: ["Number Theory", "Diophantine Equations", "Galois Theory", "Cryptography", "Hurwitz Quaternions", "Mathematical Proof Writing", "Modular Arithmetic"],
  },
  {
    group: "Scientific & Product Development",
    items: ["AI-assisted Prototyping", "Renewable-Energy Systems", "Field Data Collection", "Community Testing"],
    // TODO: the resume names no programming languages — add any Aditya uses.
  },
  {
    group: "Financial Modeling",
    items: ["Private-Equity Valuation", "Three-Statement Modeling", "Leveraged Buyout Modeling", "Waterfall Distributions"],
  },
  {
    group: "Speaking & Leadership",
    items: ["Research Presentation", "Lecturing", "Team Leadership", "Peer Mentoring", "Community Management", "Fundraising", "Digital Marketing"],
  },
  {
    group: "Languages",
    items: ["English"],
    // TODO: the resume lists no languages; English is inferred from his CBSE
    // English score. Add the others he speaks.
  },
];

/* ---- Education ---- */

export const EDUCATION = [
  {
    school: "Global Indian International School, Whitefield",
    location: "Bengaluru, India",
    level: "CBSE — Class 12",
    dates: "Expected May 2027",
    gpa: "Grade 11: 92/100 · Global Citizen Scholar (full-ride scholarship)",
    coursework: [], // TODO: the resume does not list Class 11–12 subjects
    link: "",
    links: [],
  },
  {
    school: "Podar International School",
    location: "Chalisgaon, Maharashtra",
    level: "CBSE — Class 10",
    dates: "May 2025",
    // REVIEW: the resume says "CBSE National Topper in English". CBSE no longer
    // publishes national merit lists, so this wording may be questioned —
    // "100/100 in English" (as used below) is the safer claim.
    gpa: "Class 10: 96/100 · Grade 9: 95/100 · 100/100 in English",
    coursework: [],
    link: "",
    links: [],
  },
];

/* ---- Test scores — kept empty to match the reference file, whose shape for
   this list is not shown. Competitive exam scores (TALLENTEX 300/320,
   FIITJEE 220/275, Purple Comet 30/30) live under AWARDS instead.
   Export kept so any component importing it does not break. ---- */

export const TEST_SCORES = [];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Community & Leadership", to: "/volunteering" },
  { label: "Beyond Academics", to: "/sports" },
];

/* Entries with an empty href are filtered out by the Footer. */
export const FOOTER_PROFILES = [
  { label: "LinkedIn", href: PROFILE.socials.linkedin },
  { label: "GitHub", href: PROFILE.socials.github },
  { label: "YouTube", href: PROFILE.socials.youtube },
  { label: "Instagram", href: PROFILE.socials.instagram },
  { label: "Published Research Paper", href: PROFILE.socials.achievement },
];
