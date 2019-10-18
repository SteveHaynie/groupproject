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
      balance: "",
      checked: true,
      payment: "",
      complete: false
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.getNewBalance = this.getNewBalance.bind(this);
  }

  componentDidMount() {
    document.title = "Pay Rent";
    // updated pull of information, getting both the monthly rent and the balance due.
    Promise.all([
      axios.get(`/api/tenant/unit/rent/${this.props.user.id}`),
      axios.get(`/api/tenant/balance/${this.props.user.id}`)
    ])
      .then(all => {
        const [rentResponse, balanceResponse] = all;
        this.setState({
          fullPayment: rentResponse.data[0].unit_rent,
          balance: balanceResponse.data[0].balance
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleCheckClick = () => {
    this.setState({ checked: !this.state.checked });
  };

  toggleComplete() {
    if (this.state.balance === 0) {
      this.setState({
        complete: true
      });
    } else {
      this.setState({
        complete: false
      });
    }
  }

  // pulls balance again, and hopefully displays their new updated balance.
  getNewBalance() {
    axios
      .get(`/api/tenant/balance/${this.props.user.id}`)
      .then(balanceResponse => 
        this.setState({ balance: balanceResponse.data[0].balance})
      )
      .catch(error => {
        console.error(error);
      });
  }

  refreshPage = () => {
    window.location.reload(false);
  }

  render() {
    console.log('payment', this.state.partialPayment)
    return (
      <StripeProvider apiKey={process.env.REACT_APP_PUBLISHABLE_KEY}>
        <div className="BackgroundPayment">
          <div className="CreditCardPayment">
            <h1>Make a Payment</h1>

            <div className="FullPaymentInputContainer">
              Amount Due:
              {this.state.balance > this.state.fullPayment ? (
                <div className="BalanceDue">
                  Unpaid Balance Due: ${this.state.balance}
                </div>
              ) : (
                <div className="PaymentAmount">${this.state.fullPayment} </div>
              )}
              Pay in Full:
              <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleCheckClick}
                className="FullPaymentCheckBox"
              />
            </div>
            {!this.state.checked && this.state.complete === false ? (
              <div className="PartialPaymentInputContainer">
                <p>Rent for this month is: ${this.state.fullPayment}.</p>
                <p>
                  Please be Aware that any unpaid balance may result in
                  additional late fees.
                </p>
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
                    ? this.state.balance
                    : this.state.partialPayment
                }
                toggleComplete={this.toggleComplete}
                getNewBalance={this.getNewBalance}
                refreshPage={this.refreshPage}
                balance={this.state.balance}
                tenantId={this.props.user.id}
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
