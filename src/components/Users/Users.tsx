import Indent10 from "../Forms/Indent";
import UsersPage from "./UsersPage";
import axios from 'axios'
import React from "react";

type Props = {
   users: any,
   setUsers: any
}

class Users extends React.Component<Props> {

   constructor(props: any) {
      super(props)

      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response =>
            this.props.setUsers(response.data.items)
         )
   }

   usersElements = () => {
      return this.props.users.map((e: any) =>
         <UsersPage id2={e.id} name={e.name}
            status={e.status} city={e.city} img={e.img} />)
   }

   render() {
      return (
         <div>
            <p>Ку</p>
            {this.usersElements}
            <Indent10 />
         </div>
      )
   }
}

export default Users;