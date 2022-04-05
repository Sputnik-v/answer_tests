import React, {Component} from "react";
import Header from "../header/Header";
import Layout from "../../hoc/layout/Layout";
import Main from "../main/main";
import './app.css';

class App extends Component {

    state = {
        isLayout: false,
        isMain: true,
        isTextBtn: ''
    }

    onIsState = (e) => {
        const targ = e.target.textContent;
    
        this.setState({
            isLayout: true,
            isMain: false,
            isTextBtn: targ
        })
    }

    onBack = () => {
        this.setState({
            isLayout: false,
            isMain: true
        })
    }
 

    render() {


        return (
            <>
                <h1 className="title__app">This is my app for victorine</h1>
                <div className="wrap">
                    {this.state.isLayout ? null : <Header onIsState={this.onIsState}/>}
                    {this.state.isLayout ? <Layout textBtn={this.state.isTextBtn} onBack={this.onBack}/> : null}
                    {this.state.isMain ? <Main/> : null}
                    
                    
                     
                </div>
            </>
            
        )
    }
    
}

export default App