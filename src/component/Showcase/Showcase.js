import React, { Component } from 'react';
import githubIcon from '../../assets/images/githubicon.png';
import linkedInIcon from '../../assets/images/linkedin.svg';
import mediumIcon from '../../assets/images/medium.svg';

import '../../assets/fonts/Icomoon/style.css';
import showcaseImg from '../../assets/images/showcase_img.svg';

export default class Showcase extends Component {
  render() {
    return (
      <div>
        <div class='showcase'>
          <div class='showcase-info'>
            <h1>Blog Posts</h1>
            <h3>I think so, this is it.</h3>
            <p>Design begins after I begin to think about how to present an
              experience most successfully, whether a button I put in can solve a
              problem. The only point in design is not ui design, if the user does
              not have a good experience at the end of the product, the design
              will be considered unsuccessful in my opinion.
            </p>
            <div class='showcase-links'>
              <div class='link-container'>
                <a class='showcase-link github' href='https://github.com/DCanKayrak'>
                  <span class="icon-github home-icon"></span>
                </a>
              </div>
              <div class='link-container'>
                <a class='showcase-link linkedin' href='https://www.linkedin.com/in/danyal-can-kayrak/'>
                  <span class="icon-linkedin home-icon"></span>
                </a>
              </div>
              <div class='link-container'>
                <a class='showcase-link medium' href='https://medium.com/@dcankayrak'>
                  <span class="icon-medium home-icon"></span>
                </a>
              </div>

            </div>
          </div>
          <img class='showcase-image' src={showcaseImg} />
        </div>
      </div>
    )
  }
}
