// страница написания постов
import { addPostCreator, updateNewPostTextCreator } from "../../redux/profileReducer";
import WritePost from "./WritePost";

type Props = {
   dispatch?: any,
   newPostText?: any,
   store: any
}

const WritePostContainer: React.FC<Props> = ({ ...props }) => {

   let state = props.store.getState().profilePage

   let onPostChange = (text: any) => {
      let action = updateNewPostTextCreator(text)
      props.store.dispatch(action)
   }

   let addPost = () => {
      props.store.dispatch(addPostCreator())
   }

   return (
      <WritePost newPostText={state.newPostText}
         addPost={addPost}
         updateNewPostText={onPostChange} />
   )
}

export default WritePostContainer;