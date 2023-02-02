// страница стены
import Post from './Post';

const WallPage = (props:any) => {

   let postElements =
      props.post.map(el => <Post id={el.id} message={el.post}
         likescount={el.likescount} img={el.img} key="{number}" />)

   return (
      <>
         {postElements}
      </>
   );
}

export default WallPage;