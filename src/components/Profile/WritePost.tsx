// страница написания постов
import { Button, Textarea } from "@mantine/core";
import { IconPencilPlus } from "@tabler/icons";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/store";

type Props = {
   dispatch?: any,
   newPostText?: any,
   store?: any
}

const WritePost: React.FC<Props> = ({ ...props }) => {

   let state = props.store.getState().postPage

   let newPostText = state.newPostText

   let onPostChange = (e: any) => {
      let newText = e.target.value
      props.dispatch(updateNewPostTextCreator(newText))
   }

   let addPost = () => {
      props.store.dispatch(addPostCreator())
   }

   return (
      <>
         <b>Опубликовать новую запись</b>
         <div style={{ marginBottom: 10 }} />
         <Textarea
            placeholder="Дуров, верни стену!"
            autosize size="md"
            minRows={2}
            onChange={onPostChange}
            value={newPostText}
         />
         <div style={{ marginBottom: 10 }} />

         <Button onClick={addPost} variant="gradient"
            leftIcon={<IconPencilPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Опубликовать
         </Button>
         <div style={{ marginBottom: 10 }} />
      </>
   )
}

export default WritePost;