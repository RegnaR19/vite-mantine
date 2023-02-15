import naruto from "../assets/naruto.jpg";
import rem from "../assets/rem.webp";
import saske from "../assets/saske2.jpg";

// задаем константы
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

// задаем store
let store = {
   _state: {
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Валера" },
            { id: 2, name: "Димон" },
            { id: 3, name: "Руслан" }
         ],
         messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you? Im in Almenevo today" },
            { id: 3, message: "Hello" },
         ],
         newMessageBody: 'Ку'
      },
      postPage: {
         posts: [
            { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 300, img: rem },
            { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: saske },
            { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: naruto },
         ],
         newPostText: 'dattebayo'
      }
   },
   // задаем возврат состояния
   getState() {
      return this._state
   },
   // вызов подписчика
   _callSubscriber(_state: any) {
      console.log('State was changed')
   },
   // добавляем посты
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

   // передаем переменные из стора в новые переменные
   _updateNewPostText(newText: any) {
      this._state.postPage.newPostText = newText
      this._callSubscriber(this._state)
   },

   _updateNewMessageBody(body: any) {
      this._state.dialogsPage.newMessageBody = body
      this._callSubscriber(this._state)
   },
   _updateSendMessage(body: any) {
      body = this._state.dialogsPage.newMessageBody
      if (body === '') {
         this._callSubscriber(this._state)
      }
      else if (body != '') {
         this._state.dialogsPage.messages.push({ id: 45, message: body })
         this._state.dialogsPage.newMessageBody = ''
         this._callSubscriber(this._state)
      }
   },

   // делаем диспатч экшенов по типу
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
         this._updateSendMessage(action.body)
      }
   },
   subscribe(observer: any) {
      this._callSubscriber = observer;
   },
}

export const addPostCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextCreator = (newText: any) => {
   return {
      type: UPDATE_NEW_POST_TEXT, newText: newText
   }
}

export const sendMessageCreator = () => {
   return {
      type: SEND_MESSAGE
   }
}

export const updateNewMessageBodyCreator = (body: any) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY, body: body
   }
}

export default store