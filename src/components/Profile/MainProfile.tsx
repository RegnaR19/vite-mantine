// основная страница профиля, содержит все компоненты
import ProfileInfo from './ProfileInfo';
import HeaderImg from './common/HeaderImg';
import Avatar from './common/Avatar';
import { Divider, Grid } from '@mantine/core';
import WritePostContainer from './WritePostContainer';
import PostElements from './PostElements';

type Props = {
   dispatch?: any,
   store?: any
}

const MainProfile: React.FC<Props> = ({ ...props }) => {

   return (
      <>
         <HeaderImg />
         <Divider my="sm" />
         <Grid>
            <Grid.Col span="content"><Avatar /></Grid.Col>
            <Grid.Col span="content">
               <ProfileInfo name="Вадим" age="27" professional="реактивист"
                  city="Альменево" />
            </Grid.Col>
         </Grid>
         <Divider my="sm" />
         <WritePostContainer store={props.store} />
         <Divider my="sm" />
         <PostElements store={props.store} />
      </>
   );
}

export default MainProfile;