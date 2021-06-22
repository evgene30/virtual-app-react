import "./App.scss";
import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Component } from "react";

const nameMenu = ["All", "Active", "Done"]; // вкладки меню

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header menu={nameMenu} />
                <Main />
            </div>
        );
    }
}

export default App;
