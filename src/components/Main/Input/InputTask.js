import React from "react";
import { Component } from "react";

let nexId = 0;
class Input extends Component {
    state = {
        id: nexId++,
        text: "",
        checked: false,
        mark: false,
    };

    inputString = (event) => {
        if (event.target.value === " ") {
            // проверка на ввод пробелов
            return (event.target.value = "");
        }
        this.setState({ text: event.target.value });
    };
    formSubmit = (event) => {
        event.preventDefault(); // отключение поведения формы по умолчанию
        event.target.reset(); // очистка формы

        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form
                    id="taskform"
                    className="main__form"
                    onSubmit={this.formSubmit}
                >
                    <p className="form__text">New Task</p>
                    <textarea
                        name="text__area"
                        className="area"
                        id="input"
                        onChange={this.inputString}
                        tabIndex="0"
                        required
                    />
                    <button className="area__button" id="btn" type="submit">
                        ADD
                    </button>
                </form>
            </div>
        );
    }
}

export default Input;
