import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import imagem from "../asserts/image/testa.png";

import "../asserts/index.css";


const CadastroCliente = () => {
  const history = useHistory();
  const [name, setNome] = useState("");
  const [password, setSenha] = useState("");

  async function savePerson(e) {
    e.preventDefault();

    await fetch("http://localhost:3333/cadClient", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    }).then((response) => {
      history.push("/login");
    });
  }
  const retorna = () => {
    history.push("/login");
  };

  return (
    <div className="caixa">
    <div className="container">
      <form action="" onSubmit={(e) => savePerson(e)}>
        <div className="row">
          <div className="col-md-4">
            <div>
              <h1>Cadastro Cliente</h1>
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
                placeholder="Digite o nome da empresa"
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
                placeholder="Digite uma Senha"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block"
              >
                Cadastrar
              </button>
              <button
                type="button"
                className="btn btn-info btn-lg btn-block "
                onClick={retorna}
              >
                Voltar
              </button>
            </div>
          </div>
          <div class="img text-right">
          <img  src={imagem} class="img-login img-responsive" />
        </div>
        </div>
      </form>
    </div>
    </div>
  );
};
export default CadastroCliente;
