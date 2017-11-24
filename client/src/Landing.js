import React, { Component } from "react";
import bull from './images/bull.jpeg';
import axios from "axios";
import $ from "jquery";

class Landing extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);

    this.state= {
      image: bull,
      isClicked: false,
      stock: "",
      companyName: "",
      latestPrice: "",
      sector: "",
      summary: "",
      headline: "",
      source: "",
      url: ""
    };
  }

  handleLoginClick() {
    this.setState({isClicked: true});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello from Handle Submit", e.target.value)

    var href

    var getInfo = axios.get(`https://api.iextrading.com/1.0/stock/${this.state.stock}/quote`)
      .then((info) => {
        console.log("###",info)
        this.setState({
          companyName: info.data.companyName,
          latestPrice: info.data.latestPrice,
          sector: info.data.sector
        })
      })
    var getNews = axios.get(`https://api.iextrading.com/1.0/stock/${this.state.stock}/news/last/1`)
      .then((news) => {
        console.log("$$$",news)
        this.setState({
          headline: news.data[0].headline,
          summary: news.data[0].summary,
          source: news.data[0].source,
          url: news.data[0].url
        })
      })
    }

   handleStockChange = (e) => {
      this.setState({stock: e.target.value});
    }

  render() {
    console.log(this.state);
    // const isLoggedIn = this.state.isLoggedIn;
    // let page = null;
    // if (isClicked) {
    //   page = <Landing />
    // } else {
    //   page = null;
    // }

    return (
      <div>
        <h1 className="title" >Stock Picker</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input className="searchbox" type='text' placeholder="Search stock symbol..." value={this.state.stock} onChange={(e) => this.handleStockChange(e)} />
            <input className="btn-success" type="submit" value="Search" />
          </form>
          <br></br>
          <div className="infoBox">
            <p className="company">{this.state.companyName}<span>{this.state.latestPrice}</span></p>
            {/* <p>{this.state.sector}</p> */}
          <div className="newsBox">
            <p className="headline">{this.state.headline}</p>
            <p className="summary">{this.state.summary}</p>
            <p className="source">{this.state.source}</p>
          </div>
        </div>
        <img className="bull" src={this.state.image} />
      </div>
    );
  }
}

export default Landing;
