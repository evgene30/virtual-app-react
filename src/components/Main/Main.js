import './Main.scss';
import React from 'react';
import {Component} from 'react';
import InputTask from './InputTask/InputTask';
import Todolist from './Todolist/Todolist';


class Main extends Component {
    render() {
        return (
            <main className="main" id="main">
                <section className="main__newtask" id="main__form">
                    <InputTask/>
                </section>
                <section className="main__task" id="main__list">
                    <Todolist/>
                </section>
            </main>
        );
    }
}

export default Main;
