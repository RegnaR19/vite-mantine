import ReactDOM from "react-dom/client";
import App from "./App";

let dialogs = [
    { id: 1, name: "Валера" },
    { id: 2, name: "Димон" },
    { id: 3, name: "Руслан" },
]

let messages = [
    { id: 1, message: "Hi", path: "/profile" },
    { id: 2, message: "How are you? Im in Almenevo today", path: "/profile" },
    { id: 3, message: "Hello", path: "/profile" },
]

ReactDOM.createRoot(document.getElementById("root")!)
    .render(<App dialogs={dialogs} messages={messages} />);