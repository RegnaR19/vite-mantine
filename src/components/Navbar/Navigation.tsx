// страница основного меню
import { NavLink } from 'react-router-dom';
import { Box, NavLink as NavMantine } from '@mantine/core';
import {
   IconHome2, IconSettings, IconGauge, IconChevronRight,
   IconAt, IconActivity, IconCircleOff
} from '@tabler/icons';
import s from './Navigation.module.css'

const Navigation = () => {
   return (
      <>
         <div className={s.link}>
            <NavLink to="/profile">
               <NavMantine
                  icon={<IconHome2 size={16} stroke={1.5} />}
                  description='Стена' label="Профиль"
               />
            </NavLink>
            <NavLink to="/messages">
               <NavMantine
                  icon={<IconAt size={16} stroke={1.5} />}
                  description='' label="Сообщения"
               />
            </NavLink>
            <NavLink to="/news">
               <NavMantine
                  icon={<IconChevronRight size={16} stroke={1.5} />}
                  description='' label="Новости"
               />
            </NavLink>
            <NavLink to="/music">
               <NavMantine
                  icon={<IconActivity size={16} stroke={1.5} />}
                  description='' label="Музыка"
               />
            </NavLink>
            <NavLink to="/settings">
               <NavMantine
                  icon={<IconSettings size={16} stroke={1.5} />}
                  description='' label="Настройки"
               />
            </NavLink>
            <NavLink to="/test">
               <NavMantine
                  icon={<IconCircleOff size={16} stroke={1.5} />}
                  description='Эксперименты' label="Тестовая"
               />
            </NavLink>
         </div>
      </>
   );
}

export default Navigation;