/** @format */

import React, { Component } from "react";
import "./NoteApp.css";
let notesArray = [];
let comp;
const Note = (props) => {
  const style = {
    backgroundColor: "#FF3",
    width: "900px",
    height: "100px",
    marginTop: "20px",
    border: "2px solid red",
  };

  return (
    <div style={style} key={props.index}>
      <h3>{props.data}</h3>
    </div>
  );
};
class NoteApp extends Component {
  state = {
    note: "",
    notesArray: [],
    index: 0,
    comp
  };
  handleNote = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  clear = (e) => {
    e.preventDefault();
    this.setState({ note: "" });
  };
  deleteNote=(e)=>{
    e.preventDefault();
    // notesArray.filter(item=>item.index!==e.target.id);
    delete notesArray[e.target.id];
    this.setState({notesArray:notesArray});
    this.setState({ index: this.state.index - 1 });
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index}>delete</button>
        </div>
      );
    });
    this.setState({comp:comp});
  }
  save = (e) => {
    e.preventDefault();
    let obj = {};
    obj.index = this.state.index;
    obj.note = this.state.note;
    notesArray.push(obj);
    this.setState({ notesArray: notesArray });
    // comp = notesArray.map((data) => <Note data={data}></Note>);
    this.setState({ index: this.state.index + 1 });
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index}>delete</button>
        </div>
      );
    });
    this.setState({comp:comp});
    console.log(notesArray);
  };
  render() {
    const style = {
      display: "grid",
    };
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
            <button type="button" onClick={this.save}>
              Save
            </button>
            <button type="button" onClick={this.clear}>
              Clear
            </button>
          </div>
        </div>
        <div className="notes">
          <div style={style}>{comp}</div>
        </div>
      </div>
    );
  }
}
export default NoteApp;
