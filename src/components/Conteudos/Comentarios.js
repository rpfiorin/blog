// Importa classes do react 
import React from 'react';
// Importa imagens
import Phto1 from './../../img/Comments/1.png';
import Phto2 from './../../img/Comments/2.png';
import Phto3 from './../../img/Comments/3.png';
import Phto4 from './../../img/Aprov.jpg';

const Imgs = {
    margin: '1px'
}

function Comentarios() {
    return (
        <div>
            <h2>
                <p className="mt-2 text-left">
                <br/> 
                    Alguns pronunciamentos sobre mim e meu trabalho
                </p>
            </h2><br/>
            <div className="row">
                <div className="col-lg-12 com-md-12 col-sm-12 col-xs-12">
                    <center>
                        <img className="img-responsive" src={ Phto1 } style={ Imgs } height="170px" width="325px"></img>        
                        <img className="img-responsive" src={ Phto2 } style={ Imgs } height="170px" width="325px"></img>
                    </center>
                <div>
                    <center>
                        <img className="img-responsive" src={ Phto3 } style={ Imgs } height="117px" width="325"></img>
                        <img className="img-responsive" src={ Phto4 } style={ Imgs } height="117px" width="325"></img>
                    </center>
                </div>
                </div>
            </div>
            <br/>
        </div>
    )
}

// Exporta
export default Comentarios;
