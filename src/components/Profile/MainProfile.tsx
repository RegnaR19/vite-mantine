// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import WallPage from './WallPage';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import mashiro from "../../assets/mashiro.jpg";
import naruto from "../../assets/naruto.png";
import saske from "../../assets/saske.jpg";

const MainProfile = () => {

   let currentPost = [
      { id: 1, post: "Даттебайо", likescount: 10, img: {mashiro} },
      { id: 2, post: "Chidori!", likescount: 1000, img: {saske} },
      { id: 3, post: "Rasengan!", likescount: 5000, img: {naruto} }
   ]

   return (
      <>
               {/* <HeaderImg /> обложка */}
               
               <Avatar />
{/*                
               <ProfileInfo name="Вадим" age="27" professional="реактивист"
                  city="Альменево" />  */}
           
           
               {/* <WallPage post={currentPost} key={currentPost} /> */}
            
      </>
   );
}

export default MainProfile;