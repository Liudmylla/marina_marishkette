import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'


class Prix extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Prix" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
          <header className="major">
              <h2>Première rendez-vous gratuit: 06-40-57-99-17, Lessia </h2>
            </header>
         
        
            <span className="image main"><img src="https://res.cloudinary.com/di4iku1b9/image/upload/v1607036191/prix_rmkgfp.jpg" alt="" /></span>
            <span className="image main"><img src="https://res.cloudinary.com/di4iku1b9/image/upload/v1607288758/lessia5_rvobkf.jpg" alt="" /></span>
            <span className="image main"><img src="https://res.cloudinary.com/di4iku1b9/image/upload/v1607288862/lessia3_pmup7p.jpg" alt="" /></span>
            <span className="image main"><img src="https://res.cloudinary.com/di4iku1b9/image/upload/v1607287824/lessia1_c2s59f.jpg" alt="" /></span>
            <header className="major">
              <h2>Prenez votre rendez-vous: 06-40-57-99-17 </h2>
            </header>
          
            <ul className="actions">
              <li>
                <Link to="/" className="button">
                  Revenir à l'accueil
                  </Link>
              </li>
            </ul>
          
          </section>
         
        </div>

      </Layout>
    )
  }
}

export default Prix
