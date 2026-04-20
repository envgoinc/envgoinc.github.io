import { motion } from "framer-motion";

interface SpecTableProps {
  title: string;
  specs: { label: string; value: string }[];
}

const SpecTable = ({ title, specs }: SpecTableProps) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="rounded-xl border border-border overflow-hidden"
  >
    <div className="bg-primary/10 px-6 py-3">
      <h3 className="font-heading font-semibold text-primary">{title}</h3>
    </div>
    <div className="divide-y divide-border">
      {specs.map((spec) => (
        <div key={spec.label} className="flex justify-between px-6 py-3 text-sm">
          <span className="text-muted-foreground">{spec.label}</span>
          <span className="font-medium text-foreground">{spec.value}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export default SpecTable;
