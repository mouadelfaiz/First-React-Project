import { Link } from "react-router-dom";

export default function Nav (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Pokemon Card</div>
      </Link>
      <Link to="/currencies">
        <div>Pokemon Details</div>
      </Link>
    </div>
  );
};