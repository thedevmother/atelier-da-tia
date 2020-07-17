import React from 'react'

import footerBackground from '../img/footer-background.png'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={{ position: 'relative', height: '370px', background: `url(${footerBackground}), rgba(255, 255, 255, 0.72)`, backgroundPosition: 'bottom left' }}>
        <div className="content has-text-centered" style={{ paddingTop: '0.5em', position: 'absolute', bottom: '15px', width: '100%' }}>
          <h4 className="dark-text">Siga nas redes sociais</h4>
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter" style={{ position: 'absolute', bottom: '0', width: '100%', paddingTop: '12px', height: '50px' }}>
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: '100vw' }} className="columns">
              <div className="column is-4">
                
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
