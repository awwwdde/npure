export type Product = {
  id: string;
  name: string;
  category: 'classic' | 'luxury' | 'flowers' | 'living';
  price: number;
  oldPrice?: number;
  size: string;
  image: string;
  tagline?: string;
  badge?: string;
};

const PLACEHOLDER = 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80';

export const products: Product[] = [
  {
    id: 'arcadia',
    name: 'Аркадия',
    category: 'classic',
    price: 9900,
    size: '25 см · тропический микс',
    image: PLACEHOLDER,
    tagline: 'Замкнутая экосистема, живущая годами',
    badge: 'Хит',
  },
  {
    id: 'nocturne',
    name: 'Ноктюрн',
    category: 'classic',
    price: 12400,
    size: '30 см · папоротник, фиттония',
    image: PLACEHOLDER,
  },
  {
    id: 'mist',
    name: 'Туманный лес',
    category: 'classic',
    price: 14800,
    size: '35 см · мини-деревья',
    image: PLACEHOLDER,
    tagline: 'Эффект утренней росы на стекле',
  },
  {
    id: 'aurum',
    name: 'Aurum',
    category: 'luxury',
    price: 38500,
    oldPrice: 42000,
    size: '45 см · латунь, закалённое стекло',
    image: PLACEHOLDER,
    tagline: 'Архитектурная форма ручной сборки',
    badge: 'Люкс',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    category: 'luxury',
    price: 52000,
    size: '55 см · массив дуба · RGB',
    image: PLACEHOLDER,
    tagline: 'Коллекционная серия 01/12',
  },
  {
    id: 'rosa',
    name: 'Стабилизированная роза',
    category: 'flowers',
    price: 7400,
    size: '20 см · до 5 лет',
    image: PLACEHOLDER,
    tagline: 'Без воды. Без света. Навсегда.',
  },
  {
    id: 'peony',
    name: 'Ботанический пион',
    category: 'flowers',
    price: 8900,
    size: '22 см · стабилизация',
    image: PLACEHOLDER,
  },
  {
    id: 'mosswall',
    name: 'Моховое панно Verde',
    category: 'living',
    price: 28000,
    size: '80×60 см · ягель',
    image: PLACEHOLDER,
    tagline: 'Натуральный ягель, без ухода',
  },
  {
    id: 'bonsai',
    name: 'Кокедама Sen',
    category: 'living',
    price: 6400,
    size: '15 см · сфагнум',
    image: PLACEHOLDER,
  },
];

export const categories: { id: Product['category']; title: string; description: string }[] = [
  {
    id: 'classic',
    title: 'Классические флорариумы',
    description: 'Замкнутая экосистема в стекле с тёплой подсветкой.',
  },
  {
    id: 'luxury',
    title: 'Люкс коллекция',
    description: 'Авторская геометрия из латуни и массива дерева.',
  },
  {
    id: 'flowers',
    title: 'Стабилизированные цветы',
    description: 'Живая красота без воды, света и ухода — до пяти лет.',
  },
  {
    id: 'living',
    title: 'Живой декор',
    description: 'Моховые панно, кокедамы и интерьерные композиции.',
  },
];
