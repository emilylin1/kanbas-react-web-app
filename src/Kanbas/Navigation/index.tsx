import { Link, useLocation } from "react-router-dom";
import "./index.css";
import northeasternLogo from './northeasternlogo.jpeg';
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaTv, FaShareSquare, FaRegQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-3account" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-3" /> },
        { label: "Courses", icon: <FaBook className="fs-3" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3" /> },
        { label: "Inbox", icon: <FaInbox className="fs-3" /> },
        { label: "History", icon: <FaRegClock className="fs-3" /> },
        { label: "Studio", icon: <FaTv className="fs-3" /> },
        { label: "Commons", icon: <FaShareSquare className="fs-3" /> },
        { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation d-none d-md-block">
            <li>
                <a href="https://northeastern.edu" target="_blank" rel="noopener noreferrer">
                    <img src={northeasternLogo} alt="Northeastern Logo" style={{ width: '80px' }} />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;