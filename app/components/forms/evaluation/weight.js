import React from 'react';
import Router from 'react-router';
import Input from '../../inputs/input';

import { Strings } from '../../../constants';
import { isFormFullFilled } from '../../../common/utils';
import { getFormData } from '../../../common/utils';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  getInitialState () {
    return {
      currentWeight : '',
      idealWeight   : ''
    };
  },

  onEvaluate (){
    if(!isFormFullFilled(this.refs))
    {
      return alert('Todos os campos devem estar preenchidos.');
    }
    const nextState = getFormData(this.refs);
    this.setState(nextState);
  },

  onRegister (){
    if(!isFormFullFilled(this.refs)){
      return alert('Todos os campos devem estar preenchidos.');
    }
    this.transitionTo('body-measures', { userId: '5602d54c233ea33a495139a1' });
  },

  render () {
    return (
      <div>
        <div className="row header-message">
          <h5>{Strings.Forms.evaluation.IMC.label}</h5>
        </div>
        <div className="details">
          <div className="row">
            <Input
              ref="idealWeight"
              field="idealWeight"
              type="number"
              step="any"
              min="0"
              label={Strings.Forms.evaluation.idealWeight}
              col="s12 m6"
              placeholder=""
              labelActiveClass="active"/>
            <Input
              ref="currentWeight"
              field="currentWeight"
              type="number"
              step="any"
              min="0"
              label={Strings.Forms.evaluation.currentWeight}
              col="s12 m6"
              placeholder=""
              labelActiveClass="active"/>
          </div>
          <div className="row text-center">
            { getIMCResult(this.state.currentWeight, 1.82) }
          </div>
          <div className="row">
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 left" onClick={this.onEvaluate}>Avaliar</button>
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 right" onClick={this.onRegister}>Próximo</button>
          </div>
        </div>
      </div>
    );
  }
});

function getIMCResult(weight, height){
  if(!weight){
    return <h5 className="gray-label"> Preencha os campos acima e clique em avaliar. </h5>;
  }
  const imc = weight/(height*height);
  const result = Strings.Forms.evaluation.IMC.result(imc.toFixed(2));
  return <h5 className={result.className}> {result.text} </h5>;
}


