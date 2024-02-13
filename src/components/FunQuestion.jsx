import qBank from "../QuestionBank";
import KahootAnswers from "./KahootAnswers";

export default function FunQuestion({activeQuestion, onAnswerClick}) {
    return (
        <div className="fun-question">
            <h1>
                {qBank.at(activeQuestion).question}
            </h1>
            <KahootAnswers onChosen={onAnswerClick} options={qBank.at(activeQuestion).options}></KahootAnswers>
        </div>
    )
}