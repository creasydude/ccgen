import React, { Component } from 'react'
import './Main.css'
import Process from '../../containers/Process/Process'
class Main extends Component {
    constructor() {
        super();
        this.cb = React.createRef()
        this.cr = React.createRef()
    }
    state = {
        classes: "cc",
        ccDetails: [
            { cardDetail: null, region: null }
        ],
        show: false,
        msg: null,
        alert: true,
    }


    cHandle = () => {
        this.setState({
            ccDetails: [
                { cardDetail: this.cb.current.value, region: this.cr.current.value }
            ]
        })
        // console.log(this.cb.current.value)
        // console.log(this.cr.current.value)
    }

    openModal = () => {
        if (this.cb.current.value === "SCB" && this.cr.current.value === "SR") {
            this.setState(prevState => (
                { msg: "Please select card brand and region." }))
            this.setState({
                alert: true
            })
        } else if (this.cb.current.value === "SCB") {
            this.setState(prevState => (
                { msg: "Please select card brand." }))
            this.setState({
                alert: true
            })
        } else if (this.cr.current.value === "SR") {
            this.setState(prevState => (
                { msg: "Please select region." }))
            this.setState({
                alert: true
            })
        } else {
            this.setState(prevState => (
                { show: !prevState.show }))
            this.setState({
                alert: false
            })
        }
    }
    closeModal = (e) => {
        e.preventDefault();
        this.setState({
            show: false
        })
    }
    render() {
        return (
            <div className="cc-container">
                <div className={this.state.classes}><div></div><div></div></div>
                <div className="select">
                    <select ref={this.cb}>
                        <option value="SCB">Select Card Brand</option>
                        <option value="AE">American Express</option>
                        <option value="MC">Master Card</option>
                        <option value="D">Discover</option>
                        <option value="V">Visa</option>
                    </select>
                    <div className="select_arrow">
                    </div>
                </div>
                <div className="select">
                    <select ref={this.cr}>
                        <option value="SR">Select Region</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="EU">Europe</option>
                        <option value="AU">Australia</option>
                    </select>
                    <div className="select_arrow">
                    </div>
                </div>
                <p style={{
                    opacity: this.state.alert ? 1 : 0
                }} className='alert-msg'>{this.state.msg}</p>
                <button onClick={() => { this.cHandle(); this.openModal(); }} className="ccbtn">Generate</button>
                <p className="intro">Pay Attention : This App does NOT generate valid credit card numbers. Well, it will pass the Luhn algorithm/formula a.k.a the mod 10 check, but the financial institution will reject it.</p>
                <Process closeBtn={this.closeModal} show={this.state.show} ccDetails={this.state.ccDetails} />
            </div>
        )
    }
}

export default Main;