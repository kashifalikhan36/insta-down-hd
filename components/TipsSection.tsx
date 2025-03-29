import { Lightbulb, AlertCircle, Shield, Smartphone } from 'lucide-react';

const tips = [
  {
    icon: <Lightbulb className="h-6 w-6 text-pink-500" />,
    title: 'Best Practices',
    content: [
      'Always ensure you have permission to download content',
      'Use downloaded content for personal use only',
      'Respect copyright and intellectual property rights',
      'Download from public profiles only'
    ]
  },
  {
    icon: <AlertCircle className="h-6 w-6 text-pink-500" />,
    title: 'Common Issues',
    content: [
      'Private account content cannot be downloaded',
      'Story downloads require quick action',
      'Some videos may take longer to process',
      'Check URL format if download fails'
    ]
  },
  {
    icon: <Shield className="h-6 w-6 text-pink-500" />,
    title: 'Safety Tips',
    content: [
      'Never share your Instagram login details',
      'Use official Instagram URLs only',
      'Be cautious of suspicious download links',
      'Keep your browser updated'
    ]
  },
  {
    icon: <Smartphone className="h-6 w-6 text-pink-500" />,
    title: 'Mobile Tips',
    content: [
      'Use the share button to copy URLs easily',
      'Enable auto-download in your browser',
      'Clear cache if experiencing issues',
      'Use our mobile app for better experience'
    ]
  }
];

export default function TipsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tips & Best Practices
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make the most of InstaSave with these helpful tips and guidelines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {tip.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {tip.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {tip.content.map((item, i) => (
                  <li key={i} className="text-gray-600 flex items-start">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}