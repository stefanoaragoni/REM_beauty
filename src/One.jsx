import React from 'react'
import '../assets/styles/One.scss'
import cover from '../assets/static/cover.jpg'

function One() {
  return (
    <div className="OneC1">
      <div className="coverIMG">
        <img src={cover} alt="night shadow" />
      </div>

      <div className="flexText">
        <div className="textContainer">
          <div className="title">
            <h1>
              {' '}
              color outside the lines
              <br />
              {' '}
            </h1>
          </div>
          <div className="text">a mix of 06 ultra-blendable icy pastel mattes and shimmers.</div>
        </div>

        <div className="buttonContainer">
          <div className="newFlex">
            <div className="buttonText">explore</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default One
