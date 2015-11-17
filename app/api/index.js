import Users from './users';
import config from '../env/config';

if (!config || !config.pratikiServiceUrl ) {
  console.warn('Missing Service url');
}

export default {
  users: new Users(config.pratikiServiceUrl)  
};
