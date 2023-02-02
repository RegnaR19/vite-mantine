// обложка профиля
import { Image } from '@mantine/core';
import s from '../MainProfile.module.css';
import waifu from "../../../assets/waifu.jpg";

const HeaderImg = () => {
   return (
      <Image src={waifu} className={s.waifu} radius="lg" />
   );
}

export default HeaderImg;