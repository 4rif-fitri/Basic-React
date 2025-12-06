import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Albums from "./components/Albums/main.albums";
import MainLayout from "./components/Layout/MainLayout.layout";

function App() {
  return (
    <>
      <MainLayout>
        <Router>
          <Routes>
            <Route path="/" element={<Albums />} />
            <Route path="/posts" element={<h1>Post</h1>} />
            <Route path="*" element={<h1>NOT FOUNT</h1>} />
          </Routes>
        </Router>
      </MainLayout>
    </>
  );
}

export default App;
