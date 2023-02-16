import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

type Props = {
   dialogsPage?: any,
   store?: any
}

const DialogsContainer: React.FC<Props> = ({ ...props }) => {

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
      <Dialogs>
   )
}

export default DialogsContainer;