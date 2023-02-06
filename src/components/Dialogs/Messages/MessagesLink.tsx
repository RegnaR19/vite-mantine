// ссылка на сообщения
import { IconSend } from '@tabler/icons';
import { NavLink } from 'react-router-dom';

type Props = {
   id?: number,
   message?: string,
   path: string
}

const Messages: React.FC<Props> = ({ message, path }) => {

   return (
      <>
         <div><IconSend size={20}/> <NavLink to={path}>{message}</NavLink></div>
      </>
   )
}

export default Messages