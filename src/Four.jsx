import React from 'react'
import '../assets/styles/Two.scss'
import img from '../assets/static/eyelashes.jpg'

function Two() {
  return (
    <div className="Two">
      <div className="braidsIMG">
        <img src={img} alt="Braids" />
      </div>
      <div className="textContainerBraids">
        <div className="textBraids">
          <div className="paddingText">
            <div className="one">new</div>
            <div className="two">latest crush:</div>
            <div className="two">smitten kitten</div>
          </div>
          <div className="three">a mis of 06 romantic neutral mattes and shimmers.</div>

          <div className="buttonContainer">
            <div className="stepsButton">
              <div className="textButton">shop now</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Two
