import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DadosLogin from "./Pages/DadosLogin";
import CadastroEntrevistado from "./Pages/CadastroEntrevistado";
import Apresentacao from "./Pages/Apresentacao";
import DadosLoginEntrevistado from "./Pages/DadosLoginEntrevistado";
import CadastroCliente from "./Pages/CadastroCliente";

import TelaListagem from './Pages/Comeco';
import TelaListagemEntrevistado from './Pages/ComecoEntrevistado';




function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Switch>

          <Route path="/" exact component={Apresentacao} ></Route>
          <Route path="/LoginEntrevistado" component={DadosLoginEntrevistado} />


          <Route path="/login" component={DadosLogin} />
          <Route path="/ListPerguntasDoCliente" component={TelaListagem} />
          <Route path="/ListPerguntasDoEntrevistado" component={TelaListagemEntrevistado} />
          <Route
            path="/cadastroentrevistado"
            component={CadastroEntrevistado}
          />
          <Route path="/cadastrocliente" component={CadastroCliente} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
