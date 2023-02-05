// ссылка на сообщения
import { NavLink } from 'react-router-dom';

type Props = {
   id?: number,
   message?: string,
   path: string
}

const Messages: React.FC<Props> = ({ message, path }) => {

   return (
      <>
         <div><NavLink to={path}>{message}</NavLink></div>
      </>
   )
}

export default Messages