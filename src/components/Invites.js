const Invites = () => {
  return (
    <div className="flex justify-between bg-gray-100 p-5 mr-5 rounded-sm">
      <h1>Activities</h1>
      <div>
        <button className=" bg-gray-400 p-2 rounded-l-full hover:rounded-full hover:bg-orange-500 hover:text-white ">
          Sent
        </button>
        <button className=" bg-gray-400 p-2 rounded-r-full  hover:rounded-full hover:bg-orange-500 hover:text-white">
          Received
        </button>
      </div>
    </div>
  );
};

export default Invites;
