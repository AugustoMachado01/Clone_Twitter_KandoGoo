import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Post from "./Post";
import PostForm from "./PostForm";

// Utilitário para calcular o tempo em formato "x tempo atrás"
const formatTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;

  const timeUnits = [
    { unit: "dia", value: Math.floor(diff / 86400000) },
    { unit: "hora", value: Math.floor(diff / 3600000) },
    { unit: "minuto", value: Math.floor(diff / 60000) },
  ];

  const { unit, value } = timeUnits.find(({ value }) => value > 0) || {};
  return value ? `${value} ${unit}${value > 1 ? "s" : ""} atrás` : "Agora";
};

const Feed = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    setPosts([
      {
        id: 1,
        content: "Primeiro post!",
        user: "@usuario1",
        date: Date.now() - 60000, // 1 minuto atrás
        likes: 5,
        comments: 3,
      },
      {
        id: 2,
        content: "Adorando essa rede social!",
        user: "@usuario2",
        date: Date.now() - 120000, // 2 minutos atrás
        likes: 10,
        comments: 5,
      },
    ]);
  }, []);

  const addPost = (
    newPost: Omit<PostType, "id" | "date" | "likes" | "comments">
  ) => {
    setPosts((prevPosts) => [
      {
        ...newPost,
        id: Date.now(),
        date: Date.now(),
        likes: 0,
        comments: 0,
      },
      ...prevPosts,
    ]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const botPost = {
        content: "Este é um post gerado automaticamente.",
        user: "@bot",
      };

      addPost(botPost);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex-1 p-4 overflow-y-auto">
      <PostForm onSubmit={(newPost) => addPost(newPost)} />
      {posts
        .sort((a, b) => b.date - a.date)
        .map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Post
              content={post.content}
              user={post.user}
              date={formatTimeAgo(post.date)}
              likes={post.likes}
              comments={post.comments}
            />
          </motion.div>
        ))}
    </section>
  );
};

export default Feed;

// Tipos definidos para maior clareza
type PostType = {
  id: number;
  content: string;
  user: string;
  date: number;
  likes: number;
  comments: number;
};
