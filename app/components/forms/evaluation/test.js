import React from 'react';
import Router from 'react-router';
import Input from '../../inputs/input';

import { Strings } from '../../../constants';
import { isFormFullFilled } from '../../../common/utils';
import { getFormData } from '../../../common/utils';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  onRegister (){
    const validForm = isFormFullFilled(this.refs);
    if(!validForm){
      return alert('Todos os campos devem estar preenchidos.');
    }
    this.transitionTo('training', { userId: '5602d54c233ea33a495139a1' });
  },

  render () {
    return <div>
      <div className="row">
        <div className="row header-message">
          <h5>{Strings.Forms.evaluation.test.title}</h5>
        </div>
        <div className="details body-measures">
          <div className="row text-center">
            <h5 className="gray-label"> {Strings.Forms.evaluation.test.header} </h5>
          </div>
          <div className="row">
            <Input
              ref="distance"
              field="distance"
              type="number"
              step="any"
              min="0"
              label={Strings.Forms.evaluation.test.label}
              col="s12 m6"
              placeholder=""
              labelActiveClass="active"/>
          </div>
          <div className="row">
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 left" onClick={this.onEvaluate}>Avaliar</button>
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 right" onClick={this.onRegister}>Próximo</button>
          </div>
        </div>
      </div>
    </div>
  }
});


