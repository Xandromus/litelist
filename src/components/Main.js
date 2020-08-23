import React, { Component } from 'react';
import "../styles/Main.scss";
import FlexCell from '../components/FlexCell.js';
import UploadArea from "../components/UploadArea.js";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.setListCount = this.setListCount.bind(this);
  }

  state = {
    listCount: 0
  }

  renderUploadFields = () => {
    let inputArray = [];
    
    for (let i = 1; i <= this.state.listCount; i++) {
        let uploadField = <div className="upload-container" key={"upload-" + i}><label>Select a CSV file:</label><input className="upload-btn" type="file" name="file" /></div>;
        inputArray.push(uploadField)
    }
    return inputArray;
  }

  setListCount = (event) => {
    let count = event.target.value;
    if (count > 20) {
      count = 20;
    }
    this.setState({
      listCount: count
    })
  }

  render() {
    return (
      <main className="main">
        <FlexCell>
          <div className="input-block">
            <label>How many CSVs do you have? (1-20)</label>
            <input value={this.state.listCount} onChange={this.setListCount} />
          </div>
          <UploadArea>
          {this.renderUploadFields()}
          </UploadArea>
          <button>Build your whitelist!</button>
        </FlexCell>
      </main>
    )
  }
}
