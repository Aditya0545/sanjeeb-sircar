import data from '../data/data.json'

export default function Performances() {
  return (
    <section id="performances" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Performances</h2>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl text-orange-600 mb-6">Performance History</h3>
          <div className="space-y-4">
            {data.performances.map((performance, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="font-medium text-gray-900">{performance.location}</div>
                  <div className="text-gray-600">{performance.year}</div>
                </div>
                {performance.note && (
                  <div className="mt-1 text-sm text-gray-500 italic">
                    {performance.note}
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500 text-center">
            * This is a non-inclusive list of performances
          </p>
        </div>
      </div>
    </section>
  )
} 