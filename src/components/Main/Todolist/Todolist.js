import React from "react";
import { Component } from "react";
import Card from "./Card";

class Todolist extends Component {
    state = {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };

    handleDeleteCard = (id) => {
        this.setState((state) => {
            state.todoList.forEach((element) => {
                if (element.id === id) {
                    const index = state.todoList.indexOf(element);
                    state.todoList.splice(index, 1);
                    console.log(state.todoList);
                }
            });

            localStorage.setItem("todoList", JSON.stringify(state.todoList));
        });
    };

    stateMark = (id) => {
        this.setState((state) => {
            state.todoList.forEach((element) =>
                element.id === id
                    ? (element.mark = !element.mark)
                    : element.mark
            );
            localStorage.setItem("todoList", JSON.stringify(state.todoList));
        });
    };
    stateChecked = (id) => {
        this.setState((state) => {
            state.todoList.forEach((element) =>
                element.id === id
                    ? (element.checked = !element.checked)
                    : element.checked
            );
            localStorage.setItem("todoList", JSON.stringify(state.todoList));
        });
    };

    render() {
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
