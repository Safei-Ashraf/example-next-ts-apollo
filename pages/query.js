import {gql} from "@apollo/client";

export const  query =gql` 
query {
    countries {
       name
  }
}`