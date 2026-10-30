import { UserList } from "../data/data.js"
import {randomUUID} from "node:crypto"
export const resolvers = {

    Query:{
        users(){
            return UserList
        },
        filterUsers(_,args){
            const name = args.name
            const email = args.email
            console.log(email)
            if ((name !==""  && name!==null) && (email !=="" && email!==null)){
                const lista=UserList.filter(user=>user.name.toLowerCase()===name.toLowerCase() && user.email.toLowerCase() === email.toLowerCase())
                return lista
            }
            else if(email !=="" && ( name === "" || name ===null)){
                const lista=UserList.filter(user=>user.email.toLowerCase()===email.toLowerCase())
      
                return lista
            }else if((email ==="" || email ===null) && name !==""){
                
                const lista=UserList.filter(user=>user.name.toLowerCase()===name.toLowerCase())
                return lista
            }
        }


    },
    Mutation:{
        addUser(_,args){
            UserList.forEach(element => {
                if (element.email===args.input.email)
                    throw new Error("this email exist in application")
            });
            const user = args.input
            user.id = randomUUID()
            UserList.push(user)
            return user
        },
        deleteUser(_,args){
            const id = args.id
            const lista=UserList.filter(user=>user.id!=id)
            console.log(lista)
            UserList.splice(0,UserList.length,...lista)
            console.log(UserList)
            return UserList

        }
    }





}
