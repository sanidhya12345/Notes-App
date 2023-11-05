/** @format */

import React, { Component } from "react";
import "./NoteApp.css";
let notesArray = [];
let comp;
const Note = (props) => {
  const style = {
    backgroundColor: "#F8F0E5",
    width: "895px",
    height: "98px",
    marginTop: "20px",
    border: "2px solid #F8F0E5",
    borderRadius:'10px'
  };

  return (
    <div style={style} key={props.index}>
      <textarea
              name="note"
              rows="5"
              cols="97"
              defaultValue={props.data}
              disabled={props.disable}
              onChange={props.change}
              ></textarea>
    </div>
  );
};
class NoteApp extends Component {
  state = {
    note: "",
    notesArray: [],
    index: 0,
    comp,
    disable:false,
    cNote:''
  };
  handleChange=(e)=>{
     this.setState({cnote:e.target.value})
  }
  handleNote = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  clear = (e) => {
    e.preventDefault();
    this.setState({ note: "" });
  };
  deleteNote=(e)=>{
    //e.preventDefault();
    // notesArray.filter(item=>item.index!==e.target.id);
    delete notesArray[e.target.id];
    this.setState({notesArray:notesArray});
    this.setState({ index: this.state.index - 1 });
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index} disable={!this.state.disable} change={this.handleChange}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index} className="delete">Delete</button>
          <button type="button" id={data.index} className="edit" onClick={this.editNote}>Edit</button>
        </div>
      );
    });
    this.setState({comp:comp});
  }
  saveNote=(e)=>{
    //console.log(this.state.cnote);
    notesArray[e.target.id].note=this.state.cnote;
    this.setState({notesArray:notesArray})
    console.log(notesArray);
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index} disable={!this.state.disable} change={this.handleChange}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index} className="delete">Delete</button>
          <button type="button" id={data.index} className="edit" onClick={this.editNote}>Edit</button>
        </div>
      );
    });
    this.setState({comp:comp});
  }
  cancel=(e)=>{
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index} disable={!this.state.disable} change={this.handleChange}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index} className="delete">Delete</button>
          <button type="button" id={data.index} className="edit" onClick={this.editNote}>Edit</button>
        </div>
      );
    });
    this.setState({comp:comp});
  }
  editNote=(e)=>{
   // e.preventDefault();
    comp = notesArray.map((data) => {
      return (
        <div>
          <Note data={data.note} index={data.index} disable={this.state.disable} change={this.handleChange}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index} className="delete">Delete</button>
          <button type="button" onClick={this.saveNote} id={data.index} className="save">Save</button>
          <button type="button" onClick={this.cancel} id={data.index} className="cancel">Cancel</button>
        </div>
      );
    });
    this.setState({comp:comp});
  }
  save = (e) => {
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
          <Note data={data.note} index={data.index} disable={!this.state.disable} change={this.handleChange}></Note>
          <button type="button" onClick={this.deleteNote} id={data.index} className="delete">Delete</button>
          <button type="button" id={data.index} className="edit" onClick={this.editNote}>Edit</button>
        </div>
      );
    });
    this.setState({comp:comp});
    this.setState({ note: "" });
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
              placeholder=" Write Note"
              onChange={this.handleNote}></textarea>
          </div>
          <div className="buttonSC">
            <button type="button" onClick={this.save} className="b1">
              Save
            </button>
            <button type="button" onClick={this.clear} className="b2">
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
