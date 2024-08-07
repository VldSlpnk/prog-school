import SupportCard from './SupportCard'
import supCard1 from '../../img/supportCard/1supcard.png'
import supCard2 from '../../img/supportCard/2supcard.png'
import './Support.css'
const Support = () => {
  return (
    <div className="support-container">
      <div className="cards">
        <SupportCard
          img={supCard1}
          title={'Помощь и поддержка'}
          subtitle={
            'Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше. '
          }
          reverse={''}
        />
        <SupportCard
          img={supCard2}
          title={'Методика обучения'}
          subtitle={
            'Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.'
          }
          reverse={true}
        />
      </div>
    </div>
  )
}

export default Support
