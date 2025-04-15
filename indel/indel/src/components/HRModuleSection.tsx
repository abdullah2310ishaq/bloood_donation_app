"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionTitle from "./SectionTile"

const HRModuleSection = () => {
  const hrFeatures = [
    "Complete staff application forms",
    "Complete Recruitment Solution (Online Job Applications)",
    "Complete Screening and Vetting of Staff (BS:7858)",
    "Staff performance management",
    "Managing staff holidays",
    "Managing staff documents",
    "Comprehensive HR reports",
  ]

  const images = ["pic5.png", "pic6.png", "pic7.png"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="HR Module" className="mb-16" />

        {/* Flex layout for features list and carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: HR Features List */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-purple-700">HR Features</h3>
            <div className="space-y-4">
              {hrFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-purple-600 mr-3 mt-1 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image Carousel */}
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`HR Module Image ${currentImageIndex + 1}`}
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

export default HRModuleSection
