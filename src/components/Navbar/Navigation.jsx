// страница основного меню
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { FaRegUser } from 'react-icons/fa';
import { TbMessageCircle } from 'react-icons/tb';
import { IoIosPaper } from 'react-icons/io';
import { RiMusic2Line } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';

const Navigation = () => {
   return (
      <>
                     <NavLink to="/profile" className={s.active}>
                        <FaRegUser /> Профиль</NavLink>
                  

                     <NavLink to="/messages" className={s.active}>
                        <TbMessageCircle /> Сообщения</NavLink>
                  

                     <NavLink to="/news" className={s.active}>
                        <IoIosPaper /> Новости</NavLink>
                  

                  
                     <NavLink to="/music" className={s.active}>
                        <RiMusic2Line /> Музыка</NavLink>
                  

                  
                     <NavLink to="/settings" className={s.active}>
                        <FiSettings /> Настройки</NavLink>
                  

                  
                     <NavLink to="/test" className={s.active}>
                        <FiSettings /> Тестовая</NavLink>
      </>
   );
}

export default Navigation;