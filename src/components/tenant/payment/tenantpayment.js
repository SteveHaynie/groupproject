import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import { connect } from "react-redux";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";
import "./payment.css";
import {isEqual} from "./utils.js";

class TenantPayment extends Component {
  constructor() {
    super();

    this.state = {
      partialPayment: "",
      fullPayment: "",
      balance: "",
      checked: true,
      payment: "",
      partialNotCompletePayment: false,
      complete: false
    };
    this.toggleComplete = this.toggleComplete.bind(this);
    this.getNewBalance = this.getNewBalance.bind(this);
    this.togglePartialNotCompletePayment = this.togglePartialNotCompletePayment.bind(this);
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



    toggleComplete() {
       const complete = isEqual(this.state.balance, 0)
    this.setState({complete})
        }
      


  togglePartialNotCompletePayment() {
    this.setState({ partialNotCompletePayment: !this.state.partialNotCompletePayment })
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
    if (this.state.balance === 0) return <div className="UpToDate">Up to Date!</div>
      
    
    return (
      <StripeProvider apiKey={process.env.REACT_APP_PUBLISHABLE_KEY}>
        <div className="BackgroundPayment">
          <div className="CreditCardPayment">
            <h1>Make a Payment</h1>

            <div className="FullPaymentInputContainer">
              <h2>Amount Due:</h2>
              {this.state.balance > this.state.fullPayment ? (
                <div className="BalanceDue">
                  <h3>Unpaid Balance Due:  $ {this.state.balance}</h3>
                  <h4>Your Rent for this Month is:  $ {this.state.fullPayment}</h4>
                </div>
              ) : (
                <div className="PaymentAmount">${this.state.balance} </div>
              )}
              {this.state.partialNotCompletePayment === false ? (
                <div>Pay Full Amount Due:
                  <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleCheckClick}
                    className="FullPaymentCheckBox"
                  />
                </div>
              ): null}
            </div>
            {!this.state.checked && this.state.partialNotCompletePayment === false && this.state.complete === false ? (
              <div className="PartialPaymentInputContainer">
                <h4>Rent for this month is: ${this.state.fullPayment}.</h4>
                <h4>
                  Please be Aware that any unpaid balance may result in
                  additional late fees.
                </h4>
                Other Payment Amount:
                <div> ${" "}
                  <input
                    className="CustomPaymentInput"
                    value={this.state.partialPayment}
                    onChange={event =>
                      this.setState({ partialPayment: event.target.value })
                    }
                  />
                </div>
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
                partialNotCompletePayment={this.togglePartialNotCompletePayment}
                getNewBalance={this.getNewBalance}
                refreshPage={this.refreshPage}
                balance={this.state.balance}
                tenantId={this.props.user.id}
                checked={this.handleCheckClick}
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
