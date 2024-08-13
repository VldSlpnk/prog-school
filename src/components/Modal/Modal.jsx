import './Modal.css'
import Button from '../Button/Button'

const Modal = ({ active, setActive, openQuiz }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content-container">
          <span className="modal-content-title">
            Перед тем, как приступить к обучению, необходимо пройти небольшой
            тест
          </span>
          <span className="modal-content-subtitle">
            Тест состоит из 4 заданий на логическое мышление и прочие навыки,
            необходимые программисту. Задания не самые простые. Но ни в коем
            случае не выбирайте ответы наугад. Если вы не можете дать правильный
            ответ – выбирайте пункт «Не знаю».
          </span>
          <Button text="Start Quiz" onClick={openQuiz} />
        </div>
      </div>
    </div>
  )
}

export default Modal
