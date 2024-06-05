import Title from '../Title/Title'
import techimg from '../../img/technologies-img.svg'
import TechCard from './TechCard'
import './Main.css'

const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <Title text={'Какие технологии вы изучите:'} />
        <div className="technologies-container">
          <div className="technologies-image">
            <img src={techimg} alt="technologies-image" />
          </div>
          <div className="technologies-text">
            <div className="technologies-card">
              <TechCard
                text={'Язык программирования Python'}
                color={`#5096FF`}
                size={'311px'}
                className="tech-card-comp"
              />
              <TechCard text={'Сети'} color={'#FFB359'} size={'89px'} />
              <TechCard text={'Базы данных'} color={'#FF6F50'} size={'151px'} />
              <TechCard
                text={'Фреймворки Flask и Django'}
                color={'#4BD071'}
                size={'277px'}
                className="tech-card-comp"
              />
              <TechCard
                text={'Отладка и тестирование'}
                color={'#50C0FF'}
                size={'258px'}
                className="tech-card-comp"
              />
              <TechCard
                text={'Docker'}
                color={'#4B77B9'}
                size={'95px'}
                className="tech-card-comp"
              />
              <TechCard
                text={'Git'}
                color={'#AF93FF'}
                size={'93px'}
                className="tech-card-comp"
              />
            </div>
            <div className="technologies-subtitle">
              Это необходимый минимум для современного backend-разработчика
            </div>
          </div>
        </div>
        <Title text={'Обучение в YtYt – это удобно и результативно'} />
      </div>
    </div>
  )
}

export default Main
