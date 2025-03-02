
import Layout from '../components/Layout';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Search, FileText, MessageCircle, Mail, Code, BarChart2, Settings, Network } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO and SEM',
      description: 'Boost your online visibility and drive targeted traffic with our SEO and SEM strategies.',
      details: [
        'Keyword research and optimization',
        'On-page and off-page SEO',
        'Local SEO strategies',
        'PPC campaign management',
        'Conversion rate optimization'
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content and strategic storytelling.',
      details: [
        'Content strategy development',
        'Blog post creation',
        'Whitepaper and e-book production',
        'Infographic design',
        'Video content planning'
      ]
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: 'Social Media Marketing',
      description: 'Leverage social platforms to build brand awareness and connect with customers.',
      details: [
        'Social media strategy',
        'Content calendar planning',
        'Community management',
        'Social advertising',
        'Engagement analytics'
      ]
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: 'E-mail Marketing',
      description: 'Reach your audience directly with personalized email campaigns that convert.',
      details: [
        'Email campaign strategy',
        'Newsletter design',
        'Automated email sequences',
        'A/B testing',
        'Performance analysis'
      ]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development & Designing',
      description: 'Create a stunning online presence with our web development and design solutions.',
      details: [
        'Responsive website design',
        'E-commerce development',
        'UI/UX optimization',
        'Website maintenance',
        'Performance optimization'
      ]
    },
    {
      icon: <BarChart2 className="w-12 h-12" />,
      title: 'Analytics',
      description: 'Gain insights into your business performance with data-driven analytics.',
      details: [
        'Data tracking setup',
        'Custom dashboard creation',
        'Traffic analysis',
        'Conversion tracking',
        'ROI reporting'
      ]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Automation',
      description: 'Streamline your processes with advanced automation tools and techniques.',
      details: [
        'Workflow automation',
        'Marketing automation',
        'CRM integration',
        'Task management systems',
        'Automated reporting'
      ]
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: 'Collaboration',
      description: 'Enhance your business partnerships with our effective B2B collaboration solutions.',
      details: [
        'Partner program development',
        'Collaborative tools setup',
        'Joint venture facilitation',
        'B2B networking',
        'Strategic partnership consulting'
      ]
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Our Services"
        subtitle="Comprehensive solutions to help your business grow and succeed in the digital age."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="What We Offer" 
            subtitle="We provide a wide range of services to meet your business needs and help you achieve your goals."
          />
          
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="text-blue-500 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-center md:text-left">{service.description}</p>
                </div>
                
                <div className="md:w-2/3 bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-4">What's included:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get in touch with us today to discuss your specific needs and how we can help you achieve your goals.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-medium inline-block
              transition-all duration-300 hover:shadow-lg hover:shadow-blue-700/30 focus:ring-2 focus:ring-white focus:ring-opacity-50 focus:outline-none">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
