import { ClipboardCopy, ArrowRight, Download } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardCopy className="h-6 w-6 text-pink-500" />,
    title: 'Copy URL',
    description: 'Copy the Instagram content URL you want to download',
  },
  {
    icon: <ArrowRight className="h-6 w-6 text-pink-500" />,
    title: 'Paste Link',
    description: 'Paste the URL into the input field above',
  },
  {
    icon: <Download className="h-6 w-6 text-pink-500" />,
    title: 'Download',
    description: 'Click download and choose your preferred quality',
  },
];

export default function HowToSection() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        How to Download
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 text-center">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}