import React from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';
import logo from '../img/logo.gif';
import Favicon from 'react-favicon';
import MainNavBar from '../components/main-navbar';

export default React.createClass({
  mixins: [ Router.Navigation, Router.State ],

  render: function () {

    return (
      <div>
        <Favicon url={[logo]}/>
        <div id="content-wrapper" className="app">
          <MainNavBar />
          <RouteHandler />
        </div>
      </div>
    );
  }
});
