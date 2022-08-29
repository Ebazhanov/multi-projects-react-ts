import { Link } from "react-router-dom";
import "./NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="sidenav">
      <nav className="main">
        <ul className="menu-list">
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/Counter">Counter page</Link>
          </li>
          <li>
            <Link to="/Next">Next page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
