import React, { useState } from "react";
import "../asserts/index.css";
import imagem from "../asserts/image/cadastrar.png";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const DadosLogin = () => {
  const [name, setNome] = useState("");
  const [password, setSenha] = useState("");
  const [path, setPath] = useState()
  const history = useHistory();


  // const routeChange = () => {
    
  // }
  async function Conectar(e) {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:3333/pessoas`,
      { name, password }
    )

    let user = response.data.find((x) => x.name == name)
    if (user == null) { // usuario nao encontrado
      alert("Cliente inexistente!")
      return;
    }
    //console.log(user)
    //console.log(response.data)
    if (user.password !== password) {
      alert("senha invalida")
      return;
    }
    localStorage.setItem('id', user.id)
    localStorage.setItem('name', user.name)

    const id = localStorage.getItem('id')
    let path = `/ListPerguntasDoEntrevistado`;
    history.push(path);
  }

  const retorna = () => {
    history.push("/");
  };

  return (
    <div className="caixa">
      <div className="container">
        <form action="" onSubmit={(e) => Conectar(e)}>
          <div className="row">
            <div className="col-md-4">
              <div>
                <h1>Faça seu login</h1>
              </div>
              <div className="form-group">
                <input
                  value={name}
                  onChange={(evento) => {
                    setNome(evento.target.value);
                  }}
                  name="name"
                  id="name"
                  type="text"
                  class="form-control"
                  placeholder="Nome Entrevistado"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  value={password}
                  onChange={(evento) => {
                    setSenha(evento.target.value);
                  }}
                  name="password"
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Senha"
                  required
                />
              </div>
              <div>
                <ul>
                  <span>não possui cadastro, então </span>
                  <a href="/cadastroentrevistado"> Cadastra-se já</a>
                </ul>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-success btn-lg btn-block"
                >
                  Entrar
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-lg btn-block"
                  onClick={retorna}
                >
                  Voltar
                </button>
              </div>
            </div>
            <div class="img text-right">
              <img src={imagem} class="img-login img-responsive" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DadosLogin;
