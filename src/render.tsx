import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")!)
export let rerenderEntireTree = (state: any) => {
   root.render(<App state={state} addPost={addPost}
      updateNewPostText={updateNewPostText} />);
}