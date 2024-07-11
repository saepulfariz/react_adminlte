import { Link, useLocation } from "react-router-dom";
import logo from "admin-lte/dist/img/AdminLTELogo.png";
import userLogo from "../assets/img/user.png";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <a href="#" className="brand-link">
        <img
          src={logo}
          alt="Logo"
          className="brand-image img-circle elevation-3"
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={userLogo}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block text-capitalize">
              hidaysa001 - Member
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
          >
            <li className="nav-item">
              <Link
                to={"/dashboard"}
                className={`nav-link ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/users"
                className={`nav-link ${
                  isActive("/dashboard/users") ? "active" : ""
                }`}
              >
                <i className="fas fa-users nav-icon"></i>
                <p> Data Users</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard/products"
                className={`nav-link ${
                  isActive("/dashboard/products") ? "active" : ""
                }`}
              >
                <i className="fas fa-list nav-icon"></i>
                <p> Data Products</p>
              </Link>
            </li>
            <li className="nav-item  has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-user"></i>
                <p>
                  Profile
                  <i className="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/profile" className="nav-link ">
                    <i className="far fa-circle nav-icon"></i>
                    <p>My Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/change-password" className="nav-link ">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Change Password</p>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Logout</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
