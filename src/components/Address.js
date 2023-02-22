const Address = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-5 m-5 rounded-sm">
      <h1 className="font-bold p-2 ">Billing Address</h1>
      <label className=" p-2 ">
        <input
          className="bg-white checked:bg-orange-500 text-orange-500"
          type="checkbox"
        />{' '}
        Same as Home Address
      </label>
      <div className="flex">
        <div className="flex p-2 m-2 flex-col justify-between py-1">
          <p className="pr-2">First Name:</p>
          <input
            className="border w-52 border-gray-300 rounded-sm"
            type="text"
          />
          <p className="pr-2">Address line 1:</p>
          <input
            className="border w-52 border-gray-300 rounded-sm"
            type="text"
          />
          <div className="flex">
            <div className="flex flex-col pr-2 ">
              <label for="country">Country</label>
              <select name="country" id="country">
                <option value="India">India</option>
                <option value="US">US</option>
              </select>
            </div>
            <div className="flex flex-col pr-2">
              <label for="state">State</label>
              <select name="state" id="state">
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex p-2 m-2 flex-col justify-between py-1">
          <p className="pr-2">Last Name:</p>
          <input
            className="border w-52 border-gray-300 rounded-sm"
            type="text"
          />
          <p className="pr-2">Address line 2:</p>
          <input
            className="border w-52 border-gray-300 rounded-sm"
            type="text"
          />
          <div className="flex">
            <div className="flex flex-col pr-2">
              <p className="pr-2">City:</p>
              <input
                className="border w-24 border-gray-300 rounded-sm"
                type="text"
              />
            </div>
            <div className="flex flex-col pr-2">
              <p className="pr-2">Zip Code:</p>
              <input
                className="border w-24 border-gray-300 rounded-sm"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="text-white my-1 bg-gray-700 px-2 py-1 rounded-sm w-36 ">
        Edit Details
      </button>
    </div>
  );
};

export default Address;
