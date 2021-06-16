import "./App.scss";
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';

const Apps = App();

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default Apps;
