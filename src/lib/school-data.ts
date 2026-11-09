/** School details and photos supplied for the Samarqand shahar 29-maktab site. */
export const school = {
  name: "29-maktab",
  fullName: "Samarqand shahar 29-maktabi",
  description: "Ta’lim va maktab hayotidan lavhalar.",
  location: "Samarqand shahri",
  address: {
    street: "Buyuk Ipak Yo‘li, 44",
    region: "Samarqand viloyati, O‘zbekiston",
  },
  mapUrl:
    "https://www.openstreetmap.org/search?query=" +
    encodeURIComponent(
      "Buyuk Ipak Yo‘li 44, Samarqand shahri, Samarqand viloyati, Uzbekistan",
    ),
  heroImage: "/images/school/school-building.png",
  contacts: [
    {
      label: "Telegram",
      value: "@samarkand29maktab",
      href: "https://t.me/samarkand29maktab",
      external: true,
    },
    {
      label: "Instagram",
      value: "@29maktab_official",
      href: "https://www.instagram.com/29maktab_official",
      external: true,
    },
  ],
  stats: [{ value: "2 100+", label: "o‘quvchi" }],
} as const;

export const navigation = [
  { label: "Maktab haqida", href: "#maktab" },
  { label: "Ta’lim", href: "#talim" },
  { label: "Maktab hayoti", href: "#hayot" },
  { label: "Galereya", href: "#galereya" },
] as const;

export const learning = [
  {
    id: "boshlangich",
    title: "Boshlang‘ich ta’lim",
    range: "1–4-sinflar",
    description:
      "Katta kashfiyotlar kichik savollardan boshlanadi. O‘qish, yozish va hisoblashni qiziqarli mashg‘ulotlar orqali o‘rganamiz.",
    subjects: [
      "Ona tili va o‘qish",
      "Matematika",
      "Tabiiy fanlar",
      "Ijodiy mashg‘ulotlar",
    ],
  },
  {
    id: "umumiy",
    title: "Umumiy o‘rta ta’lim",
    range: "5–9-sinflar",
    description:
      "Savol beramiz, izlanamiz va birgalikda yechim topamiz. Fanlarni chuqurroq o‘rganib, har bir o‘quvchining qiziqishlarini qo‘llab-quvvatlaymiz.",
    subjects: [
      "Aniq va tabiiy fanlar",
      "Xorijiy tillar",
      "Tarix va adabiyot",
      "Informatika",
    ],
  },
  {
    id: "yuqori",
    title: "Yuqori sinflar",
    range: "10–11-sinflar",
    description:
      "Kelajakdagi yo‘nalishni ongli tanlashga tayyorlanamiz. Mustaqil fikrlash, amaliy loyihalar va puxta bilimga e’tibor qaratamiz.",
    subjects: [
      "Fanlar bo‘yicha tayyorgarlik",
      "Amaliy loyihalar",
      "Kasbga yo‘naltirish",
      "Mustaqil izlanish",
    ],
  },
] as const;

export const activities = [
  {
    name: "Maktab kutubxonasi",
    description: "Maktab kutubxonasining ichki ko‘rinishi.",
    image: "/images/school/library.png",
    alt: "Maktab kutubxonasidagi kitob javonlari",
  },
  {
    name: "Musiqa xonasi",
    description: "Musiqa darsidan olingan surat.",
    image: "/images/school/music-class-1.png",
    alt: "O‘quvchilar musiqa xonasida darsda",
  },
  {
    name: "Sinf xonasi",
    description: "O‘quvchilar dars jarayonida.",
    image: "/images/school/classroom-2.png",
    alt: "O‘quvchilar sinf xonasida darsda",
  },
] as const;

export const highlights = [
  {
    title: "Maktab binosi",
    description: "Samarqand shahar 29-maktabining tashqi ko‘rinishi.",
    image: "/images/school/school-campus.png",
    alt: "Maktab binosi va old maydoni",
  },
  {
    title: "Dars jarayonidan",
    description: "O‘quvchilar sinf xonasida darsda.",
    image: "/images/school/classroom-1.png",
    alt: "O‘quvchilar sinf xonasida o‘tiribdi",
  },
] as const;

export const gallery = [
  {
    src: "/images/school/school-gate.png",
    alt: "29-maktab yozuvi tushirilgan kirish darvozasi",
    label: "Maktab darvozasi",
  },
  {
    src: "/images/school/school-campus.png",
    alt: "Maktab binosi va old maydoni",
    label: "Maktab binosi",
  },
  {
    src: "/images/school/school-building.png",
    alt: "Maktab binosining old ko‘rinishi",
    label: "Maktab hovlisi",
  },
  {
    src: "/images/school/classroom-1.png",
    alt: "O‘quvchilar sinf xonasida o‘tiribdi",
    label: "Sinf xonasi",
  },
  {
    src: "/images/school/classroom-2.png",
    alt: "O‘quvchilar dars jarayonida",
    label: "Dars jarayoni",
  },
  {
    src: "/images/school/library.png",
    alt: "Maktab kutubxonasidagi kitob javonlari",
    label: "Maktab kutubxonasi",
  },
  {
    src: "/images/school/music-class-1.png",
    alt: "O‘quvchilar musiqa xonasida darsda",
    label: "Musiqa xonasi",
  },
  {
    src: "/images/school/music-class-2.png",
    alt: "Musiqa xonasidagi o‘quvchilar va cholg‘u asboblari",
    label: "Musiqa darsi",
  },
  {
    src: "/images/school/classroom-3.png",
    alt: "O‘quvchilar partalarda sinfda o‘tiribdi",
    label: "Sinfdagi o‘quvchilar",
  },
] as const;
