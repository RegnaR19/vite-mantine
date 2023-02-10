import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")!)
let rerenderEntireTree = (state: any) => {
   root.render(<App state={state}
      addPost={Store.addPost.bind(Store)}
      updateNewPostText={Store.updateNewPostText.bind(Store)} />);
}

rerenderEntireTree(Store.getState());

Store.subscribe(rerenderEntireTree)