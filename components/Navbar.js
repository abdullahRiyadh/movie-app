import Link from 'next/link';
import { FaHome, FaHeart, FaHistory } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-black p-5 text-white w-full">
      <ul className="flex flex-col sm:flex-row items-center justify-between sm:space-x-6 space-y-4 sm:space-y-0">
        <li>
          <Link href="/" legacyBehavior>
            <a className="flex items-center"><FaHome /> Home</a>
          </Link>
        </li>
        <li>
          <Link href="/favorites" legacyBehavior>
            <a className="flex items-center"><FaHeart /> Favorites</a>
          </Link>
        </li>
        <li>
          <Link href="/history" legacyBehavior>
            <a className="flex items-center"><FaHistory /> History</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
