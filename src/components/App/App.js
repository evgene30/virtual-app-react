import "./App.scss";
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

let nameMenu = ['All', 'Active', 'Done']; // вкладки меню
const Apps = App(); // запуск основной функции с элементами

function App() {

    return (
        <div className="App">
            <Header menu={nameMenu}/>
            <Main/>
        </div>
    );
}

export default Apps;
