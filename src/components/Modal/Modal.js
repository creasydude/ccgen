import React, { Component } from 'react'
import './Modal.css';
import logo_AE from '../../assets/img/logo_AE.png'
import logo_D from '../../assets/img/logo_D.png'
import logo_MC from '../../assets/img/logo_MC.png'
import logo_V from '../../assets/img/logo_V.png'

class Modal extends Component {
    state = {
        images: [
            { img: logo_AE },
            { img: logo_D },
            { img: logo_MC },
            { img: logo_V },
        ],

    }
    render() {
        let imgSrc = null;
        if (this.props.ccDetails[0].cardDetail === "AE") {
            imgSrc = this.state.images[0].img
        } else if (this.props.ccDetails[0].cardDetail === "MC") {
            imgSrc = this.state.images[2].img
        } else if (this.props.ccDetails[0].cardDetail === "D") {
            imgSrc = this.state.images[1].img
        } else if (this.props.ccDetails[0].cardDetail === "V") {
            imgSrc = this.state.images[3].img
        }
        return (
            <div className="Backdrop" style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? 1 : 0
            }}>
                <div className="Modal" style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? 1 : 0
                }}>
                    <img className="imgCC" src={imgSrc} />
                    <p>{this.props.card}</p>
                    <p>{this.props.date}</p>
                    <p>{this.props.cvv}</p>
                    <p>Here's your fake credit card number.</p>
                    <button onClick={this.props.close} >OKAY</button>
                </div>
            </div>
        )
    }
}


export default Modal;
