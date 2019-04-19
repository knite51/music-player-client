import Api from './Api';

export default {
  registerUser: credentials => {
    return Api()
      .post('/api/users/register', credentials)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err.response.data.error));
  },
  loginUser: credentials => {
    return Api()
      .post('/api/users/login', credentials)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err.response.data.error));
  }
};
