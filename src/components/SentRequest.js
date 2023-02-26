import profile from '../assets/profile.png';

const SentRequest = () => {
  return (
    <div className="flex justify-between space-x-2 items-center bg-[#DEE8FF] rounded-md m-3 p-2">
      <img src={profile} alt="profile" />
      <h1 className="font-semibold">
        <span className="text-[#F8991F]">You</span> have invited
        johnsmith@gmail.com to become family member.
      </h1>
    </div>
  );
};

export default SentRequest;
