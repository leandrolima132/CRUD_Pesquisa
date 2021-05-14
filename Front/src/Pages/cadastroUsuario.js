import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        id: 0,
        name: '',
        password: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitFormAdd = () => {
        fetch(`http://localhost:3333/cadClient/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                password: this.state.password

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
        alert("Cliente Criado com Sucesso!")
      
    }
    componentDidMount() {
        if (this.props.item) {
            const { id, name, password } = this.props.item
            this.setState({ id, name, password })
        }
    }

    render() {
        return (
            <>
                <Container className="mt-5 w-25 p-3 ">
                    <div  class=" card "  >
                        <div class="card-header text-center">
                            <div><h3>Cadastro Cliente</h3></div>
                        </div>
                        <div class="card-body ">
                            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                                <FormGroup>
                                    <Label for="name">Nome</Label>
                                    <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Senha</Label>
                                    <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
                                </FormGroup>
                                <Button>Cadastrar</Button>
                            </Form>


                        </div>
                    </div>
                </Container>




            </>


        );
    }
}

export default AddEditForm