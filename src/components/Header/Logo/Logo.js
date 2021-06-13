import './Logo.scss';
import React from 'react';
import { Component } from 'react';
import logo from "./images/senla_logo.svg";

const imageLogo = <img className="image__logo" src={logo} alt="logo SENLA" />;

class Logo extends Component {
    render() {
        return (
            <div className="header-sections__logo">
                {imageLogo}
            </div>
        );
    }
}

export default Logo;
