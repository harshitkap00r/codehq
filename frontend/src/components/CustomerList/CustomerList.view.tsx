import React, { useEffect } from 'react';
import { CustomerListModel } from './CustomerList.model';
import CustomerListController from './CustomerList.controller';
import './CustomerList.style.css';

const CustomerListView = ({ handleCustomerClick, selectedCustomer }: {handleCustomerClick: any, selectedCustomer: any}) => {
  const { customers, fetchCustomerList } = CustomerListController();

  useEffect(() => {
    fetchCustomerList();
  }, [])

  return (
    <div className='customerList'>
      <div className='customerList-wrapper'>
        {customers.map((customer: CustomerListModel, index: number) => (
          <React.Fragment key={customer._id}>
            <div className='customerList-item' data-selected={selectedCustomer?._id === customer?._id && true} key={customer._id} onClick={() => handleCustomerClick(customer)}>
              <div className='customerList-itemName'>{customer.name}</div>
              <div className='customerList-itemTitle'>{customer.title}</div>
            </div>
            {index < customers.length - 1 && <div className='customerList-divider'></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CustomerListView;