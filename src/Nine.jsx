import React from 'react'
import '../assets/styles/Nine.scss'

function Nine() {
  return (
    <div className="footerGlobal">
      <div className="footerContainer">
        <div className="veganFlex">
          <div className="veganContainer">
            <div className="veganPadding">
              <div className="veganPic">
                <img className="img__el" data-js-class="img_el" title="vegan" alt="vegan" src="https://cdn.accentuate.io/58138493094/1648737565848/Consciously-Made-Vegan-Icon.svg?v=1650037989394" />
              </div>
            </div>
            <div className="veganText">vegan</div>
          </div>

          <div className="veganContainer">
            <div className="veganPadding">
              <div className="veganPic">
                <img className="img__el" data-js-class="img_el" title="cruelty-free" alt="cruelty-free" src="https://cdn.accentuate.io/58138493094/1648737595019/Consciously-Made-CrueltyFree-Icon.svg?v=1650037999138" />
              </div>
            </div>
            <div className="veganText">cruelty-free</div>
          </div>

          <div className="veganContainer">
            <div className="veganPadding">
              <div className="veganPic">
                <img className="img__el" data-js-class="img_el" title="paraben-free" alt="paraben-free" src="https://cdn.accentuate.io/58138493094/1648737629882/Consciously-Made-ParabenFree-Icon.svg?v=1650037969457" />
              </div>
            </div>
            <div className="veganText">paraben-free</div>
          </div>

          <div className="veganContainer">
            <div className="veganPadding">
              <div className="veganPic">
                <img className="img__el" data-js-class="img_el" title="recyclable" alt="recyclable" src="https://cdn.accentuate.io/58138493094/1650034966361/Consciously-Made-Recyclable-Icon.svg?v=1651012038150" />
              </div>
            </div>
            <div className="veganText">recyclable</div>
          </div>

        </div>

        <div className="lineMaker" />

        <div className="signUpContainer">
          <div className="signUpPadding">
            <div className="signUpTitle">keep dreaming. get updates.</div>

            <div className="inputContainer">
              <div className="inputPadding">
                <div className="inputContainer2">

                  <form className="form1">
                    <div className="inputFlex">

                      <div className="inputPadding2">
                        <div className="inputFlex2">
                          { /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
                          <label className="emailContainer">email address</label>
                          <input className="input1" type="email" name="email" tabIndex="0" placeholder="example@email.com" aria-label="email address" aria-invalid="false" options="[object Object]" />
                        </div>
                      </div>

                      <div className="botonPaddingFlex">
                        <div className="botonPaddingFlex2">
                          <button className="botonInput" type="submit">sign me up</button>
                        </div>
                      </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="legalContainer">
              By subscribing to r.e.m. beauty you consent to receive recurring automated
              promotional and personalized marketing messages (e.g. cart reminders) via automated
              {' '}
              <br />
              {' '}
              technology including email and text messages. Consent is not div condition
              of any purchase. View Terms of Use & Privacy Policy. Message and data rates may apply.
              {' '}
              <br />
              {' '}
              Reply HELP for help or STOP to opt-out.
            </div>
          </div>

        </div>

        <ul className="socialMediaFlex">
          <li className="iconSocial">
            <div className="IGicon">
              <svg id="icon-instagram" width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M16.7012 0.336426H3.34024C2.45436 0.336426 1.60475 0.688343 0.978335 1.31476C0.351918 1.94118 0 2.79078 0 3.67667L0 17.0376C0 17.9235 0.351918 18.7731 0.978335 19.3996C1.60475 20.026 2.45436 20.3779 3.34024 20.3779H16.7012C17.5871 20.3779 18.4367 20.026 19.0631 19.3996C19.6895 18.7731 20.0415 17.9235 20.0415 17.0376V3.67667C20.0415 2.79078 19.6895 1.94118 19.0631 1.31476C18.4367 0.688343 17.5871 0.336426 16.7012 0.336426V0.336426ZM18.3713 17.0376C18.3713 17.4806 18.1954 17.9054 17.8822 18.2186C17.569 18.5318 17.1442 18.7078 16.7012 18.7078H3.34024C2.8973 18.7078 2.4725 18.5318 2.15929 18.2186C1.84608 17.9054 1.67012 17.4806 1.67012 17.0376V3.67667C1.67012 3.23373 1.84608 2.80892 2.15929 2.49571C2.4725 2.18251 2.8973 2.00655 3.34024 2.00655H16.7012C17.1442 2.00655 17.569 2.18251 17.8822 2.49571C18.1954 2.80892 18.3713 3.23373 18.3713 3.67667V17.0376Z" fill="#202020" />
                  <path d="M10.0206 5.34692C9.02966 5.34692 8.06096 5.64078 7.23701 6.19132C6.41306 6.74187 5.77087 7.52438 5.39165 8.4399C5.01242 9.35543 4.9132 10.3628 5.10653 11.3348C5.29985 12.3067 5.77705 13.1994 6.47776 13.9002C7.17847 14.6009 8.07123 15.0781 9.04315 15.2714C10.0151 15.4647 11.0225 15.3655 11.938 14.9863C12.8535 14.607 13.636 13.9648 14.1866 13.1409C14.7371 12.3169 15.031 11.3482 15.031 10.3573C15.031 9.02846 14.5031 7.75405 13.5635 6.81443C12.6239 5.8748 11.3495 5.34692 10.0206 5.34692ZM10.0206 13.6975C9.35998 13.6975 8.71418 13.5016 8.16488 13.1346C7.61558 12.7676 7.18745 12.2459 6.93464 11.6355C6.68182 11.0252 6.61568 10.3536 6.74456 9.70564C6.87344 9.0577 7.19157 8.46252 7.65871 7.99538C8.12585 7.52824 8.72103 7.21011 9.36897 7.08123C10.0169 6.95234 10.6885 7.01849 11.2989 7.27131C11.9092 7.52412 12.4309 7.95225 12.7979 8.50155C13.165 9.05085 13.3609 9.69665 13.3609 10.3573C13.3609 11.2432 13.0089 12.0928 12.3825 12.7192C11.7561 13.3456 10.9065 13.6975 10.0206 13.6975Z" fill="#202020" />
                  <path d="M15.4484 6.18194C16.1402 6.18194 16.701 5.62114 16.701 4.92935C16.701 4.23756 16.1402 3.67676 15.4484 3.67676C14.7566 3.67676 14.1958 4.23756 14.1958 4.92935C14.1958 5.62114 14.7566 6.18194 15.4484 6.18194Z" fill="#202020" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="20.0415" height="20.0415" fill="white" transform="translate(0 0.336426)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>

          <li className="iconSocial">
            <div className="IGicon">
              <svg id="icon-twitter" width="24" height="24" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M6.81862 18.0421C14.8861 18.0421 19.2974 11.3603 19.2974 5.56644C19.2974 5.37639 19.2937 5.18739 19.2846 4.99946C20.1409 4.38031 20.8854 3.60837 21.4727 2.72888C20.6867 3.07812 19.8411 3.3129 18.954 3.41937C19.8592 2.87635 20.5547 2.01763 20.8822 0.993874C20.0344 1.4959 19.0961 1.86165 18.0972 2.05809C17.2979 1.20576 16.1578 0.672852 14.8968 0.672852C12.4744 0.672852 10.51 2.63678 10.51 5.05749C10.51 5.40141 10.5483 5.73627 10.6239 6.05729C6.97891 5.87416 3.74658 4.12903 1.58353 1.47567C1.20652 2.12357 0.989253 2.87635 0.989253 3.67971C0.989253 5.20123 1.76352 6.54388 2.9409 7.32967C2.22148 7.30784 1.54572 7.1098 0.954639 6.78132C0.953574 6.79942 0.953574 6.81806 0.953574 6.83722C0.953574 8.96087 2.46537 10.7337 4.47239 11.1362C4.1039 11.2362 3.71623 11.2905 3.31631 11.2905C3.03355 11.2905 2.75878 11.2623 2.49199 11.2112C3.05006 12.9531 4.66942 14.2213 6.58964 14.2569C5.08797 15.433 3.19703 16.1341 1.14208 16.1341C0.787964 16.1341 0.439171 16.1139 0.0957031 16.0734C2.0367 17.3165 4.34139 18.0421 6.81862 18.0421Z" fill="#202020" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="21.3776" height="17.3693" fill="white" transform="translate(0.0957031 0.672852)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>

          <li className="iconSocial">
            <div className="IGicon">
              <svg id="icon-instagram" width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M20.223 3.60746H18.2913C16.7459 3.60746 16.4883 4.40912 16.4883 5.478V7.88298H20.0942L19.5791 11.624H16.4883V21.3776H12.7537V11.624H9.53418V7.88298H12.7537V5.07717C12.6249 1.73693 14.5566 0 17.3898 0C18.6776 0 19.8366 0.13361 20.223 0.13361V3.60746Z" fill="#202020" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="10.6888" height="21.3776" fill="white" transform="translate(9.53418)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>

          <li className="iconSocial">
            <div className="IGicon">
              <svg id="icon-instagram" width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M20.5797 5.57201C19.3575 5.57201 18.2297 5.16714 17.3242 4.48405C16.2857 3.70094 15.5394 2.55239 15.2759 1.22851C15.2103 0.901338 15.1754 0.563714 15.1718 0.217773H11.6803V9.75821L11.676 14.9839C11.676 16.381 10.7663 17.5656 9.50513 17.9821C9.13923 18.1031 8.74387 18.1603 8.33212 18.1378C7.80679 18.109 7.31449 17.9503 6.88658 17.6944C5.97588 17.1498 5.3586 16.1617 5.34173 15.0314C5.31536 13.2649 6.74355 11.8248 8.50865 11.8248C8.8572 11.8248 9.19174 11.8816 9.50513 11.985V9.37759V8.44027C9.17463 8.39132 8.83844 8.3659 8.4982 8.3659C6.56606 8.3659 4.75915 9.16898 3.46733 10.6159C2.49105 11.7094 1.90538 13.1043 1.81509 14.5672C1.69677 16.4888 2.39981 18.3155 3.76362 19.6634C3.96391 19.8613 4.17442 20.0449 4.39443 20.2144C5.56365 21.1137 6.99303 21.6014 8.49844 21.6014C8.83844 21.6014 9.17487 21.5763 9.50537 21.5273C10.9117 21.3189 12.2092 20.6753 13.2333 19.6629C14.4916 18.4193 15.1868 16.7683 15.1941 15.011L15.1761 7.20738C15.7762 7.67046 16.4327 8.0537 17.137 8.35093C18.2325 8.81306 19.3941 9.04733 20.5895 9.04709V6.51194V5.57129C20.5904 5.57201 20.5804 5.57201 20.5797 5.57201Z" fill="#202020" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="21.3776" height="21.3776" fill="white" transform="translate(0.623047 0.336426)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </li>

          <li className="iconSocial">
            <div className="IGicon">
              <svg id="icon-youtube" width="24" height="24" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.28 0H3.52C2.5864 0 1.6911 0.3709 1.031 1.031C0.370899 1.6912 0 2.5865 0 3.52V10.88C0 11.8136 0.370899 12.7089 1.031 13.3691C1.6911 14.0292 2.5864 14.4 3.52 14.4H17.28C18.2136 14.4 19.1089 14.0292 19.769 13.3691C20.4291 12.7089 20.8 11.8136 20.8 10.88V3.52C20.8 2.5865 20.4291 1.6912 19.769 1.031C19.1089 0.3709 18.2136 0 17.28 0ZM14.4736 7.3408L8.2336 10.5408C8.2093 10.5534 8.1822 10.5596 8.1548 10.5587C8.1275 10.5578 8.1008 10.5499 8.0774 10.5358C8.054 10.5217 8.0346 10.5018 8.021 10.478C8.0075 10.4543 8.0002 10.4274 8 10.4V4C8.0002 3.9727 8.0075 3.9458 8.021 3.9221C8.0346 3.8983 8.054 3.8784 8.0774 3.8643C8.1008 3.8502 8.1275 3.8423 8.1548 3.8414C8.1822 3.8405 8.2093 3.8467 8.2336 3.8592L14.4736 7.0592C14.4998 7.0727 14.5218 7.0931 14.5372 7.1182C14.5525 7.1433 14.5607 7.1722 14.5607 7.2016C14.5607 7.2311 14.5525 7.26 14.5372 7.2851C14.5218 7.3102 14.4998 7.3306 14.4736 7.344V7.3408Z" fill="#202020" />
              </svg>
            </div>
          </li>
        </ul>

        <div className="menuFooterContainer">
          <div className="menuFooterLeft">
            <ul className="menuLeftFlex">
              <li className="menuLeftOne">
                <div className="menuLeftOneTitle">shop</div>

                <div className="menuLeftOneContainer2">
                  <ul className="menuFooterList">
                    <li className="menuFooterListText">eyes</li>
                    <li className="menuFooterListText">lips</li>
                    <li className="menuFooterListText">face</li>
                    <li className="menuFooterListText">all</li>
                  </ul>
                </div>

              </li>
              <li className="menuLeftOne">
                <div className="menuLeftOneTitle">help</div>

                <div className="menuLeftOneContainer2">
                  <ul className="menuFooterList">
                    <li className="menuFooterListText">faqs</li>
                    <li className="menuFooterListText">shipping & returns</li>
                    <li className="menuFooterListText">refund policy</li>
                    <li className="menuFooterListText">contact</li>
                    <li className="menuFooterListText">accesibility</li>
                    <li className="menuFooterListText">promotions</li>
                  </ul>
                </div>

              </li>
              <li className="menuLeftOne">
                <div className="menuLeftOneTitle">about</div>
              </li>
            </ul>
          </div>

          <div className="menuFooterRight">
            <div className="rightTitle">for anyone who loves makeup</div>
            <div className="rightText">r.e.m. beauty was brought to life by multi-talented creator, ariana grande. inspired by the transformative power of makeup and fueled by her passion for incredible product, ari’s dream come true is div line of high-performing, innovative eye, face, and lip products that is accessible to all. from eyeshadows, eyeliners and lashes to highlighters, lipstick and plumping lip gloss, this vegan, cruelty-free brand provides you with the tools you need to be your own creative director.</div>
          </div>

        </div>

        <div className="footerCreditsContainer">
          <div className="footerCredits1">stefano aragoni, llc 2022</div>
          <div className="footerCredits1">terms and conditions</div>
          <div className="footerCredits1">privacy</div>
        </div>

      </div>
    </div>
  )
}

export default Nine
