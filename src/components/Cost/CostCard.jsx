import './CostCard.css'

const CostCard = ({ img, text }) => {
  return (
    <div className="cost-card">
      <img src={img} alt={img} />
      <span className="cost-card-text">{text}</span>
    </div>
  )
}

export default CostCard
