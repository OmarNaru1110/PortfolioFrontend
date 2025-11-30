import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';

export function About() {
  return (
    <section id="about" className="py-24 bg-[#EDE0D4] relative overflow-hidden">
      {/* Decorative clouds */}
      <motion.div
        className="absolute top-10 right-10 text-[#C9A875] w-48 h-16 opacity-30"
        animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-10 text-[#C9A875] w-56 h-20 opacity-20"
        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatedSection variant="slideRight" delay={0.2}>
            <div className="relative">
              <motion.div
                className="relative aspect-square rounded-lg overflow-hidden border-4 border-[#C9A875] shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithFallback
                  src="/me.png"
                  alt="A picture of me"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative corner element */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-[#DC143C] opacity-30 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              ></motion.div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-[#DC143C] opacity-30 rounded"></div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection variant="slideLeft" delay={0.4}>
            <div className="space-y-6 bg-[#F5E6D3] p-8 rounded-lg border-2 border-[#C9A875] shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                  <p className="text-[#DC143C] tracking-widest">About Me</p>
                </div>
                <h2 className="text-4xl text-[#3D2817]">My Story</h2>
                <motion.div
                  className="w-16 h-1 bg-[#DC143C]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
              </div>

              <div className="space-y-4 text-[#5C4033] leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Hey, I'm Omar Elnaggar! I'm a backend software engineer who's passionate about building efficient and scalable web apps.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  For the first couple of years of my journey, I focused heavily on the fundamentals of software engineering and problem-solving. Getting a deep understanding of the core concepts has really shaped how I approach development today.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  Outside of coding, I love exploring nature and visiting peaceful, scenic spots. One of my big dreams is to travel and visit places like Mount Fuji. I'm always looking for new adventures, both in tech and in life, and I'm excited to keep growing and pushing my limits.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  I'm always eager to take on new challenges, learn new things, and keep growing. Let's connect and create something awesome together!
                </motion.p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
