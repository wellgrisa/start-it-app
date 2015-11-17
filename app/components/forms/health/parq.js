import React from 'react';
import Router from 'react-router';
import SelectInfo from '../../inputs/select-info';

import { Strings } from '../../../constants';
import { isFormFullFilled } from '../../../common/utils';

import UserStore from '../../../stores/user';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  getInitialState (){
    return {
      form: {...mountParqState() },
      user: UserStore.getState().user
    };
  },

  componentDidMount () {
    UserStore.addChangeListener(this._setUser);
  },

  componentWillUnmount () {
    UserStore.removeChangeListener(this._setUser);
  },

  _setUser (){
    this.setState({user: UserStore.getState().user});
  },

  onChange (value, id){
    let nextState = this.state.form;
    nextState[id] = value;
    this.setState(nextState);
  },

  onRegister (){
    const validForm = isFormFullFilled(this.refs);
    if(!validForm){
      return alert('Todos os campos devem estar preenchidos.');
    }
    this.transitionTo('weight', { userId: this.state.user._id });
  },

  render () {
    return <div>
          <div className="row">
            <div className="health-details">
              {
                Strings.Forms.health.parq.fields.map((field) => {
                  const info = {
                    field: 'info',
                    value: '',
                    label: field.info
                  };

                  return <SelectInfo
                    key={field.id}
                    ref={field.id}
                    field={`${field.id}`}
                    value={this.state.form[field.id].value}
                    options={field.options}
                    clearable={false}
                    searchable={true}
                    label={field.label}
                    col="s12 m12 l6"
                    onChange={this.onChange}
                    info={info}
                    additionalClass="padding-horizontal-0 margin-35"/>
                })
              }
            </div>
          </div>
          <div className="row right">
            <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1" onClick={this.onRegister}>Próximo</button>
          </div>
        </div>;
  }
});

function mountParqState (){
  return Strings.Forms.health.parq.fields.map((field) => {
    return { value: field.options[0].value };
  });
}
