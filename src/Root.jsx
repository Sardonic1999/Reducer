import React, { Component } from "react";
import "./Style.css";
import Reducer from "./Reducer/Reducer";
import MainReduce from "./Reducer_web/MainReduce";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
      isActive: "MainReduce",
    };
  }
  render() {
    const change = (name) => {
      this.setState({ isActive: name });
      // this.setState({isLog: !this.state.isLog})
    };
    return (
      <div>
        <div className="container">
          <div
            onClick={() => change("Reducer")}
            className={this.state.isActive === "Reducer" ? "tab" : "item"}
          >
            Reducer
          </div>
          <div
            onClick={() => change("MainReduce")}
            className={this.state.isActive === "MainReduce" ? "tab" : "item"}
          >
            MainReduce
          </div>
          <div
            onClick={() => change("Contex_Hook")}
            className={this.state.isActive === "Contex_Hook" ? "tab" : "item"}
          >
            Contex_Hook
          </div>
          <div
            onClick={() => change("Hook")}
            className={this.state.isActive === "Hook" ? "tab" : "item"}
          >
            Hook
          </div>
          <div
            onClick={() => change("None")}
            className={this.state.isActive === "None" ? "tab" : "item"}
          >
            None
          </div>
        </div>
        {/* <h3>{this.state.isActive}</h3> */}
        {this.state.isActive === "Reducer" && <Reducer />}
        {this.state.isActive === "MainReduce" && <MainReduce />}
        {this.state.isActive === "Contex_Hook"}
        {this.state.isActive === "Hook"}
        {this.state.isActive === "None"}
      </div>
    );
  }
}
