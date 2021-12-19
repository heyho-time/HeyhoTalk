import React from "react";
import { Link } from "react-router-dom";
import { RiChat1Fill } from "react-icons/ri";
import "bootstrap/dist/js/bootstrap.min.js";
import "./UserPanel.css";
import { useSelector } from "react-redux";

const UserPanel = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <h3 className="UserPanel">
        {/* Logo */}
        <RiChat1Fill /> Heyho talk
      </h3>
      <div className="drop">
        <img
          className="profilePic"
          alt="profilePic"
          src={"/images/베리와나.jpg"}
        />
        <div className="dropdown">
          <Link
            className="btn btn-secondary dropdown-toggle"
            to="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {}
          </Link>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <Link className="dropdown-item" to="#">
                프로필 사진 변경
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                로그아웃
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserPanel;
