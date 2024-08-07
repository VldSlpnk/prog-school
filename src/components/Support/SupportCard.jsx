import './SupportCard.css'

const SupportCard = ({ img, title, subtitle, reverse }) => {
  return (
    <div className={`container-card ${reverse ? 'reverse' : ''}`}>
      <div className="card-sup-img">
        <img src={img} alt={img} />
      </div>
      <div className="card-sup-text">
        <span className="title-card">{title}</span>
        <span className="subtitle-card">{subtitle}</span>
      </div>
    </div>
  )
}

export default SupportCard
