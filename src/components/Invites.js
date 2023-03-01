import { useState } from 'react';
import Request from './Request';
import SentRequest from './SentRequest';

const Invites = () => {
  const [request, setRequest] = useState('received');
  return (
    <div className="md:bg-[#F5F6F8] md:pb-2 scrollbar-thin scrollbar-thumb-[#232E3E] scrollbar-track-[#E8E8E8]scrollbar-track-rounded-full scrollbar-thumb-rounded-full  overflow-y-scroll scrollbar-thumb-[10px] h-[500px]">
      <div className="head flex justify-between p-5 md:bg-[#F5F6F8]">
        <h1 className="font-bold">Invitations</h1>
        <div className="bg-[#DBDBDB] rounded-full">
          <button
            className="bg-[#DBDBDB] py-1 px-2 text-sm font-semibold rounded-l-full hover:rounded-full hover:bg-[#F8991F] focus:bg-[#F8991F] checked:bg-[#F8991F] hover:text-white focus:text-white checked:text-white focus:rounded-full checked:rounded-full"
            onClick={() => {
              setRequest('received');
            }}
          >
            Sent<span className="pl-1">(6)</span>
          </button>
          <button
            className="bg-[#DBDBDB] py-1 px-2 text-sm font-semibold rounded-r-full hover:rounded-full hover:bg-[#F8991F] focus:bg-[#F8991F] checked:bg-[#F8991F] hover:text-white focus:text-white checked:text-white focus:rounded-full checked:rounded-full"
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
