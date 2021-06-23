import "./Search.scss";
import React from "react";
import { Component } from "react";
import searchImage from "./images/search_image.svg";

class Search extends Component {
    state = {
        value: "",
    };

    headerSearch = (event) => {
        const value = event.target.value.trim(); // значение ввода
        const itemsSerch = document.querySelectorAll("#todoList li");
        if (value !== "") {
            itemsSerch.forEach((element) => {
                if (element.innerText.search(value) === -1) {
                    element.style.display = "none"; // убираем не подходящие блоки
                } else {
                    element.style.display = "flex";
                }
            });
        } else {
            itemsSerch.forEach((element) => {
                element.style.display = "flex"; // возвращаем обратное значение
            });
        }
    };

    render() {
        return (
            <div className="header-sections__search">
                <span className="icon__search">
                    <img src={searchImage} alt="Search" />
                </span>
                <input
                    className="header__input"
                    type="search"
                    placeholder="Search task for to do"
                    id="header__id"
                    tabIndex="0"
                    onChange={this.headerSearch}
                />
            </div>
        );
    }
}

export default Search;
