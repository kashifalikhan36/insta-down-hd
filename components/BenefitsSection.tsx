import { CheckCircle2, Clock, Lock, Zap, Smartphone, Award } from 'lucide-react';

const benefits = [
  {
    icon: <CheckCircle2 className="h-8 w-8 text-pink-500" />,
    title: 'Easy to Use',
    description: 'No technical knowledge required. Just paste the URL and download your content instantly.',
  },
  {
    icon: <Clock className="h-8 w-8 text-pink-500" />,
    title: 'Save Time',
    description: 'Batch download multiple photos and videos simultaneously without waiting.',
  },
  {
    icon: <Lock className="h-8 w-8 text-pink-500" />,
    title: 'Privacy First',
    description: 'We don\'t store your data or require any personal information to use our service.',
  },
  {
    icon: <Zap className="h-8 w-8 text-pink-500" />,
    title: 'Lightning Fast',
    description: 'Advanced servers ensure the fastest possible download speeds for all content.',
  },
  {
    icon: <Smartphone className="h-8 w-8 text-pink-500" />,
    title: 'Mobile Friendly',
    description: 'Download directly to your smartphone or tablet with our responsive design.',
  },
  {
    icon: <Award className="h-8 w-8 text-pink-500" />,
    title: 'Best Quality',
    description: 'Download content in its original quality without any compression or watermarks.',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Users Love InstaSave
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best Instagram content downloader with features designed for your convenience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}