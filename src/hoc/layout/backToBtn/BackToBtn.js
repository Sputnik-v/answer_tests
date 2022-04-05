import React, {Component} from "react";
import './backToBtn.css';

class BackToBtn extends Component{


    render() {

        return (
            <div className="backBatton">
                <button onClick={this.props.onBack} className="backBatton__btn">Back to Tests</button>
            </div>
        )

    }
    

}

export default BackToBtn;