import React from "react";
import { Component } from "react";
import delPick from "./images/del.svg";

class Card extends Component {
    // state = {
    //     isChecked: false,
    //     isMark: false,
    // };

    delCard = (id) => {
        // удаление карточки
        this.props.handleDeleteCard(id);
    };
    handleMark = (id) => {
        // метод проверки состояния и изменения его в объекте Mark
        this.props.stateMark(id);
    };
    handleChecked = (id) => {
        // метод проверки состояния и изменения его в объекте Checked
        this.props.stateChecked(id);
    };

    newOperand = (checked, mark) => {
        //метод сравнения данных при нажатии кнопок внутри
        let mass = ["text"]; // css селекторы
        if (checked) {
            mass.push("unmarktext");
        }
        if (mark) {
            mass.push("text-list__item--active");
        }
        return mass.join().replace(/,/g, " ");
    };

    render() {
        const { id, text, checked, mark } = this.props.info; // убираем синтаксис входящих props
        return (
            <li tabIndex="0" className="main-list__item" id={id}>
                <div
                    className={this.newOperand(checked, mark)}
                    onClick={() => this.handleChecked(id)}
                >
                    <p>{text}</p>
                </div>

                <div
                    tabIndex="0"
                    onClick={() => this.handleMark(id)}
                    className={
                        mark
                            ? "mark-list__item mark-list__item--active"
                            : "mark-list__item"
                    }
                >
                    {mark ? "NOT IMPORTANT" : "IMPORTANT"}
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
