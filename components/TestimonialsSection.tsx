import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    content: 'InstaSave has been a game-changer for my content creation workflow. The download speed and quality are unmatched!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Digital Marketer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    content: 'The best Instagram downloader I\'ve ever used. Simple, fast, and reliable. Highly recommended!',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    content: 'As a social media manager, I rely on InstaSave daily. It never fails to deliver high-quality downloads.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust InstaSave for their Instagram content downloads
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}