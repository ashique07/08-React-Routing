import axios from 'axios';

const instance = axios.create({

    baseURL : "https://jsonplaceholder.typicode.com"

});

instance.defaults.headers.common["Authorization"] = "Authorization Token from INSTANCE";

export default instance;