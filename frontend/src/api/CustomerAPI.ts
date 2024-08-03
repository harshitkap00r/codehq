import axios from 'axios';

const CustomerAPI = {
  getCustomer: (customerId: number) => {
    return axios.get(`https://example.com/customers/${customerId}`);
  },
};

export default CustomerAPI;