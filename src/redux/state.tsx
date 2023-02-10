import naruto from "../assets/naruto.jpg";
import saske from "../assets/saske2.jpg";
import rem from "../assets/rem.webp";

let Store = {
   _state: {
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Валера" },
            { id: 2, name: "Димон" },
            { id: 3, name: "Руслан" }
         ],
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
         ],
         newPostText: "dattebayo"
      }
   },
   getState() {
      return this._state
   },
   _callSubscriber() {

   },
   addPost() {
      debugger
      let newPost = {
         id: 4,
         post: "Новый пост",
         message: this._state.postPage.newPostText,
         likescount: 0,
         img: rem
      }
      this._state.postPage.posts.push(newPost)
      this._state.postPage.newPostText = ''
      this._callSubscriber(this._state)
   },
   updateNewPostText(newText: any) {
      this._state.postPage.newPostText = newText
      this._callSubscriber(this._state)
   },
   subscribe(observer: any) {
      this._callSubscriber = observer;
   }
}

export default Store