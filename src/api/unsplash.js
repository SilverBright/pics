import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6dadb56b33f6d7905ff1407f62562c4f8f1568382303545a76475962bdb3ec82'
  }
});