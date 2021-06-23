import "./Menu.scss";
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
    state = {
        TodoList: JSON.parse(localStorage.getItem("todoList")) || [],
    };

    clickChange = (event) => {
        let listITems = document.querySelectorAll("#list a"); // находим ссылки по классу

        listITems.forEach((item) => {
            if (item.className) {
                item.className = "nonclick";
            }
        });
        event.target.className = "nonclick active"; // класс элемента на который мы нажимаем

        // this.setState((state) => {
        //     if (event.target.parentElement.id === 'all') {
        //         state.TodoList.filter(item => item);
        //         return state.TodoList

        //     }
        //     if (event.target.parentElement.id === 'active') {
        //         state.TodoList.filter(item => console.log(item.checked === true));
        //         return state.TodoList
        //     }
        // })

        const delForm = document.querySelector("#taskform"); //находим форму
        let listItems = document.querySelectorAll(".main-list__items li"); // находим все элементы списка
        let impButtom = document.querySelectorAll(".mark-list__item"); // находим кнопки

        document.getElementById("all").addEventListener("click", () => {
            delForm.style.display = "block"; // не скрываем блок ввода
            impButtom.forEach((elem) => {
                elem.style.visibility = "visible"; // не скрываем кнопку важности
            });
            listItems.forEach((element) => {
                element.style.display = "flex"; // отображаем все элементы списка
            });
        });

        document.getElementById("active").addEventListener("click", () => {
            delForm.style.display = "block";
            impButtom.forEach((elem) => {
                elem.style.visibility = "visible";
            });
            listItems.forEach((element) => {
                if (element.children[0].classList.contains("unmarktext")) {
                    // проверяем элемент на наличие стиля перечеркивания
                    element.style.display = "none";
                } else {
                    element.style.display = "flex"; // отображаем элемент
                }
            });
        });

        document.getElementById("done").addEventListener("click", () => {
            // delForm.style.display = "none"; // скрываем поле ввода
            impButtom.forEach((elem) => {
                elem.style.visibility = "hidden"; // скрываем кнопку важности
            });
            listItems.forEach((element) => {
                if (element.children[0].classList.contains("unmarktext")) {
                    element.style.display = "flex"; // отображаем выполненные задания
                } else {
                    element.style.display = "none";
                }
            });
        });
    };

    render() {
        let nameMenu = this.props.menu; // передаем пропс меню из App
        return (
            <nav className="header-nav__menu">
                <ul className="header-nav-menu__link" id="list">
                    {nameMenu.map((item) => {
                        return (
                            <li
                                id={item.toLocaleLowerCase()}
                                tabIndex="0"
                                key={item.toLocaleLowerCase()}
                            >
                                <a
                                    className={
                                        item === "All"
                                            ? "nonclick active"
                                            : "nonclick"
                                    }
                                    href="#"
                                    onClick={this.clickChange}
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default Menu;

Menu.propTypes = {
    nameMenu: PropTypes.arrayOf(PropTypes.string),
};
