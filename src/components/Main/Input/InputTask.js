import { nanoid } from "nanoid";
import React from "react";
import { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: nanoid(),
            text: "",
            checked: false,
            mark: false,
        };
    }

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
        // поведение формы
        event.preventDefault(); // отключение поведения формы по умолчанию
        const TodoList = JSON.parse(localStorage.getItem("todoList")) || []; // инициализируем переменную, запрашиваем данные из хранилища
        this.setState({ id: nanoid() }); // генерируем динамический id
        TodoList.unshift(this.state); // добавляем в массив
        localStorage.setItem("todoList", JSON.stringify(TodoList)); // сохраняем в локал
        event.target.reset(); // очистка формы
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
