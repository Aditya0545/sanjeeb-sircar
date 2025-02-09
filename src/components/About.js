import Image from 'next/image'
import data from '../data/data.json'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo Box */}
            <div className="lg:col-span-1">
              <div className="relative aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={data.about.photo}
                  alt="Dr. Sanjeeb Sircar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {data.about.content.map((paragraph, index) => (
                  paragraph ? (
                    <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ) : (
                    <div key={index} className="h-4" />
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 