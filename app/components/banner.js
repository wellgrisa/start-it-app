import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import { users } from '../api';
import { getFormData } from '../common/utils';
import { trainingGroups } from '../api';

import Strings from '../constants/strings';
import Input from '../components/inputs/input';
import Select from '../components/inputs/select';

import logo from '../img/logo.png';
import backgroundImg from '../img/step1.png';

import UserActions from '../actions/user';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation],

  getInitialState () {
    return {
      name : '',
      surname : '',
      email: '',
      password: '',
      training_group: '',
      code: '',
    };
  },

  onChange (value, item){
    let nextState = getFormData(this.refs);
    nextState.code = item.label;
    this.setState(nextState);
  },

  listTrainingGroups (input, callback) {
    trainingGroups.list()
    .then(groups => {
      return groups.map(group => {
        return {
          value: group._id, label: group.name
        };
      })
    })
    .then(groups => {
      callback(null, {
        options: groups,
        complete: true
      });
    });
  },

  renderInputCode (){
    if(!this.state.code)
      return;

    let label = Strings.Forms.code.oab;
    if(this.state.code !== 'OAB SC'){
      label = Strings.Forms.code.cpf;
    }

    return <Input ref="code" field="code" type="number" label={label} col="s6"/>;

  },

  async onRegister (){
    let payload = getFormData(this.refs);
    try{
      const user = await UserActions.create(payload);

      alert(Strings.Messages.createSuccess);
    }
    catch(e){
      return alert(e);
    }
  },

  render () {
    return (
      <div className='site'>
        <div id="cadastrar" className="modal">
          <div className="modal-content">
            <h5>Cadastrar
            </h5>
            <div className="row">
              <Input ref="name" field="name" type="text" label={Strings.Forms.name} col="s6"/>
              <Input ref="surname" field="surname" type="text" label={Strings.Forms.surname} col="s6"/>
              <Input ref="email" field="email" type="email" label={Strings.Forms.email} col="s12 m8"/>
              <Input ref="password" field="password" type="password" label={Strings.Forms.password} col="s12 m4"/>
              <Select
                ref="training_group"
                field="training_group"
                value=" "
                asyncOptions={this.listTrainingGroups}
                clearable={false}
                searchable={true}
                label={Strings.Forms.training_group}
                col="s6"
                onChange={this.onChange}
              />
              { this.renderInputCode() }
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-action modal-close waves-effect waves-purple btn-flat" onClick={this.onRegister}>Fazer cadastro</a>
          </div>
        </div>

        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <div className="row center">
                <h4 className="header col s12">Treinamento personalizado especializado em caminhada, corrida, natação e ciclismo</h4>
              </div>
              <div className="row center">
                <a href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1" onClick={()=>{$('#cadastrar').openModal()}}>Cadastrar</a>
              </div>
            </div>
          </div>
          <div className="parallax"><img src={backgroundImg} alt="Mist sunny running" /></div>
        </div>
      </div>
    );
  }
});
