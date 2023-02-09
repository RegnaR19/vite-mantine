import ReactDOM from "react-dom/client";
import App from "./App";
import state, { subscribe } from "./redux/state";
import { addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")!)
let rerenderEntireTree = (state: any) => {
   root.render(<App state={state} addPost={addPost}
      updateNewPostText={updateNewPostText} />);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)