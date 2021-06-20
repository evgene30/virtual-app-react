import React from "react";
import { Component } from "react";
import Card from "./Card";

class Todolist extends Component {
    state = {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };

    handleDeleteCard = (id) => {
        this.setState((state) => {
            localStorage.setItem(
                "todoList",
                JSON.stringify(
                    state.todoList.filter((element) => element.id !== id)
                )
            );
        });
    };

    stateList = () => {
        // this.setState((state) => {
        //     localStorage.setItem("todoList", JSON.stringify(todoList));
        // });
    }

    render() {
        return (
            <ul className="main-list__items" id="todoList" tabIndex="0">
                {this.state.todoList.map((item) => (
                    <Card
                        stateList={this.stateList}
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
