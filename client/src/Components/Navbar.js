import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="font-sans  bg-white text-center flex justify-between my-4 px-24 shadow-xl overflow-hidden">
        <a href="/" className="">
          <div className="text-4xl font-bold">AshShorts</div>
        </a>
        <ul class="text-sm text-gray-700 list-none p-0 flex items-center">
          <li class="pl-2 border-l">
            <a
              href="/login"
              class="inline-block py-2 px-3 text-gray-900 hover:text-gray-700 no-underline"
            >
              Log In
            </a>
          </li>

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

export default Navbar;
