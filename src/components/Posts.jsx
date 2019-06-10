import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

const Posts = ({ posts, onCreate, onRemove }) => {
  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} id={post.id} key={post.id} onRemove={onRemove} />
      ))}
    </section>
  );
};

export default Posts;
