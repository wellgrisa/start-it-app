import React from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';

import { Strings } from '../../constants';

export default React.createClass({
  mixins: [ Router.State, Router.Navigation ],

  render () {
    return <div>
        <div className="row header-message">
          <h5>{Strings.Messages.evaluationFirst}</h5>
        </div>
        <div className="container">
          <RouteHandler {...this.props}/>
        </div>
      </div>
  }
});


