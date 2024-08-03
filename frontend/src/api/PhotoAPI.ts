import axios from 'axios';

const PhotoAPI = {
  getPhotos: () => {
    return axios.get('https://picsum.photos/200');
  },
};

export default PhotoAPI;