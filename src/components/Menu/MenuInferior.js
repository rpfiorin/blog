// Importa classes do react 
import React from 'react';

const Dstl1 = {
    float: 'left'
}
const Dstl2 = {
    float: 'right'
}

function MenuInferior() {
    return (
            <div>
                <nav className="navbar navbar-brand-bottom fixed-bottom bg-light">
                    <div style={Dstl1}>
                        <small className="text-muted">
                                DESENVOLVIDO EM REACTJS<br/>
                                <h6>
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;   
                                    ⚛️
                                </h6>  
                        </small>
                    </div>
                    <div style={Dstl2}>
                        <small className="text-muted">
                                RAFAEL P. FIORIN<br/>
                                    &nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp; 
                                    &nbsp;&nbsp;&nbsp;&nbsp; 
                                ♊ 
                        </small>
                    </div>
                </nav>
            </div>
    )
}

// Exporta
export default MenuInferior;