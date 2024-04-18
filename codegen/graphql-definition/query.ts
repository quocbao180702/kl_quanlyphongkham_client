import { gql } from "@apollo/client";

const countUser = gql`query GetCountUser{
    countUser
}`

const onlyUser = gql`
query OnlyUser{
  onlyUser{
  	... on Users{
      _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
    }
    ... on BacSi{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      user{
        _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
      }
      phongs{
        _id
        tenphong
      }
      chuyenkhoa{
        tenkhoa
      }
    }
    ... on BenhNhan{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      bhyt
      user{
        avatar{
          url
          fileName
          type
        }
        email
      }
    }
    ... on NhanVien{
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      chucvu
      user{
        _id
      username
      email
      role
      avatar{
        url
        fileName
        type
      }
      isLocked
      }
      phongs{
        _id
        tenphong
      }
    }
  }
}`


const getAllBlogPagination = gql`
query  GetAllBlogs($input: FetchPagination!){
  countBlogs
  getAllBlog(fetchPagination: $input){
    _id
    user{
      username
    }
    hinhanh{
      url
      fileName
      type
    }
    tieude
    tomtat
    noidung
    luotxem
    kichhoat
    ngaytao
  }
}`

const getLastestBlog = gql`
query GetLastestBlog($limit: Float!){
  getLastestBlog(limit: $limit){
    _id
    user{
      username
    }
    hinhanh{
      url
      fileName
      type
    }
    tieude
    tomtat
    noidung
    luotxem
    kichhoat
    ngaytao
  }
}`

const getBlogbyId = gql`
query GetBlogbyId($id: String!){
  getBlogbyId(id: $id){
  	_id
    user{
      username
    }
    tieude
    tomtat
    noidung
    hinhanh{
      url
      fileName
      type
    }
    luotxem
    ngaytao
    kichhoat
  }
}`


const getAllHoadonByBenhNhan = gql`
query GetAllHoadonByBenhNhan($id: String!){
  getAllHoadonByBenhNhan(benhnhanId: $id){
    _id
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    trangthai
    ngaytao
    bhyt
    thanhtien
    thuocs{
      ten
      gia
      soluong
      thanhtien
    }
    vattuyte{
      ten
      gia
      soluong
      thanhtien
    }
    
  }
}`


const getAllToaThuocbyBenhNhan = gql`
query GetAllToaThuocbyBenhNhan($id: String!){
  getAllToaThuocbyBenhNhan(benhnhanId: $id){
    _id
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      diachi
      sinhhieu{
        cannang
      }
    }
    bacsi{
      hoten
    }
    thuocs{
      tenthuoc
    }
    soluongs
    benhs{
      tenbenh
    }
    bhyt
    ngaytaikham
    ngaytao
  }
}`


const getBenhNhanbySodienthoai = gql`
query GetBenhNhanbySodienthoai($sodienthoai: String!){
  getBenhNhanbySodienthoai(sodienthoai: $sodienthoai){
    _id
    sodienthoai
  }
}`