import { useState } from "react";
import { motion } from "framer-motion";

interface PostProps {
  content: string;
  user: string;
  date: string;
  likes: number;
  comments: number;
}

const Post = ({ content, user, date, likes, comments }: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="p-4 border-b border-gray-700">
      <p className="text-blue-400 font-bold">{user}</p>
      <p className="text-gray-400 text-sm">{date}</p>
      <p
        style={{
          wordBreak: "break-word",
          textOverflow: "ellipsis", // Adiciona reticências se o texto for muito longo
        }}
      >
        {content}
      </p>
      <div className="flex gap-4 mt-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1 ${
            isLiked
              ? "text-red-500 scale-110 transition-transform"
              : "text-gray-500"
          }`}
        >
          <motion.span
            animate={{ scale: isLiked ? 1.2 : 1 }}
            className={`text-xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
          >
            ♥ {likeCount}
          </motion.span>
        </button>
        <button className="flex items-center gap-1 text-blue-500">
          💬 {comments}
        </button>
      </div>
    </div>
  );
};

export default Post;
