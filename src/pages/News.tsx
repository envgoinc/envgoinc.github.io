import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Calendar } from "lucide-react";
import { getPublishedArticles } from "@/data/articles";
import Banner from "@/assets/news2.png";
const News = () => {
  const articles = getPublishedArticles();

  return (
    <main className="pt-16">
      <PageHero
        image={Banner}
        title="News & Updates"
        subtitle="Stay up to date with the latest from ENVGO — product launches, partnerships, and industry insights."
      />

      <section className="container py-16">
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/news/${article.slug}`}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                {article.cover_image_url && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.cover_image_url}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <h2 className="text-xl font-heading mb-2 group-hover:text-primary transition-colors font-medium">
                    {article.title}
                  </h2>
                  {article.excerpt && (
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No articles published yet. Check back soon!</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default News;
