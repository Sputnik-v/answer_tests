import React from "react";
import AnswerItem from "./answerItem/AnswerItem";
import './answersList.css';

const AnswersList = (props) => {

    return (
            <ul className='active-quiz__ul'>
                {props.answers.map((answer, i) => {
                    return (
                        <AnswerItem 
                        state={props.state ? props.state[answer.id] : null}
                        answer={answer} 
                        key={i}
                        onAnswerClick={props.onAnswerClick}
                        />
                    )
                })}
            </ul>
            
    )
}

export default AnswersList;