import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 7fdb4947c7da3e3dd4b93814e0841927b0a9db154aaddc2107279ee91ba492af'
  }
});