/** @format */

import React, { Component } from "react";
import "./NoteApp.css";
class NoteApp extends Component {
  state = {
    note: "",
  };
  handleNote=(e)=>{
     const {name,value}=e.target;
     this.setState({[name]:value});
  }
  clear=(e)=>{
    e.preventDefault();
     this.setState({note:""});
  }
  render() {
    return (
      <div>
        <h1 className="heading">Notes App</h1>
        <div className="inputbox">
          <div>
            <textarea
              name="note"
              rows="8"
              cols="100"
              value={this.state.note}
              className="textarea"
              placeholder="Write Note" onChange={this.handleNote}></textarea>
          </div>
          <div className="buttonSC">
            <button type="button">Save</button>
            <button type="button" onClick={this.clear}>Clear</button>
          </div>
        </div>
      </div>
    );
  }
}
export default NoteApp;
