import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/Cartslice";
import { logoutUser } from "../features/user/UserSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <div className="bg-neutral py-2 text-neutral-content ">
      <div className="align-element flex justify-center sm:justify-end">
        {/* user */}
        {user ? (
          <div className="flex items-center gap-8 sm:gap-x-8">
            <p className="text-x sm:text-sm">hello {user.username}</p>
            <button className="btn btn-xs btn-secondary btn-outline" onClick={handleLogout}>
              logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link to="/login" className="link link-hover text-xs sm:text-sm">
              Sign in / Guest
            </Link>
            <Link to="/register" className="link link-hover text-xs sm:text-sm">
              Create account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
