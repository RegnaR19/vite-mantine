// страница header
import s from './Header.module.css';

const Header = () => {
   return (
      <>
            <img src={`${process.env.PUBLIC_URL}/img/ps.png`} className={s.logo} />
            
            Просто пустая строка, которая ждет своего часа
            </>
   );
}

export default Header;