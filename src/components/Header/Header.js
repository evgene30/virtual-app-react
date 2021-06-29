import "./Header.scss";
import React, { Component } from "react";
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

class Header extends Component {
    render() {
        const menu = this.props.menu;
        const search = this.props.search;
        const TodoList = this.props.TodoList;
        const updateSearch = this.props.updateSearch;
        const clickBut = this.props.clickBut;
        const updateButtom = this.props.updateButtom;
        return (
            <div className="header-section">
                <section className="header-sections__items" id="header__items">
                    <Logo />
                    <Search
                        updateSearch={updateSearch}
                        search={search}
                        TodoList={TodoList}
                    />
                </section>
                <section className="header__nav nav__menu" id="header__nav">
                    <Menu
                        menu={menu}
                        TodoList={TodoList}
                        clickBut={clickBut}
                        updateButtom={updateButtom}
                    />
                </section>
            </div>
        );
    }
}

export default Header;
