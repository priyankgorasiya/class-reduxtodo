import React, { Component } from "react";
import { connect } from "react-redux";
import { addItems } from "../actions/IndexAction";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      date: "",
      gender: "male",
      phone: "",
    };
  }

  addData = async (event) => {
    event.preventDefault();
    await this.props.addItems(this.state);
    this.setState({
      name: "",
      city: "",
      date: "",
      gender: "male",
      phone: "",
    });
  };

  handleTextChang = (propsName, value) => {
    this.setState({ ...this.state, [propsName]: value });
  };

  render() {
    const { name, city, date, phone, gender } = this.state;
    return (
      <div className="text-center">
        <div className="bg-warning">
          <form onSubmit={this.addData}>
            <div>
              <label>Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  this.handleTextChang("name", e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div>
              <label>City :</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => {
                  this.handleTextChang("city", e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div>
              <label>Date :</label>
              <input
                type="date"
                name="date"
                placeholder="Enter your DOB"
                value={date}
                onChange={(e) => {
                  this.handleTextChang("date", e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div name="gender">
              <label>Gender : </label>
              Male
              <input
                type="radio"
                value="male"
                name="male"
                checked={gender === "male"}
                onChange={(e) => {
                  this.handleTextChang("gender", e.target.value);
                }}
              ></input>
              Female
              <input
                type="radio"
                value="female"
                name="female"
                checked={gender === "female"}
                onChange={(e) => {
                  this.handleTextChang("gender", e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div>
              <label>Phone.No :</label>
              <input
                type="number"
                name="phone"
                placeholder="Enter your Mo.no"
                value={phone}
                onChange={(e) => {
                  this.handleTextChang("phone", e.target.value);
                }}
              ></input>
            </div>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-md btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { addItems })(Form);
