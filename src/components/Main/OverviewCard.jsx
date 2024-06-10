import './OverviewCard.css'

const OverviewCard = ({ image, title, subtitle }) => {
  return (
    <div className="overview-card">
      <div className="overview-container">
        <img src={image} alt={image} />
        <div className="overview-text">
          <div className="overview-title">{title}</div>
          <div className="overview-subtitle">{subtitle}</div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard
