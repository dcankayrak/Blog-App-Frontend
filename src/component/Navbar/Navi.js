import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import hireMe from './hire-me.png';

import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png';

export default class Navi extends Component {
    render() {
        return (
            <div>
                <div class='navbar'>
                    <a class='navbar-logo-site'>
                        <img class='navbar-logo' src={logo} alt='logo' />
                        <a href='https://www.linkedin.com/in/danyal-can-kayrak/'>
                            <img class='navbar-hire-me' src={hireMe} alt='hire' />
                        </a>
                    </a>


                    <ul class='navbar-links'>
                        <li>
                            <Link class='link' to='/'>HOME</Link>
                        </li>
                        <li>BLOG</li>
                        <li>CV</li>
                        <li>STORE</li>
                        <li>FREELANCE</li>
                        <li>ABOUT ME</li>
                        <li>CONTACT</li>
                        <li class='theme'>
                            <button class='theme-button' onClick={() => {this.changeTheme()}}>
                                <img class='theme' id="icon" src={moon}></img>
                            </button>
                            </li>
                    </ul>
                </div>
            </div>
        )
    }

    changeTheme(){
        var icon = document.getElementById("icon");
        
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = sun;
        }else{
            icon.src = moon;
        }
    }
}
