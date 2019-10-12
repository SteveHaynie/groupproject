import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import "./payment.css";

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state={
            complete: false
        }
        this.submit = this.submit.bind(this);
        this.confirm = this.confirm.bind(this);
    }

    async submit(ev) {
        try {
            let stripeResponse = await this.props.stripe.createToken({ name: "Name"});
            let body = {
                id: stripeResponse.token.id,
                payment: this.props.payment
            }    
            this.confirm(body);
        } catch (error) {
          console.log('error', error);  
        }
    }

    async confirm(body) {
        const confirmPayment = window.confirm(`Please Confirm Payment Amount: $${body.payment}`);
        if (confirmPayment === true) {
            let response = await axios.post('/charge', body)
            console.log('RESPONSE', response)
      
            if (response.statusText === 'OK') console.log("Purchase Complete!");
            if (response.statusText === 'OK') this.setState({ complete: true });
        } else {
            alert("Payment cancelled! \nPayment not taken! \nPlease enter correct amount!");
        }
    }

    render() {
        // console.log("PAYMENT!", this.props.payment);
        if (this.state.complete) return <h1>Rent Paid</h1>;

        return (
            <div className='Checkout'>
                <p>Pay Rent?</p>
                <CardElement />
                <button className="CardPurchaseButton" onClick={this.submit}>Pay Rent</button>
            </div>
        );
    }
}

export default injectStripe(CheckoutForm);