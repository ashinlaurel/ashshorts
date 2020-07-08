import React, { useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Navbar = (props) => {
  // const { isLoggedIn, setisLoggedIn, handle, setHandle } = UseContext(
  //   LoginContext
  // );
  const {
    isLoggedIn,
    setisLoggedIn,
    handle,
    setHandle,
    setUserToken,
    // setAdmin,
  } = useContext(LoginContext);

  const Logout = () => {
    setisLoggedIn(false);
    setHandle("");
    props.history.push("/");
  };
  return (
    <div>
      <nav class="font-sans  bg-white text-center flex justify-between mt-2 px-24 shadow-xl overflow-hidden">
        <Link to="/" className="">
          <div className="text-4xl font-bold">AshShorts</div>
        </Link>
        <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
          {isLoggedIn ? (
            <li class="pr-2">
              <a
                href="/admin"
                class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
              >
                Dashboard
              </a>
            </li>
          ) : null}

          {isLoggedIn ? (
            <li class="pl-2 border-l">
              <Link
                href="/"
                class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
                onClick={Logout}
              >
                Log Out
              </Link>
            </li>
          ) : (
            <li class="pl-2 border-l">
              <a
                href="/login"
                class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
              >
                Log In
              </a>
            </li>
          )}

          <a
            href="/signup"
            class="bg-black hover:bg-text-gray-800 text-white ml-4 py-2 px-3"
          >
            Sign Up
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default withRouter(Navbar);
