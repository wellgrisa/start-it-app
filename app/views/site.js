import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

import logo from '../img/logo.png';
import backgroundImg from '../img/step1.png';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation],

  render () {
    return (<div className='site'>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m12">
              <div className="icon-block">
                <h2 className="center"><i className="fa fa-heartbeat"></i></h2>
                <h5 className="center">Pratiki conosco</h5>
                <p className="light center">Qual seu objetivo como atleta? Cuidar da saúde, melhorar índices ou curtir com amigos...</p>
                <p className="light">A Pratiki possui um sistema de personal trainer online que cria o treinamento perfeito para você e acompanha suas atividades, ajudando a atingir seus objetivos. Assim como ajuda a gerenciar atividades em grupo junto à natureza: trilha, surf, ciclismo, rafting, SUP e outros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <div className="container">
          Qualquer dúvida contate-nos através do email <a className="brown-text text-lighten-3" href="#">contact@pratiki.com.br</a>
        </div>
      </footer>
    </div>);
  }
});
