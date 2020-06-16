import React from "react";
import CreateNewReceipt from "./createNewReceipt";

export default class ReceiptsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createNewReceipt: false,
      counter: 0,
      currencyRates: { CAD: 1 },
      receiptDataBase: []
    };
  }
  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest?base=CAD")
      .then(res => res.json())
      .then(data => {
        const { rates = {} } = data;
        this.setState({ currencyRates: rates });
      })
      .catch(console.log);
  }
  createNew = () => {
    this.setState({
      createNewReceipt: true
    });
  };
  saveReceipt = data => {
    this.setState({
      counter: this.state.counter + 1,
      receiptDataBase: this.state.receiptDataBase.push(data)
    });
  };
  render() {
    return (
      <>
        <button onClick={this.createNew}>CreateNewReceipt</button>
        {this.state.createNewReceipt && (
          <CreateNewReceipt
            createNewReceipt={this.saveReceipt}
            currencyRates={this.state.currencyRates}
          />
        )}
        {this.state.receiptDataBase.map(receipt => (
          <div>{receipt && receipt.description}</div>
        ))}
      </>
    );
  }
}
