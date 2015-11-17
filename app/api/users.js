import axios from 'axios';
import { respondWithData } from './helpers';

export default class Users {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  create(data) {
    return axios({
      url: `${this.baseUrl}/v1/users`,
      method: 'POST',
      data: data
    }).then(respondWithData);
  }

  login(email, password){
    return axios({
      url: `${this.baseUrl}/v1/auth`,
      method: 'POST',
      data: {email: email, password: password}
    }).then(respondWithData);
  }

  getByToken(token){
    return axios({
      url: `${this.baseUrl}/v1/auth`,
      headers: {'x-access-token': token},
      method: 'GET',
    }).then(respondWithData);
  }
}

