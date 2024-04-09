import { gql } from "@apollo/client";

const login = gql`
mutation login($input: LoginUserInput!){
  login(loginUserInput: $input){
    access_token
  }
}
`

const datlich = gql`
mutation createDatLich($input: NewDatLichInput!){
  createDatLich(newDatLichInput: $input){
    _id
  }
}`
