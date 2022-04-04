import React, {Component} from "react";
import './header.css';

class Header extends Component {

    state= {
        buttons: [
            {title: 'Russian language', classes: 'btn header__btn-rus', id: 123 },
            {title: 'Geography', classes: 'btn header__btn-geography', id: 124 },
            {title: 'Matematics', classes: 'btn header__btn-matematics', id: 125 },
            {title: 'History', classes: 'btn header__btn-history', id: 126 },
            {title: 'Flora and Fauna', classes: 'btn header__btn-flora-fauna', id: 127 },
        ]
    }


    render() {

        const arr = this.state;
        const elemButtons = arr.buttons.map(({title, classes, id}) => {
            return <button onClick={(e) => this.props.onIsState(e)} key={id} className={classes}>{title}</button>
        })

        return (
            <div className="container">
                <header className="header">
                    <div className="header__list-btn">
                        {elemButtons}
                    </div>
                </header>
            </div>
        )

    }

}

export default Header;