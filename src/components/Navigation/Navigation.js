import { Link } from "react-router-dom";

import Logo from '../Logo/Logo';
import './Navigation.scss'



function Navigation() {
  return (
        <nav>
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
            </ul>
        </nav>
  );
}

export default Navigation;
