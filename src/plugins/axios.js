import axios from "axios";

export default () => {
  axios.defaults.baseURL = 'https://www.cbr-xml-daily.ru/'
  return axios  
}