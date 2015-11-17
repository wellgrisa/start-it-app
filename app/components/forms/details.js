import React from 'react';
import Router from 'react-router';
import RouteHooks from '../../utils/route-hooks';

import Input from '../inputs/input';
import DatePicker from '../inputs/date';
import Select from '../inputs/select';
import SelectInfo from '../inputs/select-info';

import { address } from '../../api';
import { Strings } from '../../constants';
import { getFormData } from '../../common/utils';
import { isFormFullFilled } from '../../common/utils';

import UserStore from '../../stores/user';
import UserActions from '../../actions/user';


export default React.createClass({
  mixins: [ Router.State, Router.Navigation, RouteHooks.Private ],

  getInitialState (){
    return {
      state: ' ',
      city: ' ',
      cities: [],
      gender: ' ',
      sleep_hours: ' ',
      smoke: Strings.Forms.smoke.options[0].value,
      alcoholic_drinks: Strings.Forms.alcoholic_drinks.options[0].value,
      drugs: Strings.Forms.drugs.options[0].value,
      user : UserStore.getState().user
    };
  },

  onRegister (){
    const payload = getFormData(this.refs);
    const validForm = isFormFullFilled(this.refs);
    if(!validForm){
      return alert('Todos os campos devem estar preenchidos.');
    }
    this.transitionTo('health', { userId: this.state.user._id });
  },

  async onChange (value, item){
    let nextState = getFormData(this.refs);
    nextState.state = value;
    const cities = await address.listCities(value);
    nextState.cities = cities.map(city => {
      return {
        value: city, label: city
      };
    });
    this.setState(nextState);
  },

  listStates (input, callback) {
    address.listStates()
    .then(states => {
      return states.map(state => {
        return {
          value: state, label: state
        };
      })
    })
    .then(states => {
      callback(null, {
        options: states,
        complete: true
      });
    });
  },

  render () {
    const info = {
      field: 'info',
      value: '',
      label: Strings.Forms.drugs.info
    };
    return (
      <div>
        <div className="row header-message">
          <h5>Bem-vindo {this.state.user.name} {this.state.user.surname}. {Strings.Messages.homeFirst}</h5>
        </div>
        <div className='details'>
          <div className="container">
            <div className="row">
              <Input
                ref="cpf"
                field="cpf"
                type="number"
                label={Strings.Forms.cpf}
                col="s6"
                placeholder=""
                labelActiveClass="active"/>
              <DatePicker
                ref="birth_date"
                field="birth_date"
                label={ Strings.Forms.birth_date }
                col="s4"
                placeholder=""
                labelActiveClass="active"/>
              <Select
                additionalClass="gender"
                ref="gender"
                field="gender"
                value={this.state.gender}
                options={Strings.Forms.gender.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.gender.label}
                col="s2"/>
            </div>
            <div className="row">
              <Input
                ref="phone"
                field="phone"
                type="number"
                label={Strings.Forms.phone.label}
                col="s4"
                placeholder={Strings.Forms.phone.placeholder}
                labelActiveClass="active"/>
              <Select
                ref="state"
                field="state"
                value={this.state.state}
                asyncOptions={this.listStates}
                clearable={false}
                searchable={true}
                label={Strings.Forms.cep.state}
                col="s3"
                onChange={this.onChange}/>
              <Select
                ref="city"
                field="city"
                value={this.state.city}
                options={this.state.cities}
                clearable={false}
                searchable={true}
                label={Strings.Forms.cep.city}
                col="s5"/>
            </div>
            <div className="row">
              <Input
                ref="height"
                field="height"
                type="number"
                label={Strings.Forms.height}
                col="s4"
                step="any"
                min="0"
                placeholder=""
                labelActiveClass="active"/>
              <Select
                ref="sleep_hours"
                field="sleep_hours"
                value={this.state.sleep_hours}
                options={Strings.Forms.sleep_hours.options}
                clearable={false}
                searchable={true}
                label={Strings.Forms.sleep_hours.label}
                col="s3"/>
            </div>
            <div className="row">
              <Select
                ref="smoke"
                field="smoke"
                value={this.state.smoke}
                options={Strings.Forms.smoke.options}
                clearable={false}
                searchable={true}
                label={Strings.Forms.smoke.label}
                col="s4"/>
              <Select
                ref="alcoholic_drinks"
                field="alcoholic_drinks"
                value={this.state.alcoholic_drinks}
                options={Strings.Forms.alcoholic_drinks.options}
                clearable={false}
                searchable={true}
                label={Strings.Forms.alcoholic_drinks.label}
                col="s4"/>
              <SelectInfo
                ref="drugs"
                field="drugs"
                value={this.state.drugs}
                options={Strings.Forms.drugs.options}
                clearable={false}
                searchable={true}
                label={Strings.Forms.drugs.label}
                col="s4"
                info={info}/>
            </div>
            <div className="row right">
              <button href="#" id="download-button" className="btn-large waves-effect waves-light teal lighten-1" onClick={this.onRegister}>Próximo</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
