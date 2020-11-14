import React from "react";
import Link from "next/link";

const Menu = ({ children }) => children;

const MenuNav = ({ children }) => <nav className="mt-10">{children}</nav>;
const MenuNavItem = ({ href, Icon, children }) => (
  // flex items-center mt-4 py-2 px-6 bg-gray-700 bg-opacity-25 text-gray-100"
  <Link href={href}>
    <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
      {Icon && <Icon className="h-6 w-6" />}
      <span className="mx-3">{children}</span>
    </a>
  </Link>
);

const MenuBrand = ({ children }) => (
  <div className="flex items-center justify-center mt-8">
    <div className="flex items-center">
      <svg
        className="h-12 w-12"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
          fill="#4C51BF"
          stroke="#4C51BF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
          fill="white"
        ></path>
      </svg>

      <span className="text-white text-2xl mx-2 font-semibold">{children}</span>
    </div>
  </div>
);

Menu.Brand = MenuBrand;
Menu.Nav = MenuNav;
Menu.NavItem = MenuNavItem;

export default Menu;
