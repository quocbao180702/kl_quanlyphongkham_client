import { gql } from "@apollo/client";

const login = gql`
mutation login($input: LoginUserInput!){
  login(loginUserInput: $input){
    access_token
  }
}
`


const register = gql`
mutation RegisterUser($input:  RegisterInput!){
  registerUser(registerInput: $input){
    _id
  }
}`

const datlich = gql`
mutation createDatLich($input: NewDatLichInput!){
  createDatLich(newDatLichInput: $input){
    _id
  }
}`


const updateUserbySoDienThoai = gql`
mutation UpdateUserbySoDienThoai($user: String!, $sodienthoai: String!){
  updateUserbySoDienThoai(user: $user, sodienthoai: $sodienthoai){
    _id
    user{
      username
    }
    sodienthoai
  }
}`

const updateTrangThaiThongTinUser = gql`
mutation UpdateTrangThaiThongTinUser($id: String!){
  updateTrangThaiThongTinUser(id: $id){
    _id
  }
}`


const createBenhNhan = gql`
mutation CreateBenhNhan($input: NewBenhNhanInput!){
  createBenhNhan(newBenhNhanInput: $input){
    _id
  }
}`

const updateBenhNhan = gql`
mutation UpdateBenhNhan($input: UpdateBenhNhanInput!){
  updateBenhNhan(input: $input){
    _id
  }
}`