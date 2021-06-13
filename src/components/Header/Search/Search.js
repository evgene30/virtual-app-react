import './Search.scss';
import React from 'react';
import { Component } from 'react';
import searchImage from "./images/search_image.svg";

class Search extends Component {
    render() {
        return (
            <div className="header-sections__search">
                <span className="icon__search">
                    <img src={searchImage} alt="search_img" />
                </span>
                <input className="header__input" type="search" placeholder="Search task for to do" id="header__id"
                    tabIndex="0" />
            </div>
        );
    }
}

export default Search;
