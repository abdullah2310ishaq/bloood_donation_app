"use client"
import { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  onNavigate: {
    home: () => void
    welcome: () => void
    benefits: () => void
    mobileApp: () => void
    features: () => void
    aboutUs: () => void
    contactUs: () => void
  }
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (handler: () => void) => {
    handler()
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-purple-700 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* INDEL Logo */}
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-white">V</span>
            <span className="text-rose-300">A</span>
            <span className="text-white">IN</span>
            <span className="text-rose-300">DEL</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleNavClick(onNavigate.home)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            HOME
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.welcome)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            WELCOME
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.benefits)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            BENEFITS
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.mobileApp)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            MOBILE APP
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.features)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            FEATURES
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.aboutUs)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            ABOUT US
          </button>
          <button
            onClick={() => handleNavClick(onNavigate.contactUs)}
            className="bg-transparent text-white text-sm font-medium hover:text-rose-200 transition-colors border-none"
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-800 px-6 py-4 shadow-inner">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick(onNavigate.home)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.welcome)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              WELCOME
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.benefits)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              BENEFITS
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.mobileApp)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              MOBILE APP
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.features)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              FEATURES
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.aboutUs)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              ABOUT US
            </button>
            <button
              onClick={() => handleNavClick(onNavigate.contactUs)}
              className="bg-transparent text-white hover:text-rose-200 py-2 text-left transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
