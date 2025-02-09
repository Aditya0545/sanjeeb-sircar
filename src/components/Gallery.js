'use client'

import Image from 'next/image'
import data from '../data/data.json'

export default function Gallery() {
  console.log('Gallery Images:', data.gallery.images);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.gallery.images.map((image, index) => (
            <div key={index} className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-full"
                priority={index === 0}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                <p className="text-white text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 