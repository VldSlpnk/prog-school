import './QuizModal.css'

const QuizModal = ({
  isActive,
  closeModal,
  questions,
  currentQuestionIndex,
  handleAnswer,
  isQuizCompleted,
  correctAnswersCount,
  restartQuiz,
}) => {
  return (
    <>
      {isActive && (
        <div className="quiz-modal active" onClick={closeModal}>
          <div
            className="quiz-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {!isQuizCompleted ? (
              <div className="quiz-modal-container">
                <div className="quiz-modal-number">
                  <span>{questions[currentQuestionIndex].qNumber}</span>
                </div>
                <div className="quiz-modal-question">
                  <span>{questions[currentQuestionIndex].question}</span>
                </div>
                <div className="quiz-modal-answer">
                  {questions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <button key={index} onClick={() => handleAnswer(option)}>
                        {option}
                      </button>
                    )
                  )}
                </div>
              </div>
            ) : (
              <div className="quiz-completed">
                <div className="quiz-completed-result">
                  <span>
                    Набрано {correctAnswersCount}/{questions.length}
                  </span>
                </div>
                <span className="quiz-completed-text">
                  Это великолепный результат! У вас есть все шансы стать
                  отличным программистом. Начните обучение прямо сейчас, доступ
                  ко вводным урокам уже открыт
                </span>
                <button className="quiz-completed-button" onClick={restartQuiz}>
                  <span className="quiz-completed-button-text">
                    Попробовать снова
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default QuizModal
