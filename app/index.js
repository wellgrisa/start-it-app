import React from 'react';
import Router from 'react-router';
import routes from './routes';

import './styles/index';

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
