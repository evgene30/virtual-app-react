import './Header.scss';
import React from 'react';
import {Component} from 'react';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

class Header extends Component {
    render() {
        return (
            <div className="header-section">
                <section className="header-sections__items" id="header__items">
                    <Logo/>
                    <Search/>
                </section>
                <section className="header__nav nav__menu" id="header__nav">
                    <Menu/>
                </section>
            </div>
        );
    }
}

export default Header;
