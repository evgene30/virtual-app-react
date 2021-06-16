import './Menu.scss';
import React from 'react';
import {Component} from 'react';

const nameMenu = ['All', 'Active', 'Done'];

class Menu extends Component {
    render() {
        return (
            <nav className="header-nav__menu">
                <ul className="header-nav-menu__link" id="list">
                    {nameMenu.map((item) => {
                            return (
                                <li id={item.toLocaleLowerCase()} tabIndex="0" key={item.toLocaleLowerCase()}>
                                    <a className={item === 'All' ? 'nonclick active' : 'nonclick'} href="#">
                                        {item}
                                    </a>
                                </li>
                            )
                        }
                    )}
                </ul>
            </nav>
        );
    }
}

export default Menu;
