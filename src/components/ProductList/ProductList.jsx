import Title from '../Title/Title'
import macbook from '../../img/macbook.svg'

import ReactPlayer from 'react-player'
import PlayIcon from './PlayIcon'
import './ProductList.css'

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="product-round-down"></div>
      <div className="product-container">
        <div className="product-overall">
          <Title text={'Как происходит обучение на YtYt?'} />
          <div className="product-subtitle">
            Обучение должно быть комфортным. Поэтому мы разработали собственную
            платформу для обучения программированию. На ней вы можете не только
            изучать теорию, но и запускать готовые примеры и даже писать свой
            собственный код.
          </div>
          <div className="macbook-container">
            <img src={macbook} alt="" />
            <div className="youtube-frame">
              <ReactPlayer
                light
                url={
                  'https://www.youtube.com/embed/YioBy30F3AQ?si=sMkVtj_WefsbSO3y'
                }
                playIcon={<PlayIcon />}
                width="585px"
                height="375px"
                playing
              />
            </div>
          </div>
        </div>
        <div className="education-container">
          <div className="education-text">
            <div className="education-number">01</div>
            <div className="education-title">
              Весь материал разбит на небольшие уроки
            </div>
            <div className="education-subtitle">
              Теория и практика подаются маленькими порциями. Так вам будет
              легче усваивать новые знания.
            </div>
          </div>
          <div className="education-text">
            <div className="education-number">02</div>
            <div className="education-title">Обучение через практику</div>
            <div className="education-subtitle">
              Всё, что вы узнали, вы тут же начинаете применять на практике. Вы
              сразу видите результаты своего труда.
            </div>
          </div>
          <div className="education-text">
            <div className="education-number">03</div>
            <div className="education-title">Нет ограничений по времени</div>
            <div className="education-subtitle">
              Можно совмещать учёбу с работой и другими делами. Не нужно
              выпрашивать академический отпуск, если пришлось сделать перерыв.
            </div>
          </div>
        </div>
        <div className="start-education">
          <div className="start-education-container">
            <button className="start-education_button">
              <span className="text-button">Начать обучение</span>
            </button>
            <div className="start-education_text">
              Попробуйте, первые уроки бесплатны, но нужно пройти тестирование
            </div>
          </div>
        </div>
      </div>
      <div className="product-round-up"></div>
    </div>
  )
}

export default ProductList
