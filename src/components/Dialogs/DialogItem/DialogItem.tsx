// ссылка на диалог
import { NavLink } from 'react-router-dom';

type Props = {
   path?: string,
   name: string,
   id: number
}

const DialogItem:React.FC <Props> = ({id, name}) => {

   let path = "/dialogs/" + id;

   return (
      <div><NavLink to={path}>{name}</NavLink></div>
   )
}

export default DialogItem