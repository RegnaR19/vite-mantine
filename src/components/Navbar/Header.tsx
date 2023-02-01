// страница header
import { Image } from '@mantine/core';
import imageToAdd from "../../assets/ps.png";
import { Grid } from '@mantine/core';
import s from './Header.module.css';

export default function HeaderOne() {
   return (
         <Grid>
            <Grid.Col span={6}>
               <Image src={imageToAdd} className={s.logo} />
            </Grid.Col>
            <Grid.Col span={6}>
               Просто пустая строка, которая ждет своего часа
            </Grid.Col>
         </Grid>
   );
}