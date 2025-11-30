import { Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';
import { sendContactMessage } from '../services/api';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      setSubmitStatus('idle');
      setErrorMessage('');
      
      await sendContactMessage(formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (err) {
      setSubmitStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      console.error('Error sending message:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F5E6D3] relative overflow-hidden">
      {/* Decorative red sun */}
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-[#DC143C] rounded-full opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      ></motion.div>

      {/* Decorative clouds */}
      <motion.div
        className="absolute top-16 right-32 text-[#C9A875] w-56 h-20 opacity-20"
        animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-[#C9A875] w-48 h-16 opacity-25"
        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="slideUp" className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
            <p className="text-[#DC143C] tracking-widest">Contact</p>
            <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
          </div>
          <h2 className="text-4xl text-[#3D2817]">Get In Touch</h2>
          <motion.div
            className="w-24 h-1 bg-[#DC143C] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-[#6B5644] max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection variant="slideUp" delay={0.4} className="bg-[#EDE0D4] border-4 border-[#C9A875] rounded-lg p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="name" className="block text-sm text-[#5C4033] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5E6D3] border-2 border-[#C9A875] rounded text-[#3D2817] focus:outline-none focus:border-[#DC143C] transition-colors"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="email" className="block text-sm text-[#5C4033] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#F5E6D3] border-2 border-[#C9A875] rounded text-[#3D2817] focus:outline-none focus:border-[#DC143C] transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm text-[#5C4033] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#F5E6D3] border-2 border-[#C9A875] rounded text-[#3D2817] focus:outline-none focus:border-[#DC143C] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-[#DC143C] hover:bg-[#B01030] text-[#F5E6D3] rounded transition-colors flex items-center justify-center gap-2 border-2 border-[#8B0000] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded p-3"
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded p-3"
                >
                  <XCircle size={20} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </AnimatedSection>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t-2 border-[#C9A875] text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-[#6B5644]">
            © 2025 Omar Elnaggar. Built with passion and code.
            <span className="ml-2">🗾</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
