// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import naruto from "../../assets/naruto.jpg";
import saske from "../../assets/saske.jpg";
import rem from "../../assets/rem.webp";
import Cards from './WallCards';
import { Divider, Grid } from '@mantine/core';
import WritePost from './WritePost';
import AccountMenu from './AccountMenu';

const MainProfile = () => {

   let currentPost = [
      { id: 1, post: "Даттебайо", message: "Я тут новенькая", likescount: 300, img: rem },
      { id: 2, post: "Chidori!", message: "НАРУТО!!!11!", likescount: 1000, img: saske },
      { id: 3, post: "Rasengan!", message: "САСКЕ!!!11!", likescount: 5000, img: naruto }
   ]

   let postElements = currentPost.map
      (p => <Cards id={p.id} header={p.post} message={p.message}
         likescount={p.likescount} img={p.img} />)

   return (
      <div>
         <HeaderImg />
         <Divider my="sm" />
         <Grid>
            <Grid.Col span="content"><Avatar /></Grid.Col>
            <Grid.Col span="content"><ProfileInfo name="Вадим" age="27" professional="реактивист"
               city="Альменево" /></Grid.Col>
         </Grid>

         <Divider my="sm" />
         <WritePost />
         <Divider my="sm" />
         {postElements}
      </div>
   );
}

export default MainProfile;