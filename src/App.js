import React, { Component } from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import { robots } from './robots';
import Scroll from './Scroll';
import "./App.css";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            Searchfield: ""
        }
    }

    onSearchChange=(event)=>{
        this.setState({Searchfield: event.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <Cardlist robots={filterRobots}
                /></Scroll>
            </div>
        );
    }
}
export default App;