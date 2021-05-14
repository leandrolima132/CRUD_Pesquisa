import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal'
import DataTable from './DataTable'
//import { useHistory } from "react-router-dom";

class Comeco extends Component {
  state = {
    items: []
  }


  getItems() {
    fetch(`http://localhost:3333/pesquisaDo/${localStorage.getItem('id')}`)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const indexItem = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
      ...this.state.items.slice(0, indexItem),
      item,
      ...this.state.items.slice(indexItem + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount() {
    this.getItems()
  }
  Sair() {
    window.history.pushState({}, null, "/")
    window.location.reload()
    localStorage.clear();
  }
  render() {
    const nomeUsuario = localStorage.getItem('name');
    const UpperCase = nomeUsuario[0].toUpperCase() + nomeUsuario.substr(1)
    return (
      <Container>
        <div class=" card "  >
          <div class="card-body ">
            <Row>
              <Col>
                <h5 style={{ margin: "20px 0" }}>Bem Vindo {UpperCase}</h5>
              </Col>
              <Row>
              <Col>
              <button type="button" className="btn btn-info btn-lg btn-block" onClick={this.Sair}>Sair</button>
              </Col>
            </Row>
            </Row>
            <Row>
              <Col>
                <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ModalForm buttonLabel="Adicionar Pesquisa" addItemToState={this.addItemToState} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    )
  }
}

export default Comeco