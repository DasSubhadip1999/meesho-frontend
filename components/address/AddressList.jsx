import AddressListItem from "./AddressListItem";

const AddressList = ({ addresses }) => {
  //console.log(addresses);
  return (
    <div>
      {addresses.map((address) => (
        <AddressListItem key={address._id} address={address} />
      ))}
    </div>
  );
};

export default AddressList;
