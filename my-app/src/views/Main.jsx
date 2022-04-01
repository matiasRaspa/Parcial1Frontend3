import React, { Component } from "react";
import Data from "../db/data.json";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Record } from "../components/Record";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      currentHistory: "",
      currentOptions: {},
      indexValue: 0,
      currentId: 2,
      lastOption: "",
      optionHistory: [],
      identifier: 0,
    };
  }

  componentDidMount() {
    console.log("Componente dado de alta");
    this.setState({
      currentHistory: this.state.data[this.state.indexValue].historia,
      currentOptions: this.state.data[this.state.indexValue].opciones,
    });
  }

  onClick = (e) => {
    e.preventDefault();
    const selectedOption = e.target.name;
    const id = this.state.currentId + selectedOption;
    let currentData = this.state.data.filter((e) => e.id === id);

    if (!currentData.length) {
      alert(this.state.currentOptions[selectedOption]);
      return;
    }

    let historyList = this.state.optionHistory;
    historyList.push(
      <li key={this.state.identifier}>{selectedOption.toUpperCase()}</li>
    );

    this.setState({
      currentHistory: currentData[0].historia,
      currentOptions: currentData[0].opciones,
      currentId: this.state.currentId + 1,
      lastOption: selectedOption.toUpperCase(),
      optionHistory: [...historyList],
      identifier: this.state.identifier + 1,
    });
  };

  render() {
    return (
      <div className="layout">
        <Card
          historia={this.state.currentHistory}
          id={this.state.currentId}
          className="historia"
        />
        <div className="opciones">
          <Button
            className="opcion"
            classButton="botones"
            opciones={this.state.currentOptions}
            onClick={this.onClick}
          />
        </div>
        <div className="recordatorio">
          <Record
            lastOption={this.state.lastOption}
            optionHistory={this.state.optionHistory}
          />
        </div>
      </div>
    );
  }
}

export default Main;
