import ReactDOM from "react-dom/client";
import App from "./App";
import state from "./redux/state";

ReactDOM.createRoot(document.getElementById("root")!)
   .render(<App state={state} />);