// ссылка на сообщения
import { TbMessageDots } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Messages = (props) => {
   return (
      <div><NavLink to={props.id}><TbMessageDots />{props.message}</NavLink></div>
   )
}

export default Messages