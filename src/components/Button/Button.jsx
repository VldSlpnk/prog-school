import './Button.css'

const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      <span className="text-button">{text}</span>
    </button>
  )
}

export default Button
