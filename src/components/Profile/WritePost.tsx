// страница написания постов
import { Button, Grid, Textarea } from "@mantine/core";
import { IconPencilPlus } from "@tabler/icons";

const WritePost = () => {
   return (
      <div>
         <b>Опубликовать новую запись</b>
         <div style={{ marginBottom: 10 }} />
         <Textarea
            placeholder="Дуров, верни стену!"
            autosize
            minRows={3}
            size="md"
         />
         <div style={{ marginBottom: 10 }} />
         <Button variant="gradient" leftIcon={<IconPencilPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}>
            Опубликовать
         </Button>
         <div style={{ marginBottom: 10 }} />
      </div>
   )
}

export default WritePost;