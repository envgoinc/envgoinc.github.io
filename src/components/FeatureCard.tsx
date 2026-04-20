import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 glow-border"
  >
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <Icon className="w-5 h-5 text-primary" />
    </div>
    <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export default FeatureCard;
