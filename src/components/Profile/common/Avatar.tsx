// аватар профиля
import { Image } from '@mantine/core';
import avatar from "../../../assets/avatar.jpg";
import s from './Avatar.module.css'

const Avatar = () => {
   return (
      <Image src={avatar} className={s.avatar} radius="lg" />
   );
}

export default Avatar;