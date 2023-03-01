import { useState } from 'react';

const Address = () => {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="bg-gray-100 p-5 lg:m-0 md:p-0 m-5 rounded-sm">
      <div className="flex flex-col  md:py-5 md:px-1 md:m-0 lg:p-5 lg:space-y-5">
        <div className="mb:hidden sm:hidden  md:flex md:justify-between">
          <h1 className="font-bold p-2 lg:p-0 lg:m-0">Billing Address</h1>
          <div className="block text-end lg:hidden">
            {isClicked ? (
              <button
                className="text-white mt-1 bg-[#232E3E] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36"
                onClick={() => {
                  setIsClicked(false);
                }}
              >
                Edit Details
              </button>
            ) : (
              <button
                className="text-white mt-1 bg-[#0C611A] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36"
                onClick={() => {
                  setIsClicked(true);
                }}
              >
                Save
              </button>
            )}
          </div>
        </div>
        <label className=" p-2 lg:p-0 lg:m-0">
          <input
            className="bg-white checked:bg-orange-500 text-orange-500"
            type="checkbox"
          />{' '}
          Same as Home Address
        </label>
        <div className="flex md:justify-between">
          <div className="flex p-2 m-2 flex-col justify-between py-1 lg:p-0 lg:mr-10 lg:my-0 lg:ml-0 lg:w-1/2 md:space-x-0 md:p-0 md:m-0">
            <p className="pr-2">First Name:</p>
            <input className="w-52 lg:w-full md:w-40 rounded-sm" type="text" />
            <p className="pr-2">Address line 1:</p>
            <input className="w-52 lg:w-full md:w-40 rounded-sm" type="text" />
            <div className="flex ">
              <div className="flex flex-col pr-2 lg:w-1/2 md:p-1">
                <label for="country">Country:</label>
                <select name="country" id="country">
                  <option value="India">India</option>
                  <option value="US">US</option>
                </select>
              </div>
              <div className="flex flex-col pr-2 lg:w-1/2 md:p-1">
                <label for="state">State:</label>
                <select name="state" id="state">
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex p-2 m-2 flex-col justify-between py-1 lg:p-0  lg:my-0 lg:ml-0 lg:w-1/2  md:space-x-0 md:py-0 md:m-0">
            <p className="pr-2">Last Name:</p>
            <input className="w-52 lg:w-full md:w-44 rounded-sm" type="text" />
            <p className="pr-2">Address line 2:</p>
            <input className="w-52 lg:w-full md:w-44 rounded-sm" type="text" />
            <div className="flex ">
              <div className="flex flex-col pr-2 lg:w-1/2">
                <p className="pr-2">City:</p>
                <input
                  className="w-24 md:w-20 lg:w-full rounded-sm"
                  type="text"
                />
              </div>
              <div className="flex flex-col pr-2">
                <p className="pr-2">Zip Code:</p>
                <input
                  className="w-24 md:w-20 lg:w-full rounded-sm"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb:block sm:block md:hidden lg:hidden">
          {isClicked ? (
            <button
              className="text-white mt-1 bg-[#232E3E] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36 lg:hidden"
              onClick={() => {
                setIsClicked(false);
              }}
            >
              Edit Details
            </button>
          ) : (
            <button
              className="text-white mt-1 bg-[#0C611A] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36 lg:hidden"
              onClick={() => {
                setIsClicked(false);
              }}
            >
              Save
            </button>
          )}
        </div>
      </div>
      <div className=" mb:hidden sm:hidden md:hidden lg:block text-end lg:px-8">
        {isClicked ? (
          <button
            className="text-white mt-1 bg-[#232E3E] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36"
            onClick={() => {
              setIsClicked(false);
            }}
          >
            Edit Details
          </button>
        ) : (
          <button
            className="text-white mt-1 bg-[#0C611A] font-[Work_Sans] font-medium text-sm px-2 py-1 rounded-md w-36"
            onClick={() => {
              setIsClicked(true);
            }}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Address;
