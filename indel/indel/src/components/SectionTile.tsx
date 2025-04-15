interface SectionTitleProps {
    title: string
    className?: string
  }
  
  const SectionTitle = ({ title, className = "" }: SectionTitleProps) => {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-2xl md:text-3xl font-bold relative inline-block">
          {title}
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-purple-600 mt-2"></span>
        </h2>
      </div>
    )
  }
  
  export default SectionTitle
  