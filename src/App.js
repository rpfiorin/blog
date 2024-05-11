import React from 'react';
// Importa os menus
import MenuSuperior from './components/Menu/MenuSuperior';
import MenuInferior from './components/Menu/MenuInferior';
// Importa componentes criados
import Home from './components/Conteudos/Home';
import Inicio from './components/Conteudos/Inicio';
import Sobre from './components/Conteudos/Sobre';
import Portfolio from './components/Conteudos/Portofolio';
// Importa as classes de execucao de rota
import { Switch, Route } from 'react-router-dom';


function App() {
    return (
      <div>
          <MenuSuperior/><br/>
        <div className="col">
          <Switch>
            {/* Seleciona componente de acordo com a rota escolhida (link) */}
            <Route path="/inicio" exact component={ Inicio } />
            <Route path="/sobre" exact component={ Sobre } />
            <Route path="/portfolio" exact component={ Portfolio } />
            <Route path="/" component={ Home } />
          </Switch>
        </div>
      <footer>
        <MenuInferior/>
      </footer>
    </div>
    );
}

export default App;
