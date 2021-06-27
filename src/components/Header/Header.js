import './Header.scss';
import React, {Component} from 'react';
import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

class Header extends Component {
    render() {
        let menu = this.props.menu;
        let search = this.props.search;
        let TodoList = this.props.TodoList;
        let updateSearch = this.props.updateSearch;
        return (
            <div className="header-section">
                <section className="header-sections__items" id="header__items">
                    <Logo/>
                    <Search
                        updateSearch={updateSearch}
                        search={search}
                        TodoList={TodoList}
                    />
                </section>
                <section className="header__nav nav__menu" id="header__nav">
                    <Menu menu={menu}/>
                </section>
            </div>
        );
    }
}

export default Header;
