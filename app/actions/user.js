import Dispatcher from '../dispatcher';
import Events from '../constants/events';

import { users } from '../api';


export default {
  async login (email, password){
    const data = await users.login(email, password);
    Dispatcher.dispatch(Events.USER_LOG_IN, data);
    return data.user;
  },

  async getByToken (token){
    const user = await users.getByToken(token);
    Dispatcher.dispatch(Events.USER_BY_TOKEN, user);
    return user;
  },

  async create (user){
    const data = await users.create(user);
    Dispatcher.dispatch(Events.USER_LOG_IN, data);
    return data.user;
  }
}
