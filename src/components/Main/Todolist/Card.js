import React from "react";
import { Component } from "react";
import delPick from "./images/del.svg";

class Card extends Component {
    delCard = (id) => {
        // удаление карточки
        this.props.handleDeleteCard(id);
    };

    render() {
        const { id, text } = this.props.info; // убираем синтаксис входящих props
        return (
            <li tabIndex="0" className="main-list__item" id={id}>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div tabIndex="0" className="mark-list__item">
                    IMPORTANT
                </div>
                <div
                    tabIndex="0"
                    className="del_button"
                    tabIndex="0"
                    onClick={() => this.delCard(id)} // синтаксис отложенного вызова по нажатию кнопки
                >
                    <img src={delPick} title="Delete" alt="delete" />
                </div>
            </li>
        );
    }
}

export default Card;
