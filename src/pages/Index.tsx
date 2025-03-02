
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedCard from '../components/ui/AnimatedCard';
import { motion } from 'framer-motion';
import { Search, FileText, MessageCircle, Mail, Code, BarChart2, Settings, Network } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Search className="w-10 h-10" />,
      title: 'SEO and SEM',
      description: 'Boost your online visibility and drive targeted traffic with our SEO and SEM strategies.'
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content and strategic storytelling.'
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: 'Social Media Marketing',
      description: 'Leverage social platforms to build brand awareness and connect with customers.'
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: 'E-mail Marketing',
      description: 'Reach your audience directly with personalized email campaigns that convert.'
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Web Development & Designing',
      description: 'Create a stunning online presence with our web development and design solutions.'
    },
    {
      icon: <BarChart2 className="w-10 h-10" />,
      title: 'Analytics',
      description: 'Gain insights into your business performance with data-driven analytics.'
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Automation',
      description: 'Streamline your processes with advanced automation tools and techniques.'
    },
    {
      icon: <Network className="w-10 h-10" />,
      title: 'Collaboration',
      description: 'Enhance your business partnerships with our effective B2B collaboration solutions.'
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Empowering Future Entrepreneurs"
        subtitle="Join Success Squad to develop your entrepreneurial skills, network with like-minded individuals, and transform your ideas into reality."
      >
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </Hero>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Services" 
            subtitle="We provide comprehensive services to help you grow your business and achieve success." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Success Squad?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're dedicated to empowering pre-graduate students with the skills, knowledge, and 
                network they need to succeed in entrepreneurship and business. Our community-driven 
                approach ensures personalized guidance and real-world experience.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Expert mentorship from industry professionals',
                  'Hands-on workshops and practical learning',
                  'Networking opportunities with like-minded peers',
                  'Access to resources and tools for business growth'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-blue-500 text-white p-1 rounded-full mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-lg rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3"
                  alt="Team collaboration" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Start Your Entrepreneurial Journey?
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium inline-block
              transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/30 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
