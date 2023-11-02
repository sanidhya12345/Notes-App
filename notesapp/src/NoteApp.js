/** @format */

import React, { Component } from "react";
import "./NoteApp.css";
let notesArray=[];
let comp;
const Note = (props) => {
  const style = {
    backgroundColor: "#FF3",
    width: "900px",
    height: "100px",
    marginTop:'20px',
    border:'2px solid red'
  };
  return (<div style={style}>
    <p>{props.data}</p>
    <button type="button">Delete</button>
  </div>);
};
class NoteApp extends Component {
  state = {
    note: "",
    notesArray:[]
  };
  handleNote = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  clear = (e) => {
    e.preventDefault();
    this.setState({ note: "" });
  };
  save=(e)=>{
      e.preventDefault();
      notesArray.push(this.state.note);
      this.setState({notesArray:notesArray})
      comp=notesArray.map((data)=><Note data={data}></Note>)
  }
  render() {
    const style={
      display:'grid'
    }
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
              placeholder="Write Note"
              onChange={this.handleNote}></textarea>
          </div>
          <div className="buttonSC">
            <button type="button" onClick={this.save}>Save</button>
            <button type="button" onClick={this.clear}>
              Clear
            </button>
          </div>
        </div>
        <div className="notes">
          <div style={style}>
            {comp}
          </div>
        </div>
      </div>
    );
  }
}
export default NoteApp;
