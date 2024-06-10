import Button from '../Button/Button'
import Navbar from '../Navbar/Navbar'
import keabord from './../../img/pc-keabord.svg'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="header-main-container">
        <Navbar />
        <div className="header-container">
          <div className="title-container">
            <div className="header-title">
              Школа <span className="brace">{'{'}</span>{' '}
              <span className="highlight">программирования </span>
              <span className="brace">{'}'}</span> для тех, кому нужны реальные
              навыки, а не просто сертификат
            </div>

            <div className="header-subtitle">
              Пройдите тестирование, чтобы получить доступ к бесплатным вводным
              урокам
            </div>
            <Button text={'Пройти тестирование'} />
          </div>
          <div className="header-image">
            <img src={keabord} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
