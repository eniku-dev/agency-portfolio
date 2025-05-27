import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link to={`/portfolio/${project.id}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
          <div className="relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6">
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  View Details
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-navy-900 mb-2">{project.title}</h3>
            <p className="text-sm text-emerald-700 mb-3">{project.client}</p>
            <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
            <div className="mt-auto">
              <span className="inline-block px-3 py-1 bg-gray-100 text-navy-700 text-xs rounded-full">
                {categories.find(c => c.id === project.category)?.name}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

import { categories } from '../../data/projects';
export default ProjectCard;