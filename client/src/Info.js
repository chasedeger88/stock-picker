import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";

class Info extends Component{
  constructor(props) {
    super(props);

    this.state = {
      stock: "",
      companyName: "",
      latestPrice: "",
      sector: ""
    };
  }

  componentDidMount(){
    let quoteAPI = "https://api.iextrading.com/1.0/stock/aapl/quote";
    fetch(quoteAPI)
    .then(response => response.json())
    .then(response => {
      this.setState({
        companyName: response.companyName,
        latestPrice: response.latestPrice,
        sector: response.sector
      })
    })
    .catch(ex => console.log("We got an error", ex));

}

  handleStockChange = (e) => {
    this.setState({stock: e.target.value});
  }

  render() {
    return (
      <div className="infoBox">



        <p>{this.state.companyName}, ({this.state.sector})</p>
        <p>Is trading at {this.state.latestPrice}</p>
      </div>
    );
  }
}

export default Info;


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: "",
      companyName: "",
      latestPrice: "",
      sector: ""
    };

  }
  handleSubmit = (e) => {
    console.log("Hello from Handle Submit")

    var getInfo = axios.get('https://api.iextrading.com/1.0/stock/aapl/quote')
      .then((info) => {
        this.setState({
          companyName: info.companyName,
          latestPrice: info.latestPrice,
          sector: info.sector
        })
      })
  }
  render() {
    return (
      <div className="infoBox">
        <p>{this.state.companyName}, ({this.state.sector})</p>
        <p>Is trading at {this.state.latestPrice}</p>
      </div>
    );
  }
}

export default Landing;
