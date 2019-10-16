import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { connect } from "react-redux";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import "./payment.css";

class TenantPayment extends Component {
  constructor() {
    super();

    this.state = {
      partialPayment: "",
      fullPayment: "",
      checked: true,
      payment: ""
    };
  }

  componentDidMount() {
    document.title = "Pay Rent";
    // call to the server to get the full rent amount.
    axios
      .get(`/api/tenant/unit/rent/${this.props.user.id}`)
      .then(response =>
        this.setState({ fullPayment: response.data[0].unit_rent })
      )
      .catch(error => console.error(error));
  }

  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_PUBLISHABLE_KEY}>
        <div className="BackgroundPayment">
          <div className="CreditCardPayment">
            <h1>Make a Payment</h1>

            <div className="FullPaymentInputContainer">
              Amount Due:
              <div className="PaymentAmount">${this.state.fullPayment} </div>
              Pay in Full:
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckClick}
                className="FullPaymentCheckBox"
              />
            </div>
            {!this.state.checked ? (
              <div className="PartialPaymentInputContainer">
                Other Payment Amount: ${" "}
                <input
                  className="CustomPaymentInput"
                  value={this.state.partialPayment}
                  onChange={event =>
                    this.setState({ partialPayment: event.target.value })
                  }
                />
              </div>
            ) : null}

            <Elements>
              <CheckoutForm
                payment={
                  this.state.checked
                    ? this.state.fullPayment
                    : this.state.partialPayment
                }
              />
            </Elements>
          </div>
        </div>
      </StripeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(TenantPayment);
