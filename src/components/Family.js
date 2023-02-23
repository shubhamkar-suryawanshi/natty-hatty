import { useState } from 'react';
import { users, admin } from '../constants';

import prof from '../assets/profile.png';

const Family = () => {
  const [list, setList] = useState(users);

  return (
    <div className=" bg-gray-100 p-5 mr-5 rounded-sm">
      <div className="flex justify-between">
        <h1>Activities</h1>
        <button className="text-white my-1 bg-green-600 px-2 py-1 rounded-sm">
          Add New
        </button>
      </div>
      <div className="flex items-center bg-orange-500 rounded-md justify-between">
        <div className="flex items-center  ">
          <img className="w-8 m-2" src={prof} alt="img" />
          <p>
            {admin.firstName} {admin.lastName}
          </p>
        </div>
        <button className="my-1 mr-2 w-20 bg-white px-2 py-1 rounded-sm">
          Admin
        </button>
      </div>
      <div>
        {users.map((user, index) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <img className="w-8 m-2" key={index} src={prof} alt="img" />
              <p key={index}>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <button
              key={index}
              className="my-1 mr-2 w-20 bg-blue-100 px-2 py-1 rounded-sm"
            >
              Member
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Family;
