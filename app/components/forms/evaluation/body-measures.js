import React from 'react';
import Router from 'react-router';
import Input from '../../inputs/input';

import { Strings } from '../../../constants';
import { isFormFullFilled } from '../../../common/utils';
import { getFormData } from '../../../common/utils';

import image from '../../../img/female.png';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  getInitialState: function() {
    return {
      waist: '' ,
      hip: ''
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
    this.transitionTo('test', { userId: '5602d54c233ea33a495139a1' });
  },

  render () {
    return <div>
        <div className="row header-message">
          <h5>{Strings.Forms.evaluation.RCQ.label}</h5>
        </div>
        <div className="details body-measures">
          <div className="row text-center">
            <img src={image} alt="Medidas da cintura e quadril" className="img-responsive"/>
          </div>
          <div className="row">
            <Input
              ref="waist"
              field="waist"
              type="number"
              step="any"
              min="0"
              label={Strings.Forms.evaluation.waist}
              col="s12 m6"
              placeholder=""
              labelActiveClass="active"/>
            <Input
              ref="hip"
              field="hip"
              type="number"
              step="any"
              min="0"
              label={Strings.Forms.evaluation.hip}
              col="s12 m6"
              placeholder=""
              labelActiveClass="active"/>
          </div>
          <div className="row text-center">
            { getRCQResult(this.state.waist, this.state.hip) }
          </div>
          <div className="row">
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 left" onClick={this.onEvaluate}>Avaliar</button>
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1 right" onClick={this.onRegister}>Próximo</button>
          </div>
        </div>
    </div>
  }
});

function getRCQResult(waist, hip){
  if(!waist || !hip){
    return <h5 className="gray-label"> Preencha os campos acima e clique em avaliar. </h5>;
  }
  const rcq = waist/hip;
  const result = Strings.Forms.evaluation.RCQ.result('F', rcq.toFixed(2));
  return <h5 className={result.className}> {result.text} </h5>;
}
