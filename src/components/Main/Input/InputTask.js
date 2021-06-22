import { nanoid } from "nanoid";
import React from "react";
import { Component } from "react";

class Input extends Component {
    state = {
        text: "",
        TodoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };

    inputString = (event) => {
        if (event.target.value === " ") {
            // проверка на ввод пробелов
            return (event.target.value = "");
        }
        return this.setState({
            text: event.target.value.trim().replace(/\s+|\n/g, " "), // убираем лишние пробелы и переносы строк
        });
    };

    handleFormSubmit = (event) => {
        // поведение формы
        event.preventDefault(); // отключение поведения формы по умолчанию
        this.setState((state) => {
            state.TodoList.unshift({
                id: nanoid(),
                text: state.text,
                checked: false,
                mark: false,
            });
            this.clearInput.value = "";
            return this.setState;
        });
    };

    keyPress = (event) => {
        const code = event.keyCode || event.which;
        if (code === 13) {
            this.handleFormSubmit(event);
        }
    };

    render() {
        localStorage.setItem("todoList", JSON.stringify(this.state.TodoList));
        return (
            <div>
                <form
                    id="taskform"
                    className="main__form"
                    onSubmit={this.handleFormSubmit}
                >
                    <p className="form__text">New Task</p>
                    <textarea
                        name="text__area"
                        className="area"
                        id="input"
                        onChange={this.inputString}
                        onKeyPress={this.keyPress}
                        ref={(input) => (this.clearInput = input)}
                        tabIndex="0"
                        required
                    />
                    {!this.clearInput && (
                        <button
                            className="area__button button_disabled"
                            id="btn"
                            type="submit"
                            disabled
                        >
                            ADD
                        </button>
                    )}
                    {this.clearInput && (
                        <button className="area__button" id="btn" type="submit">
                            ADD
                        </button>
                    )}
                </form>
            </div>
        );
    }
}

export default Input;
