import React from 'react';
import styled from 'styled-components';
import Comentarios from './Comentarios';
// Importa imagem
import Photo from './../../img/2017.png';

// Uso de Styl. Comp.
const ListItem = styled.li`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  border-bottom: 1px solid #bdbebd;
`;

const titulo = {
    height: '15px'
}
const colunas = {
    height: '1050px'
   }   

function Sobre() {
    return (
        <div className="container"> 
            <div className={ titulo }> 
                <h2><br/>
                    <p className="mt-2 text-left">
                    <br/> 
                        <img src={ Photo } height="55px" width = "60px"></img> 
                        &nbsp; Um pouco da minha história:
                    </p>
                </h2>
            </div>
            <div style={ colunas }>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <h6>
                            <article className="mt-3 text-justify">
                                Me chamo Rafael, faço 24 anos em 2020, sou Analista de Sistemas formado pela FATEC/CPS e Técnico em Informática 
                                pela FIEC/CEPIN. Nasci em uma pequena cidade da alta paulista, chamada Dracena.
                                <br/>
                                Meu interesse pela área de tecnologia começou quando tive meu primeiro PC (aos 11 anos de idade). Antes disso,
                                meu contato mais frequente com um Microcomputador foi no ano anterior, quando estudei o básico de MS Windows (XP) 
                                e pacote Office (2003) num curso profissionalizante. Anos depois, também fiz cursos voltados a Suporte e Redes de 
                                computadores.
                                <br/>
                                Aos 17, quando era aluno do último ano do Ensino Médio, ingressei na escola técnica para cursar Informática com 
                                ênfase em SI. No fim do 2º módulo, participei do processo seletivo para o setor público e fui aprovado para 
								estagiar na Prefeitura de Indaiatuba, no Departamento de Informática. 
                                <br/>
                                Foi uma ótima experiência para colocar em prática o que havia aprendido, aprimorar meus conhecimentos e evoluir 
                                profissionalmente na área. Lá pude desenvolver meus primeiros projetos profissionais para desktop, utilizando a 
                                linguagem de programação adotada, a <i>Object Pascal</i> integrada ao Banco de dados <i>Postgres</i>, na sua 
								linguagem de script "PL/pgSQL", para codificar alguns módulos e sistemas em plataforma Windows.
                            </article>
                        </h6>
                    </div>
                    <div className="col-lg-6 com-md-6 col-sm-6 col-xs-6">
                        <h6>
                            <article className="mt-3 text-justify">
                                Antes de completar 20 anos, passei no vestibular para cursar Análise e Desenvolvimento de Sistemas. Fui um dos alunos 
                                com melhor desempenho na turma, participando de atividades com boa visibilidade, o que me ajudou a estagiar em uma 
                                incubadora.
                                <br/> 
                                Em 2019, me graduei e continuei estudando algumas tecnologias e ferramentas, à procura de novas experiências. Também 
                                estive de mudança e, após isso, acabei realizando alguns trabalhos de contato direto, obtendo clientes que precisavam 
                                de serviços em TI/aplicações específicas para seus respectivos negócios. Atualmente, busco oportunidades para me 
                                especializar no ramo da Engenharia de software, em especial, no seguimento de Análise e projeto de Sistemas. Além disso,
                                gosto de estar sempre aprendendo novas <i>skills</i>, no intuito de aplicá-las em demandas pessoais/profissionais. 
                                <br/>
                                É um prazer você ter me conhecido virtualmente, agradeço a sua visita e espero que tenha gostado deste ambiente. Aproveite 
                                também para conhecer meu portfólio online e entender mais sobre minha formação e meu trabalho. Entre em contato caso se 
                                interesse e precise de um sistema comercial para o seu negócio, ou se necessitar algum suporte técnico em TI. Se não se 
                                encaixar em nenhuma destas situações mas deseja apenas "trocar ideias", não se acanhe, será uma satisfação atendê-lo(a).
                            </article>
                        </h6>  
                    </div>       
                </div>
                <br/>
                <ListItem>{/* Divisor */}</ListItem>
                <Comentarios/>
                <br/><br/><br/><br/><br/>
            </div>
        </div>
    )
}

// Exporta
export default Sobre;