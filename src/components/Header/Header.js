import './Header.scss';
import React from 'react';
import { Component } from 'react';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";

class Header extends Component {
    render() {
        return (
            <div className="header-section">
                <section className="header-sections__items" id="header__items">
                    <Logo />
                    <Search />
                </section>
            </div>
        );
    }
}

export default Header;
