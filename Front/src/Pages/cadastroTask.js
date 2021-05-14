import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        id: 0,
        datainicio: "",
        datafim: "",
        idcliente:0,
        pergunta: "",
        resposta: "",
        pessoaresp: ""
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitFormAdd = () => {
        fetch(`http://localhost:3333/cadPergunta/${localStorage.getItem('id')}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                datainicio: this.state.datainicio,
                datafim: this.state.datafim,
                pergunta: this.state.pergunta,
                resposta: this.state.resposta,
                pessoaresp: this.state.pessoaresp,

            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                } else {
                    console.log('falha')
                }
            })
            .catch(err => console.log(err))
        alert("Pesquisa Criada com Sucesso!")
    }

    submitFormEdit = () => {
        fetch(`http://localhost:3333/updatePergunta/${parseInt(this.state.id)}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                datainicio: this.state.datainicio,
                datafim: this.state.datafim,
                pergunta: this.state.pergunta
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    //console.log("oi",item[0])
                    this.props.updateState(item[0])
                    this.props.toggle()
                } else {
                    console.log('Falha')
                }
            })
            .catch(err => console.log(err))

    }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const { id,datainicio, datafim, idcliente, pergunta, resposta, pessoaresp} = this.props.item
            this.setState({ id,datainicio, datafim, idcliente, pergunta, resposta, pessoaresp })
        }
    }
    render() {
        return (
            <>
                <Container className="w-75 ">
                    <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                        <FormGroup>
                            {console.log(this.state)}
                            <Label for="datainicio">Inicio Da Pesquisa</Label>
                            <Input type="date" name="datainicio" id="datainicio" onChange={this.onChange} value={this.state.datainicio === null ? '' : this.state.datainicio} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="datafim">Fim Da Pesquisa</Label>
                            <Input type="date" rows="5" name="datafim" id="datafim" onChange={this.onChange} value={this.state.datafim === null ? '' : this.state.datafim} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="pergunta">Pergunta</Label>
                            <Input type="textarea" name="pergunta" id="pergunta" onChange={this.onChange} value={this.state.pergunta === null ? '' : this.state.pergunta} />
                        </FormGroup>
                        
                        <Button>OK</Button>
                    </Form>

                </Container>
            </>
        );
    }
}

export default AddEditForm