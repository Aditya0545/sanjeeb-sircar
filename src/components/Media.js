'use client'

import { useState } from 'react'
import data from '../data/data.json'

export default function Media() {
  return (
    <section id="media" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{data.media.title}</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          {data.media.description}
        </p>

        {/* Videos Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold mb-6">Videos</h3>
          <div className="space-y-8">
            {data.media.videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="p-4">
                  <h4 className="font-medium text-lg mb-2">{video.title}</h4>
                  <p className="text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audio Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6">Audio Samples</h3>
          <div className="space-y-6">
            {data.media.audio.map((audio, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4">
                <h4 className="font-medium text-lg mb-2">{audio.title}</h4>
                <audio controls className="w-full">
                  <source src={audio.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="text-gray-600 mt-2">{audio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 