import ReactDOM from "react-dom/client";
import App from "./App";
import Store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root")!)
let rerenderEntireTree = (_state: any) => {
   root.render(<App _state={_state}
      addPost={Store.addPost.bind(Store)}
      updateNewPostText={Store.updateNewPostText.bind(Store)} />);
}

rerenderEntireTree(Store.getState());

Store.subscribe(rerenderEntireTree)