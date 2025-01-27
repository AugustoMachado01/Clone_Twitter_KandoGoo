import { useState } from "react";

interface PostFormProps {
  onSubmit: (content: string) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const maxLength = 280;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setContent(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent("");
    }
  };

  return (
    <div className="p-4 border-b border-gray-200">
      <textarea
        className="w-full p-2 border rounded-md resize-none"
        rows={4}
        value={content}
        onChange={handleChange}
        placeholder="O que está acontecendo?"
      />
      <div className="flex justify-between items-center mt-2">
        <span
          className={`text-sm ${
            content.length > maxLength - 20 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {maxLength - content.length} caracteres restantes
        </span>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Postar
        </button>
      </div>
    </div>
  );
};
