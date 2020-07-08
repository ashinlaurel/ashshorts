import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
// import menu from "../assets/menu.png";
// import Logo from "../assets/logoc.png";

const Navbarnew = (props) => {
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
    // setAdmin(false);
    // closeDrop();
  };
  const openDrop = () => {
    const drop = document.querySelector("#drop");
    const ham = document.querySelector("#ham");
    const close = document.querySelector("#close");
    drop.classList.remove("hidden");
    ham.classList.add("hidden");
    close.classList.remove("hidden");
  };
  const closeDrop = () => {
    const drop = document.querySelector("#drop");
    const ham = document.querySelector("#ham");
    const close = document.querySelector("#close");
    drop.classList.add("hidden");
    ham.classList.remove("hidden");
    close.classList.add("hidden");
  };
  return (
    <div className=" text-black ">
      <header class=" navbg md:flex md:items-center md:justify-between p-3 shadow-lg">
        <div class="container mx-auto flex items-center justify-between md:mb-0">
          <h1
            class="leading-none text-base sm:text-2xl text-grey-darkest heading"
            id="heading"
          >
            <Link class="text-4xl font-bold " to="/">
              <div>AshShorts</div>
            </Link>
          </h1>
          <div
            class="md:ml-4 md:hidden cursor-pointer"
            onClick={openDrop}
            id="ham"
          >
            {/* <img className="fill-current" src={menu} height="20" width="30" /> */}
            <i class="fa fa-bars" aria-hidden="true"></i>
          </div>
          <div class="hidden cursor-pointer" onClick={closeDrop} id="close">
            <span className="md:hidden">X</span>
          </div>
        </div>

        <nav className="hidden md:inline " id="drop">
          <ul class="list-reset md:flex md:items-center font-bold uppercase mr-5 ">
            <li class="md:ml-4">
              <Link
                onClick={() => closeDrop()}
                class="block no-underline py-2 text-grey-darkest md:border-none md:p-0"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="md:ml-4">
              {isLoggedIn ? (
                <Link
                  onClick={() => closeDrop()}
                  class="block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
                  to="/admin"
                >
                  Dashboard
                </Link>
              ) : null}
            </li>
            <li class="md:ml-4">
              <Link
                onClick={() => closeDrop()}
                to="/login"
                class="border-t block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
              >
                {isLoggedIn ? <p>Hi,{handle}</p> : <p>Login</p>}
              </Link>
            </li>
            {isLoggedIn ? null : (
              <li class="md:ml-4">
                <Link
                  onClick={() => closeDrop()}
                  class="border-t block no-underline py-2 text-grey-darkest  md:border-none md:p-0"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            )}

            {isLoggedIn ? (
              <li class="md:ml-4">
                <Link
                  to="/"
                  class="border-t block no-underline  py-2 
                text-grey-darkest md:border-none md:p-0"
                  onClick={Logout}
                >
                  Logout
                </Link>
              </li>
            ) : (
              <p></p>
            )}
          </ul>
        </nav>
        {/* <!-- END Global navigation --> */}
      </header>
    </div>
  );
};

export default withRouter(Navbarnew);
{
  /* <Link to="/admin">
  <div className="text-gray-200 rouded-xl px-4 inline ">Admin</div>
</Link>; */
}
