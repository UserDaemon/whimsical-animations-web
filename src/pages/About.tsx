
import Layout from '../components/Layout';
import Hero from '../components/ui/Hero';
import SectionHeading from '../components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      position: 'Founder & CEO',
      image: '/placeholder.svg',
      bio: 'Expert in business strategy with 10+ years of experience mentoring startups.'
    },
    {
      name: 'Sarah Williams',
      position: 'Chief Operations Officer',
      image: '/placeholder.svg',
      bio: 'Former startup founder with expertise in operations and business development.'
    },
    {
      name: 'Michael Chen',
      position: 'Head of Education',
      image: '/placeholder.svg',
      bio: 'Ph.D. in Business Education with a passion for teaching entrepreneurship.'
    }
  ];

  return (
    <Layout>
      <Hero 
        title="About Success Squad"
        subtitle="Empowering pre-graduate students with the skills, knowledge, and network to succeed in entrepreneurship and business."
      >
        <Link to="/contact" className="btn-primary">
          Join Us
        </Link>
      </Hero>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Success Squad is dedicated to empowering pre-graduate students with the skills, 
                  knowledge, and network they need to succeed in entrepreneurship and business. 
                  Through workshops, events, and a strong support network, we equip aspiring 
                  entrepreneurs with the practical skills and confidence they need to thrive in the
                  modern business landscape.
                </p>
                <p>
                  Our community-driven approach ensures that each member receives personalized 
                  guidance and the opportunity to collaborate with like-minded peers and industry
                  experts. We believe in learning by doing, problem-solving through real challenges,
                  and building lasting business relationships.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 mb-10 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-lg -rotate-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
                  alt="Team discussion" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-blue text-white">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Mission, Vision & Values" 
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <Target className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p>
                  To be the leading platform for nurturing entrepreneurial talent among pre-graduate 
                  students and fostering a new generation of successful business leaders.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <Eye className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p>
                  We believe in innovation, collaboration, continuous learning, and practical 
                  application of knowledge to create real-world impact.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col items-center text-center">
                <Heart className="w-12 h-12 mb-4 text-blue-200" />
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <p>
                  Innovation<br />
                  Collaboration<br />
                  Continuous Learning<br />
                  Real-World Impact
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Our Team" 
            subtitle="Meet the passionate individuals driving our mission forward."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 bg-blue-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
