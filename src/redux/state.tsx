import naruto from "../assets/naruto.jpg";
import saske from "../assets/saske.jpg";
import rem from "../assets/rem.webp";

let state = {
   dialogsPage: {
      dialogs: [
         { id: 1, name: "Валера" },
         { id: 2, name: "Димон" },
         { id: 3, name: "Руслан" }],
      messages: [
         { id: 1, message: "Hi", path: "/profile" },
         { id: 2, message: "How are you? Im in Almenevo today", path: "/profile" },
         { id: 3, message: "Hello", path: "/profile" },
      ]
   },
   postPage: {
      posts: [
         { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 300, img: rem },
         { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: saske },
         { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: naruto },
      ]
   }
}

export let addDialogs: any = (newDialogs: any) => {
   let newPost = {
      id: 4,
      name: newDialogs
   }
   state.dialogsPage.dialogs.push(newPost)
}

export default state