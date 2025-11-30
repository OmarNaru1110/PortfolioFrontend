import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';

const experiences = [
    {
        company: 'Tech Solutions Inc.',
        role: 'Senior Backend Engineer',
        period: '2023 - Present',
        location: 'Remote',
        responsibilities: [
            'Led the development of microservices architecture serving 1M+ daily active users',
            'Optimized database queries reducing response time by 60%',
            'Mentored junior developers and conducted code reviews',
            'Implemented CI/CD pipelines using Docker and Kubernetes',
        ],
    },
        {
        company: 'Tech Solutions Inc.',
        role: 'Senior Backend Engineer',
        period: '2023 - Present',
        location: 'Remote',
        responsibilities: [
            'Led the development of microservices architecture serving 1M+ daily active users',
            'Optimized database queries reducing response time by 60%',
            'Mentored junior developers and conducted code reviews',
            'Implemented CI/CD pipelines using Docker and Kubernetes',
        ],
    },
    {
        company: 'Digital Innovations Co.',
        role: 'Backend Software Engineer',
        period: '2021 - 2023',
        location: 'Hybrid',
        responsibilities: [
            'Built RESTful APIs and GraphQL endpoints for web and mobile applications',
            'Designed and implemented authentication and authorization systems',
            'Collaborated with frontend teams to integrate backend services',
            'Maintained and improved existing codebase with 95% test coverage',
        ],
    },
    {
        company: 'StartUp Labs',
        role: 'Junior Backend Developer',
        period: '2020 - 2021',
        location: 'On-site',
        responsibilities: [
            'Developed backend features for e-commerce platform',
            'Participated in agile development process and daily standups',
            'Wrote unit tests and integration tests for core functionality',
            'Assisted in deployment and monitoring of production systems',
        ],
    },
];

export function Experience() {
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

                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} className="flex gap-2 text-sm text-[#5C4033]">
                                                <span className="text-[#DC143C] mt-1">•</span>
                                                <span>{responsibility}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div style={{ width: '45%' }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
