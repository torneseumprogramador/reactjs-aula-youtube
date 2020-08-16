import React, {Component} from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Clientes extends Component {
  state = {
    clientes: []
  }

  componentDidMount(){
    this.lista()
  }

  lista = () => {
    axios.get('https://localhost:5001/clientes').then(response => {
      const clientes = response.data
      this.setState({ clientes });
    })
  }

  excluir = (cliente) => {
    if(window.confirm("Deseja realmente excluir?")){
      axios.delete(`https://localhost:5001/clientes/${cliente.id}`).then(response => {
        this.lista()
      })
    }
  }

  render() {
    return  (
      <div>
        <Header></Header>
        <main className="bd-masthead" id="content" role="main">
          <div className="container">
            <div className="row">
              <div className="col-6 mx-auto col-md-4 order-md-2">
              </div>
              <div className="col-md-8 order-md-1 text-center text-md-left pr-md-5">
                <h1 className="mb-3">Lista de clientes - {this.state.clientes.length} </h1>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Endereço</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.clientes.map((cliente, index) => (
                      <tr key={index}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.telefone}</td>
                        <td>{cliente.endereco}</td>
                        <td><Link to={`/cliente/${cliente.id}`} className="btn btn-primary">Editar</Link></td>
                        <td>
                          <button className="btn btn-danger" onClick={() => { this.excluir(cliente) }} >Excluir</button>
                        </td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
                <Link className="btn btn-primary" to={`/cliente/novo`}>Novo</Link>
                <p style={{marginTop: "30px"}} className="text-muted mb-0">
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

export default Clientes;
