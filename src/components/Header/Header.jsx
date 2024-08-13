import { useState } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import Navbar from '../Navbar/Navbar'
import keabord from './../../img/pc-keabord.svg'
import questions from '../QuizModal/questions'
import QuizModal from '../QuizModal/QuizModal'
import './Header.css'

const Header = () => {
  const [modalActive, setModalActive] = useState(false)
  const [isQuizModalActive, setIsQuizModalActive] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer])
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setIsQuizCompleted(true)
    }
  }

  const restartQuiz = () => {
    setAnswers([])
    setCurrentQuestionIndex(0)
    setIsQuizCompleted(false)
    setIsQuizModalActive(true)
  }
  const openQuiz = () => {
    setModalActive(false)
    setIsQuizModalActive(true)
  }
  const correctAnswersCount = answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length

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
            <Button
              text={'Пройти тестирование'}
              onClick={() => setModalActive(true)}
            />
            <Modal
              active={modalActive}
              setActive={setModalActive}
              openQuiz={openQuiz}
            />
            <QuizModal
              isActive={isQuizModalActive}
              closeModal={() => setIsQuizModalActive(false)}
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              handleAnswer={handleAnswer}
              isQuizCompleted={isQuizCompleted}
              correctAnswersCount={correctAnswersCount}
              restartQuiz={restartQuiz}
            />
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
