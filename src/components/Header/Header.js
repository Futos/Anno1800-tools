import logo from '../../assets/logo.svg';
import './Header.scss';
import Navigation from '../Navigation/Navigation';



function Header() {
    return (
        <header className="header">
            <Navigation/>
        </header>
    );
}

export default Header;
