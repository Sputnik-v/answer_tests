import React from "react";
import './finishQuiz.css';

const FinishQuiz = (props) => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)

    return (
        <div className="finish">
            <ul className="finish__ul">
                {props.quiz.map((quizItem, i) => {

                    const classEm = ['finish__em', props.results[quizItem.id] === 'error' ? 'active-no' : 'active-yes']
                    const titleEm = classEm[1] === 'active-no' ? 'no' : 'ok';
                    return (
                        <li key={i} className="finish__li">
                            <strong className="finish__strong">{i + 1}.</strong>
                            {quizItem.question}
                            <em className={classEm.join(' ')}>{titleEm}</em>
                        </li>
                    )

                })}
           
            </ul>
            <p className="finish__p">Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <button onClick={props.onRetry} className="finish__button">Повторить тест</button>
            </div>
        </div>
    )
}

export default FinishQuiz;
