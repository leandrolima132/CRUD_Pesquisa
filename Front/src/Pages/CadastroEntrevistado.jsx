import React, { useState } from "react";
import "../asserts/index.css";
import imagem from "../asserts/image/testa.png";
import { useHistory } from "react-router-dom";
import { mask} from 'remask'

const CadastroEntrevistado = () => {
  const history = useHistory();
  const [name, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRUA] = useState("");
  const [numerorua, setNumero] = useState("");
  const [cep, setCEP] = useState("");
  const [password, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [telfixo, setTelfixo] = useState("");

  const HandleCPF = ev => {
    setCPF(mask(ev.target.value,['999.999.999-99']))
  }
  const handleCEP = ev => {
    setCEP(mask(ev.target.value,['99999-999']))
  }
  const handleTelefone = ev => {
    setTelefone(mask(ev.target.value,['(99) 99999-9999']))
  }
  const handleTelFixo = ev => {
    setTelfixo(mask(ev.target.value,['(99) 9999-9999']))
  }
  async function savePerson(e) {
    e.preventDefault();
    await fetch("http://localhost:3333/cadPessoa", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        cpf: cpf,
        email: email,
        name: name,
        rua: rua,
        numerorua: numerorua,
        bairro: bairro,
        cep: cep,
        cidade: cidade,
        password: password,
      }),
    })
    await fetch("http://localhost:3333/cadTelefone", {
      method: "POST",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify({
        telefone: telefone,
        telfixo: telfixo,
        pessoa: cpf
      }),
    }).then((response) => {
      history.push("/LoginEntrevistado");
    });
  }
  const retorna = () => {
    history.push("/LoginEntrevistado");
  };

  return (
    <div className="caixa">
      <div className="container">
        <form action="" onSubmit={(ev) => savePerson(ev)}>
          <div className="row">
            <div className="col-md-6 ">
              <div>
                <h1>Cadastro Entrevistado</h1>
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
                  placeholder="Nome"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  value={email}
                  onChange={(evento) => {
                    setEmail(evento.target.value);
                  }}
                  name="email"
                  id="email"
                  type="text"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                <input
                      value={telefone}
                      onChange={handleTelefone}
                      name="telefone"
                      id="telefone"
                      type="text"
                      class="form-control"
                      placeholder="Telefone Celular"
                      required
                    />
                </div>
                <div className="form-group col-md-6">
                <input
                      value={telfixo}
                      onChange={handleTelFixo}
                      name="telfixo"
                      id="telfixo"
                      type="text"
                      class="form-control"
                      placeholder="Telefone fixo"
                      required
                    />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    value={cpf}
                    onChange={HandleCPF}
                    name="cpf"
                    id="cpf"
                    type="text"
                    class="form-control"
                    placeholder="CPF"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    value={cidade}
                    onChange={(evento) => {
                      setCidade(evento.target.value);
                    }}
                    name="cidade"
                    id="cidade"
                    type="text"
                    class="form-control"
                    placeholder="Cidade"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    value={bairro}
                    onChange={(evento) => {
                      setBairro(evento.target.value);
                    }}
                    name="bairro"
                    id="bairro"
                    type="text"
                    class="form-control"
                    placeholder="Bairro"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    value={cep}
                    onChange={handleCEP}
                    name="cep"
                    id="cep"
                    type="text"
                    class="form-control"
                    placeholder="CEP"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    value={rua}
                    onChange={(evento) => {
                      setRUA(evento.target.value);
                    }}
                    name="rua"
                    id="rua"
                    type="text"
                    class="form-control"
                    placeholder="Rua"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <input
                    value={numerorua}
                    onChange={(evento) => {
                      setNumero(evento.target.value);
                    }}
                    name="numerorua"
                    id="numerorua"
                    type="text"
                    class="form-control"
                    placeholder="Número da casa"
                    required
                  />
                </div>
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
                <button
                  type="submmit"
                  className="btn btn-success btn-lg btn-block"
                >
                  Cadastrar
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-lg btn-block btn-header"
                  onClick={retorna}
                >
                  Voltar
                </button>
              
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
export default CadastroEntrevistado;
