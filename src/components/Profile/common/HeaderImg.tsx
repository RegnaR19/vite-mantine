// обложка профиля
import { Image } from '@mantine/core';
import s from './HeaderImg.module.css';
import waifu from "../../../assets/waifu.jpg";

const HeaderImg = () => {
   return (
      <Image src={waifu} className={s.waifu} />
   );
}

export default HeaderImg;