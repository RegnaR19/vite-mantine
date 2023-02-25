import { Button } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";
import { useState } from "react";
import Indent10 from "../Forms/Indent";
import UsersPage from "./UsersPage";
import axios from 'axios'

type Props = {
   users?: any
}

const Users: React.FC<Props> = ({ ...props }) => {

   axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => console.log(response))

   let usersElements =
      props.users.map((e: any) =>
         <UsersPage id2={e.id} key={e.id} name={e.name}
            status={e.status} city={e.city} img={e.img} />)


   const [nameButton, setNameButton] = useState("Подписка")
   const changeName = () => {
      setNameButton("Подписан!")
   }

   return (
      <>
         {usersElements}
         <Indent10 />
         <Button variant="outline"
            leftIcon={<IconUserPlus />}
            gradient={{ from: 'indigo', to: 'cyan' }}
            onClick={changeName}>
            {nameButton}
         </Button>
      </>
   );
}

export default Users;