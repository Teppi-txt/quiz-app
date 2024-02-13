import qBank from "../QuestionBank";
import KahootAnswers from "./KahootAnswers";

export default function EndingScreen({result, hidden}) {
    return (
        <div className={"ending " + (hidden ? "hidden" : "")}>
            {result ? 
                <>
                <h1>Congratulations! You passed the quiz &lt;3</h1>
                <h2>Here's a rose as a gift! (for testing and nothing else ofc)</h2>
                <p className="rose">🌹</p>
                 </>
                : 
                <>
                <h1>Hhmp &gt;:(! You failed the quiz</h1>
                <h2>Here's a rose as a gift! (for testing and nothing else ofc)</h2>
                <p className="rose">🌹</p>
                </>
            }
        </div>
    )
}