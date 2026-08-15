export const site = {
  brand: 'THE 25TH HOUR',
  brandZh: '第二十五小时',
  notice: 'THE 25TH HOUR · 第二十五小时',
  utility: ['门店', '客户服务'],
  actions: ['订阅', '账户'],
  nav: ['全部香氛', '新作', '香水', '香薰', '护肤', '试香套装', '试香', '气味档案', '品牌故事'],
  hero: [
    {
      title: '收藏时间，收藏自己',
      description: '一天有 24 小时属于世界，第 25 小时属于自己',
      image: '/assets/images/hero/the-25th-hour-collection-opening.png',
      textTone: 'dark',
      cta: '进入时间档案馆',
      href: '#atelier',
    },
    {
      title: '让日常，在香气里停留',
      description: 'TIME NO.105 · 日常时刻',
      image: '/assets/images/hero/everyday-moment-linen-hero-label-v3-4k.webp',
      textTone: 'dark',
      cta: '探索日常时刻',
      href: '#product-everyday-moment',
    },
    {
      title: '把一段时间，调进气味里',
      description: '光线、原料与等待，共同完成一份气味记录',
      image: '/assets/images/hero/fragrance-lab-time-archive-4k.png',
      textTone: 'dark',
      cta: '进入气味档案',
      href: '#journal',
    },
  ],
}

export type Product = {
  id: string
  name: string
  category: '香水' | '香氛' | '身体油' | '卸妆膏'
  note: string
  size: string
  price: string
  image: string
  hoverImage?: string
  mediaClass?: string
}

export const products: Product[] = [
  {
    id: 'product-midnight-studio',
    name: '深夜书房 Midnight Studio',
    category: '香水',
    note: 'TIME NO.001 · Eau de Parfum',
    size: '150 mL',
    price: '¥ 320',
    image: '/assets/images/products/midnight-studio/scene.png',
    hoverImage: '/assets/images/products/midnight-studio/product.png',
    mediaClass: 'product-media--midnight',
  },
  {
    id: 'product-after-rain',
    name: '雨后森林 After Rain',
    category: '香水',
    note: 'TIME NO.021 · Eau de Parfum',
    size: '150 mL',
    price: '¥ 320',
    image: '/assets/images/products/after-rain/scene.png',
    hoverImage: '/assets/images/products/after-rain/product.png',
  },
  {
    id: 'product-everyday-moment',
    name: '日常时刻 Everyday Moment',
    category: '香氛',
    note: 'TIME NO.105 · 香氛蜡烛',
    size: '150 mL',
    price: '¥ 280',
    image: '/assets/images/products/everyday-moment/scene.png',
    hoverImage: '/assets/images/products/everyday-moment/product.png',
  },
  {
    id: 'product-seaside-sunset',
    name: '海边日落 Seaside Sunset',
    category: '香氛',
    note: 'TIME NO.032 · 无火香氛',
    size: '150 mL',
    price: '¥ 280',
    image: '/assets/images/products/seaside-sunset/scene.png',
    hoverImage: '/assets/images/products/seaside-sunset/product.png',
  },
  {
    id: 'product-body-oil',
    name: '身体油 Body Oil',
    category: '身体油',
    note: 'THE 25TH HOUR · Body Oil',
    size: '100 mL',
    price: '¥ 180',
    image: '/assets/images/products/body-oil/scene.png',
    hoverImage: '/assets/images/products/body-oil/product.png',
  },
  {
    id: 'product-cleansing-balm',
    name: '卸妆膏 Cleansing Balm',
    category: '卸妆膏',
    note: 'THE 25TH HOUR · Cleansing Balm',
    size: '150 mL',
    price: '¥ 220',
    image: '/assets/images/products/cleansing-balm/scene.png',
    hoverImage: '/assets/images/products/cleansing-balm/product.png',
  },
]

export const categories = [
  { name: '香水', image: '/assets/images/products/after-rain/scene.png', anchor: '#product-midnight-studio' },
  { name: '香氛', image: '/assets/images/products/everyday-moment/scene.png', anchor: '#product-everyday-moment' },
  { name: '身体油', image: '/assets/images/products/body-oil/scene.png', anchor: '#product-body-oil' },
  { name: '卸妆膏', image: '/assets/images/products/cleansing-balm/scene.png', anchor: '#product-cleansing-balm' },
]

export const journal = [
  { type: '时间', title: '23:48｜深夜书房', time: 'TIME ARCHIVE 001' },
  { type: '地点', title: '18:32｜海边日落', time: 'TIME ARCHIVE 032' },
  { type: '气味与记忆', title: '气味如何让一段时间重新发生', time: '档案手记' },
]

export const experienceChapters = [
  {
    id: 'discover',
    title: '发现气味',
    titleEn: 'Discover',
    description: '从一个时刻、一处空间与一种感受出发，慢慢靠近真正想要留下的气味。',
    image: '/assets/images/editorial/finder.jpg',
    imageAlt: '试香体验中的气味感知',
    steps: [
      { number: '01', title: '发现品牌', titleEn: 'Discover', copy: '浏览气味档案，理解每一个 TIME NO. 所记录的时刻。' },
      { number: '02', title: '进入空间', titleEn: 'Enter', copy: '进入安静的试香空间，让嗅觉从日常信息中慢下来。' },
      { number: '03', title: '试香体验', titleEn: 'Experience', copy: '从纸上到肌肤，观察气味在不同时刻发生的变化。' },
    ],
  },
  {
    id: 'archive',
    title: '封存时刻',
    titleEn: 'Archive',
    description: '选中的不只是一种香气，也是一段值得在未来重新打开的私人时间。',
    image: '/assets/images/products/midnight-studio/scene.png',
    imageAlt: '深夜书房香水置于书页上的场景',
    steps: [
      { number: '04', title: '记录时间', titleEn: 'Archive', copy: '选择属于自己的 TIME NO.，为此刻留下名字与编号。' },
      { number: '05', title: '包装封存', titleEn: 'Package', copy: '以香片、时间标签与包装，将这一段气味妥善封存。' },
    ],
  },
  {
    id: 'remember',
    title: '再次打开',
    titleEn: 'Remember',
    description: '离开之后，气味仍会在某个相似的光线、温度或心境里重新出现。',
    image: '/assets/images/products/seaside-sunset/scene.png',
    imageAlt: '海边日落香薰的暮色场景',
    steps: [
      { number: '06', title: '带走记忆', titleEn: 'Take Home', copy: '把属于自己的第25小时带回日常，让它陪伴新的生活片段。' },
      { number: '07', title: '再次打开', titleEn: 'Remember', copy: '当气味再次升起，那段被收藏的时间也随之醒来。' },
    ],
  },
]
