import React, { Component } from 'react'

export default class Footer extends Component {
    subscribe() {
        alert("Coming Soon!")
    }
    render() {
        return (
            <div class='footer-container'>
                <div class='footer-useful-links'>

                </div>
                <div class='footer-subscribe'>
                    <p class='footer-subscribe'>Subscribe To Blog!</p>
                    <input type='text' placeholder='Your Mail Address' />
                    <input onClick={()=>this.subscribe()} type='submit'></input>
                </div>
                <div class='footer-contact'>

                </div>
            </div>
        )
    }
}
