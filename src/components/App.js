import React, {Component} from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

const nameMenu = ["All", "Active", "Done"]; // вкладки меню

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickBut: {All: true, Active: false, Done: false},
            text: "",
            TodoList: [],
            search: "",
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem("todoList", JSON.stringify(this.state.TodoList));
    }

    componentDidMount() {
        const newTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
        this.setState({TodoList: newTodoList});
    }

    updateState = (valueNewObjState) => {
        // обновление состояния списка заданий
        this.setState({TodoList: valueNewObjState});
    };

    updateText = (valueNewObjText) => {
        // обновление состояния поля ввода
        this.setState({text: valueNewObjText});
    };

    updateSearch = (search) => {
        // обновление состояния поля ввода поиска
        this.setState({search: search});
    };

    updateButtom = (valueNewObjButtom) => {
        // обновление состояния кнопок-фильтров
        this.setState({clickBut: valueNewObjButtom});
    };

    render() {
        return (
            <div className="App">
                <Header
                    menu={nameMenu} // передаем вкладки меню
                    updateSearch={this.updateSearch} // забираем состояние поиска
                    clickBut={this.state.clickBut} // передаем состояние отображения кнопок меню
                    updateButtom={this.updateButtom} // забираем состояние кнопок меню
                    TodoList={this.state.TodoList} // передаем состояние TodoList
                />
                <Main
                    updateText={this.updateText} // забираем состояние поля ввода Input
                    updateState={this.updateState} // забираем состояние TodoList
                    text={this.state.text} // передаем состояние поля ввода Input
                    TodoList={this.state.TodoList} // передаем состояние TodoList
                    clickBut={this.state.clickBut} // передаем состояние отображения кнопок меню
                    search={this.state.search}
                />
            </div>
        );
    }
}

export default App;
