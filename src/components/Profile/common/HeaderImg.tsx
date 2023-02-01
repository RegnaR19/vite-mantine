// обложка профиля
import s from '../MainProfile.module.css';

const HeaderImg = () => {
   return (
      <img src={`${process.env.PUBLIC_URL}/img/waifu.jpg`} className={s.waifu} />
   );
}

export default HeaderImg;