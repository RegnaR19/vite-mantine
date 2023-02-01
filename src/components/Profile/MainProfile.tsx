// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import WallPage from './WallPage';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';

const MainProfile = (props) => {

   let currentPost = [
      { id: 1, post: "Даттебайо", likescount: 10, img: `${process.env.PUBLIC_URL}/img/mashiro.jpg` },
      { id: 2, post: "Chidori!", likescount: 1000, img: `${process.env.PUBLIC_URL}/img/saske.jpg` },
      { id: 3, post: "Rasengan!", likescount: 5000, img: `${process.env.PUBLIC_URL}/img/naruto.png` }
   ]

   return (
      <>
               <HeaderImg /> {/* обложка */}
               
               <Avatar /> {/* аватар */}
               
               <ProfileInfo name="Вадим" age="27" professional="реактивист"
                  city="Альменево" /> {/* информация профиля */}
           
           
               <WallPage post={currentPost} key={currentPost} />
            
      </>
   );
}

export default MainProfile;