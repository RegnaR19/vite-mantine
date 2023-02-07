import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost } from "./redux/state";

export let rerenderEntireTree = (state: any) => {
    ReactDOM.createRoot(document.getElementById("root")!)
        .render(<App state={state} addPost={addPost} />);
}