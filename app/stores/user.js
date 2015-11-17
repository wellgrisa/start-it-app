import Dispatcher from '../dispatcher';
import { EventEmitter } from 'events';
import Events from '../constants/events';

const CHANGE_EVENT = 'change';

let state = {
  token: localStorage.token
}

function setState(obj){
  state = obj;
  localStorage.setItem('token', obj.token);
}

function setUser(user){
  state.user = user;
}

const User = {

  ...EventEmitter.prototype,

  getState () {
    return state;
  },

  emitChange () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

};

// Register callback to handle all updates
Dispatcher.register(function(action) {

  switch(action.actionType) {
    case Events.USER_LOG_IN:
      setState(action.data);
      User.emitChange();
      break;

    case Events.USER_LOG_OUT:
      setState(null);
      User.emitChange();
      break;

    case Events.USER_REQUEST_FAIL:
      setState(action.data);
      User.emitChange();
      break;

    case Events.USER_BY_TOKEN:
      setUser(action.data);
      User.emitChange();
      break;
  }
});

export default User;
