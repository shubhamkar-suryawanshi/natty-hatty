import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Dropdown from './Dropdown';

const Header = () => {
  return (
    <div className="flex items-center p-2 justify-between bg-gray-700 text-white md:p-3">
      <div className="left flex items-center">
        <IconButton className="lg:hidden">
          <MenuIcon className="text-[#F8991F]" />
        </IconButton>

        <div className="px-1 font-bold">
          <Link to={'/'}>LOGO</Link>
        </div>

        <ul className="hidden  lg:flex lg: pl-28 lg:space-x-20">
          <li className="dropdown relative inline-block">
            <Dropdown />
          </li>
          <li className="">
            <Link to={'/about'}>Menu 2</Link>
          </li>
          <li className="">
            <Link to={'/contact'}>Menu 3</Link>
          </li>
        </ul>
      </div>

      <div className="right flex items-center">
        <IconButton>
          <NotificationsNoneIcon className="text-white" />
        </IconButton>
        <img className="w-8 mr-5" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
