import "./App.css";
import { Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/animatedwallpaper.mp4`}
          type="video/mp4"
        />
      </video>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;

