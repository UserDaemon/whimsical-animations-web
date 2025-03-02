
import { useState } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/ui/Hero';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const BlogPage = () => {
  const categories = ['All', 'Skills', 'Startup', 'Finance', 'Networking'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Skills Every Entrepreneur Needs',
      excerpt: 'Discover the key skills that can help you succeed in your entrepreneurial journey.',
      category: 'Skills',
      date: 'May 15, 2023',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1507209550122-8d3d90e9a225?ixlib=rb-4.0.3'
    },
    {
      id: 2,
      title: 'How to Validate Your Business Idea',
      excerpt: 'Learn the essential steps to validate your business idea before launching.',
      category: 'Startup',
      date: 'Jun 3, 2023',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3'
    },
    {
      id: 3,
      title: 'Funding Options for Early-Stage Startups',
      excerpt: 'Explore different funding options available for your early-stage startup.',
      category: 'Finance',
      date: 'Jul 22, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b56a5a?ixlib=rb-4.0.3'
    },
    {
      id: 4,
      title: 'Building a Strong Professional Network',
      excerpt: 'Tips and strategies for building a valuable professional network that helps your business grow.',
      category: 'Networking',
      date: 'Aug 11, 2023',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559223607-aad11eee264e?ixlib=rb-4.0.3'
    },
    {
      id: 5,
      title: 'Financial Management Basics for Entrepreneurs',
      excerpt: 'Master the fundamental financial concepts every entrepreneur should understand.',
      category: 'Finance',
      date: 'Sep 5, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1579170053380-58828eae478f?ixlib=rb-4.0.3'
    },
    {
      id: 6,
      title: 'The Art of Pitching to Investors',
      excerpt: 'Learn how to create and deliver compelling pitches that attract investors.',
      category: 'Skills',
      date: 'Oct 17, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3'
    }
  ];

  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <Hero 
        title="Blog & Resources"
        subtitle="Insights, tips, and resources to help you on your entrepreneurial journey."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1 rounded-full">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">
                    <a href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <a 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700">No posts found</h3>
              <p className="text-gray-500 mt-2">
                There are no posts in the {activeCategory} category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 text-center mb-8">
              Get the latest entrepreneurial insights and resources delivered directly to your inbox.
            </p>
            
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
