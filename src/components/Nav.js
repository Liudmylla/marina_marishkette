import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['intro', 'first', 'second', 'contactUs'] } currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">A propos</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first">
                    <a href="#">Prestations</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Galerie</a>
                </Scroll>
            </li>
           
            <li>
                <Scroll type="id" element="contactUs">
                    <a href="#">Contact</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
