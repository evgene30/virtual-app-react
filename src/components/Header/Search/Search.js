import "./Search.scss";
import React from "react";
import { Component } from "react";
import searchImage from "./images/search_image.svg";

class Search extends Component {
    state = {
        value: "",
    };

    headerSearch = (event) => {
        this.setState((state) => {
           return state.value = event.target.value.trim()
        });
        
        
        console.log(event.target.value)
    }



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
