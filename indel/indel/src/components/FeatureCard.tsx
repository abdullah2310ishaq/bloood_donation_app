import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md mb-6 transform transition-all hover:scale-[1.02] duration-300">
      <div className="flex items-start">
        <div className="mr-4 bg-purple-100 p-3 rounded-full">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
