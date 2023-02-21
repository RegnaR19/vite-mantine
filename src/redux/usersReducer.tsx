import avatar from "../assets/avatar.jpg";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
   usersList: [
      {
         id: 1, name: "Vadim", status: "Погромист",
         city: "Альменево", img: avatar, follow: false
      },
      {
         id: 2, name: "Ruslan", status: "Студент",
         city: "Челябинск", img: avatar, follow: false
      },
      {
         id: 3, name: "Alexandr", status: "МЧС",
         city: "Куртамыш", img: avatar, follow: false
      }
   ]
}

const usersReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case ADD_POST: {
         let stateCopy = { ...state }
         return stateCopy
      }

      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = { ...state }
         return stateCopy
      }
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

export default usersReducer