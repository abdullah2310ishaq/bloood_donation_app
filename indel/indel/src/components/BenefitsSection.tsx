"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const BenefitsSection = () => {
  const benefits = [
    "Over 12 months advance scheduling",
    "Repeat client, site and staff scheduling",
    "Multiple roster views",
    "Multiple shifts operations",
    "Live operations monitoring",
    "Staff Book on, Book off and Check calls",
    "Chase-up calls to monitor lateness",
    "Site trained staff",
    "Automatic notifications of banned staff",
    "Creating staff categories (guard groups)",
    "Creating staff payrolls and client invoices",
    "Managing staff and client payments",
    "Complete Incident Reporting",
    "Business Performance Management",
    "Full system logs to audit Admin users",
    "Complete shifts logs to identify the mistakes",
    "Micro level access control for system Admins",
    "Creating and managing multiple branches",
    "Over 50 reports to cover all aspects of the business",
  ]

  const images = ["pic2.png", "pic3.png", "/pic4.png"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="bg-gray-50 py-16">
      {/* Purple header banner */}
      <div className="bg-purple-700 py-10 relative mb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Indel Offers Wide Range Of Benefits</h2>
        </div>
        {/* Create the wavy bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Benefits List */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-purple-700">Key Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="text-purple-600 mr-2 mt-1">➔</span>
                  <span className="text-sm md:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Dashboard Image Carousel */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`Indel Dashboard ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-xl"
              />

              {/* Navigation buttons */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                  onClick={prevImage}
                  className="bg-white/80 hover:bg-white text-purple-700 p-2 rounded-full shadow-md transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="bg-white/80 hover:bg-white text-purple-700 p-2 rounded-full shadow-md transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-purple-600" : "bg-white/70"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
