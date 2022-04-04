import React from 'react';
import AnswersList from '../answersList/AnswersList';
import './activeQuiz.css';

const ActiveQuiz = (props) => {
    return (
        <div className='active-quiz'>
            <span className='active-quiz__position'>{props.answerNumber} из {props.quizLength}</span>
            <p className='active-quiz__title'>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                    {props.question}
                </span>
            </p>
            <AnswersList 
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            />
        </div>
    )
}

export default ActiveQuiz;