import './Button.css'

const Button = ({ text }) => {
  return (
    <button className="button">
      <span className="text-button">{text}</span>
    </button>
  )
}

export default Button
