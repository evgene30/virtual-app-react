import React from 'react';
import {Component} from 'react';


class InputTask extends Component {
    render() {
        return (
            <form id="taskform" className="main__form">
                <p className="form__text">New Task</p>
                <textarea name="text__area" className="area" id="input" tabIndex="0" required/>
                <button className="area__button" id="btn" type="submit">ADD</button>
            </form>
        );
    }
}

export default InputTask;
