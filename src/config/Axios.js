import axios from 'axios';

export default instance = axios.create({
    baseURL: 'https://amqpgz2wi7.execute-api.us-east-1.amazonaws.com/dev/',
    headers: {'content-type': 'application/json'}
});