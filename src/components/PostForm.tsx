import { useState } from "react";

// Definição do tipo do Post
type PostInput = {
  content: string;
  user: string;
};

type PostFormProps = {
  onSubmit: (post: PostInput) => void;
};

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const maxChars = 280;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Passa apenas as propriedades definidas no tipo PostInput
    onSubmit({
      content: text,
      user: "@AugustoMachado",
    });
    setText(""); // Limpa o campo após envio
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxChars) {
      setText(e.target.value); // Atualiza o texto somente se não ultrapassar o limite
    }
  };

  const remainingChars = maxChars - text.length;

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b border-gray-700">
      <textarea
        className="w-full p-2 bg-gray-900 text-white rounded resize-none"
        placeholder="O que está acontecendo?"
        rows={4}
        value={text}
        onChange={handleChange}
      />
      <div className="flex justify-between mt-2">
        <span
          className={`text-sm ${
            remainingChars < 20 ? "text-red-500" : "text-gray-500"
          }`}
        >
          {remainingChars} caracteres restantes
        </span>
      </div>
      <button
        type="submit"
        className="mt-2 p-2 bg-blue-500 rounded text-white disabled:opacity-50"
        disabled={text.trim() === ""} // Desativa o botão se o texto estiver vazio
      >
        Postar
      </button>
    </form>
  );
};

export default PostForm;
