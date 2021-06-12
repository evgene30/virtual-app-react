import "./App.css";
import React from 'react';
import Card from '../Card/Card';

const user = {
    name: "Vladilen",
    lastname: "Minin",
};

const Apps = App(user);

function App(user) {
    return (
        <div className="App">
            <h1>
                {`Hello, ${user.name}, hello ${user.lastname}!`}
            </h1>
            <Card/>
        </div>
    );
}

export default Apps;
