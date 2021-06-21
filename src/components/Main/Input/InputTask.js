import { nanoid } from "nanoid";
import React from "react";
import { Component } from "react";

class Input extends Component {
    state = {
        id: nanoid(),
        text: "",
        checked: false,
        mark: false,
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

        // this.setState((state) => {
        //     return state.TodoList.unshift({
        //         id: nanoid(),
        //         text: '',
        //         checked: false,
        //         mark: false,
        //     });
        // });
        var newArray = this.state.slice();
        newArray.unshift(this.state);
        return (this.state = newArray);

        // const newArray = [
        //         ...state.todoList.slice(0, index),
        //         ...state.todoList.slice(index + 1),
        //     ];
        //     return (state = newArray);

        // const TodoList = JSON.parse(localStorage.getItem("todoList")) || []; // инициализируем переменную, запрашиваем данные из хранилища

        // this.setState({ id: nanoid() }); // генерируем динамический id
        // TodoList.unshift(this.state); // добавляем в массив
        // // localStorage.setItem("todoList", JSON.stringify(TodoList)); // сохраняем в локал
        // event.target.reset(); // очистка формы
        // return this.state
    };

    // keyPress = (event) => {
    //     const code = event.keyCode || event.which;
    //     if (code === 13) {
    //         const TodoList = JSON.parse(localStorage.getItem("todoList")) || []; // инициализируем переменную, запрашиваем данные из хранилища
    //         this.setState({ id: nanoid() }); // генерируем динамический id
    //         TodoList.unshift(this.state); // добавляем в массив
    //         // localStorage.setItem("todoList", JSON.stringify(TodoList)); // сохраняем в локал
    //         this.commentInput.value = "";
    //         return this.state
    //     }
    // };

    render() {
        localStorage.setItem("todoList", JSON.stringify(this.state)); // сохраняем в локал
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
                        // onKeyPress={this.keyPress}
                        ref={(input) => (this.commentInput = input)}
                        tabIndex="0"
                        required
                    />
                    {!this.commentInput && (
                        <button
                            className="area__button button_disabled"
                            id="btn"
                            type="submit"
                            disabled
                        >
                            ADD
                        </button>
                    )}
                    {this.commentInput && (
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
