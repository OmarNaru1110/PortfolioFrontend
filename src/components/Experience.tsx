import { motion } from 'framer-motion';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';

export function Experience() {
    return (
        <section id="experience" className="py-24 bg-[#F5E6D3] relative overflow-hidden">
            {/* Decorative clouds */}
            <motion.div
                className="absolute top-32 left-10 text-[#C9A875] w-48 h-16 opacity-20"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            <motion.div
                className="absolute bottom-40 right-10 text-[#C9A875] w-56 h-20 opacity-25"
                animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection variant="slideUp" className="text-center space-y-4 mb-16">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                        <p className="text-[#DC143C] tracking-widest">Career Path</p>
                        <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                    </div>
                    <h2 className="text-4xl text-[#3D2817]">Work Experience</h2>
                    <motion.div
                        className="w-24 h-1 bg-[#DC143C] mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    ></motion.div>
                    <p className="text-[#6B5644] max-w-2xl mx-auto">
                        My professional journey and the value I've delivered along the way
                    </p>
                </AnimatedSection>
            </div>
        </section>
    );
}
