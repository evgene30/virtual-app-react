import "./Menu.scss";
import React, {Component} from "react";
import PropTypes from "prop-types";

class Menu extends Component {

    static propTypes = {
        nameMenu: PropTypes.arrayOf(PropTypes.string.isRequired),
    }

    clickChange = (event) => {
        let buttonState = [this.props.clickBut]; // состояние кнопок (false)

        if (event.target.text === "All") {
            buttonState = {All: true, Active: false, Done: false};
        }

        if (event.target.text === "Active") {
            buttonState = {All: false, Active: true, Done: false}
        }

        if (event.target.text === "Done") {
            buttonState = {All: false, Active: false, Done: true};
        }
        this.props.updateButtom(buttonState);
    };

    valueState = (item, props) => {
        if (item === "All" && props.All) {
            return "nonclick active";
        } else if (item === "Active" && props.Active) {
            return "nonclick active";
        } else if (item === "Done" && props.Done) {
            return "nonclick active";
        } else {
            return "nonclick";
        }
    };

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
                                    className={this.valueState(
                                        item,
                                        this.props.clickBut
                                    )}
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

