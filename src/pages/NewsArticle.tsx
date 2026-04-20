import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { getArticleBySlug } from "@/data/articles";

const NewsArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main className="pt-16">
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-heading mb-4">Article not found</h1>
          <Link to="/news" className="text-primary hover:underline">← Back to News</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <div className="container py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/news" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to News
          </Link>

          {article.cover_image_url && (
            <img
              src={article.cover_image_url}
              alt={article.title}
              className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
            />
          )}

          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
            <Calendar className="w-4 h-4" />
            {new Date(article.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <h1 className="text-3xl md:text-4xl font-heading font-semibold mb-6">{article.title}</h1>

          <div className="prose prose-invert prose-lg max-w-none">
            {article.content.split("\n").map((paragraph, i) => (
              <p key={i} className="text-secondary-foreground mb-4">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsArticle;
