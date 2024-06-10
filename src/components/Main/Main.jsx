import Title from '../Title/Title'
import TechCard from './TechCard'
import OverviewCard from './OverviewCard'

import techimg from '../../img/technologies-img.svg'
import overviewCard1 from '../../img/overviewCard/overviewCard1.svg'
import overviewCard2 from '../../img/overviewCard/overviewCard2.svg'
import overviewCard3 from '../../img/overviewCard/overviewCard3.svg'
import overviewCard4 from '../../img/overviewCard/overviewCard4.svg'
import overviewCard5 from '../../img/overviewCard/overviewCard5.svg'
import overviewCard6 from '../../img/overviewCard/overviewCard6.svg'
import overviewCard7 from '../../img/overviewCard/overviewCard7.svg'

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
        <div className="description-school-card">
          <OverviewCard
            image={overviewCard1}
            title={'Огромное количество практики'}
            subtitle={
              'Более 500 самостоятельных заданий и 20 полноценных больших проектов'
            }
          />
          <OverviewCard
            image={overviewCard2}
            title={'Современные методики обучения'}
            subtitle={
              'Спиральное обучение: погружаемся в материал постепенно, виток за витком'
            }
          />
          <OverviewCard
            image={overviewCard3}
            title={'Простое и понятное изложение'}
            subtitle={'Вместо заумных терминов – примеры из реального мира'}
          />
          <OverviewCard
            image={overviewCard4}
            title={'Гибкий график занятий'}
            subtitle={'Учитесь в любое время в удобном для вас темпе'}
          />
          <OverviewCard
            image={overviewCard5}
            title={'Прямая связь с опытными программистами'}
            subtitle={'Задавайте вопросы и отправляйте свой код на проверку'}
          />
          <OverviewCard
            image={overviewCard6}
            title={'Оплата небольшими частями'}
            subtitle={
              'Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу'
            }
          />
          <OverviewCard
            image={overviewCard7}
            title={'Быстрый и легкий возврат'}
            subtitle={
              'Если передумаете учиться – вернем деньги за 3 рабочих дня'
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Main
