// api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'; // Replace with your API base URL

const callApi = async (endpoint, method = 'GET', header, data = null, params = null ) => {
  const url = `${BASE_URL}/${endpoint}`;
     
  try {
    const response = await axios({
      method,
      url,
      headers: header,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to call API: ${error.message}`);
  }
};

export default callApi;
