import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import { Table, Button } from 'reactstrap';
import ModalForm from './Modal'
import moment from 'moment'
//import { useHistory } from 'react-router-dom'

class DataTable extends Component {
  
 
  deleteItem = id => {
    let confirmDelete = window.confirm('Deseja realmente excluir sua Pesquisa?')
    if (confirmDelete) {
      fetch(`http://localhost:3333/pesquisa/${id}`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      })
        .then(response => response.json())
        .then(item => {
          this.props.deleteItemFromState(id)
        })
        .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>{moment(item.datainicio).format('DD/MM/YYYY')}</td>
          <td>{moment(item.datafim).format('DD/MM/YYYY')}</td>
          <td>{item.pergunta}</td>
          <td>{item.resposta}</td>
          <td>{item.pessoaresp}</td>
          <td>
            <div style={{ width: "110px", display: "flex" }} >
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState} />
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Excluir</Button>
            </div>
          </td>
        </tr>
      )
    })

    return (
      <Container className="mt-5  w-100 p-3 " >
        <div class=" card "  >
          <div class="card-header text-center">
            <div><h2>Pesquisas</h2></div>
          </div>
          <div class="card-body ">
            <Table responsive hover>
              <thead>
                <tr>
                  <th>Inicio Pesquisa</th>
                  <th>Fim Pesquisa</th>
                  <th>Pergunta</th>
                  <th>Resposta</th>
                  <th>Respondida Por </th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    )
  }
}

export default DataTable