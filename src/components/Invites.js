import Request from './Request';

const Invites = () => {
  return (
    <div className="md:bg-[#F5F6F8] md:pb-2">
      <div className="head flex justify-between p-5 md:bg-[#F5F6F8]">
        <h1 className="font-bold text-lg">Invitations</h1>
        <div>
          <button className=" bg-gray-400 pl-3 pr-1 py-1 rounded-l-full  hover:bg-orange-500 hover:text-white ">
            Sent<span className="pl-1">(15)</span>
          </button>
          <button className=" bg-gray-400 pr-3 pl-1 py-1 rounded-r-full   hover:bg-orange-500 hover:text-white">
            Received<span className="pl-1">(25)</span>
          </button>
        </div>
      </div>
      <div className="msg">
        <Request />
        <Request />
        <Request />
        <Request />
      </div>
    </div>
  );
};

export default Invites;
