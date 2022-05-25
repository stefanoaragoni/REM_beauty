import React from 'react'
import '../assets/styles/Two.scss'
import img from '../assets/static/ariana.jpg'

function Two() {
  return (
    <div className="Two">
      <div className="braidsIMG">
        <img src={img} alt="Braids" />
      </div>
      <div className="textContainerBraids">
        <div className="textBraids">
          <div className="paddingText">
            <div className="two">my dream</div>
          </div>
          <div className="three">&quot;I love make up, I love how it makes me feel, I love how instrumental it is to my art and to one’s sense of self and artistic expression. I want to help encourage others to feel even more beautiful, to create, to tell their stories creatively and express themselves.&quot;</div>
          <div className="three">- ari</div>

          <div className="buttonContainer">
            <div className="stepsButton">
              <div className="textButton">learn more</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Two
