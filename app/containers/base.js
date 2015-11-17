import React from 'react';
import Router from 'react-router';
import RouteHooks from '../utils/route-hooks';

import { RouteHandler, Link } from 'react-router';
import { Strings } from '../constants';

// import UserStore from '../stores/user';

export default React.createClass({
  mixins: [ Router.Navigation, Router.State, RouteHooks.Private ],

  getInitialState: function() {
    return {
      user  :  { _id : '123'},
      home  : 'active',
      health  : '',
      evaluation  : '',
      training  : '',
      calendar  : '',
    };
  },

  componentDidMount () {
    const path = this.getPath().split('/')[2];
    this.activeMenu(path, null);
  },

  activeMenu (path){
    let state = this.state;
    for(let key in state){
      if(key !== path && state[key] === 'active'){
        state[key] = '';
      }
      if(key === path){
        state[key] = 'active';
      }
    }
    this.setState(state);
  },

  render: function () {

    return (
      <div className="base">
        <div id="menu-navbar" className="navbar-fixed">
          <nav className="purple" role="navigation">
            <div className="nav-wrapper container">
              <div className="center">
                <ul className="hide-on-med-and-down">
                  <li className={this.state.home} ><Link to="home" params={{userId: this.state.user._id}} onClick={this.activeMenu.bind(this, 'home')}>{Strings.Menu.home}</Link></li>
                </ul>
                <ul className="hide-on-med-and-down">
                  <li className={this.state.health} ><Link to="health-form" params={{userId: this.state.user._id}} onClick={this.activeMenu.bind(this, 'health')}>{Strings.Menu.health}</Link></li>
                </ul>
                <ul className="hide-on-med-and-down">
                  <li className={this.state.evaluation}><Link to="evaluation-form" params={{userId: this.state.user._id}} onClick={this.activeMenu.bind(this, 'evaluation')}>{Strings.Menu.evaluation}</Link></li>
                </ul>
                <ul className="hide-on-med-and-down">
                  <li className={this.state.training}><Link to="training" params={{userId: this.state.user._id}} onClick={this.activeMenu.bind(this, 'training')} >{Strings.Menu.training}</Link></li>
                </ul>
                <ul className="hide-on-med-and-down">
                  <li className={this.state.calendar}><Link to="calendar" params={{userId: this.state.user._id}} onClick={this.activeMenu.bind(this, 'calendar')}>{Strings.Menu.calendar}</Link></li>
                </ul>
              </div>
              <ul id="nav-mobile" className="side-nav">
                <li className="active"><Link to="home" params={{userId: this.state.user._id}} >{Strings.Menu.home}</Link></li>
                <li><Link to="health-form" params={{userId: this.state.user._id}} >{Strings.Menu.health}</Link></li>
                <li><Link to="evaluation-form" params={{userId: this.state.user._id}} >{Strings.Menu.evaluation}</Link></li>
                <li><Link to="training" params={{userId: this.state.user._id}} >{Strings.Menu.training}</Link></li>
                <li><Link to="calendar" params={{userId: this.state.user._id}} >{Strings.Menu.calendar}</Link></li>
              </ul>
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
          </nav>
        </div>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});
