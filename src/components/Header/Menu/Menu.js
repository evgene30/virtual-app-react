import "./Menu.scss";
import React, {Component} from 'react';
import PropTypes from "prop-types";

class Menu extends Component {

    clickChange = (event) => {
        const newTodoList = [...this.props.TodoList]; // лист элементов TodoList
        const buttonState = [this.props.clickBut];// состояние кнопок (false)


        if (event.target.text === 'All') {


            // return this.props.updateButtom(buttonState);

        }


        console.log(this.props.clickBut)


    };

    valueState = (props) => {
        if (props[0] === true) {
            return 'nonclick active'

        } else {
            return 'nonclick active'
        }
    }

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
                                    className={this.valueState(this.props.clickBut)}
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
