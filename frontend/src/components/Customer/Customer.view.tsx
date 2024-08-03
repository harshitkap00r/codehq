import { useEffect, useState } from "react";
import { CustomerListModel } from "../CustomerList/CustomerList.model";
import PhotoGridView from "../PhotoGrid/PhotoGrid.view";
import './Customer.style.css';

const CustomerView = ({ selectedCustomer }: { selectedCustomer: CustomerListModel | undefined }) => {

  const [photoGridKey, setPhotoGridKey] = useState<number>(0);

  useEffect(() => {
    setPhotoGridKey(prevKey => prevKey + 1);
  }, [selectedCustomer]);


  return (
    <div className="customer">
      {!selectedCustomer ? (
        <div className="customer-notFound">No customer found/selected</div>
      ) : (
        <>
          <div className="customer-name">{`${selectedCustomer.name} details here`}</div>
          <div className="customer-title">{selectedCustomer.title}</div>
          <PhotoGridView key={photoGridKey} />
        </>
      )}
    </div>
  );
};

export default CustomerView;