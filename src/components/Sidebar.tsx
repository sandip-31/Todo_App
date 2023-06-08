import React from "react";
import { Link } from "react-router-dom";

const sidebar = () => {
  const Menus = [
    { title: "Dashboard", path: "/dashboard", clickHandler: () => {} },
    {
      title: "logout",
      path: "/",
      clickHandler: () => {
        localStorage.clear();
      },
    },
  ];

  return (
    <div className="flex">
      <div
        className={` bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex gap-x-4 items-center">
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 `}
          >
            Todo App
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.path}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            `}
              onClick={Menu.clickHandler}
            >
              <span className={` origin-left duration-200`}>{Menu.title}</span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default sidebar;
