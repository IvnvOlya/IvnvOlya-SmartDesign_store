import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="Nav">
      <ul className="Nav-list">
        {props.main.map((item, index) => (
          <li className="Nav-item" key={index}>
            <Link to={item.link} className="Nav-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
