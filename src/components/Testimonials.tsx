import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'Alex delivered an exceptional Flutter app that exceeded our expectations. The attention to detail, performance optimization, and user experience were outstanding. Our app now has over 50K downloads and 4.8-star rating.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'InnovateLab',
      content: 'Working with Alex was a game-changer for our mobile strategy. His expertise in Flutter and ability to translate complex requirements into intuitive interfaces made our project a huge success. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'WellnessTech',
      content: 'Alex built our mental wellness app with incredible care and professionalism. The Flutter implementation was flawless, and the Firebase integration worked seamlessly. Our users love the smooth performance and beautiful UI.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'CTO',
      company: 'EcoSolutions',
      content: 'The sustainability tracking app Alex developed has been instrumental in our mission. His technical skills, creative problem-solving, and commitment to quality made the entire development process smooth and successful.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'RetailFlow',
      content: 'Our e-commerce app built by Alex has transformed our mobile sales. The clean code, intuitive design, and robust functionality have resulted in a 40% increase in mobile conversions. Exceptional work!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Startup Founder',
      company: 'FitTrack Pro',
      content: 'Alex is a Flutter wizard! He took our fitness app idea and brought it to life with stunning animations, real-time data sync, and cross-platform perfection. The app launch was our biggest success yet.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      gradient: 'from-teal-500 to-cyan-500'
    }
  ];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <Star key={index} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by startups and established companies alike to deliver exceptional mobile experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className="relative backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-xl border border-white/30 h-full hover:shadow-2xl transition-all duration-500">
                  {/* Quote icon */}
                  <div className={`absolute -top-4 left-8 p-3 rounded-full bg-gradient-to-br ${testimonial.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Quote className="w-5 h-5 text-white" />
                  </div>

                  {/* Rating */}
                  <div className="mb-6 pt-4">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 text-base leading-relaxed mb-8">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white`}>
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br ${testimonial.gradient} rounded-full border-2 border-white`}></div>
                    </div>
                    
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>

                  {/* Decorative gradient border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="backdrop-blur-sm bg-gradient-to-r from-blue-50/80 to-purple-50/80 rounded-2xl p-8 shadow-lg border border-white/30">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { number: '50+', label: 'Projects Delivered', icon: '🚀' },
                  { number: '30+', label: 'Happy Clients', icon: '😊' },
                  { number: '100K+', label: 'App Downloads', icon: '📱' },
                  { number: '4.9★', label: 'Average Rating', icon: '⭐' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <p className="text-2xl md:text-3xl text-gray-900 mb-2">
                      {stat.number}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}