import ImageCarousel from './ImageCarousel'

export default function Hero() {
  return (
    <section id="homee" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Business with Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Leading IT services provider delivering innovative technology solutions for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
                Explore Services
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition text-lg">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Image Carousel */}
          <div>
            <ImageCarousel />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">500+</div>
            <p className="text-blue-100">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <p className="text-blue-100">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">15+</div>
            <p className="text-blue-100">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
