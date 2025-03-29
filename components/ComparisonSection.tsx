import { Check, X } from 'lucide-react';

const features = [
  'No Login Required',
  'HD Quality Downloads',
  'Multiple Format Support',
  'Fast Download Speed',
  'No Watermark',
  'Batch Downloads',
  'Mobile Compatible',
  '24/7 Support'
];

const competitors = [
  {
    name: 'InstaSave',
    features: [true, true, true, true, true, true, true, true],
    highlight: true
  },
  {
    name: 'Other Tools',
    features: [false, true, false, false, false, true, false, false],
    highlight: false
  }
];

export default function ComparisonSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose InstaSave?
          </h2>
          <p className="text-lg text-gray-600">
            See how we compare to other Instagram downloaders
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-gray-600">Features</th>
                {competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={`py-4 px-6 text-center ${
                      competitor.highlight ? 'text-pink-600 font-bold' : 'text-gray-600'
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-4 px-6 text-gray-900">{feature}</td>
                  {competitors.map((competitor, compIndex) => (
                    <td
                      key={compIndex}
                      className={`py-4 px-6 text-center ${
                        competitor.highlight ? 'text-pink-600' : 'text-gray-600'
                      }`}
                    >
                      {competitor.features[index] ? (
                        <Check className="h-5 w-5 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}