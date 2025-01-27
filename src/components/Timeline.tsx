import { useState } from "react";
import { Post } from "./Post";
import { PostForm } from "./PostForm";

export const Timeline: React.FC = () => {
  const [posts, setPosts] = useState([
    { user: "Rico", date: "Agora", content: "Primeiro post!", initialLikes: 0 },
  ]);

  const addPost = (content: string) => {
    const newPost = { user: "Rico", date: "Agora", content, initialLikes: 0 };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <PostForm onSubmit={addPost} />
      <div>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};
