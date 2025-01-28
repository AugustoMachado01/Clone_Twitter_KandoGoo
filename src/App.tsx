import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Trends from "./components/Trends";
import Suggestions from "./components/Suggestions";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex h-screen text-white bg-black">
        <Sidebar />
        <main className="flex-1 flex flex-col">
          <Header />
          <Feed />
        </main>
        <aside className="w-80 p-4 hidden lg:block">
          <Trends />
          <Suggestions />
        </aside>
      </div>
    </Router>
  );
}

export default App;
