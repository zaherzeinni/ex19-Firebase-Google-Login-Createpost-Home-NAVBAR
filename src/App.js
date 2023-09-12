import "./App.css";
import './index.css';
import Login from "./components/Login";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <div>
          <nav className="bg-gray-700 flex h-[100px] justify-center text-white gap-12 items-center text-2xl ">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/createpost">Create Post</Link>
            </div>

            <div>
              <Link to="/login">Login</Link>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
