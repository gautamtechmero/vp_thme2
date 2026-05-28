import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Send, ShieldCheck } from 'lucide-react';
import { contactPageContent } from '../data/siteContent';

const WEB3FORMS_ACCESS_KEY = 'd09addc3-2471-4f5a-8161-0409f6f5a9de';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function createMathProblem() {
  return {
    num1: Math.floor(Math.random() * 9) + 1,
    num2: Math.floor(Math.random() * 9) + 1,
  };
}

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [mathProblem, setMathProblem] = useState(createMathProblem);
  const [mathAnswer, setMathAnswer] = useState('');
  const serviceOptions = useMemo(() => contactPageContent.form.serviceOptions, []);

  const resetCaptcha = () => {
    setMathAnswer('');
    setMathProblem(createMathProblem());
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    const lastSubmission = localStorage.getItem('last_contact_submission');
    const now = Date.now();
    if (lastSubmission) {
      const hoursSinceLast = (now - Number.parseInt(lastSubmission, 10)) / (1000 * 60 * 60);
      if (hoursSinceLast < 24) {
        setFormStatus('error');
        setFormMessage('You can only submit this form once every 24 hours. Please try again later.');
        return;
      }
    }

    const expectedAnswer = mathProblem.num1 + mathProblem.num2;
    if (Number.parseInt(mathAnswer, 10) !== expectedAnswer) {
      setFormStatus('error');
      setFormMessage('Incorrect security question answer. Please try again.');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const payload = JSON.stringify({
      ...Object.fromEntries(formData),
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New Contact Form Submission - VP\'s Cleaning',
      from_name: "VP's Cleaning Website",
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: payload,
      });

      const data = (await response.json()) as { success?: boolean; message?: string };
      if (data.success) {
        setFormStatus('success');
        setFormMessage(
          'Message Sent Successfully! Please check your email to verify and start receiving messages.',
        );
        localStorage.setItem('last_contact_submission', Date.now().toString());
        event.currentTarget.reset();
        resetCaptcha();
        return;
      }

      setFormStatus('error');
      setFormMessage(data.message ?? 'Something went wrong. Please try again.');
    } catch {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
            {contactPageContent.form.labels.name}
          </span>
          <input
            name="name"
            type="text"
            required
            placeholder={contactPageContent.form.placeholders.name}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700 outline-none transition-colors focus:border-secondary focus:bg-white"
          />
        </label>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
            {contactPageContent.form.labels.email}
          </span>
          <input
            name="email"
            type="email"
            required
            placeholder={contactPageContent.form.placeholders.email}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700 outline-none transition-colors focus:border-secondary focus:bg-white"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
          {contactPageContent.form.labels.phone}
        </span>
        <input
          name="phone"
          type="tel"
          placeholder={contactPageContent.form.placeholders.phone}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700 outline-none transition-colors focus:border-secondary focus:bg-white"
        />
      </label>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
          {contactPageContent.form.labels.service}
        </span>
        <select
          name="service"
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700 outline-none transition-colors focus:border-secondary focus:bg-white"
          defaultValue={serviceOptions[0]}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-3">
          {contactPageContent.form.labels.message}
        </span>
        <textarea
          name="message"
          required
          placeholder={contactPageContent.form.placeholders.message}
          className="w-full h-36 resize-none rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700 outline-none transition-colors focus:border-secondary focus:bg-white"
        />
      </label>

      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="rounded-[28px] border border-slate-200 bg-industrial-gray p-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
          <ShieldCheck size={14} className="text-secondary" />
          {contactPageContent.form.labels.security}
        </div>
        <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 border border-slate-100">
          <div className="text-xl font-bold text-primary w-28">
            {mathProblem.num1} + {mathProblem.num2} =
          </div>
          <input
            type="number"
            required
            value={mathAnswer}
            onChange={(event) => setMathAnswer(event.target.value)}
            placeholder={contactPageContent.form.placeholders.security}
            className="flex-1 bg-transparent text-lg font-medium text-slate-700 outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={formStatus === 'loading'}
        className="w-full bg-primary text-white font-bold px-8 py-5 rounded-full hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formStatus === 'loading' ? 'Sending...' : contactPageContent.form.submitLabel}
        <Send size={18} className="text-secondary" />
      </button>

      {formStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700"
        >
          {formMessage}
        </motion.div>
      ) : null}

      {formStatus === 'error' ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
        >
          {formMessage}
        </motion.div>
      ) : null}
    </form>
  );
}
