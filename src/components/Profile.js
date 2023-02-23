import profile from '../assets/profile.png';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from '../shared/userSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gradYear: '',
    DOB: '',
  });

  return (
    <div className="flex bg-gray-100 p-5 mx-5  rounded-sm items-center md:flex-col">
      <div className="flex items-center">
        <img className="w-24 m-2" src={profile} alt="profile" />

        <section className="m-2">
          <h1 className="font-bold text-xl">Shub Surya</h1>
          <h2>Kolhapur, Maharashtra</h2>
        </section>
      </div>
      <section className="m-2 md:flex">
        <div className="flex justify-between py-1 md:flex-col">
          <p className="pr-2">First Name:</p>
          <input
            value={user.firstName}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="text"
          />
        </div>

        <div className="flex justify-between py-1">
          <p className="pr-2">Last Name:</p>
          <input
            value={user.lastName}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex justify-between py-1">
          <p className="pr-2">Email :</p>
          <input
            value={user.email}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="email"
          />
        </div>
      </section>
      <section className="m-2">
        <div className="flex justify-between py-1">
          <p className="pr-2">Phone:</p>
          <input
            value={user.phone}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="text"
          />
        </div>

        <div className="flex justify-between py-1">
          <p className="pr-2">Graduation Year:</p>
          <input
            value={user.gradYear}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="text"
          />
        </div>
        <div className="flex justify-between py-1">
          <p className="pr-2">Date of Birth :</p>
          <input
            value={user.DOB}
            onChange={(e) => setUser(e.target.value)}
            className="border border-gray-300 rounded-sm"
            type="text"
          />
        </div>
      </section>
      <section className="my-2 mx-2 flex flex-col">
        <button
          className="text-white my-1 bg-green-600 px-2 py-1 rounded-sm"
          onClick={() => {
            dispatch(addUser(user));
          }}
        >
          Save Change
        </button>
        <button className="text-white my-1 bg-gray-700 px-2 py-1 rounded-sm">
          Change Password
        </button>
        <button className="text-white my-1 bg-orange-500 px-2 py-1 rounded-sm">
          Leave Family
        </button>
      </section>
    </div>
  );
};

export default Profile;
