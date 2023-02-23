import avatar from "../assets/avatar.jpg";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
   usersList: [
      {
         id: 1, name: "Vadim", status: "Погромист",
         city: "Альменево", img: avatar, followed: false
      },
      {
         id: 2, name: "Ruslan", status: "Студент",
         city: "Челябинск", img: avatar, followed: false
      },
      {
         id: 3, name: "Alexandr", status: "МЧС",
         city: "Куртамыш", img: avatar, followed: false
      }
   ]
}

const usersReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case FOLLOW: {
         return {
            ...state,
            usersList: state.usersList.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: false }
               }
               return u
            })
         }
      }
      case UNFOLLOW: {
         return {
            ...state,
            usersList: state.usersList.map(u => {
               if (u.id === action.userID) {
                  return { ...u, followed: true }
               }
               return u
            })
         }
      }
      default:
         return state
   }
}

export const followAC = (userID: any) => {
   return {
      type: FOLLOW, userID
   }
}

export const unfollowAC = (userID: any) => {
   return {
      type: UNFOLLOW, userID
   }
}

export const setUsersAC = (users) => {
   return {
      type: SET_USERS, users
   }
}


export default usersReducer