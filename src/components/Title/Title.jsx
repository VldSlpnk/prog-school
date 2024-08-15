import './Title.css'

const Title = ({ text }) => {
  return (
    <h2 className="title-main">
      <span className="title-text">{text}</span>
    </h2>
  )
}

export default Title
