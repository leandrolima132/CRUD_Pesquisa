import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';

class AddEditFormEntrevistado extends React.Component {
    state = {
        id: 0,
        pergunta: "",
        resposta: "",
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormEdit1 = () => {
        fetch(`http://localhost:3333/updatePerguntaResp/${parseInt(this.state.id)}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                resposta: this.state.resposta,
                pessoaresp: localStorage.getItem('name')
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
            const { id, resposta, pessoaresp } = this.props.item
            this.setState({ id, resposta, pessoaresp})
        }
    }
    render() {
        return (
            <>
                <Container className="w-75 ">
                    <Form onSubmit={this.props.item ? this.submitFormEdit1 : this.submitFormAdd}>
                        <FormGroup>
                            <Label for="resposta">Digite Sua Resposta</Label>
                            <Input type="textarea" name="resposta" id="resposta" onChange={this.onChange} value={this.state.resposta === null ? '' : this.state.resposta} />
                        </FormGroup>

                        <Button>Responder</Button>
                    </Form>

                </Container>
            </>
        );
    }
}

export default AddEditFormEntrevistado