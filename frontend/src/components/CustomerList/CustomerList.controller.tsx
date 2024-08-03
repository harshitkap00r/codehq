import { useState, SetStateAction } from 'react';
import { CustomerListModel } from './CustomerList.model';
import CustomerListAPI from '../../api/CustomerListAPI';

const CustomerListController = () => {
  const [customers, setCustomers] = useState<CustomerListModel[]>([]);

  const fetchCustomerList = () => {
    CustomerListAPI.getCustomers().then((response: { data: SetStateAction<CustomerListModel[]>; }) => {
      setCustomers(response.data);
    });
  } 

  return {
    customers,
    fetchCustomerList,
  };
};

export default CustomerListController;