import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './containers/app';
import Site from './views/site';
import Base from './containers/base';

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="base" path="/:userId" handler={Base} />
    <DefaultRoute name="site" handler={Site}/>
  </Route>
);
