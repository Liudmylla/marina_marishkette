import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import about from '../assets/images/about.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import ContactForm from '../components/ContactForm'
//import VideoPlayer from '../components/VideoPlayer'
import SlideShow from '../components/slidesshow'
import banner from '../assets/images/banner.jpg'
import permanent from '../assets/images/img0.jpg'
import soins from '../assets/images/soins.jpg'
import soinsVisage from '../assets/images/soinsVisage.jpg'
import volume from '../assets/images/volume.jpg'
import epilations from '../assets/images/epilations.jpg'
import levres from '../assets/images/levres.jpg'

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
        <Helmet title="Lessia" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
        <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
<<<<<<< HEAD
                  <h2>Je suis Lessia,esthéticienne depuis 10 ans.</h2>
                </header>
                <p>
                Infirmière de formation, les bases medicales ont toujours cadré mon travail esthétique dans les établissements suivants :<br/>
                ✅Dessange
                ✅Spa ***** Ramatuelle 
                ✅Grand hôtel à Saint-Jean-de-Luz
                ✅Institut parfumerie à Biarritz
                ✅Institut à Anglet
                </p>
                 <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Voir plus
                    </Link>
                  </li>
                </ul> 
=======
                  <h2>Ipsum sed adipiscing</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
>>>>>>> 689cd5b279af960ea899b2401860770af90852e5
              </div>
              <span className="image">
                <img src={about} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Prestations</h2>
            </header>
            <ul className="features">
              <li>
              <h2>Maquillage permanent: sourcils</h2>
                <img className="major imgservices" src={permanent} alt="" />
              
                <p>
                Il s'agit d'implanter un pigment sous les couches superficielles de la peau à l'aide d'une aiguille afin de créer un ombrage.<br/>
                Après une restructuration, la conjugaison d’un maquillage permanent sur les zones clairsemées donnera à votre sourcil une ligne parfaite.<br/>
                La méthode du microshading (ombrage) nous permet d'avoir un résultat naturel et fondu.
                </p>
              </li>
              <li>
              <h2>Maquillage permanent: levres</h2>
                <img className="major imgservices" src={levres} alt="" />
               
                <p>
                Il s'agit d'implanter un pigment sous les couches superficielles de la peau à l'aide d'une aiguille afin de créer un ombrage.<br/>
                Après une restructuration, la conjugaison d’un maquillage permanent sur les zones clairsemées donnera à vos levres une ligne parfaite.<br/>
                La méthode du microshading (ombrage) nous permet d'avoir un résultat naturel et fondu.
                </p>
              </li>
              <li>
              <h2>Nettoyage du visage manuel classique</h2>
                <img className="major imgservices" src={soins} alt="" />
             
                <p>
                ✅Tout d'abord, mes nettoyages des visages sont réalisés avec les gants et le masque pour moi (avec ou sans Covid-19).<br/>
                ✅ Je vous conseille d'effectuer un nettoyage tous les 6 mois: un avant l'ete pour booster la peau,
                desincruster les pores et rafraichir le visage et un après l’été car la creme solaire bloque les pores du visage.
                </p>
              </li>
              <li>
              <h2>Soins du visage</h2>
                <img className="major imgservices" src={soinsVisage} alt="" />
              
                <p>
                Nettoyage du visage avec une masque d’argile purifiant
                </p>
              </li>
              <li>
              <h2>Epilations à la cire chaude</h2>
                <img className="major imgservices" src={epilations} alt="" />
                
                <p>
               
                Cette technique d'épilation est très efficace puisque la cire chaude dilate les pores de la peau, ce qui permet de capturer les poils dans leur intégralité et de faciliter leur extraction. 
                 
                </p>
              </li>
              <li>
              <h2>Extension des clis 2d</h2>
                <img className="major imgservices" src={volume} alt="" />
               
                <p>
                Dans le cas de l'extension des clis 2d je pose plusieurs extensions associées entre elles sur un même cil pour un volume plus spectaculair.
                </p>
              </li>
             
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Prix
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Galerie</h2>
            </header>
          <SlideShow></SlideShow>
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
