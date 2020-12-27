import React, { useState } from "react";
import Link from "next/link";

type Props = {};

type Route = {
  label: string;
  link: string;
};

const Navbar: React.FC<Props> = () => {
  const [routes, setRoutes] = useState<Route[]>([
    {
      label: "HOME  ",
      link: "/",
    },
    {
      label: "SUPBYDY",
      link: "/",
    },
    {
      label: "RAWR",
      link: "/",
    },
    {
      label: "NOODLES",
      link: "/",
    },
    {
      label: "CAPYBARA",
      link: "/",
    },
  ]);

  return (
    <nav className="text-lg bg-white flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-6 text-3xl text-gray-900 border-b-4 border-transparent">
          <img className="h-8 w-auto object-cover" src="/Logo.png"></img>
        </div>

        <div className="flex item-center">
          {routes.map((route, i) => (
            <Link key={i} href={route.link}>
              <a className="p-6 text-gray-900 border-b-4 border-transparent hover:border-gray-900">
                {route.label}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className="inline-flex space-x-4 mr-8 float-right p-6 text-gray-900 border-b-4 border-transparent">
        <div className="w-10">
          <a href="#">
            <img
              className=".object-scale-down"
              src="https://i.ibb.co/qC5rVd1/snapchat-logo-icon-png-snapchat-logo-circle-11562922134qgu9m89jgh.png"
            ></img>
          </a>
        </div>

        <div className="w-10">
          <a href="#">
            <img
              className=".object-scale-down"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"
            ></img>
          </a>
        </div>

        <div className="w-10">
          <a href="#">
            <img
              className=".object-scale-down"
              src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            ></img>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
