// страница постов
import s from './Post.module.css';

const Post = () => {
   return (
      <>
            <div className={s.item}>
               <img src={img} /> {message}
            </div>
            {likescount}
            </>
   );
}

export default Post;