import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

type Props = {
   store?: any
}

const DialogsContainer: React.FC<Props> = ({ ...props }) => {

   let state = props.store.getState().dialogsPage

   let newMessageBody = state.newMessageBody

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator())
   }

   let onNewMessageChange = (body: any) => {
      props.store.dispatch(updateNewMessageBodyCreator(body))
   }

   return <Dialogs updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick} dialogsPage={state}
      newMessageBody={newMessageBody} />
}

export default DialogsContainer;