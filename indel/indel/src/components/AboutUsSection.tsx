const AboutUsSection = () => {
  return (
    <section className="bg-gray-50">
      {/* Purple header banner with wavy bottom */}
      <div className="bg-purple-700 py-10 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">About Us</h2>
        </div>
        {/* Create the wavy bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-gray-50"
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 50% 100%, 0 0)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            INDEL is the next-generation of web based Application for security companies, conceived with passion and
            with a meticulous focus on Security Industry. INDEL application offers creative pros exactly what Security
            Companies need-sophisticated reporting, accuracy in every functionality, blazing speed and unrivalled
            compatibility, and we don't do any yearly contracts and charge only monthly subscriptions, it's how a
            business application should be.
          </p>
          <p className="text-gray-700 leading-relaxed italic">
            Indel is a project by Fiksu Solutions Limited. Fiksu Solutions Limited is an I.T firm specialized in
            developing I.T systems for businesses.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
