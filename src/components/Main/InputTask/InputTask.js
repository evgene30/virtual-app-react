import React from 'react';
import {Component} from 'react';


class InputTask extends Component {
    inputString = () => {
        console.log('string')
    }

    render() {
        return (
            <div>
                <form id="taskform" className="main__form">
                    <p className="form__text">New Task</p>
                    <textarea name="text__area" className="area" id="input" tabIndex="0" required/>
                    <button className="area__button" id="btn" type="submit" onClick={this.inputString}>ADD
                    </button>
                </form>
            </div>
        );
    }
}


export default InputTask;
