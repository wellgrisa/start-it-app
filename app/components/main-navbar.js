import React from 'react';
import Router from 'react-router';
import { Link } from 'react-router';
import { Strings } from '../constants';

import Input from '../components/inputs/input';
import { getFormData } from '../common/utils';

import logo from '../img/logo.png';

// import UserStore from '../stores/user';
// import UserActions from '../actions/user';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation],

  async onLogin (){
    const payload = getFormData(this.refs);

    try{
      const user = await UserActions.login(payload.email.trim(), payload.password.trim());

      this.setState(user);
      this.transitionTo('home', { userId: user._id });
    }
    catch(e){
      return alert('Email ou senha inválido!');
    }
  },

  async onLogout(e){
    e.preventDefault();
  },

  openModal (){
    $(this.refs.login.getDOMNode()).openModal();
  },

  render () {

    let page = <Login className="right hide-on-med-and-down" onClick={this.openModal} />;
    let mobile = <Login id="nav-mobile" className="side-nav" onClick={this.openModal} />;
    // if(UserStore.getState().user){
    //   mobile = <User id="nav-mobile" className="side-nav" onClick={this.onLogout}/>;
    //   page = <User className="right hide-on-med-and-down" onClick={this.onLogout}/>;
    // }

    return (
      <div className='site'>
        <div ref="login" id="login" className="modal">
          <div className="modal-content">
            <h5>Login</h5>
            <div className="row">
              <Input ref="email" field="email" type="email" label={Strings.Forms.email} col="s12"/>
              <Input ref="password" field="password" type="password" label={Strings.Forms.password} col="s12"/>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#" className="modal-action modal-close waves-effect waves-purple btn-flat" onClick={this.onLogin}>Fazer login</a>
          </div>
        </div>

        <div className="navbar-fixed" id="main-navbar">
          <nav className="white" role="navigation">
            <div className="nav-wrapper container">
              <a id="logo-container" href="#" className="brand-logo"><img src={logo} alt="Pratiki" /></a>
                {page}
                {mobile}
              <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});


const Login = React.createClass({
  render () {
    return <ul id={this.props.id} className={this.props.className}>
      <li><a className="modal-trigger" href="#" onClick={this.props.onClick}>{Strings.Buttons.login}</a></li>
    </ul>;
  }
});


const User = React.createClass({
  render() {
    return <ul id={this.props.id} className={this.props.className}>
      <li className="no-hover gray-label">'{UserStore.getState().user.name} {UserStore.getState().user.surname}'</li>
      <li>
        <a className="modal-trigger" href="#" onClick={this.props.onClick}>
          {Strings.Buttons.logout}
        </a>
      </li>
    </ul>
  }
});
