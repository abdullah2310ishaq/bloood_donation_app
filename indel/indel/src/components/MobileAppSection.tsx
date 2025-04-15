const MobileAppSection = () => {
  const mobileFeatures = [
    { text: "Light weight" },
    { text: "Easy to install" },
    { text: "User friendly design" },
    { text: "Both IOS & Android compatible" },
    { text: "Shift details with shift instructions" },
    { text: "Real time attendance with book on/off" },
    { text: "Missed Book-on and check calls details" },
    { text: "Lone working compliance with check calls" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 w-96 h-96 rounded-full bg-purple-500 opacity-20"></div>
        <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-purple-500 opacity-20"></div>
        <div className="absolute left-40 top-20 w-64 h-64 rounded-full bg-purple-500 opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Title and Features List */}
          <div className="text-right md:order-1 order-2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center md:text-right">
              IOS & Android Mobile App
            </h2>
            <div className="space-y-4">
              {mobileFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-end">
                  <p className="text-base md:text-lg">{feature.text}</p>
                  <span className="ml-3 bg-white/20 p-1 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: iPhone Mockup */}
          <div className="flex justify-center md:order-2 order-1 mb-8 md:mb-0">
            <div className="relative w-full max-w-xs transform transition-all hover:scale-105 duration-300">
              {/* iPhone frame */}
              <div className="relative">
                <svg className="w-full" viewBox="0 0 280 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="260" height="530" rx="40" fill="white" />
                  <rect x="10" y="10" width="260" height="530" rx="40" stroke="#E0E0E0" strokeWidth="2" />
                  <circle cx="140" cy="510" r="20" fill="#F0F0F0" />
                  <rect x="120" y="30" width="40" height="5" rx="2.5" fill="#333" />
                  <circle cx="170" cy="32.5" r="5" fill="#333" />
                </svg>

                {/* App Screenshot */}
                <div className="absolute top-[60px] left-[30px] right-[30px] bottom-[80px] bg-white rounded-lg overflow-hidden shadow-inner">
                  {/* Status Bar */}
                  <div className="h-6 bg-gray-800 flex justify-between items-center px-2">
                    <div className="text-white text-xs">AT&T 4G</div>
                    <div className="text-white text-xs">9:41 AM</div>
                    <div className="text-white text-xs">100%</div>
                  </div>

                  {/* App Header */}
                  <div className="h-12 bg-purple-700 flex items-center justify-center">
                    <div className="text-white text-sm font-medium">Sign In</div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 flex flex-col items-center">
                    {/* INDEL Logo */}
                    <div className="mb-4 text-center">
                      <span className="text-2xl font-bold">
                        <span className="text-purple-700">V</span>
                        <span className="text-rose-600">A</span>
                        <span className="text-purple-700">INDEL</span>
                      </span>
                    </div>

                    <div className="text-xs text-center mb-4">SIGN IN TO CONTINUE.</div>

                    {/* Form Fields */}
                    <div className="w-full mb-3">
                      <div className="text-xs text-gray-600 mb-1">Enter Username</div>
                      <div className="border border-gray-300 rounded px-2 py-1 text-sm">Alberd</div>
                    </div>

                    <div className="w-full mb-4">
                      <div className="text-xs text-gray-600 mb-1">Password</div>
                      <div className="border border-gray-300 rounded px-2 py-1 text-sm">••••••</div>
                    </div>

                    {/* Buttons */}
                    <button className="w-full bg-purple-700 text-white text-xs py-2 rounded mb-2 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 16l-4-4m0 0l4-4m-4 4h14"
                        />
                      </svg>
                      Sign In
                    </button>

                    <button className="w-full bg-rose-500 text-white text-xs py-2 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileAppSection
