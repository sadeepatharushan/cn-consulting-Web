import { Calendar, Home, Inbox, BookMarked, GraduationCap, ScrollText, Users } from "lucide-react"


export const navlinks = ['Home', 'About', 'Services', 'Universities', 'Blog']

export const heroImages = [
  "/hero1.png",
  "/hero2.jpg",
];

export const aboutUsPara = 'Welcome to [Agency Name], a trusted visa consultancy agency in Sri Lanka dedicated to helping students achieve their academic dreams in Russia. With a commitment to excellence and personalized service, we specialize in guiding students through every step of the process, from selecting the perfect university to securing a student visa. Our experienced team works closely with top Russian universities to provide access to diverse educational opportunities in fields like medicine, engineering, IT, and more. We pride ourselves on transparency, reliability, and a deep understanding of the unique challenges faced by Sri Lankan students. At [Agency Name], we don’t just help you get to Russia; we ensure you are fully prepared for your academic journey, offering support in documentation, language preparation, and cultural orientation. Join us to turn your study-abroad aspirations into reality.'

export const services = [
    {
      title: "Service One",
      description: "Description of service one and its key benefits to your customers.",
      image: "/service1.png"
    },
    {
      title: "Service Two",
      description: "Description of service two and its key benefits to your customers.",
      image: "/service2.jpg"
    },
    {
      title: "Service Three",
      description: "Description of service three and its key benefits to your customers.",
      image: "/service3.jpg"
    }
  ]

  export const faqItems = [
    {
      question: "Why study abroad?",
      answer: "Studying abroad offers unique opportunities for personal growth, cultural immersion, and academic excellence. You'll gain international experience, learn new languages, and develop a global perspective that's valuable for your future career."
    },
    {
      question: "Where and what to study?",
      answer: "Choose from a wide range of destinations and programs based on your academic interests, career goals, and personal preferences. Consider factors like language of instruction, course availability, and cultural environment."
    },
    {
      question: "How do I apply?",
      answer: "The application process involves selecting your program, preparing necessary documents (transcripts, letters of recommendation, language certificates), and submitting your application by the deadline. Our advisors can guide you through each step."
    },
    {
      question: "After receiving an offer",
      answer: "Once you receive an offer, you'll need to accept it formally, pay any required deposits, and begin planning for your stay abroad. This includes arranging accommodation and applying for your student visa."
    },
    {
      question: "Prepare to depart",
      answer: "Preparation involves securing your visa, booking flights, arranging accommodation, and ensuring you have all necessary documentation. We provide a pre-departure checklist to help you stay organized."
    },
    {
      question: "Arrive and thrive",
      answer: "Upon arrival, attend orientation sessions, set up your living space, and begin exploring your new environment. We offer support services to help you adjust and make the most of your study abroad experience."
    }
  ]

  export const testimonials = [
    {
      text: "Thanks to [Agency Name], my dream of studying medicine in Russia came true! The team was incredibly supportive, guiding me through every step of the application and visa process. They made everything so easy and stress-free. I highly recommend their services to any student looking to study abroad.",
      name: "BINADI CHITHMA",
      location: "SRI LANKA",
      image: "/testimonial1.jpg"
    },
    {
      text: "I was overwhelmed by the thought of studying in a foreign country, but [Agency Name] made it all possible. From choosing the right university to preparing my visa documents, they were with me every step of the way. Now, I’m pursuing my engineering degree in Russia, and it’s all thanks to them!",
      name: "VIMUKTHI PERERA",
      location: "SRI LANKA",
      image: "/testimonial2.jpeg"
    },
    {
      text: "What sets [Agency Name] apart is their personalized approach. They genuinely cared about my goals and helped me secure admission to a top IT program in Russia. The team even prepared me for life in a new country, which made my transition so smooth. I couldn’t have done it without them!",
      name: "RAVEESHA DISSANAYAKE",
      location: "SRI LANKA",
      image: "/testimonial3.jpg"
    }
  ]

  export const dashboardMenuItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Consultations",
      icon: Inbox,
      url: "",
      subItems: [
          // { title: "Add Consultation", url: "/dashboard/consultations/add" },
          { title: "All Consultations", url: "/dashboard/consultations" },
        ],
    },
    {
      title: "Blogs",
      icon: Calendar,
      url: "",
      subItems: [
        { title: "Add Blog", url: "/dashboard/blogs/add" },
        { title: "All Blogs", url: "/dashboard/blogs" },
      ],
    },
  ]

export const stats = [
  {
    icon: <BookMarked />,
    number: 15,
    label: "YEARS OF EXPERIENCE"
  },
  {
    icon: <ScrollText />,
    number: 1000,
    label: "CERTIFIED COURSES"
  },
  {
    icon: <GraduationCap />,
    number: 100,
    label: "SATISFIED STUDENTS"
  },
  {
    icon: <Users />,
    number: 100,
    label: "SATISFIED PARENTS"
  }
]

//universities
export const universityData = [
  {
    name: "Yakovlev Chuvash State Pedagogical University",
    slug: "yakovlev-chuvash-state-pedagogical-university",
    image: "/uni1.jpg",
    description: "Yakovlev Chuvash State Pedagogical University is a modern higher educational institution and a regional center for innovative development. Founded in 1930, it provides quality education in diverse fields, with a focus on preparing competent professionals.",
    website: "http://1.chgpu.edu.ru/novosti-na-angliyskom/",
    departments: [
      "Informatics and Computer Engineering",
      "Applied Mathematics",
      "Physics and Information Technology",
      "Civil Engineering",
      "Medicine",
      "Economics",
      "Foreign Languages",
      "Law"
    ]
  },
  {
    name: "Chuvash State Agrarian University",
    slug: "chuvash-state-agrarian-university",
    image: "/uni2.png",
    description: "Chuvash State Agrarian University is dedicated to advancing agriculture and biotechnology. It trains specialists in sustainable practices and modern agricultural technologies.",
    website: "http://academy21.ru/",
    departments: [
      "Biotechnology and Agronomy",
      "Engineering",
      "Veterinary Medicine",
      "Economics",
      "Land Management",
      "Crop Production"
    ]
  },
  {
    name: "Samara University (Samara National Research University)",
    slug: "samara-university",
    image: "/uni3.jpg",
    description: "Samara University is renowned for its programs in aerospace, rocket engineering, and high-tech industries. It attracts students globally and is recognized for its innovative research.",
    website: "https://ssau.ru/english",
    departments: [
      "Aerospace Engineering",
      "Economics and Management",
      "IT and Cybernetics",
      "Natural Sciences",
      "Social Sciences",
      "Law"
    ]
  },
  {
    name: "Yaroslavl State Technical University (YSTU)",
    slug: "yaroslavl-state-technical-university",
    image: "/uni4.jpg",
    description: "YSTU is a leading technical university in the Yaroslavl region, offering quality education in engineering, chemistry, and architecture, with a strong focus on innovation and career readiness.",
    website: "https://www.ystu.ru/information/langs/en-do-you-speak/",
    departments: [
      "Architecture and Design",
      "Mechanical Engineering",
      "Economics",
      "Chemical Technology",
      "Software Engineering",
      "Construction"
    ]
  },
  {
    name: "Lobachevsky State University of Nizhny Novgorod (UNN)",
    slug: "lobachevsky-state-university-of-nizhny-novgorod",
    image: "/uni5.jpeg",
    description: "Lobachevsky University, a National Research University, offers research-based education in a wide range of disciplines. It is a hub for innovation and a member of the European University Association.",
    website: "http://eng.unn.ru/",
    departments: [
      "Biology and Biomedicine",
      "Information Technology",
      "World History",
      "Economics",
      "Law",
      "Chemistry",
      "Physics"
    ]
  },
  {
    name: "Kazan Innovative University (IEML)",
    slug: "kazan-innovative-university",
    image: "/uni6.jpg",
    description: "Kazan Innovative University is one of the top private universities in Russia, known for its excellence in hospitality, management, and innovative educational technologies.",
    website: "https://ieml.ru/en/about/general-information/",
    departments: [
      "Economics",
      "Management",
      "Psychology and Pedagogy",
      "Law",
      "Tourism and Food Service",
      "Design"
    ]
  }
];
