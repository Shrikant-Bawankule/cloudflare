import React, { useState } from 'react';
import Button from './Button';
import { Send } from 'lucide-react';
import { Reveal } from './Reveal';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
        const response = await fetch('https://formspree.io/f/xkgdvayy', {
            method: 'POST',
            body: JSON.stringify(formState),
            headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
            toast.success('Message sent successfully! We\'ll get back to you soon.');
            setFormState({ name: '', email: '', subject: '', message: '' });
        } else {
            toast.error('Something went wrong. Please email us directly.');
        }
    } catch (error) {
        toast.error('Connection error. Please try again later.');
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="contact-section contact-section-bg py-24 transition-colors">
      {/* Decorative Blobs & Corners (Light Mode Only via CSS) */}
      <div className="contact-blob-1"></div>
      <div className="contact-blob-2"></div>
      <div className="contact-corner-tl"></div>
      <div className="contact-corner-br"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Have questions about Referrix? We're here to help.
            </p>
          </div>

          <div className="contact-form-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full"
                isLoading={isSubmitting}
                rightIcon={<Send className="h-4 w-4" />}
                disabled={isSubmitting}
              >
                Send Message
              </Button>
            </form>
            
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
                Having Trouble?<br />
                Contact directly on <a href="mailto:referrix.team@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">referrix.team@gmail.com</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;