import { Button } from "@mantine/core";
import { IconUserPlus } from "@tabler/icons";
import { Component, useState } from "react";
import Indent10 from "../Forms/Indent";
import UsersPage from "./UsersPage";
import axios from 'axios'

type Props = {
   users: any,
   setUsers: any
}

class Users extends Component<Props> {

   getUsers = () => {
      if (this.props.users.length > 0) {
         axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response =>
               this.props.setUsers(response.data.items)
            )
      }
   }

   usersElements = () => {
      this.props.users.map((e: any) =>
         <UsersPage id2={e.id} name={e.name}
            status={e.status} city={e.city} img={e.img} />)
   }

   log = () => { console.log(this.getUsers) }

   render() {
      return (
         <>
            {this.usersElements}
            <Indent10 />
            <Button variant="outline"
               leftIcon={<IconUserPlus />}
               gradient={{ from: 'indigo', to: 'cyan' }}
               onClick={this.getUsers}>
               Получить пользователей
            </Button>
         </>
      )
   }
}

export default Users;