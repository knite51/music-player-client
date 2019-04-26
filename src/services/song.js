import Api from './Api';

export default {
  createSong: credentials => {
    return Api()
      .post('/api/songs/create', credentials)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err.response.data.error));
  },
  getSong: songID => {
    return Api()
      .get(`/api/songs/${songID}`)
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err.response.data.error));
  },
  getAllSongs: () => {
    return Api()
      .get('/api/songs/allSongs')
      .then(res => Promise.resolve(res.data))
      .catch(err => Promise.reject(err.response.data.error));
  }
};
