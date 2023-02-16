import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root")!)
let rerenderEntireTree = (state: any) => {
   root.render(<App dispatch={store.dispatch.bind(store)}
      store={store} />);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
   let state = store.getState()
   rerenderEntireTree(state)
})