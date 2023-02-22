import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-gray-700 text-white">
      <div className="px-3">
        <Link to={'/'}>LOGO</Link>
      </div>
      <ul className="flex ">
        <li className="px-3">
          <Link to={'/'}>Home</Link>
        </li>
        <li className="px-3">
          <Link to={'/about'}>About</Link>
        </li>
        <li className="px-3">
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
      <div className="profile">
        <img className="w-16 mr-5" src={profile} alt="profile" />
      </div>
    </div>
  );
};

export default Header;
