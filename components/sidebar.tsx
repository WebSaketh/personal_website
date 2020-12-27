import React, { useState } from "react";
import { sideBarData } from "../Models/sideBarData";
import SidebarComponent from "./sidebarComponent";
type Props = {};
const Sidebar: React.FC<Props> = () => {
  const [sideBarComponents, setSideBarComponents] = useState<sideBarData[]>([
    {
      isImage: false,
      title: "Saketh Kotagiri",
      imgSRC:
        "https://i.pinimg.com/originals/73/0f/8a/730f8a260eb1d85623b7fcf34ab518e7.jpg",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi quis eleifend. Dictum sit amet justo donec enim. Rhoncus mattis rhoncus urna neque viverra. Accumsan tortor posuere ac ut. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque.",
      link: "#",
    },
    {
      isImage: true,
      title: "GIT",
      imgSRC:
        "https://aimansoliman.files.wordpress.com/2020/02/github_owler_20180612_070358_original.png",
      desc: "",
      link: "#",
    },
    {
      isImage: true,
      title: "DISCORD",
      imgSRC:
        "https://www.adl.org/sites/default/files/styles/open_graph_image_1200_x_628_/public/2019-08/discord-logo.jpg?itok=LMNTgq_N",
      desc: "",
      link: "#",
    },
    {
      isImage: true,
      title: "PEPERIDGE FARM",
      imgSRC:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Pepperidge_Farm_logo.svg/1200px-Pepperidge_Farm_logo.svg.png",
      desc: "",
      link: "#",
    },
    {
      isImage: true,
      title: "PIZZAHUT",
      imgSRC:
        "https://images.squarespace-cdn.com/content/v1/5b9f0fbbf8370a03de5ed824/1561991461132-6WMOHJZNLDI3R0W23V4X/ke17ZwdGBToddI8pDm48kFTEgwhRQcX9r3XtU0e50sUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcW7uEhC96WQdj-SwE5EpM0lAopPba9ZX3O0oeNTVSRxdHAmtcci_6bmVLoSDQq_pb/pizza-hut-classic-logo-1176172-1280x0.jpg?format=1500w",
      desc: "",
      link: "#",
    },
  ]);
  return (
    <div>
      {sideBarComponents.map((sidebarcomponent, i) => {
        return <SidebarComponent key={i} sideBarData={sidebarcomponent} />;
      })}
    </div>
  );
};

export default Sidebar;
