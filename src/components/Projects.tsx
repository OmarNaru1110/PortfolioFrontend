import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CloudPattern } from './CloudPattern';
import { AnimatedSection } from './AnimatedSection';
import { featuredProjects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#EDE0D4] relative overflow-hidden">
      {/* Decorative clouds */}
      <motion.div
        className="absolute top-20 left-16 text-[#C9A875] w-56 h-20 opacity-20"
        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-24 text-[#C9A875] w-48 h-16 opacity-25"
        animate={{ x: [0, -10, 0], y: [0, 5, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CloudPattern />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection variant="slideUp" className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
            <p className="text-[#DC143C] tracking-widest">Projects</p>
            <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
          </div>
          <h2 className="text-4xl text-[#3D2817]">Featured Work</h2>
          <motion.div
            className="w-24 h-1 bg-[#DC143C] mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          <p className="text-[#6B5644] max-w-2xl mx-auto">
            A selection of my best projects showcasing my skills and experience
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[#F5E6D3] border-4 border-[#C9A875] rounded-lg overflow-hidden hover:border-[#DC143C] hover:shadow-2xl transition-colors duration-300 ease-in-out group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D2817] to-transparent opacity-40"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#DC143C] rounded-full"></div>
                  <h3 className="text-xl text-[#3D2817]">{project.name}</h3>
                </div>
                <p className="text-sm text-[#6B5644]">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + techIndex * 0.1 }}
                      className="px-3 py-1 text-xs bg-[#DC143C]/10 text-[#DC143C] rounded border border-[#DC143C]/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-2 border-t-2 border-[#C9A875]">
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#5C4033] hover:text-[#DC143C] transition-colors"
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#5C4033] hover:text-[#DC143C] transition-colors"
                    whileHover={{ scale: 1.05, x: 2 }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/projects">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#DC143C] hover:bg-[#B01030] text-[#F5E6D3] rounded transition-colors border-2 border-[#8B0000] shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
