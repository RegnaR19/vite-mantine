// страница постов
import s from './Post.module.css';
import { Image } from 'react-bootstrap';
import { FaRegHeart } from 'react-icons/fa';

const Post = (props) => {
   return (
      <>
            <div className={s.item}>
               <Image src={props.img} /> {props.message}
            </div>

            <FaRegHeart /> {props.likescount}
            </>
   );
}

export default Post;