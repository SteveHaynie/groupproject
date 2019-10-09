import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";


class TenantPayment extends Component {
  constructor() {
    super();

    this.state={
      partialPayment: "",
      fullPayment: ""
    }
  }

  componentDidMount() {
    document.title="Pay Rent"
    // call to the server to get the full rent amount.
    // axios
    //   .get("/full_payment")
    //   .then(response => this.setState({ fullPayment: response.data }))
    //   .catch(error => console.error(error));
  }
  
  render() {
    return(
      <StripeProvider apiKey="REACT_APP_PUBLISHABLE_KEY">
        <div className="CreditCardPayment">
          <h1>Payment:</h1>
          <div>
            Rent:{" "}
            <input
              value={this.state.partialPayment}
              onChange={event => this.setState({ partialPayment: event.target.value })}
            />
          </div>
          <Elements>
            <CheckoutForm
              partialPayment={this.state.partialPayment}
            />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default TenantPayment;
