import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia",
  "Czech Republic", "Denmark", "Egypt", "Estonia", "Finland", "France",
  "Germany", "Greece", "Hong Kong", "Hungary", "India", "Indonesia", "Ireland",
  "Israel", "Italy", "Japan", "Kenya", "Latvia", "Lithuania", "Luxembourg",
  "Malaysia", "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway",
  "Pakistan", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
  "Romania", "Saudi Arabia", "Singapore", "South Africa", "South Korea",
  "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey",
  "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Vietnam",
];

const FORM_ENDPOINT = "https://formspree.io/f/mojylogb";

const fadeUp = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } };

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
  country: string;
  message: string;
  website: string; // honeypot
};

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  jobTitle: "",
  company: "",
  country: "",
  message: "",
  website: "",
};

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (submitting) return;

    // Honeypot: bots often fill hidden fields
    if (form.website.trim() !== "") {
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        jobTitle: form.jobTitle,
        company: form.company,
        country: form.country,
        message: form.message,
        _subject: `New contact form submission from ${form.firstName} ${form.lastName}`,
      };

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errorMessage = "Please try again.";
        try {
          const data = await res.json();
          if (data?.errors?.[0]?.message) {
            errorMessage = data.errors[0].message;
          }
        } catch {
          // ignore JSON parse failure
        }
        throw new Error(errorMessage);
      }

      toast({
        title: "Thank you",
        description: "We'll be in touch shortly.",
      });

      setForm(EMPTY_FORM);
    } catch (error) {
      toast({
        title: "Submission failed",
        description:
          error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-24 pb-32 bg-background min-h-screen">
      <div className="container max-w-[720px]">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="text-[36px] md:text-[52px] leading-[1.15] font-heading font-light mb-16"
        >
          Interested in solving your challenges with ENVGO?
        </motion.h1>

        <motion.form
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          <Field
            label="Name"
            name="firstName"
            required
            value={form.firstName}
            onChange={(v) => update("firstName", v)}
          />
          {/* <Field
            label="Last name"
            name="lastName"
            required
            value={form.lastName}
            onChange={(v) => update("lastName", v)}
          /> */}
          <Field
            label="Email address"
            name="email"
            required
            type="email"
            value={form.email}
            onChange={(v) => update("email", v)}
          />
          <Field
            label="Phone number"
            name="phone"
            
            type="tel"
            value={form.phone}
            onChange={(v) => update("phone", v)}
          />
          {/* <Field
            label="Job title"
            name="jobTitle"
            required
            value={form.jobTitle}
            onChange={(v) => update("jobTitle", v)}
          /> */}
          <Field
            label="Company / Institution"
            name="company"
            
            value={form.company}
            onChange={(v) => update("company", v)}
          />

          {/* <div>
            <label className="block text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-grey mb-2">
              Country: <span className="text-envgo-fireside">*</span>
            </label>
            <select
              name="country"
              required
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              className="w-full bg-transparent border-b border-envgo-grey/40 pb-2 text-base font-body text-foreground focus:outline-none focus:border-envgo-marine transition-colors appearance-none cursor-pointer"
            >
              <option value="" className="bg-background text-envgo-grey">
                Select...
              </option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c} className="bg-background text-foreground">
                  {c}
                </option>
              ))}
            </select>
          </div> */}

          <div>
            <label className="block text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-grey mb-2">
              Tell us about your project. A bit of context will allow us to connect you to the right team faster:
            </label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              className="w-full bg-transparent border border-envgo-grey/30 rounded-md p-3 text-base font-body text-foreground focus:outline-none focus:border-envgo-marine transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="px-12 py-4 border border-foreground text-foreground font-body font-medium text-base hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </motion.form>
      </div>
    </main>
  );
};

const Field = ({
  label,
  name,
  required,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div>
    <label className="block text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-grey mb-2">
      {label}: {required && <span className="text-envgo-fireside">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent border-b border-envgo-grey/40 pb-2 text-base font-body text-foreground focus:outline-none focus:border-envgo-marine transition-colors"
    />
  </div>
);

export default Contact;