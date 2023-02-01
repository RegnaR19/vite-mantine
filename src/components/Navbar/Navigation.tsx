// страница основного меню
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
   return (
      <>
                     <NavLink to="/profile" className={s.active}>
                        Профиль</NavLink>
                  

                     <NavLink to="/messages" className={s.active}>
                        Сообщения</NavLink>
                  

                     <NavLink to="/news" className={s.active}>
                        Новости</NavLink>
                  

                  
                     <NavLink to="/music" className={s.active}>
                        Музыка</NavLink>
                  

                  
                     <NavLink to="/settings" className={s.active}>
                        Настройки</NavLink>
                  

                  
                     <NavLink to="/test" className={s.active}>
                        Тестовая</NavLink>
      </>
   );
}

export default Navigation;