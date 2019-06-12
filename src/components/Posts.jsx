import React, { useContext } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "../providers/PostsProvider";

const Posts = () => {
  const posts = useContext(PostsContext);
  return (
    <section className="Posts">
      <AddPost />
      {posts.map(post => (
        <Post {...post} id={post.id} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
