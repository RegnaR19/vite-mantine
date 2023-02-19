import { connect } from "react-redux";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profileReducer";
import Users from "./Users";

let mapStateToProps = (state: any) => {
   return {
      users: state.usersPage.usersList
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      updateNewPostText: (text: any) => {
         dispatch(updateNewPostTextCreator(text))
      },
      addPost: () => {
         dispatch(addPostCreator())
      }
   }
}

const UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer;