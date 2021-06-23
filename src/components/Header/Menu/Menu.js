import "./Menu.scss";
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
    clickChange = (event) => {
        let listITems = document.querySelectorAll("#list a"); // находим ссылки по классу

        listITems.forEach((item) => {
            if (item.className) {
                item.className = "nonclick";
            }
        });
        event.target.className = "nonclick active"; // класс элемента на который мы нажимаем

        //   event.target.classList

        // console.log(event.target.className = "nonclick active")

        // for (let i = 0; i < listITems.length; i++) {
        //     // перебираем каждую ссылку в цикле
        //     listITems[i].addEventListener("click", function () {

        //         let elem = listITems.getElementsByClassName("active"); // находим елемент с активным классом
        //         elem[0].className = listITems[0].className.replace(
        //             " active",
        //             ""
        //         );

        //         this.className += " active"; // присваиваем по клику активный класс текущему элементу
        // console.log(listITems)
        //     });
        // }
    };

    render() {
        let nameMenu = this.props.menu; // передаем пропс меню из App
        // this.menuChange();
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
