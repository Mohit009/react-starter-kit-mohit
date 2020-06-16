import React from "react";
import "./createNewReceipt.css";

export default class CreateNewReceipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0, selectedCurrency: "CAD" };
    this.description = React.createRef();
  }

  create = () => {
    this.props.createNewReceipt({
      description: this.description.current.value,
      amount: this.state.amount,
      selectedCurrency: this.state.selectedCurrency
    });
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Create new Recipt</h2>
        <form onSubmit={this.create}>
          <div>
            <label>Description</label>
            <input type="text" id="description" ref={this.description} />
          </div>
          <div>
            <label>Choose a Currency:</label>
            <select
              id="selectedCurrency"
              value={this.state.selectedCurrency}
              onChange={this.handleChange}
            >
              {Object.keys(this.props.currencyRates).map(currencyType => (
                <option key={currencyType} value={currencyType}>
                  {currencyType}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}
