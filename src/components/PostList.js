import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const PostList = ({ posts }) => (
  <ul>
    {posts && posts.length
      ? posts.map((post, index) => {
          return <Post key={index} content={post} />;
        })
      : "No Posts yet"}
  </ul>
);


const mapStateToProps = state => {
  let posts = state.posts
  return { posts };
};

// export default TodoList;
export default connect(mapStateToProps)(PostList);