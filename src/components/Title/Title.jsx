import './Title.css'

const Title = ({ text }) => {
  return (
    <h1 className="title-main">
      <span className="title-text">{text}</span>
    </h1>
  )
}

export default Title
