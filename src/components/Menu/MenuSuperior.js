// Importa classes do react 
import React from 'react';
// Importa classe de link
import { Link } from 'react-router-dom';

// Componente por funcao (exemplo)
function MenuSuperior() {

    // Se fosse apenas uma linha nao precisaria dos parenteses
    return(
        // Container (sintaxe jsx)
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {/* Demais  elementos */}
            <Link to="/" className="navbar-brand">MEU BLOG ✍</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            {/* Botao sanduiche */}
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                {/* Links do menu */}
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/inicio" className="nav-link">
                                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                                &nbsp;&nbsp;⛳<br/>
                                                                &nbsp;&nbsp;&nbsp;&nbsp;INÍCIO
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre" className="nav-link">
                                                               &nbsp;&nbsp;
                                                               &nbsp;&nbsp;
                                                               &nbsp;&nbsp;👤<br/>
                                                               &nbsp;SOBRE MIM&nbsp;
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">
                                                                   &nbsp;&nbsp;&nbsp;&nbsp;
                                                                   &nbsp;&nbsp;&nbsp;&nbsp;
                                                                   &nbsp; ❐<br/>
                                                                   MEU PORTFÓLIO
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>

    )      
    
}

// Permite importacao em outro arquivo
export default MenuSuperior;