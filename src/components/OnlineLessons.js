import data from '../data/data.json'

export default function OnlineLessons() {
  return (
    <section id="lessons" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Online Lessons</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-lg mb-6">
              For Online Sitar Music Lessons via Skype inquiry please send E-mail to:
            </p>
            
            <div className="space-y-4">
              {data.onlineLessons.emails.map((email, index) => (
                <a 
                  key={index}
                  href={`mailto:${email}`} 
                  className="block text-orange-600 hover:text-orange-700 transition-colors"
                >
                  {email}
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-700">
                <span className="font-medium">Skype Address:</span> {data.onlineLessons.skype}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 