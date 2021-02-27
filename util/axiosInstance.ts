import axios from "axios";
// change local host

//TODO make this axios.default ; much easier to access  :) #refractor
const instance = axios.create({
  baseURL: " http://localhost:3000/",
  headers: {
    "content-type": "application/json",
  },
});

// instance.defaults.headers.common['cookie'] = 'value' // for all requests
export default instance;
