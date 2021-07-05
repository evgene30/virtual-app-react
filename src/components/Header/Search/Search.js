import "./Search.scss";
import React, {Component} from "react";
import searchImage from "../../../assets/svg/search_image.svg";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
        };
    }

    headerSearch = (event) => {
        const value = event.target.value.trim();
        this.setState({search: value});
        this.props.updateSearch(value);
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
                    value={this.props.search}
                    onChange={this.headerSearch}
                />
            </div>
        );
    }
}

export default Search;
