import { Link } from "react-router-dom";
import "./NavigationBar.scss";

function NavigationBar() {
  return (
    <div className="sidenav">
      <nav className="main">
        <ul className="menu-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/modal">Modal</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
