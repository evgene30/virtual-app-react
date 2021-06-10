import "../css/App.css";
import React from 'react';
import Card from './Card';

const user = {
  name: "Vladilen",
  lastname: "Minin",
};

const Elem = App(user);
function App(user) {
  return (
    <div className="App">
      <h1>
        {`Hello, ${user.name}, hello ${user.lastname}!`}
      </h1>
      <Card />
    </div>
  );
}

export default Elem;
