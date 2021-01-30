import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logoDark.svg';
import './Logo.scss';

function Logo (props) {
    const darkmode = props.variant === 'dark';

    if (darkmode) {
        return <img src={logoDark} className="logo logoDark" alt="logo" />
    }
    return <img src={logo} className="logo" alt="logo" />;
};

export default Logo;