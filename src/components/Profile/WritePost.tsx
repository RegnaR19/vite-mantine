// страница написания постов
import { Button, Textarea } from "@mantine/core";
import { IconPencilPlus } from "@tabler/icons";
import { useRef } from "react";
import { addPostCreator, updateNewPostTextCreator } from "../../redux/store";

type Props = {
   dispatch?: any,
   newPostText?: any
}

const WritePost: React.FC<Props> = ({ ...props }) => {

   let newPostElement = useRef<HTMLTextAreaElement>(null);

   let addPost = () => {
      if (newPostElement.current !== null) {
         props.dispatch(addPostCreator)
      }
   }

   let onPostChange = () => {
      if (newPostElement.current !== null) {
         let text = newPostElement.current.value
         let action = updateNewPostTextCreator(text)
         props.dispatch(action)
      }
   }

   return (
      <>
         <b>Опубликовать новую запись</b>
         <div style={{ marginBottom: 10 }} />
         <Textarea ref={newPostElement}
            placeholder="Дуров, верни стену!"
            autosize
            minRows={2} onChange={onPostChange}
            size="md" value={props.newPostText}
         />
         <div style={{ marginBottom: 10 }} />
         <Button onClick={addPost} variant="gradient" leftIcon={<IconPencilPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Опубликовать
         </Button>
         <div style={{ marginBottom: 10 }} />
      </>
   )
}

export default WritePost;