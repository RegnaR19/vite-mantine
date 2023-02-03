// страница header
import { Image } from '@mantine/core';
import imageToAdd from "../../assets/ps.png";
import { Grid, Col } from '@mantine/core';
import s from './Header.module.css';

export default function HeaderOne() {
   return (
      <>
         <Image src={imageToAdd} className={s.logo} />

         Просто пустая строка
      </>
   );
}