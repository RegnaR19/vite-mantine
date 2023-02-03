// страница постов
import s from './Post.module.css';
import { Image } from '@mantine/core';

type Props = {
   id: number,
   img: string,
   post: string,
   likescount: number
}

const Post: React.FC<Props> = ({ id, img, post, likescount }) => {
   return (
      <>
         <div className={s.item}>
            {id} пост.
            <Image src={img} className={s.item} />
            {post}</div>
         {likescount} лайков
      </>
   );
}

export default Post;