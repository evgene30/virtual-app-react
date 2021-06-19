import React from "react";
import { Component } from "react";
import delPick from "./images/del.svg";

const List = [];


class Todolist extends Component {

    render() {
        
        return (
            <ul className="main-list__items" id="todoList" tabIndex="0">
                {List.map(item =>
                <li key={item.id} tabIndex="0" className="main-list__item" id={item.id}>
                    <div className="text">
                        <p>{item.text}</p>
                    </div>
                    <div tabIndex="0" className="mark-list__item">IMPORTANT</div>
                    <div tabIndex="-1" className="del_button" tabIndex="0">
                        <img src={delPick} title="Delete" alt="delete" />
                    </div>
                </li>
                )}
            </ul>
        );
    }
}

export default Todolist;
