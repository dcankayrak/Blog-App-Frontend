import React, { Component } from 'react'

export default class Footer extends Component {
    subscribe() {
        alert("Coming Soon!")
    }
    render() {
        return (
            <footer class="ds-footer text-center">
                <div class="container">
                    <section class='section'>
                        <span>Stay in touch</span>
                        <h4>Ready to talk?</h4>
                        <p class='footer-p'>Feel free to contact us</p>
                        <a href="mailto:dancankan@gmail.com" class="ds-button">Lets Talk</a>
                    </section>
                    <span class="ds-copyright">© 2023 All rights reserved.   <a class='footer-link' href="https://www.linkedin.com/in/danyal-can-kayrak/" target="_blank">DANYAL CAN KAYRAK</a>.</span>
                </div>
            </footer>
        )
    }
}
