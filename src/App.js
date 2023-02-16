import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiWalker from "./components/apiWalker";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiWalker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
