import React from 'react'

import banner from '../assets/images/banner.jpg';
import instagram from '../assets/images/insta.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={banner} alt="" /></span>
        <h1>𝕃'𝔸ℝ𝕋 𝔻𝕌 𝕄𝔸ℚ𝕌𝕀𝕃𝕃𝔸𝔾𝔼 ℙ𝔼ℝ𝕄𝔸ℕ𝔼ℕ𝕋 𝕄𝕆𝔻𝔼ℝℕ𝔼</h1>
         {/* <p>06-40-57-99-17</p>
        <p>69 avenue de l'Adour 64600 Anglet</p>
     
    <a href="https://www.instagram.com/esthetique_beaute_64/"><span className="instagram"><img src={instagram} alt="" /></span></a> */}

 <a href="https://www.instagram.com/esthetique_beaute_64/" target="_blanck"><span className="instagram"><img src={instagram} alt="" /></span></a>

 {/* <h2>06-40-57-99-17</h2> */}
    </header>
)

export default Header
