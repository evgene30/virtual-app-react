import "./Main.scss";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import Card from "./Cards/Card";

class Main extends Component {
    // работа с компонентом Input (формой) ввода

    inputString = (event) => {
        // поле ввода
        if (event.target.value === " ") {
            // проверка на ввод пробелов
            return (event.target.value = "");
        }
        this.props.updateText(
            event.target.value.trim().replace(/\s+|\n/g, " ")
        ); // убираем лишние пробелы и
        // переносы строк, передаем в App
    };

    handleFormSubmit = (event) => {
        // поведение формы
        // отключение поведения формы по умолчанию
        event.preventDefault();
        const newTodoList = [...this.props.TodoList];
        // формирование объекта данных
        newTodoList.unshift({
            id: nanoid(),
            text: this.props.text, // применяем состояние из App
            checked: false,
            mark: false,
        });
        this.props.updateState(newTodoList);
        this.clearInput.value = "";
    };

    keyPress = (event) => {
        // ввод кнопкой текста
        const code = event.keyCode || event.which;
        if (code === 13) {
            this.handleFormSubmit(event);
        }
    };

    // работа с компонентом карточки

    handleDeleteCard = (id) => {
        // удаление записи (карточки) в листе
        const newTodoList = this.props.TodoList.filter((el) => el.id !== id);
        this.props.updateState(newTodoList);
    };

    stateMark = (id) => {
        // передаем выделение текста по кнопке (Mark)
        const newTodoList = [...this.props.TodoList];
        newTodoList.map((element) =>
            element.id === id ? (element.mark = !element.mark) : element.mark
        );
        this.props.updateState(newTodoList);
    };

    stateChecked = (id) => {
        // передаем перечеркивание текста по кнопке (Checked)
        const newTodoList = [...this.props.TodoList];
        newTodoList.map((element) =>
            element.id === id
                ? (element.checked = !element.checked)
                : element.checked
        );
        this.props.updateState(newTodoList);
    };

    render() {
        const clickBut = this.props.clickBut;
        let todoList = [...this.props.TodoList];

        if (clickBut.Active) {
            todoList = todoList.filter((element) => !element.checked);
        }

        if (clickBut.Done) {
            todoList = todoList.filter((element) => element.checked);
        }

        const filtersSearchTodoList = todoList.filter((item) => {
            // функция фильтрации значений поиска
            return item.text
                .toLowerCase()
                .includes(this.props.search.toLowerCase());
        });

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
                            <button
                                className={
                                    !this.props.text
                                        ? "area__button button_disabled"
                                        : "area__button"
                                }
                                id="btn"
                                type="submit"
                                disabled={!this.props.text}
                            >
                                ADD
                            </button>
                        </form>
                    </div>
                </section>
                <section className="main__task" id="main__list">
                    <ul className="main-list__items" id="todoList" tabIndex="0">
                        {filtersSearchTodoList.map((item) => {
                            return (
                                <Card
                                    stateMark={this.stateMark}
                                    stateChecked={this.stateChecked}
                                    handleDeleteCard={this.handleDeleteCard}
                                    key={item.id}
                                    info={item}
                                />
                            );
                        })}
                    </ul>
                </section>
            </main>
        );
    }
}

export default Main;
