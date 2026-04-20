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
export const articles: Article[] = [
  {
    id: "1",
    slug: "welcome-to-envgo",
    title: "Welcome to ENVGO",
    excerpt: "An introduction to our hydrofoil marine technology and what's next.",
    content:
      "ENVGO is pioneering the next generation of hydrofoil marine craft.\n\nThis is a placeholder article — edit src/data/articles.ts to add your own.",
    cover_image_url: "",
    published_at: "2025-01-01T00:00:00.000Z",
  },
];

export const getArticleBySlug = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getPublishedArticles = () =>
  [...articles].sort(
    (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
  );
