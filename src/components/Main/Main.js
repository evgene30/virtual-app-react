import "./Main.scss";
import React, {Component} from 'react';
import {nanoid} from "nanoid";
import Card from "./Cards/Card";

class Main extends Component {

// работа с компонентом Input (формой) ввода

    inputString = (event) => { // поле ввода
        if (event.target.value === " ") {
            // проверка на ввод пробелов
            return (event.target.value = "");
        }
        this.props.updateText(event.target.value.trim().replace(/\s+|\n/g, " ")) // убираем лишние пробелы и
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
            visibility: true,
        });
        this.props.updateState(newTodoList);
        this.clearInput.value = "";
    };

    keyPress = (event) => { // ввод кнопкой текста
        const code = event.keyCode || event.which;
        if (code === 13) {
            this.handleFormSubmit(event);
        }
    };

// работа с компонентом карточки

    handleDeleteCard = (id) => {
        // удаление записи (карточки) в листе
        const index = this.props.TodoList.findIndex((el) => el.id === id);

        const newArray = [
            ...this.props.TodoList.slice(0, index),
            ...this.props.TodoList.slice(index + 1),
        ];
        this.props.updateState(newArray);
    };

    stateMark = (id) => {
        // передаем выделение текста по кнопке (Mark)
        const newTodoList = [...this.props.TodoList];
        newTodoList.forEach((element) =>
            element.id === id
                ? (element.mark = !element.mark)
                : element.mark
        );
        this.props.updateState(newTodoList);
    };
    stateChecked = (id) => {
        // передаем перечеркивание текста по кнопке (Checked)
        const newTodoList = [...this.props.TodoList];
        newTodoList.forEach((element) =>
            element.id === id
                ? (element.checked = !element.checked)
                : element.checked
        );
        this.props.updateState(newTodoList);
    };

    render() {
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
                                className={!this.clearInput ? "area__button button_disabled" : "area__button"}
                                id="btn"
                                type="submit"
                                disabled={!this.clearInput}
                            >
                                ADD
                            </button>
                        </form>
                    </div>
                </section>
                <section className="main__task" id="main__list">
                    <ul className="main-list__items" id="todoList" tabIndex="0">
                        {this.props.TodoList.map((item) => {
                                if (item.visibility) {
                                    return (
                                        <Card
                                            stateMark={this.stateMark}
                                            stateChecked={this.stateChecked}
                                            handleDeleteCard={this.handleDeleteCard}
                                            key={item.id}
                                            info={item}
                                        />
                                    )
                                }
                            }
                        )}
                    </ul>
                </section>
            </main>
        );
    }
}

export default Main;
