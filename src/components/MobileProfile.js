import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import pro from '../assets/profile1.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileDropdown from './MobileDropdown';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import logout from '../assets/logout.png';

const MobileProfile = () => {
  return (
    <div className="bg-[#232E3E] h-[100vh] space-y-4">
      <section className="flex items-center space-x-3 text-white ">
        <img className="w-16 my-2 mr-2" src={pro} alt="profile" />

        <div className="space-y-1">
          <h1 className="font-bold ">Shub Surya</h1>
          <div className="flex items-center">
            <IconButton className="text-white m-0 p-0">
              <LocationOnIcon />
            </IconButton>
            <h2 className="text-xs">Kolhapur, Maharashtra</h2>
          </div>
        </div>
      </section>

      <section className="text-white">
        <ul className="space-y-4">
          <li className=" relative inline-block w-full">
            <MobileDropdown />
          </li>
          <li className="flex items-center space-x-2">
            <img className="w-4 h-4" alt="menu 2" src={menu2} />
            <Link to={'/'}>Menu 2</Link>
          </li>
          <li className="flex items-center space-x-2">
            <img className="w-4 h-4" alt="menu 3" src={menu3} />
            <Link to={'/'}>Menu 3</Link>
          </li>
          <li className="flex items-center space-x-2">
            <img className="w-4 h-4" alt="menu 4" src={logout} />
            <Link to={'/'}>Logout</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MobileProfile;
