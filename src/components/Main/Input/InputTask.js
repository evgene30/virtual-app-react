import { random } from "nanoid";
import React from "react";
import { Component } from "react";

const TodoList = [];
let getElem = localStorage.getItem("todoList");
if (!getElem) {
    localStorage.setItem("todoList", JSON.stringify(TodoList));
}

class Input extends Component {
    state = {
        id: 0,
        text: "",
        checked: false,
        mark: false,
    };

    inputString = (event) => {
        if (event.target.value === " ") {
            // проверка на ввод пробелов
            return (event.target.value = "");
        }
        this.setState({
            text: event.target.value.trim().replace(/\s+|\n/g, " "), // убираем лишние пробелы и переносы строк
        });
    };
    handleFormSubmit = (event) => {
        event.preventDefault(); // отключение поведения формы по умолчанию
        this.setState(this.massiveSave); // добавляем в массив
        event.target.reset(); // очистка формы
    };

    massiveSave = () => {
        TodoList.unshift(this.state); // добавляем в массив
        this.saveLocal(); // добавляем массив в локал
    };

    saveLocal = () => {
        localStorage.setItem("todoList", JSON.stringify(TodoList));
    };

    render() {
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
