// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import mashiro from "../../assets/mashiro.jpg";
import naruto from "../../assets/naruto.png";
import saske from "../../assets/saske.jpg";
import Post from './Post';

const MainProfile: React.FC<Props> = () => {

      let currentPost = [
         { id: 1, post: "Даттебайо", likescount: 10, img: mashiro },
         { id: 2, post: "Chidori!", likescount: 1000, img: saske  },
         { id: 3, post: "Rasengan!", likescount: 5000, img: naruto }
      ]

      let postElements = currentPost.map
         (p => <Post id={p.id} post={p.post}
            likescount={p.likescount} img={p.img} />)

      return (
         <div>
            <HeaderImg />
            <Avatar />

            <ProfileInfo name="Вадим" age="27" professional="реактивист"
               city="Альменево" />

            {postElements}
         </div>
      );
   }

export default MainProfile;