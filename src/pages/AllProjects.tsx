import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllProjects } from '../services/api';
import type { ProjectUI } from '../types/api';
import { AnimatedSection } from '../components/AnimatedSection';
import { CloudPattern } from '../components/CloudPattern';
import '../styles/ResponsiveTable.css';

export function AllProjects() {
    const [projects, setProjects] = useState<ProjectUI[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                setLoading(true);
                const data = await getAllProjects();
                setProjects(data);
                setError(null);
            } catch (err) {
                setError('Failed to load projects');
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <div className="min-h-screen bg-[#F5E6D3] relative overflow-hidden">
            {/* Decorative elements */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 bg-[#DC143C] rounded-full opacity-5"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            ></motion.div>

            <motion.div
                className="absolute top-32 left-20 text-[#C9A875] w-56 h-20 opacity-20"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
            >
                <CloudPattern />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* Header */}
                <AnimatedSection variant="slideUp" className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#DC143C] hover:text-[#B01030] transition-colors mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>

                    <div className="text-center space-y-4">
                        <h1 className="text-4xl sm:text-5xl font-bold text-[#3D2817]">All Projects</h1>
                        <motion.div
                            className="w-24 h-1 bg-[#DC143C] mx-auto"
                            initial={{ width: 0 }}
                            whileInView={{ width: 96 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        ></motion.div>
                        <p className="text-[#6B5644] max-w-2xl mx-auto">
                        </p>
                    </div>
                </AnimatedSection>

                {/* Projects Table */}
                <AnimatedSection variant="slideUp" delay={0.2}>
                    <div className="bg-[#EDE0D4] border-4 border-[#C9A875] rounded-lg shadow-2xl overflow-hidden">
                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 text-[#DC143C] animate-spin" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-[#DC143C]">{error}</p>
                            </div>
                        ) : projects.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-[#6B5644]">No projects available.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-[#C9A875] text-[#3D2817]">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold">Project Name</th>
                                            <th className="px-6 py-4 text-left font-semibold">Code</th>
                                            <th className="px-6 py-4 text-left font-semibold">Demo</th>
                                            <th className="px-6 py-4 text-left font-semibold hide-on-mobile">End Date</th>
                                            <th className="px-6 py-4 text-left font-semibold hide-on-mobile">Technologies</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y-2 divide-[#C9A875]">
                                        {projects.map((project, index) => (
                                            <motion.tr
                                                key={project.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                                className="hover:bg-[#F5E6D3] transition-colors"
                                            >
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-[#DC143C] rounded-full flex-shrink-0"></div>
                                                        <span className="font-medium text-[#3D2817]">{project.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    {project.codeUrl && project.codeUrl !== '#' ? (
                                                        <a
                                                            href={project.codeUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-[#DC143C] hover:text-[#B01030] transition-colors"
                                                        >
                                                            <Github size={16} />
                                                            <span className="text-sm">View</span>
                                                        </a>
                                                    ) : (
                                                        <span className="text-[#6B5644] text-sm">—</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {project.demoUrl && project.demoUrl !== '#' ? (
                                                        <a
                                                            href={project.demoUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-[#DC143C] hover:text-[#B01030] transition-colors"
                                                        >
                                                            <ExternalLink size={16} />
                                                            <span className="text-sm">View</span>
                                                        </a>
                                                    ) : (
                                                        <span className="text-[#6B5644] text-sm">—</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 hide-on-mobile">
                                                    <span className="text-[#5C4033]">{project.endDate}</span>
                                                </td>
                                                <td className="px-6 py-4 hide-on-mobile">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, techIndex) => (
                                                            <span
                                                                key={techIndex}
                                                                className="px-4 py-1 text-xs bg-[#DC143C]/10 text-[#DC143C] rounded border border-[#DC143C]/30"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
}
