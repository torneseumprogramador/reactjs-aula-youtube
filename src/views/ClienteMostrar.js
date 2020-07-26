import React, {Component} from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

class ClienteMostrar extends Component {
  constructor(){
    super()
    this.id = 0
  }
  render() {
    this.id = this.props.match.params.id
    return  (
      <div>
        <Header></Header>
        <main className="bd-masthead" id="content" role="main">
          <div className="container">
            <div className="row">
              <div className="col-6 mx-auto col-md-4 order-md-2">
              </div>
              <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
                <h1 className="mb-3">Mostrando cliente {this.id}</h1>
                <p className="text-muted mb-0">
                  Versão v0.0.1
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default ClienteMostrar;
