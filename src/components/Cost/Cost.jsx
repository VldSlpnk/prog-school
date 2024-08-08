import Title from '../Title/Title'

import './Cost.css'

import CostCard from './CostCard'
import Button from '../Button/Button'

import costCard1 from '../../img/costCard/costCard1.svg'
import costCard2 from '../../img/costCard/costCard2.svg'
import costCard3 from '../../img/costCard/costCard3.svg'
import advertisementLogo from '../../img/advertisementCard.svg'

const Cost = () => {
  return (
    <div className="cost-list">
      <div className="product-round-down"></div>
      <div className="cost-container">
        <Title text={'Стоимость обучения'} />
        <div className="cost-description">
          <CostCard
            img={costCard1}
            text={
              'Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.'
            }
          />
          <CostCard
            img={costCard2}
            text={'Любой из блоков вы можете оплатить в рассрочку'}
          />
          <CostCard
            img={costCard3}
            text={
              'Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня.    '
            }
          />
        </div>
        <div className="cost-table-price">
          <table>
            <caption>* если занятиям уделяется около 20 часов в неделю</caption>
            <thead>
              <tr className="bordrad ">
                <th scope="col">Блок</th>
                <th scope="col">Стоимость (UAH)</th>
                <th scope="col">Расчетное время обучения (мес.) *</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bordrad ">
                <th scope="row">Введение в программирование</th>
                <td>Бесплатно</td>
                <td>0.5</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Основы программирования на Python</th>
                <td>9 900</td>
                <td>1</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Python, продвинутый уровень</th>
                <td>14 900</td>
                <td>2.5</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Сети + фреймворк Flask</th>
                <td>14 900</td>
                <td>2.5</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Базы данных</th>
                <td>14 900</td>
                <td>2</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Фреймворк Django</th>
                <td>14 900</td>
                <td>2</td>
              </tr>
              <tr className="bordrad ">
                <th scope="row">Разработка «боевого» проекта </th>
                <td>9 900</td>
                <td>1.5</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bordrad ">
                <th scope="row">Итого</th>
                <td>79 400</td>
                <td>12</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="advertisement-container">
          <div className="advertisement">
            <img src={advertisementLogo} alt={advertisementLogo} />
            <span className="advertisement-text">
              Все блоки проходятся строго по порядку. Пропустить какой-то блок
              или начать обучение с середины нельзя, даже если вы считаете, что
              уже знаете какую-то часть материала. Только так мы можем
              гарантировать, что вы получите все знания, предусмотренные учебной
              программой.
            </span>
          </div>
          <Button text={'Начать обучение'} />
        </div>
      </div>
    </div>
  )
}

export default Cost
