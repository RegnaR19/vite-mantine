import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/MessagesLink';

let dialogsData = [
   { id: 1, name: "Валера" },
   { id: 2, name: "Димон" },
   { id: 3, name: "Руслан" },
]

let messagesData = [
   { id: 1, message: "Hi" },
   { id: 2, message: "How are you? Im in Almenevo today" },
   { id: 3, message: "Hello" },
]

let dialogsElements = dialogsData.map((el) => < DialogItem id={el.id} name={el.name} />)
let messagesElements = messagesData.map((el) => <Messages id={el.id} message={el.message} />)

const Dialogs = (props) => {
   return (
      <>
               Имена
               
               Сообщения
               
               {props.dialogsElements}

               {props.messagesElements}
               </>
   );
}

export default Dialogs;