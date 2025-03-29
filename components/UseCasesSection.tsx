import { Camera, Video, Play, Bookmark, Users, Heart } from 'lucide-react';

const useCases = [
  {
    icon: <Camera className="h-12 w-12 text-pink-500" />,
    title: 'Save Photos',
    description: 'Download high-resolution Instagram photos and profile pictures in original quality.',
    examples: ['Profile pictures', 'Posted photos', 'Album photos']
  },
  {
    icon: <Video className="h-12 w-12 text-pink-500" />,
    title: 'Download Videos',
    description: 'Save Instagram videos in HD quality for offline viewing or sharing.',
    examples: ['Feed videos', 'Video posts', 'Live recordings']
  },
  {
    icon: <Play className="h-12 w-12 text-pink-500" />,
    title: 'Get Reels',
    description: 'Download trending Reels to watch later or share with friends.',
    examples: ['Dance videos', 'Tutorial reels', 'Comedy clips']
  },
  {
    icon: <Bookmark className="h-12 w-12 text-pink-500" />,
    title: 'Save Stories',
    description: 'Download Instagram stories before they disappear after 24 hours.',
    examples: ['Daily updates', 'Behind the scenes', 'Special announcements']
  },
  {
    icon: <Users className="h-12 w-12 text-pink-500" />,
    title: 'IGTV Content',
    description: 'Save long-form IGTV videos for watching offline.',
    examples: ['Tutorials', 'Interviews', 'Shows']
  },
  {
    icon: <Heart className="h-12 w-12 text-pink-500" />,
    title: 'Carousel Posts',
    description: 'Download multiple photos and videos from carousel posts at once.',
    examples: ['Photo albums', 'Product catalogs', 'Event collections']
  }
];

export default function UseCasesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download Any Instagram Content
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From photos to videos, stories to reels - save all types of Instagram content easily
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">
                {useCase.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {useCase.description}
              </p>
              <div className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <div
                    key={i}
                    className="bg-pink-50 text-pink-700 text-sm py-1 px-3 rounded-full text-center"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}