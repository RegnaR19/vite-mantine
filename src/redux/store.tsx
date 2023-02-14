import naruto from "../assets/naruto.jpg";
import rem from "../assets/rem.webp";
import saske from "../assets/saske2.jpg";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
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
         ],
         newMessageBody: ""
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
   _callSubscriber(_state: any) {
      console.log('State was changed')
   },
   _addPost() {
      let newPost = {
         id: 4,
         post: "Новый пост",
         message: this._state.postPage.newPostText,
         likescount: 40,
         img: rem
      }
      this._state.postPage.posts.push(newPost)
      this._state.postPage.newPostText = ''
      this._callSubscriber(this._state)
   },

   _updateNewPostText(newText: any) {
      this._state.postPage.newPostText = newText
      this._callSubscriber(this._state)
   },

   _updateNewMessageBody(body: any) {
      this._state.dialogsPage.newMessageBody = body
      this._callSubscriber(this._state)
   },

   _updateSendMessage(textMessage: any) {
      this._state.dialogsPage.sendMessage = textMessage
      this._callSubscriber(this._state)
   },

   dispatch(action: any) {
      if (action.type === ADD_POST) {
         this._addPost()
      }
      else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._updateNewPostText(action.newText)
      }
      else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
         this._updateNewMessageBody(action.body)
      }
      else if (action.type === SEND_MESSAGE) {
         this._updateSendMessage(action.textMessage)
      }
   },
   subscribe(observer: any) {
      this._callSubscriber = observer;
   },
}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextActionCreator = (text: any) => {
   return {
      type: UPDATE_NEW_POST_TEXT, newText: text
   }
}

export default store