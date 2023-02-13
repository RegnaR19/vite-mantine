import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root")!)
let rerenderEntireTree = (state: any) => {
   root.render(<App state={state}
      dispatch={store.dispatch.bind(store)} />);
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)