import React, { Component } from 'react';

class NewListingForm extends Component {

  state = {
    name: "",
    address: "",
    age: 0,
    victim_count: 0,
    scare_level: 0,
    hot_tub: false,
    image: ""
  }

  // a handle change function changes a value in state everytime the input is changed
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    fetch("http://localhost:3001/api/v1/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(listing => {
      // i got the listing!!!!!!
      this.props.addListing(listing)
    })
  }

  toggleHotTub = () => {
    this.setState({
      hot_tub: !this.state.hot_tub
    })
  }



  render(){
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="Enter Name..."
            name="name"
            onChange={this.handleChange}
          />
          <input 
            placeholder="Enter Address..."
            name="address"
            onChange={this.handleChange}
          />
          <input 
            placeholder="Enter Image URL..."
            name="image"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter listing age..."
            name="age"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter victim count..."
            name="victim_count"
            onChange={this.handleChange}
          />
          <input
            type="number"
            placeholder="Enter scare level..."
            name="scare_level"
            onChange={this.handleChange}
            />
          <label>Hot Tub</label>
          <input
            type="checkbox"
            onClick={this.toggleHotTub}
          />
          <input
            type="submit"
            value="Create Listing!"
          />
        </form>
      </div>
    );
  }

}



export default NewListingForm;
