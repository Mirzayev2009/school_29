/** Replace this demo content and the stock images with the school's real material. */
export const school = {
  name: "29-maktab",
  fullName: "29-sonli umumta’lim maktabi",
  description: "Bilim, do‘stlik va yangi kashfiyotlar maskani.",
  demo: true,
  location: "Toshkent shahri",
  address: {
    street: "Amir Temur shohko‘chasi, 29-uy",
    district: "Yunusobod tumani",
    postalCode: "100084",
  },
  mapUrl:
    "https://www.openstreetmap.org/search?query=" +
    encodeURIComponent(
      "Amir Temur shohko‘chasi 29, Yunusobod tumani, Toshkent, 100084",
    ),
  contacts: [
    {
      label: "Telefon",
      value: "+998 (71) 000-00-29",
      href: "tel:+998710000029",
      external: false,
    },
    {
      label: "Telegram",
      value: "@maktab29_demo",
      href: "https://t.me/maktab29_demo",
      external: true,
    },
    {
      label: "Instagram",
      value: "@maktab29_demo",
      href: "https://www.instagram.com/maktab29_demo/",
      external: true,
    },
  ],
  contactNote:
    "Manzil, telefon va ijtimoiy tarmoq hisoblari namuna sifatida keltirilgan.",
  stats: [
    { value: "1–11", label: "ta’lim sinflari" },
    { value: "1 200+", label: "bilimga intiluvchi o‘quvchi" },
    { value: "72", label: "fidoyi ustoz" },
  ],
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

export const teachers = [
  {
    name: "Dilnoza Karimova",
    role: "Maktab direktori",
    image: "/images/demo/teacher-dilnoza.webp",
    position: "50% 35%",
  },
  {
    name: "Aziz Rahimov",
    role: "Matematika o‘qituvchisi",
    image: "/images/demo/teacher-aziz.webp",
    position: "50% 40%",
  },
  {
    name: "Nargiza Sobirova",
    role: "Ingliz tili o‘qituvchisi",
    image: "/images/demo/teacher-nargiza.webp",
    position: "50% 35%",
  },
] as const;

export const activities = [
  {
    name: "Sport va jamoaviy ruh",
    description: "Harakat, sog‘lom raqobat va bir-birini qo‘llab-quvvatlash.",
    image: "/images/demo/sports.webp",
    alt: "Sport zalidagi basketbol maydoni",
  },
  {
    name: "Ijod uchun erkinlik",
    description: "Ranglar, g‘oyalar va o‘zini yangicha ifodalash imkoniyati.",
    image: "/images/demo/art.webp",
    alt: "Rassomlik mashg‘uloti uchun bo‘yoq va mo‘yqalamlar",
  },
  {
    name: "Kitob bilan do‘stlik",
    description: "Yangi hikoyalar orqali dunyoni kengroq ko‘rish.",
    image: "/images/demo/library.webp",
    alt: "Kitoblar bilan to‘la yorug‘ kutubxona",
  },
] as const;

export const highlights = [
  {
    title: "Kichik tadqiqot, katta qiziqish",
    description:
      "O‘quvchilar tayyorlagan tajribalar va ilmiy loyihalar ko‘rgazmasi.",
    image: "/images/demo/science.webp",
    alt: "Ilmiy tajriba uchun laboratoriya jihozlari",
  },
  {
    title: "G‘oyalar jamoada ulg‘ayadi",
    description:
      "Bilim almashish, savol berish va yangi yechimlarni birgalikda topish.",
    image: "/images/demo/students.webp",
    alt: "Birgalikda bilim olayotgan o‘quvchilar",
  },
] as const;

export const gallery = [
  {
    src: "/images/demo/classroom.webp",
    alt: "Darsda o‘qituvchini tinglayotgan o‘quvchilar",
    label: "Dars jarayonidan",
  },
  {
    src: "/images/demo/campus.webp",
    alt: "Partalar va doska joylashgan sinfxona",
    label: "Maktab muhiti",
  },
  {
    src: "/images/demo/reading.webp",
    alt: "Kitob o‘qish va mustaqil o‘rganish",
    label: "Kitobxonlik",
  },
  {
    src: "/images/demo/science.webp",
    alt: "Laboratoriyadagi ilmiy jihozlar",
    label: "Fan va tajriba",
  },
  {
    src: "/images/demo/art.webp",
    alt: "Ijodiy mashg‘ulot uchun rangli bo‘yoqlar",
    label: "Ijodiy mashg‘ulotlar",
  },
  {
    src: "/images/demo/sports.webp",
    alt: "Basketbol maydoni",
    label: "Sport va harakat",
  },
] as const;
