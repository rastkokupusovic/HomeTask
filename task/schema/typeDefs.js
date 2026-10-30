import {gql} from "graphql-tag"


 export const typeDefs = gql `
    
    type User {
        id:ID!
        name:String!
        email:String!
    }
    input  CreateUser{
        name:String!
        email:String!
    }
    type Query {
        users:[User!]
        filterUsers(name:String,email:String):[User!]

    }
    type Mutation {
        addUser(input:CreateUser):User!
        deleteUser(id:ID):[User]
    }



`
