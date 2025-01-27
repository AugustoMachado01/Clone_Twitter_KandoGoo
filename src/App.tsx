import React from "react";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-500">X (Twitter Clone)</h1>
      </header>
      <main className="max-w-3xl mx-auto mt-6">
        <Timeline />
      </main>
      <footer className="mt-6 py-4 text-center text-gray-500 text-sm">
        Feito com 💙 por Rico
      </footer>
    </div>
  );
}

export default App;
