import rem from "../assets/rem.webp";
import saske from "../assets/saske2.jpg";
import naruto from "../assets/naruto.jpg";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
   posts: [
      { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 300, img: rem },
      { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: saske },
      { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: naruto },
   ],
   newPostText: 'dattebayo naruto'
}

const profileReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case ADD_POST:
         let text = state.newPostText
         let newPost = {
            id: 4,
            post: "Новый пост",
            message: text,
            likescount: 40,
            img: rem
         }
         if (text != '') {
            state.posts.push(newPost)
            state.newPostText = ''
         }
         else if (text === '') {
            let a = 'Вы ничего не ввели!'
            alert(a)
         }
         return state

      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.text
         return state

      default:
         return state
   }
}

export const addPostCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextCreator = (text: any) => {
   return {
      type: UPDATE_NEW_POST_TEXT, text: text
   }
}

export default profileReducer