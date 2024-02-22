
const AddressDelivry = ({item}) => {
    
    // Check if 'item' or 'item.state' is undefined before accessing properties
    if (!item || !item.state) {
      return <div>Loading...</div>; // or any other placeholder or loading indicator
    }
  
    return (
      <div className="mt-3 text-left p-2 border rounded m-2 cursor-pointer hover:border-slate-600">
          <h3 className="uppercase">{item.lastName}</h3>
          <address>{item.state}</address>
          <div className="flex justify-items-center">
            Phone Number :
            {item.mobile}
          </div>
      </div>
    );
  };
  
  export default AddressDelivry;
  