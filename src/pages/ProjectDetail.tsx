import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Quote } from 'lucide-react';
import { allProjects, categories } from '../data/projects';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = allProjects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy-900 mb-6">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const categoryName = categories.find(c => c.id === project.category)?.name || project.category;

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-navy-700 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>
        
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
              {categoryName}
            </span>
            <div className="flex items-center gap-2 text-gray-600">
              <User size={16} />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={16} />
              <span>{project.completionDate}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">{project.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{project.description}</p>
        </motion.div>
        
        {/* Main Project Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <img 
            src={project.gallery[0]} 
            alt={project.title} 
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
        </motion.div>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Project Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy-800 mb-3">The Challenge</h3>
                <p className="text-gray-600">{project.challenge}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-navy-800 mb-3">Our Solution</h3>
                <p className="text-gray-600">{project.solution}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-navy-800 mb-3">The Results</h3>
                <p className="text-gray-600">{project.results}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-navy-900 p-8 rounded-xl text-white">
              <Quote className="h-10 w-10 text-emerald-400 mb-4" />
              <blockquote className="text-lg italic mb-6">
                "{project.testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-gray-300 text-sm">{project.testimonial.position}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.slice(1).map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${project.title} - Gallery ${index + 2}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center p-10 bg-gray-50 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your marketing goals and create impactful content for your brand.
          </p>
          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;