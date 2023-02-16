import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { Button, Grid, Textarea } from '@mantine/core';
import { IconPencilPlus } from '@tabler/icons';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';

type Props = {
   dialogsPage?: any,
   store?: any
}

const Dialogs: React.FC<Props> = ({ ...props }) => {

   let state = props.store.getState().dialogsPage

   let dialogsElements =
      state.dialogs.map((e: any) => <DialogItem id={e.id} name={e.name} />)

   let messagesElements =
      state.messages.map((e: any) => <Messages id={e.id} message={e.message} />)

   let newMessageBody = state.newMessageBody

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
   }

   let onNewMessageChange = (e: any) => {
      let body = e.target.value
      props.store.dispatch(updateNewMessageBodyCreator(body))
   }

   return (
      <>
         <Grid grow>
            <Grid.Col span={5} className={s.border}><b>Имена</b></Grid.Col>
            <Grid.Col span={7} className={s.border}><b>Сообщения</b></Grid.Col>
            <Grid.Col span={5} className={s.border}>{dialogsElements}</Grid.Col>
            <Grid.Col span={7} className={s.border}>
               {messagesElements}
            </Grid.Col>
         </Grid>
         <div style={{ marginBottom: 20 }} />
         <Textarea placeholder="Сообщение"
            autosize
            minRows={1}
            size="md"
            value={newMessageBody}
            onChange={onNewMessageChange} />
         <div style={{ marginBottom: 10 }} />
         <Button variant="gradient" leftIcon={<IconPencilPlus />}
            gradient={{ from: 'teal', to: 'lime', deg: 105 }}
            onClick={onSendMessageClick}>
            Отправить
         </Button>
      </>
   );
}

export default Dialogs;