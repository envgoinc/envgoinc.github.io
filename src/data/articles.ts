export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  cover_image_url?: string;
  published_at: string;
};

// Add or edit articles here. They will appear on /news automatically.
export const articles = [
  {
  id: "0",
  slug: "envgo-expands-into-defence-public-safety",
  title: "ENVGO Expands into Defence and Public Safety, Bringing Next-Generation Marine Capability to Canada and Allied Markets",
  excerpt: "ENVGO announces its strategic expansion into defence and public safety, positioning the company at the forefront of a new generation of marine capability.",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69e7a63907c3ebc8b17dbf6e_NV1%20Stealth%20Wrap%20(1).png",
  published_at: "2026-04-21",
  published: true,
},
  {
    id: "1",
    slug: "envgo-palm-beach-2026",
    title: "ENVGO Brings The World's First Performance-Class Electric Hydrofoil To Palm Beach",
    excerpt: "A New Generation of Electric Boating Melds Speed with Spectacle",
    cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain.png",
    published_at: "2026-03-12",
    published: true,
  },
  {
  id: "2",
  slug: "envgo-toronto-boat-show-2026",
  title: "ENVGO builds momentum after Toronto Boat Show as first customers prepare for sea trials",
  excerpt: "NV1 Founders Edition brings high performance, clean electric propulsion, and intelligent autonomy to the next generation of boating.",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1).jpg",
  published_at: "2026-02-11",
  published: true,
},
{
  id: "3",
  slug: "envgo-nv1-toronto-international-boat-show-2026",
  title: "ENVGO to Showcase the Only Hydrofoiling Boat at the 2026 Toronto International Boat Show",
  excerpt: "Poised to disrupt the industry, the innovative hydrofoiling vessel delivers world-class ride quality through flight over water, and an AI co-pilot that makes boating safe and easy to operate.",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/697010898617d0d23002c027_unnamed%20(32).jpg",
  published_at: "2026-01-13",
  published: true,
},
{
  id: "4",
  slug: "envgo-raises-2m-seed-round",
  title: "ENVGO Raises $2M USD Seed Round Investment To Deliver The Future of Marine Transportation",
  excerpt: "Backed by Canadian investors, ENVGO is building zero-emission \"flying\" boats and powering the future of homegrown marine innovation.",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1).jpeg",
  published_at: "2025-06-10",
  published: true,
},
{
  id: "5",
  slug: "envgo-new-electric-boat-nv1",
  title: "ENVGO Is Setting A New Standard In Electric Boating With The NV1",
  excerpt: "Learn about ENVGO, the founding team, and their innovative electric hydrofoiling boat, the ENVGO NV1",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600.jpeg",
  published_at: "2024-08-26",
  published: true,
},
{
  id: "6",
  slug: "envgo-partnership-j-david-weiss-designova",
  title: "ENVGO Announces Partnership with Renowned Yacht Designer J. David Weiss for NV1 Hydrofoiling Electric Boat",
  excerpt: "Learn about ENVGO's partnership with renowned yacht designer J. David Weiss",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f5367dd3f050f46c8da6af_66fc8f0ce5da5111c7f43fd2_Concept2.png",
  published_at: "2024-08-02",
  published: true,
},
{
  id: "7",
  slug: "envgo-joins-mars-discovery-district",
  title: "ENVGO Joins Exclusive MaRS Discovery District Founder Community",
  excerpt: "Learn about ENVGO's cleantech focused innovation and admission into the MaRS community",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD.jpg",
  published_at: "2024-05-30",
  published: true,
},
{
  id: "8",
  slug: "envgo-secures-sdtc-funding",
  title: "Marine Tech startup ENVGO Secures SDTC Seed Funding for marine tech development",
  excerpt: "Read about how ENVGO secured SDTC funding to accelerate aerospace and AI innovation in marine tech.",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f405f8c4a8a0de9cd2d2d8_66e34dd9cf9939c6d3bc7264_SDTC-lrg-p-800.png",
  published_at: "2024-05-18",
  published: true,
},
{
  id: "9",
  slug: "envgo-ac-studio-program-grant",
  title: "Marine Technology startup ENVGO secures grant in AC:Studio Program",
  excerpt: "Marine Technology startup ENVGO secures grant in AC:Studio Program",
  cover_image_url: "https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f3e6451b40bf1c9b5f17b7_66e34698e4156c8cf0b94f80_ACStudioShowCase%20website%20post-p-800.webp",
  published_at: "2023-05-23",
  published: true,
},

];


export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getPublishedArticles = () =>
  articles.filter((a) => a.published);
