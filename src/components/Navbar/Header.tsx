// страница header
import { Image } from '@mantine/core';
import imageToAdd from "../../assets/ps.png";
import { Grid } from '@mantine/core';
import s from './Header.module.css';

export default function HeaderOne() {
   return (
      <>
         <Grid>
            <Grid.Col span="content">
               <Image src={imageToAdd} className={s.logo} />
            </Grid.Col>
            <Grid.Col span="content">
               Просто пустая строка
            </Grid.Col>
         </Grid>
      </>
   );
}