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
        role
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

const CountNhanVien = gql`
query CountNhanVien{
  CountNhanVien
}`

const CountPhong = gql`
query CountPhong{
  CountPhong
}`

const CountChuyenKhoa = gql`
query CountChuyenKhoa{
  CountChuyenKhoa
}`

const CountBacSi = gql`
query CountBacSi{
  CountBacSi
}`



const getAllBacSi = gql`
query GetAllBacSi($input: FetchPagination!){
  CountBacSi
  getAllBacSi(fetchPagination: $input){
     	_id
        hoten	
        ngaysinh
        gioitinh
        diachi
        sodienthoai
        cccd
        ngayBD
        lichkham
    		phongs{
          _id
          tenphong
        }
    		chuyenkhoa{
          _id
          tenkhoa
        }
    }
}
`

const getLichKham = gql`
query GetLichKham($id: String!){
  getLichKham(id: $id){
    _id
    ngaykham{
      ngaytrongtuan
      phiens{
        batdau
        ketthuc
        trangthai
        soluongToiDa
      }
    }
    ngaynghi
  }
}`

const GetAllHoaDonCLS = gql`
query GetALlHoaDonCLSbyBenhNhan($id: String!){
  getHoaDonCLSbyBenhNhan(idbenhnhan: $id){
    _id
    bhyt
    benhnhan{
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    chitietcanlamsang{
      ten
      gia
      soluong
      thanhtien
    }
    thanhtien
    tinhtrang
    ngaytao
    idPhieuCLS
  }
}`


const CountPhieuDatLichbyNgayAndBatDau = gql`
query CountPhieuDatLichbyNgayAndBatDau($ngaykham: DateTime!, $batdau: String!){
  CountPhieuDatLichbyNgayAndBatDau(ngaykham: $ngaykham, batdau: $batdau)
}`