import logo from '../../img/logo.svg'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-list">
      <div className="footer-container">
        <div className="footer-sec">
          <div className="footer-single">
            <div className="footer-logo">
              <img src={logo} alt={logo} />
              <span className="footer-logo-text">Школа программирования</span>
            </div>
            <span className="footer-socials">
              <a href="https://www.youtube.com/@66luv6" title="66luv6"></a>
              <a
                href="https://www.instagram.com/smthlikeuu"
                title="smthlikeuu"
              ></a>
              <a href="https://music.youtube.com/" title="fb"></a>
              <a href="https://vk.com/66luv6" title="vk"></a>
            </span>
          </div>
          <div className="footer-useful-links">
            <a href="#">Чему вы научитесь</a>
            <a href="#">Процесс обучения</a>
            <a href="#">Стоимость</a>
            <a href="#">Контакты</a>
            <a href="#">Регистрация</a>
          </div>
          <div className="footer-contacts">
            <div className="contacts-phone">
              <span>
                <span className="phone">+38 (097) 702 32 75</span> <br />
                <span className="mail">keqingsimp.cr@gmail.com</span>
              </span>
            </div>
            <div className="contacts-owner">
              IP Нечаева А. <br />
              INN 745216229809 <br />
              OGRNIP 315745200001358
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
