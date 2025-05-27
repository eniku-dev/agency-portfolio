import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Creative Solutions for Modern Brands</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a full-service creative agency specializing in brand development, 
                digital marketing, and content creation. Our passion is helping brands 
                find their unique voice and amplify their message across all platforms.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Brand Strategy</h3>
              <p className="text-gray-600 mb-6">
                We craft unique brand identities that resonate with your target audience and differentiate you from competitors.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Our data-driven campaigns deliver measurable results across social media, search, and display advertising.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <Star className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Content Creation</h3>
              <p className="text-gray-600 mb-6">
                From photography to video production, we create compelling content that tells your brand's story.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Explore Our Work
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <FeaturedProjects />
    </div>
  );
};

export default Home;