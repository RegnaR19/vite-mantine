// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import Cards from './WallCards';
import { Divider, Grid } from '@mantine/core';
import WritePost from './WritePost';

type Props = {
   dispatch?: any,
   store?: any
}

const MainProfile: React.FC<Props> = ({ ...props }) => {

   let state = props.store.getState().postPage

   let postElements =
      state.posts.map((p: any) =>
         <Cards id={p.id} header={p.post} message={p.message}
            likescount={p.likescount} img={p.img} />)

   return (
      <div>
         <HeaderImg />
         {/* <Divider my="sm" />
         <Grid>
            <Grid.Col span="content"><Avatar /></Grid.Col>
            <Grid.Col span="content">
               <ProfileInfo name="Вадим" age="27" professional="реактивист"
                  city="Альменево" />
            </Grid.Col>
         </Grid> */}
         <Divider my="sm" />
         <WritePost dispatch={props.dispatch} store={props.store} />
         <Divider my="sm" />
         {postElements}
      </div>
   );
}

export default MainProfile;