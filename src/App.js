import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import mixpanel from "mixpanel-browser";

mixpanel.init("208345f230d8cd80b5f6791ad1d7a1d5", { debug: true });

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
