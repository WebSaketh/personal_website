import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import Post from "../components/post";
import PostList from "../components/PostList";
import Sidebar from "../components/sidebar";

export default function Rawr() {
  return (
    <div className="p-4 flex max-w-screen-xl mx-auto">
      <div className="overflow-y-auto flex-1">
        <PostList></PostList>
      </div>
      <div className="px-4 object-right max-w-sm">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
