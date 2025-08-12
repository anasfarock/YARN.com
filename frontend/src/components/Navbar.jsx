import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <h1>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              YARN.com
            </Link>
          </h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/create-thread">Create Thread</Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
