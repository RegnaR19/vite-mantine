import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Grid } from '@mantine/core';

type Props = {
   dialogsPage: any
}

const Dialogs: React.FC<Props> = ({ ...props }) => {

   let dialogsElements =
      props.dialogsPage.dialogs.map((e: any) => <DialogItem id={e.id}
         name={e.name} />)

   let messagesElements =
      props.dialogsPage.messages.map((e: any) => <Messages id={e.id}
         message={e.message} path={e.path} />)

   return (
      <>
         <Grid grow>
            <Grid.Col span={4} className={s.border}>Имена</Grid.Col>
            <Grid.Col span={8} className={s.border}>Сообщения</Grid.Col>
            <Grid.Col span={4} className={s.border}>{dialogsElements}</Grid.Col>
            <Grid.Col span={8} className={s.border}>{messagesElements}</Grid.Col>
         </Grid>
      </>
   );
}

export default Dialogs;