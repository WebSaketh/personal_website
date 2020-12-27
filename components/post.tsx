import React, { useState } from "react";
import { PostData } from "../Models";
import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  postData: PostData;
};

const Post: React.FC<Props> = ({ postData }) => {
  return (
    <div className="bg-white rounded-md px-8 py-4">
      <div className="p-2 font-black text-2xl">
        <a href={postData.url}>{postData.title}</a>
      </div>
      <div className="bg-gray-50 rounded-md">
        <img
          className="object-contain rounded-t-md"
          src={postData.imageSRC}
        ></img>
      </div>
      <div className="p-2 bg-gray-50 rounded-b-md">{postData.description}</div>
    </div>
  );
};
export default Post;
