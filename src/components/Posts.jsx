import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = ({ posts, onCreate }) => {
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
