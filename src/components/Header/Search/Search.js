import "./Search.scss";
import React, {Component} from 'react';
import searchImage from "../../../assets/svg/search_image.svg";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }


    headerSearch = (event) => {
        const input = event.target.value.trim()
        this.props.updateSearch(input); // забираем состояние поиска
        const newTodoList = [...this.props.TodoList];// состояние TodoList
        const steSearch = this.props.search;


        return newTodoList.map((element) => {
            if (element.text.toLowerCase().includes(input.toLowerCase())) {
                element.visibility = true;

            } else {
                element.visibility = false;
            }
        });

    };


    render() {
        return (
            <div className="header-sections__search">
                <span className="icon__search">
                    <img src={searchImage} alt="Search"/>
                </span>
                <input
                    className="header__input"
                    type="search"
                    placeholder="Search task for to do"
                    id="header__id"
                    tabIndex="0"
                    onChange={this.headerSearch}
                />
            </div>
        );
    }
}

export default Search;
