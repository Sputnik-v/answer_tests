import React from "react";
import './answerItem.css';

const AnswerItem = (props) => {

    let cls = 'active-quiz__li';

   if (props.state) {
    cls += ` ${props.state}`
   }
    return (
        <li 
        className={cls}
        onClick={() => props.onAnswerClick(props.answer.id)}
        >{props.answer.text}</li>
    )
}

export default AnswerItem;