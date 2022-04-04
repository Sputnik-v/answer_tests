import React from 'react';
import Quiz from '../../containers/quiz/Quiz';
import BackToBtn from './backToBtn/BackToBtn';


const Layout = (props) => {
    

        return (
            <div>
                <Quiz textBtn={props.textBtn}/>
                <BackToBtn/>
            </div>
        )
  
}

export default Layout;