import "./App.css";
import { Navbar } from "./components/Navbar";
import { News } from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      
      <BrowserRouter>
        <Navbar  />
         <LoadingBar color="#f11946" progress={progress}   />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News setProgress={setProgress} key="health" category="health" />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key=" science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News setProgress={setProgress} key=" sports" category="sports" />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
