import React from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation],

  render () {
    return (
      <div className='home'>
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});
