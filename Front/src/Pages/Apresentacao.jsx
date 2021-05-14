import React from "react";
import fundo from "../asserts/image/fundo1.png";
import "../asserts/index.css";
import { useHistory } from "react-router";

const Apresentacao = () => {
  const history = useHistory();

  const handleEntrar = () => {
    history.push("/Login");
  };
  const handleCadastro = () => {
    history.push("/LoginEntrevistado");
  };

  return (
    <div className="caixa">
      <div className="box">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div>
                <h1>Sua pesquisa </h1>
                <p>
                  uma plataforma onde o usuario tem acesso a postagem de
                  questionarios
                </p>
              </div>
              <div>
                <button
                  className="btn btn-success btn-lg btn-margin "
                  onClick={handleEntrar}
                >
                  Entrar Empresa
                </button>
                <button
                  className="btn btn-warning btn-lg"
                  onClick={handleCadastro}
                >
                  Entrar Pessoa
                </button>
              </div>
            </div>
            <div class="img text-right">
              <img src={fundo} class="img-login img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Apresentacao;
