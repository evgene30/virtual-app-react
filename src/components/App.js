import React, {Component} from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";


const nameMenu = ["All", "Active", "Done"]; // вкладки меню

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            search: "",
            TodoList: JSON.parse(localStorage.getItem("todoList")) || [],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // обновление данных в хранилище
        localStorage.setItem("todoList", JSON.stringify(this.state.TodoList));

    }

    updateState = (valueNewObjState) => {
        // обновление состояния списка заданий
        this.setState({TodoList: valueNewObjState})
    }

    updateText = (valueNewObjText) => {
        // обновление состояния поля ввода
        this.setState({text: valueNewObjText})
    }

    updateSearch = (valueNewObjSearch) => {
        this.setState({search: valueNewObjSearch})
    }


    render() {
        return (
            <div className="App">
                <Header
                    menu={nameMenu} // передаем вкладки меню
                    updateSearch={this.updateSearch} забираем состояние поиска
                    search={this.state.search} // передаем состояние поля ввода поиска
                    TodoList={this.state.TodoList} // передаем состояние TodoList
                />
                <Main updateText={this.updateText} // забираем состояние поля ввода Input
                      updateState={this.updateState} // забираем состояние TodoList
                      text={this.state.text} // передаем состояние поля ввода Input
                      TodoList={this.state.TodoList} // передаем состояние TodoList
                />
            </div>
        );
    }
}

export default App;