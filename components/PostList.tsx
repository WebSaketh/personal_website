import React, { useEffect, useState } from "react";
import Link from "next/link";

import Post from "./post";
import { PostData } from "../Models";

type Props = {};
const PostList: React.FC<Props> = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  //get repo data from local server
  const getPostData = async () => {
    const res = await fetch("http://localhost:3001/api/repo", {
      method: "GET",
    });
    const data = (await res.json()) as PostData[];
    setPosts(data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="space-y-8">
      {posts.map((post, i) => {
        return <Post key={i} postData={post} />;
      })}
    </div>
  );
};
export default PostList;
