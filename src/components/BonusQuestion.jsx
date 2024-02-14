import qBank from "../QuestionBank";
import KahootAnswers from "./KahootAnswers";
import { useRef, useState } from "react";
import {Answer} from "./KahootAnswers";
import { useEffect } from "react";
import bear from '../gif.gif';
import heart from '../heart.png';

export default function BonusQuestion({activeQuestion, onAnswerClick, transitionScreen, setResult}) {
    const [activeAnswers, setActiveAnswers] = useState(['(っ◔◡◔)っ ♥ Yes ♥', 'no']);
    const [noSize, setActiveSize] = useState(1);
    const [transition, setTransition] = useState(true);
    const [counter, setCounter] = useState(0);

    let stage = useRef(0);
    const onNoClicked = (selection) => {
        stage.current += 1;
        console.log(stage.current);
        switch (stage.current) {
            case 1:
                setActiveAnswers(['(っ◔◡◔)っ ♥ Yes ♥', 'oops i think u missclicked'])
                break;

            case 2:
                setActiveAnswers(['(っ◔◡◔)っ ♥ Yes ♥', 'your aim is so bad'])
                break;

            case 3:
                setActiveAnswers(['(っ◔◡◔)っ ♥ Yes ♥', '← you should click this'])
                break;

            case 4:
                setActiveAnswers(['(っ◔◡◔)っ ♥ Yes ♥', 'fineeee 😢'])
                break;

            default:
                break;
        }

        if (stage.current > 4 && stage.current < 24) {
            setActiveSize(noSize => noSize - 0.05)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev += 500);
            console.log(counter);

            if (counter == 5000) {
                transitionScreen(true);
            }

            if (counter == 6000) {
                transitionScreen(false);
            }
          }, 500);
          return () => clearInterval(interval);
    });

    return (
        <>
            {counter < 6000 ? 
                <div className={"bonus-introduction " + (!transition ? "hidden" : null)}>
                    <h1 className={counter > 500 ? "" : "transparent"}>!!!</h1>
                    <h1 className={counter > 1500 ? "" : "transparent"}>BONUS QUESTION</h1>
                    <h2 className={counter > 3000 ? "" : "transparent"}>This one is worth all the points!</h2>
                </div>
                : 
                <div className="bonus-question">
                    <img src={bear}></img>
                    <div className="hearts">
                        <img src={heart}></img>
                        <img src={heart}></img>
                        <img src={heart}></img>
                        <img src={heart}></img>
                        <img src={heart}></img>
                        <img src={heart}></img>
                    </div>
                    <h1>
                        Will you be my valentines?
                    </h1>
                    <SpecialAnswers setResult={setResult} size={noSize} onChosen={onAnswerClick} onNoChosen={onNoClicked} special={true} options={activeAnswers}></SpecialAnswers>
                </div>
            }
        </>
    )
}

function SpecialAnswers({onChosen, onNoChosen, options, special, size, setResult}) {
    return (
        <div className="special answer-grid">
            <Answer setResult={() => setResult(true)} onChosen={onChosen} text={options[0]} size={1}></Answer>
            <Answer setResult={() => setResult(false)} onChosen={(size > 0.05) ? onNoChosen : onChosen} text={options[1]} size={size}></Answer>
        </div>
    )
}
