import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'
import VideoPlayer from '../components/VideoPlayer'
import SlideShow from '../components/slidesshow'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Marina Marishkette" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main special">
             {/* <h2>I love to make video for you</h2>  */}
           <VideoPlayer></VideoPlayer>
            </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Marina Marishkette</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Family</h3>
                <p>
                  Let's create lovely video about you and your family.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Business</h3>
                <p>
                  Let's create professional video about your business.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Events</h3>
                <p>
                  Let's create unforgetable video about some special day of your life.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              {/* <h2>Back-stage photos</h2> */}
            </header>
          <SlideShow></SlideShow>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          <section id="contactUs" className="main special">
            <header className="major">
              <h2>Contact</h2>
              <ContactForm></ContactForm>
            </header>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
