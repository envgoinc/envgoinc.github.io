import { motion } from "framer-motion";

interface PageHeroProps {
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  badge?: string;
  tagline?: string;
}

const PageHero = ({ image, video, title, subtitle, badge, tagline }: PageHeroProps) => (
  <section className="relative h-[70vh] min-h-[500px] flex items-end">
    {video ? (
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    ) : (
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    )}
    <div className="absolute inset-0 hero-overlay" />
    <div className="container relative z-10 pb-16">
      {badge && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          {badge}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[40px] md:text-[68px] leading-[1.1] font-heading font-light max-w-3xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg text-muted-foreground max-w-2xl"
      >
        {subtitle}
      </motion.p>
      {tagline && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-sm font-body font-medium tracking-wide text-primary/90"
        >
          {tagline}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
