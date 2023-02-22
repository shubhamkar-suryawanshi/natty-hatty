import profile from '../assets/profile.png';

const Profile = () => {
  return (
    <div className="flex bg-gray-100 p-5 mx-5  rounded-sm items-center">
      <img className="w-24 m-2" src={profile} alt="profile" />
      <section className="m-2">
        <h1 className="font-bold text-xl">Shub Surya</h1>
        <h2>Kolhapur, Maharashtra</h2>
      </section>
      <section className="m-2">
        <div className="flex justify-between py-1">
          <p className="pr-2">First Name:</p>
          <input className="border border-gray-300 rounded-sm" type="text" />
        </div>

        <div className="flex justify-between py-1">
          <p className="pr-2">Last Name:</p>
          <input className="border border-gray-300 rounded-sm" type="text" />
        </div>
        <div className="flex justify-between py-1">
          <p className="pr-2">Email :</p>
          <input className="border border-gray-300 rounded-sm" type="email" />
        </div>
      </section>
      <section className="m-2">
        <div className="flex justify-between py-1">
          <p className="pr-2">Phone:</p>
          <input className="border border-gray-300 rounded-sm" type="text" />
        </div>

        <div className="flex justify-between py-1">
          <p className="pr-2">Graduation Year:</p>
          <input className="border border-gray-300 rounded-sm" type="text" />
        </div>
        <div className="flex justify-between py-1">
          <p className="pr-2">Date of Birth :</p>
          <input className="border border-gray-300 rounded-sm" type="email" />
        </div>
      </section>
      <section className="my-2 mx-2 flex flex-col">
        <button className="text-white my-1 bg-green-600 px-2 py-1 rounded-sm">
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
