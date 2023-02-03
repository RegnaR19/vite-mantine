// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import mashiro from "../../assets/mashiro.jpg";
import naruto from "../../assets/naruto.png";
import saske from "../../assets/saske.jpg";
import Cards from './WallCards';
import { Grid } from '@mantine/core';

const MainProfile = () => {

   let currentPost = [
      { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 10, img: mashiro },
      { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: saske },
      { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: naruto }
   ]

   let postElements = currentPost.map
      (p => <Cards id={p.id} header={p.post} message={p.message}
         likescount={p.likescount} img={p.img} />)

   return (
      <div>
         <HeaderImg />
         
         <Grid>
      <Grid.Col span="content"><Avatar /></Grid.Col>
      <Grid.Col span="content"><ProfileInfo name="Вадим" age="27" professional="реактивист"
            city="Альменево" /></Grid.Col>
    </Grid>
         
         {postElements}
      </div>
   );
}

export default MainProfile;