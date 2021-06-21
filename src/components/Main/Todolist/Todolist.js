import React from "react";
import { Component } from "react";
import Card from "./Card";

class Todolist extends Component {
    state = {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };

    handleDeleteCard = (id) => {
        this.setState((state) => {
            const index = state.todoList.findIndex((el) => el.id === id);

            const newArray = [
                ...state.todoList.slice(0, index),
                ...state.todoList.slice(index + 1),
            ];
            return (state.todoList = newArray);
        });
    };

    stateMark = (id) => {
        this.setState((state) => {
            state.todoList.forEach((element) =>
                element.id === id
                    ? (element.mark = !element.mark)
                    : element.mark
            );
            return state.todoList;
        });
    };
    stateChecked = (id) => {
        this.setState((state) => {
            state.todoList.forEach((element) =>
                element.id === id
                    ? (element.checked = !element.checked)
                    : element.checked
            );
            return state.todoList;
        });
    };

    render() {
        localStorage.setItem("todoList", JSON.stringify(this.state.todoList));
        return (
            <ul className="main-list__items" id="todoList" tabIndex="0">
                {this.state.todoList.map((item) => (
                    <Card
                        stateMark={this.stateMark}
                        stateChecked={this.stateChecked}
                        handleDeleteCard={this.handleDeleteCard}
                        key={item.id}
                        info={item}
                    />
                ))}
            </ul>
        );
    }
}

export default Todolist;
