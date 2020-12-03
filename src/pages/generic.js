import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import prix from '../assets/images/prix.jpg'

class Generic extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Prix" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main"><img src={prix} alt="" /></span>
       
           <h1>Prenez votre rendez-vous: 06-40-57-99-17</h1>
           <h1>69 avenue de l'Adour 64600 Anglet </h1>
          
            <ul className="actions">
              <li>
                <Link to="/" className="button">
                  Retourn
                  </Link>
              </li>
            </ul>
          
          </section>
         
        </div>

      </Layout>
    )
  }
}

export default Generic
