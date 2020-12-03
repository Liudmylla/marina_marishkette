import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Espace esthétique</h2>
      <p>
       Aprés 10 ans d'experience,j'ouvre mon cabinet d'esthétique et de maquillage permanent.<br/>
       Toutes mes prestations ont été testées sur moi-même pour vous présenter le meilleur.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Voir plus
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Lessia</h2>
      <dl className="alt">
        <dt>Adresse</dt>
        <dd>69 avenue de l'Adour 64600 Anglet</dd>
        <dt>Phone</dt>
        <dd>06-40-57-99-17</dd>
        {/* <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd> */}
      </dl>
      <ul className="icons">
        {/* <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li> */}
        {/* <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li> */}
        <li>
          <a href="https://www.instagram.com/esthetique_beaute_64/" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
   
      </ul>
    </section>
    <p className="copyright">
      2020 Made with love and Gatsby: <a href="https://www.linkedin.com/in/liudmyla-duvivier-05570b15a/">Liudmylla</a>.
      <a
        href="https://github.com/liudmylla/marina_marishkette"
        className="icon fa-github alt"
        target="_blanck"
      >
        <span className="label">GitHub</span>
      </a>
    </p>
  </footer>
)

export default Footer
