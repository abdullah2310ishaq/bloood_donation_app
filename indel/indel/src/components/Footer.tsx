"use client"

interface FooterProps {
  onNavigate: {
    home: () => void
    benefits: () => void
    mobileApp: () => void
    features: () => void
    aboutUs: () => void
    contactUs: () => void
  }
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <button onClick={onNavigate.home} className="text-sm hover:text-rose-200 transition-colors">
                HOME
              </button>
              <button onClick={onNavigate.benefits} className="text-sm hover:text-rose-200 transition-colors">
                BENEFITS
              </button>
              <button onClick={onNavigate.mobileApp} className="text-sm hover:text-rose-200 transition-colors">
                MOBILE APP
              </button>
              <button onClick={onNavigate.features} className="text-sm hover:text-rose-200 transition-colors">
                FEATURES
              </button>
              <button onClick={onNavigate.aboutUs} className="text-sm hover:text-rose-200 transition-colors">
                ABOUT US
              </button>
              <button onClick={onNavigate.contactUs} className="text-sm hover:text-rose-200 transition-colors">
                CONTACT US
              </button>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-1 text-sm">Contact Us: info@fiksu-solutions.com</p>
            <p className="text-sm opacity-80">© 2015 Copy Right Fiksu Solutions Limited</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
