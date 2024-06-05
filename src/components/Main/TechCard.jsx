import './TechCard.css'
const TechCard = ({ text, color, size }) => {
  return (
    <div
      className="tech-card"
      style={{
        backgroundColor: color,
        width: size,
      }}
    >
      <span className="card-text">{text}</span>
    </div>
  )
}

export default TechCard
