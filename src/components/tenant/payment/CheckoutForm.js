import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import "./payment.css";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: false
    };
    this.submit = this.submit.bind(this);
    this.confirm = this.confirm.bind(this);
  }

  async submit(ev) {
    try {
      let stripeResponse = await this.props.stripe.createToken({
        name: "Name"
      });
      let body = {
        id: stripeResponse.token.id,
        payment: this.props.payment,
        tenantId: this.props.tenantId
        
      };
      this.confirm(body);
      this.props.checked();
    } catch (error) {
      console.log("error", error);
    }
  }

  async confirm(body) {
    const confirmPayment = window.confirm(
      `Please Confirm Payment Amount: $${body.payment}`
    );
    if (confirmPayment === true && body.payment > 0) {
      let response = await axios.post("/charge", body);
      if (response.statusText === "OK") console.log("Purchase Complete!");
      if (response.statusText === "OK") this.setState({ complete: true });
      this.props.toggleComplete();
      this.props.partialNotCompletePayment();
      this.props.getNewBalance();
    } else {
      alert(
        "Payment cancelled! \nPayment not taken! \nPlease enter correct amount!"
      );
    }
  }

  render() {
    if (this.state.complete && this.props.balance > 0)
      return (
        <div>
          Payment Received. {" "}
          <button onClick={this.props.refreshPage}>Make Another Payment</button>
        </div>
      );
    if (this.state.complete) return <div>Payment Received</div>;

    return (
      <div className="Checkout">
        <CardElement />
        <button className="CardPurchaseButton" onClick={this.submit}>
          Pay Rent
        </button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
