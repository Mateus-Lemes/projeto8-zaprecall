import React from "react";
import QuestionsNumber from "./QuestionsNumber";
import QuestionTitle from "./QuestionTitle";
import QuestionAnswer from "./QuestionAnswer";

export default function Cards() {
    const [screenCard, setScreenCard] = React.useState("questionNumber");

    if (screenCard === "questionNumber") {
        return (
            <QuestionsNumber onclick = {(changeCard) => setScreenCard(changeCard)}/>
        )
    } else if (screenCard === "questionTitle") {
        return (
            <QuestionTitle />
        )
    } else if (screenCard === "questionAnswer") {
        return (
            <QuestionAnswer />
        )
    }
}
