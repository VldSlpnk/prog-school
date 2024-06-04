import './Navbar.css'
import logo from '../../img/logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src={logo} alt="School Logo" />
      </a>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#learn">Чему вы научитесь</a>
        </li>
        <li className="navbar-item">
          <a href="#process">Процесс обучения</a>
        </li>
        <li className="navbar-item">
          <a href="#cost">Стоимость</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Контакты</a>
        </li>
      </ul>
      <div className="navbar-auth">
        <a href="#register" className="navbar-register">
          Регистрация
        </a>
        <a href="#login" className="navbar-login">
          Войти
        </a>
      </div>
    </nav>
  )
}

export default Navbar
