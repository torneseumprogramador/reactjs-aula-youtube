import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Body extends Component {
  render() {
    return  (
      <main className="bd-masthead" id="content" role="main">
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto col-md-4 order-md-2">
            </div>
            <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
              <h1 className="mb-3">Uma aplicação criada em ReactJs com torne-se um programador</h1>
              <p className="lead mb-4">
                Assim mesmo, a necessidade de renovação processual auxilia a preparação e a composição dos paradigmas corporativos.
              </p>
              <div className="d-flex flex-column flex-md-row">
                <Link className="btn btn-lg btn-bd-primary mb-3 mr-md-3" to="/clientes">Cadastrar clientes</Link>
              </div>
              <p className="text-muted mb-0">
                Versão v0.0.1
              </p>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default Body;
