// import CustomerView from '../Customer/Customer.view';
import { useState } from 'react';
import { CustomerListModel } from '../CustomerList/CustomerList.model';
import CustomerListView from '../CustomerList/CustomerList.view';
import './Dashboard.style.css';
import CustomerView from '../Customer/Customer.view';

const DashboardView = () => {

  const [selectedCustomer, setSelectedCustomer] = useState<CustomerListModel | undefined>(undefined);


  const handleCustomerClick = (customer: CustomerListModel) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className='Dashboard'>
      <CustomerListView handleCustomerClick={handleCustomerClick} selectedCustomer={selectedCustomer} />
      <CustomerView selectedCustomer={selectedCustomer} />
    </div>
  );
};

export default DashboardView;