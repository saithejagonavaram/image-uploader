

import { HOST_URL } from '../utils/constants';

const axios = require('axios');

export const get = async (serviceURL,headers={} ) => {

    let URL = HOST_URL + serviceURL;

    let appendedHeaders =  {
        'content' : 'application/json',
        ...headers
    }

    let response = await axios.get(URL);
    console.log('respone',response);
    return response.data;

}