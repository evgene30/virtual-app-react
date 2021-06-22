import "./Main.scss";
import React from "react";
import { Component } from "react";
import { nanoid } from "nanoid";
import Card from "./Todolist/Card";

class Main extends Component {
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

    handleDeleteCard = (id) => {
        this.setState((state) => {
            const index = state.TodoList.findIndex((el) => el.id === id);

            const newArray = [
                ...state.TodoList.slice(0, index),
                ...state.TodoList.slice(index + 1),
            ];
            return (state.TodoList = newArray);
        });
    };

    stateMark = (id) => {
        this.setState((state) => {
            state.TodoList.forEach((element) =>
                element.id === id
                    ? (element.mark = !element.mark)
                    : element.mark
            );
            return state.TodoList;
        });
    };
    stateChecked = (id) => {
        this.setState((state) => {
            state.TodoList.forEach((element) =>
                element.id === id
                    ? (element.checked = !element.checked)
                    : element.checked
            );
            return state.TodoList;
        });
    };

    render() {
        localStorage.setItem("todoList", JSON.stringify(this.state.TodoList));
        return (
            <main className="main" id="main">
                <section className="main__newtask" id="main__form">
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
                                <button
                                    className="area__button"
                                    id="btn"
                                    type="submit"
                                >
                                    ADD
                                </button>
                            )}
                        </form>
                    </div>
                </section>
                <section className="main__task" id="main__list">
                    <ul className="main-list__items" id="todoList" tabIndex="0">
                        {this.state.TodoList.map((item) => (
                            <Card
                                stateMark={this.stateMark}
                                stateChecked={this.stateChecked}
                                handleDeleteCard={this.handleDeleteCard}
                                key={item.id}
                                info={item}
                            />
                        ))}
                    </ul>
                </section>
            </main>
        );
    }
}

export default Main;
