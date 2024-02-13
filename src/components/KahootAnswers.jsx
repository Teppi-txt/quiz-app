export default function KahootAnswers({onChosen, options, special}) {
    return (
        <div className="answer-grid">
            {options.map(option => <Answer setResult={() => {}} onChosen={onChosen} text={option} size={1}></Answer>)}
        </div>
    )
}

export function Answer({text, onChosen, size, setResult}) {
    return (
        <button style={{transform: "scale(" + size + ")"}} onClick={() => {onChosen(text); setResult();}} className="answer">{text}</button>
    )
}
