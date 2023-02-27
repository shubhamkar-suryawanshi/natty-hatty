import profile from '../assets/profile.png';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const Request = () => {
  return (
    <div className="flex justify-between md:justify-start lg:justify-start  space-x-2 items-center bg-[#DEE8FF] rounded-md m-3 p-2">
      <img src={profile} alt="profile" />
      <h1 className="font-semibold">
        <span className="text-[#F8991F] font-semibold">John Smith</span> have
        invited you to become his family member.
      </h1>
      <IconButton className="space-x-1">
        <CheckIcon className="text-white rounded-sm bg-[#0C611A]" />
        <ClearIcon className="text-white rounded-sm bg-[#FF3A3A]" />
      </IconButton>
    </div>
  );
};

export default Request;
