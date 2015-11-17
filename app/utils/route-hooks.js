import UserStore from '../stores/user';
import UserActions from '../actions/user';
import { users } from '../api';

export default {
  Login: {
    statics: {
      willTransitionTo (transition, params, query, done) {
        console.log('Login');
      },

      willTransitionFrom: function (transition, component, done) {
        console.log('Login');
      }
    }
  },

  Private: {
    statics: {
      async willTransitionTo (transition, params, query, done) {
        const data = UserStore.getState();
        if(data.user){
          return done();
        }

        if(data.token){
          try{
            await UserActions.getByToken(data.token);
            return done();
          }
          catch(e){
            console.log('Error', e);
          }
        }

        transition.redirect('/');
        return done();
      }
    }
  }
};


function isAtLoginScreen (transition) {
  return /^\/(\?nextPath.*)?$/.test(transition.path);
}


function redirectToHomeScreen (transition) {
  transition.redirect('home');
}


function redirectToLoginScreen (transition) {
  //transition.redirect('/', {}, { 'nextPath' : transition.path });
  transition.redirect('/');
}

function menuHighlightAction (transition){
  var item = transition.path.match(/[^\/]+/g)[0];
  MenuActions.highlight(item);
}
