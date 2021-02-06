import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';
import './Navigation.scss';
import Search from '../Search/Search';

function Navigation () {
  return (
    <nav className="navbar">
        <ul className="navList">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/"><Logo variant="dark" /></Link>
            </li>
            <li>
                <Link to="/duden">Duden</Link>
            </li>
            <li>
                <Link to="/pupulation-groups">Bevölkerungsgruppen</Link>
                <ul className="navSubmenu">
                    <li>
                        <Link to="/bauern">Bauern</Link>
                    </li>
                    <li>
                        <Link to="/undso">Undso</Link>
                    </li>
                </ul>
            </li>
        </ul>


        <Search formInputClass="navSearch" />
    </nav>
  );
}

export default Navigation;
