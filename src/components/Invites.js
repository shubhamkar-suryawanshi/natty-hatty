import { useState } from 'react';
import Request from './Request';
import SentRequest from './SentRequest';

const Invites = () => {
  const [request, setRequest] = useState('received');
  return (
    <div className="md:bg-[#F5F6F8] md:pb-2 overflow-auto hover:overflow-y-scroll h-[500px]">
      <div className="head flex justify-between p-5 md:bg-[#F5F6F8]">
        <h1 className="font-bold">Invitations</h1>
        <div className="bg-[#DBDBDB] rounded-full">
          <button
            className="bg-[#DBDBDB] py-1 px-2 text-sm font-semibold rounded-l-full hover:rounded-full hover:bg-orange-500 hover:text-white "
            onClick={() => {
              setRequest('received');
            }}
          >
            Sent<span className="pl-1">(6)</span>
          </button>
          <button
            className="bg-[#DBDBDB] py-1 px-2 text-sm font-semibold rounded-r-full hover:rounded-full hover:bg-orange-500 hover:text-white"
            onClick={() => {
              setRequest('sent');
            }}
          >
            Received<span className="pl-1">(8)</span>
          </button>
        </div>
      </div>
      <div className="msg ">
        {request == 'sent' ? (
          <div>
            <Request />
            <Request />
            <Request />
            <Request />
            <Request />
            <Request />
            <Request />
            <Request />
          </div>
        ) : (
          <div>
            <SentRequest />
            <SentRequest />
            <SentRequest />
            <SentRequest />
            <SentRequest />
            <SentRequest />
          </div>
        )}
      </div>
    </div>
  );
};

export default Invites;
