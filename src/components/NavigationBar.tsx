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
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/Modal">Modal animation</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
