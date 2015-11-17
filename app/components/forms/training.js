import React from 'react';
import Router from 'react-router';
import RouteHooks from '../../utils/route-hooks';

import Input from '../inputs/input';
import Select from '../inputs/select';
import SelectInfo from '../inputs/select-info';

import { Strings } from '../../constants';
import { getFormData } from '../../common/utils';
import { isFormFullFilled } from '../../common/utils';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation, RouteHooks.Private ],

  getInitialState (){
    return {
      exercise: {},
      daysOfWeek: ' ',
      sports: [],
      goals: ' ',
      timePerDay: ' ',
    };
  },

  onRegister (){
    const validForm = isFormFullFilled(this.refs);
    if(!validForm){
      return alert('Todos os campos devem estar preenchidos.');
    }
    this.transitionTo('calendar', { userId: '5602d54c233ea33a495139a1' });
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
          <h5>{Strings.Messages.trainingFirst}</h5>
        </div>
        <div className='details'>
          <div className="container">
            <div className="row">
              <Select
                ref="exercise"
                field="exercise"
                value=' '
                options={Strings.Forms.training.exercise.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.training.exercise.label}
                col="s12 m6"
                labelActiveClass="active"/>
            </div>
            <div className="row">
              <Select
                ref="sports"
                field="sports"
                value={[]}
                options={Strings.Forms.training.sports.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.training.sports.label}
                col="s12"
                multi={true}
                labelActiveClass="active"
                placeholder=" "/>
            </div>
            <div className="row">
              <Select
                ref="goals"
                field="goals"
                value={[]}
                options={Strings.Forms.training.goals.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.training.goals.label}
                col="s12"
                multi={true}
                labelActiveClass="active"
                placeholder=" "/>
            </div>
            <div className="row">
              <Select
                ref="daysOfWeek"
                field="daysOfWeek"
                value={[]}
                options={Strings.Forms.training.daysOfWeek.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.training.daysOfWeek.label}
                col="s12"
                multi={true}
                labelActiveClass="active"
                placeholder=" "/>
            </div>
            <div className="row">
              <Select
                ref="timePerDay"
                field="timePerDay"
                value=' '
                options={Strings.Forms.training.timePerDay.options}
                clearable={false}
                searchable={false}
                label={Strings.Forms.training.timePerDay.label}
                col="s12 m6"
                labelActiveClass="active"/>
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
