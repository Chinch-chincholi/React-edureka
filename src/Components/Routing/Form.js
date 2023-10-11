import React from "react";
import axios from "axios";
const url = "http://ocalhost:8900/list";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      title: "",
    };
    this.eventHandlerName = this.eventHandlerName.bind(this);
    this.eventHandlerDetails = this.eventHandlerDetails.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }

  eventHandlerName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  eventHandlerDetails(event) {
    this.setState({
        title: event.target.value,
    });
  }
  eventClick(e) {
    console.log(this.state);
    e.preventDefault();
    const id = Math.floor(Math.round() * 100);
    const body = {
      id: id,
      name: this.state.name,
      details: this.state.title,
    };
    axios.post(url, {
      method: "POST",
      header: {
       'Accept': "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(() => {
      console.log("submitted");
    }).catch((error)=>{
console.log("404 error");
    })
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.eventHandlerName}
            />
          </div>
          <div className="form-group">
            <label>Details</label>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              id="exampleInputPassword1"
              onChange={this.eventHandlerDetails}
            />
          </div>

          <button
            type="submit"
            onClick={this.eventClick}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
