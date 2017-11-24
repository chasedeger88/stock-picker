import './App.css';
import React from 'react';

class InfoForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      symbol: "",
      shares: "",
      entryPoint: ""
    }
    this.handleSymbolChange = this.handleSymbolChange.bind(this)
    this.handleSharesChange = this.handleSharesChange.bind(this)
    this.handleEntryPointChange = this.handleEntryPointChange.bind(this)
    console.log("InfoForm" + this.state)
  }

  handleSymbolChange(e) {
    this.setState({
      symbol: e.target.value
    })
  }
  handleSharesChange(e) {
    this.setState({
      shares: e.target.value
    })
  }
  handleEntryPointChange(e) {
    this.setState({
      entryPoint: e.target.value
    })
  }

  render() {
    return (
      <form action="/portfolio" method='POST'>
        <h4>Add to your portfolio</h4>

          <label>
            Symbol
            <input type="symbol" onChange={this.handleSymbolChange} maxLength="4" value={this.state.symbol} />
          </label>
            <br></br>
          <label>
            Shares
            <input type="shares" onChange={this.handleSharesChange} value={this.state.shares} />
          </label>
            <br></br>
          <label>
            Entry Point
            <input type="entryPoint" onChange={this.handleEntryPointChange} maxlength="6" value={this.state.entryPoint} />
          </label>

          <button type="submit">Add</button>
      </form>
    )
  }
}
  export default InfoForm;
