
// import React from 'react';
import { useEffect, useState } from 'react';
import './App.css'

import { Difficulty, fetchQuizQuestions } from './utilities/api';

//Components
import QuestionCard from './components/QuestionCard';

const TOTAL_QUESTIONS = 10;

type Questions = {
  question: string,
  answers: string[],
}

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<Questions[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  useEffect(() => {
    fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  }, [])


  const startTrivia = async () => {
    console.log('');

  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('');

  };


  const nextQuestion = () => {
    console.log('');

  };



  return (



    <div className='app'>
      <h1>React Quiz</h1>

      <button className='start' onClick={startTrivia}>
        Start
      </button>

      <p className="score">Score: 0</p>

      <p>Loading Questions ...</p>

      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}

      <button className='next' onClick={nextQuestion}>
        Next Questions
      </button>

    </div>
  )
}

export default App
