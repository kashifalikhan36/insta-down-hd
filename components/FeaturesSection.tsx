import { Shield, Zap, Globe, Award } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-pink-500" />,
    title: 'Fast Downloads',
    description: 'Optimized download speeds for quick content access',
  },
  {
    icon: <Globe className="h-6 w-6 text-pink-500" />,
    title: 'Universal Compatibility',
    description: 'Works on all devices and platforms',
  },
  {
    icon: <Award className="h-6 w-6 text-pink-500" />,
    title: 'High Quality',
    description: 'Download content in original quality',
  },
  {
    icon: <Shield className="h-6 w-6 text-pink-500" />,
    title: 'Secure & Private',
    description: 'No login required, completely anonymous',
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Why Choose InstaSave?
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}