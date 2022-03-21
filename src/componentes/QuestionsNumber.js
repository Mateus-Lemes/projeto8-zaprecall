export default function QuestionsNumber(props) {
    const question = [
    <QuestionNumber click={props.onclick} name= "Pergunta 1" />, 
    <QuestionNumber click={props.onclick} name= "Pergunta 2" />, 
    <QuestionNumber click={props.onclick} name= "Pergunta 3" />, 
    <QuestionNumber click={props.onclick} name= "Pergunta 4" />, 
    <QuestionNumber click={props.onclick} name= "Pergunta 5" />, 
    <QuestionNumber click={props.onclick} name= "Pergunta 6" />,  
    <QuestionNumber click={props.onclick} name= "Pergunta 7" />,  
    <QuestionNumber click={props.onclick} name= "Pergunta 8" />]
    return (
        <section>
            {question.map(card => card)}
        </section>
    )
}

function QuestionNumber(props) {
    return (
        <div className="question-number" onClick={() => props.click("questionTitle")}>
            <p>{props.name}</p>
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}