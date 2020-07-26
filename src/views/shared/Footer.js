import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return  <footer className="bd-footer text-muted">
              <div className="container-fluid p-3 p-md-5">
                <ul className="bd-footer-links">
                  <li><a href="https://github.com/torneseumprogramador">GitHub</a></li>
                </ul>
                <p>Criado por torne-se um programador <a href="http://www.torneseumprogramador.com.br/">http://www.torneseumprogramador.com.br/</a></p>
              </div>
            </footer>
  }
}

export default Footer;
