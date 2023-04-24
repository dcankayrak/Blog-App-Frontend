import React, { Component } from 'react'

export default class AboutMe extends Component {
  render() {
    return (
      <div class='about-me'>
        <h3 class='about-me-section'>About Me</h3>
        <img class='about-me-photo' src='https://media.licdn.com/dms/image/D4D03AQEQn9mecAOHcQ/profile-displayphoto-shrink_800_800/0/1680530488280?e=1687392000&v=beta&t=tHio86-7ejVc2W8xXo1df72NsgGcSR3o_WmAJsTaklU'/>
        <h5 class='about-me-name'>DANYAL CAN KAYRAK</h5>
        <p class='about-me-desc'>Merhabalar, ben Danyal Can KAYRAK. Fırat Üniversitesi Yazılım Mühendisliği 2.Sınıf öğrencisiyim.
            Öğrenmeye son derece meraklı, probleme değil çözüme odaklı bir bireyim.
        </p>
        <br></br>
        <div class='seperate'>
          <p>*</p>
          <p>*</p>
          <p>*</p>
        </div>
      </div>
    )
  }
}
