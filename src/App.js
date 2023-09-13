import "./App.css";

import { useState, useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
//import { useNavigate } from "react-router-dom";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const navigate =useNavigate()
  const [user, setUser] = useState();

  console.log("isAuth -->", isAuth, auth?.currentUser?.displayName);

  const signuserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
      //navigate('/login')
    });
  };

  useEffect(() => {
    // when auth user with firebase changed see this changes
    // eslint-disable-next-line
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      //console.log('user data-->' , user)
      // data from firebase/auth set in user in useState
      setUser(user);
    });
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <nav>
          <Link to="/"> Home</Link>

          {!isAuth ? (
            <Link to="/login"> login </Link>
          ) : (
            <>
              <Link to="/createpost"> Create Post </Link>
              <button onClick={signuserOut}> Log Out</button>
              <div className=" ml-12 text-blue-600 text-2xl font-semibold">
                {user?.displayName}
              </div>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth} />} />
          <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
          <Route
            path="/login"
            element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
