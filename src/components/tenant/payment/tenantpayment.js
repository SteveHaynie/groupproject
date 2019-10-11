import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
import "./payment.css";

class TenantPayment extends Component {
  constructor() {
    super();

    this.state = {
      partialPayment: "",
      fullPayment: 50,
      checked: true,
      payment: ""
    };
  }

  componentDidMount() {
    document.title = "Pay Rent";
    // call to the server to get the full rent amount.
    // axios
    //   .get("/full_payment")
    //   .then(response => this.setState({ fullPayment: response.data }))
    //   .catch(error => console.error(error));
  }

  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <StripeProvider apiKey="REACT_APP_PUBLISHABLE_KEY">
        <div className="CreditCardPayment">
          <h1>Payment:</h1>
          <div className="Payment">
            <div className="FullPaymentInputContainer">
              Full Rent due: ${this.state.fullPayment}{" "}
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckClick}
                className="FullPaymentCheckBox"
              />
            </div>
            <div className="PartialPaymentInputContainer">
              Rent:{" "}
              {!this.state.checked ? (
                <input
                  value={this.state.partialPayment}
                  onChange={event =>
                    this.setState({ partialPayment: event.target.value })
                  }
                />
              ) : null}
            </div>
          </div>
          <Elements>
            <CheckoutForm
              partialPayment={
                this.state.checked
                  ? this.state.fullPayment
                  : this.state.partialPayment
              }
            />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}

export default TenantPayment;
