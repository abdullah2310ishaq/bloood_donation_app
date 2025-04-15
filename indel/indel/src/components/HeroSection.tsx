interface HeroSectionProps {
  title: string
  subtitle?: string
}

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-purple-700 to-purple-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
          {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">{subtitle}</p>}
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01] duration-300">
          {/* Image Section */}
          <div className="relative">
            <img
              src="pic1.png" // Replace with the correct path to your image
              alt="Hero Image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">Your Security Solution</h2>
            <p className="text-base md:text-lg text-gray-700">
              INDEL provides a comprehensive solution for security companies with advanced scheduling, monitoring, and
              reporting features.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
