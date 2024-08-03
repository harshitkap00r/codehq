import axios from 'axios';

const CustomerListAPI = {
  getCustomers: () => {
    return axios.get('http://localhost:5000/api/customers');
  },
};

export default CustomerListAPI;