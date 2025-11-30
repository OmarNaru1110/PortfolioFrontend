import { motion } from 'framer-motion';
import { Briefcase, Calendar, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';
import { getAllWorkExperiences } from '../services/api';
import type { WorkExperienceUI } from '../types/api';

export function Experience() {
    const [experiences, setExperiences] = useState<WorkExperienceUI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchExperiences() {
            try {
                setLoading(true);
                const data = await getAllWorkExperiences();
                setExperiences(data);
                setError(null);
            } catch (err) {
                setError('Failed to load work experiences');
                console.error('Error fetching experiences:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchExperiences();
    }, []);

    return (
        <section id="experience" className="py-24 bg-[#F5E6D3] relative overflow-hidden">
            {/* Decorative clouds - distributed throughout the section */}
            {/* Top left cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-20 opacity-20"
                style={{ top: '2rem', left: '2%' }}
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            {/* Top right cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-16 opacity-20"
                style={{ top: '5rem', right: '3%' }}
                animate={{ x: [0, -8, 0], y: [0, 5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            {/* Middle left cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-18 opacity-20"
                style={{ top: '40%', left: '1%' }}
                animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            {/* Middle right cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-16 opacity-20"
                style={{ top: '55%', right: '2%' }}
                animate={{ x: [0, -10, 0], y: [0, 6, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            {/* Bottom left cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-16 opacity-20"
                style={{ bottom: '20%', left: '3%' }}
                animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
                transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>
            {/* Bottom right cloud */}
            <motion.div
                className="absolute text-[#C9A875] w-48 h-16 opacity-20"
                style={{ bottom: '5%', right: '1%' }}
                animate={{ x: [0, -12, 0], y: [0, 5, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection variant="slideUp" className="text-center space-y-4 mb-16">
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                        <p className="text-[#DC143C] tracking-widest">Experience</p>
                        <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                    </div>
                    <h2 className="text-4xl text-[#3D2817]">Work Journey</h2>
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

                <div className="relative" style={{ position: 'relative' }}>
                    {/* Timeline line */}
                    {!loading && !error && experiences.length > 0 && (
                        <div 
                            style={{ 
                                position: 'absolute',
                                left: '50%', 
                                top: 0,
                                height: '100%',
                                width: '4px',
                                backgroundColor: '#C9A875',
                                transform: 'translateX(-50%)'
                            }}
                        ></div>
                    )}

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <Loader2 className="w-8 h-8 text-[#DC143C] animate-spin" />
                        </div>
                    ) : error ? (
                        <div className="text-center py-12">
                            <p className="text-[#DC143C]">{error}</p>
                        </div>
                    ) : experiences.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-[#6B5644]">No work experiences available.</p>
                        </div>
                    ) : (
                        <div className="space-y-12 relative">
                            {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative flex gap-8 items-center"
                                style={{
                                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                                }}
                            >
                                {/* Timeline dot */}
                                <div 
                                    className="absolute rounded-full z-10"
                                    style={{
                                        left: '50%',
                                        top: '2rem',
                                        width: '24px',
                                        height: '24px',
                                        backgroundColor: '#DC143C',
                                        transform: 'translateX(-50%)',
                                        border: 'solid #EDE0D4',
                                        boxShadow: '0 0 0 4px #EDE0D4'
                                    }}
                                ></div>

                                {/* Content card */}
                                <div 
                                    className="bg-[#F5E6D3] border-4 border-[#C9A875] rounded-lg p-6 shadow-xl hover:border-[#DC143C] transition-all"
                                    style={{ width: '45%' }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Briefcase className="text-[#DC143C]" size={20} />
                                                <h3 className="text-xl text-[#3D2817]">{exp.role}</h3>
                                            </div>
                                            <p className="text-[#DC143C] mb-1">{exp.company}</p>
                                            <div className="flex items-center gap-2 text-sm text-[#6B5644]">
                                                <Calendar size={14} />
                                                <span>{exp.period}</span>
                                                <span>•</span>
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-16 h-1 bg-[#DC143C] mb-4"></div>

                                    <p className="text-sm text-[#5C4033] leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div style={{ width: '45%' }}></div>
                            </motion.div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </section>
    );
}
