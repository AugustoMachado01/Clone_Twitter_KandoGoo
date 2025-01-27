import { useState } from "react";
import { motion } from "framer-motion";

interface PostProps {
  user: string;
  date: string;
  content: string;
  initialLikes: number;
}

export const Post: React.FC<PostProps> = ({
  user,
  date,
  content,
  initialLikes,
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(likes + (liked ? -1 : 1));
  };

  return (
    <motion.div
      className="p-4 border-b border-gray-200 hover:bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">{user}</span>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <p className="text-gray-800 my-2">{content}</p>
      <div className="flex items-center space-x-4">
        <button onClick={toggleLike} className="flex items-center space-x-2">
          <motion.span
            animate={{ scale: liked ? 1.2 : 1 }}
            className={`text-xl ${liked ? "text-red-500" : "text-gray-400"}`}
          >
            ♥
          </motion.span>
          <span>{likes}</span>
        </button>
        <button className="text-gray-400">💬 0</button>
      </div>
    </motion.div>
  );
};
