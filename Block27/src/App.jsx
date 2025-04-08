import { useState } from "react";
import "./App.css";
import "./index.css";

import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="form">
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </div>
  );
}

export default App;
