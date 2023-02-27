import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state: any) => {
   return {
      dialogsPage: state.dialogsPage,
      newMessageBody: state.dialogsPage.newMessageBody,
      a: "Привет"
   }
}

let mapDispatchToProps = (dispatch: any) => {
   return {
      follow: (userID: any) => {
         dispatch(followAC(userID))
      },
      unfollow: (userID: any) => {
         dispatch(unfollowAC(userID))
      },
      setUsers: (users: any) => {
         dispatch(setUsersAC(users))
      }
   }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;