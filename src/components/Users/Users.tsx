import UsersPage from "./UsersPage";

type Props = {
   users?: any,
}

const Users: React.FC<Props> = ({ ...props }) => {

   let usersElements =
      props.users.map((e: any) => <UsersPage id2={e.id} key={e.id} name={e.name}
         status={e.status} city={e.city} img={e.img} />)

   return (
      <>
         {usersElements}
      </>
   );
}

export default Users;