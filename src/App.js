import logo from './logo.svg';
import './App.css';
import FunQuestion from './components/FunQuestion';
import qBank from './QuestionBank';
import { useState } from 'react';
import BonusQuestion from './components/BonusQuestion';
import EndingScreen from './components/EndingScreen';

function App() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [transitioning, setTransitioning] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [result, setResult] = useState(true);

  let qnum = 9;


  const onClickNext = (selection) => {
    setTransitioning(true);
    if (activeQuestion != 10) {
      setTimeout(function() {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(selection);
      setTransitioning(false);
      }, 1000);
    } else {

      setTimeout(function() {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(selection);
      setTransitioning(false);
      }, 1000);

      setTimeout(function() {
      setActiveQuestion((prev) => prev + 1);
      setSelectedAnswer(selection);
      setTransitioning(false);
    }, 5000);
    }
  }

  return (
    <div className={"App " + (transitioning ? "active " : "") + (activeQuestion == qnum + 1 ? "special" : "")}>
      { activeQuestion <= qnum ? 
      <>
      <ScoreCounter count={activeQuestion}></ScoreCounter>
      <FunQuestion activeQuestion={activeQuestion} onAnswerClick={onClickNext} questionData={qBank}>

      </FunQuestion>
      </>
      : null
      }

      { activeQuestion == qnum + 1 ? 
        <BonusQuestion onAnswerClick={onClickNext} transitionScreen={setTransitioning} setResult={setResult}></BonusQuestion>
        : null
      }

      { activeQuestion == qnum + 2 ? 
        <EndingScreen result={result} hidden={false}></EndingScreen>
        : null
      }
    </div>
  );
}

function ScoreCounter({count}) {
  return (
    <p className='counter'>{count}/10 </p>
  )
}

export default App;
