import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BacSi = {
  __typename?: 'BacSi';
  _id: Scalars['ID']['output'];
  cccd: Scalars['String']['output'];
  chuyenkhoa: ChuyenKhoa;
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  sodienthoai: Scalars['String']['output'];
  user: Users;
};

export type Benh = {
  __typename?: 'Benh';
  _id: Scalars['ID']['output'];
  chuongbenh: Scalars['String']['output'];
  maICD: Scalars['String']['output'];
  motabenh: Scalars['String']['output'];
  tenbenh: Scalars['String']['output'];
};

export type BenhNhan = {
  __typename?: 'BenhNhan';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['String']['output'];
  cccd: Scalars['String']['output'];
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  sinhhieu?: Maybe<Sinhhieu>;
  sodienthoai: Scalars['String']['output'];
  user: Users;
};

export type Blog = {
  __typename?: 'Blog';
  _id: Scalars['ID']['output'];
  hinhanh: LinkImage;
  kichhoat: Scalars['Boolean']['output'];
  luotxem: Scalars['Int']['output'];
  ngaytao: Scalars['DateTime']['output'];
  noidung: Scalars['String']['output'];
  tieude: Scalars['String']['output'];
  tomtat?: Maybe<Scalars['String']['output']>;
  user: Users;
};

export type ChiPhi = {
  __typename?: 'ChiPhi';
  bhyt: Scalars['Boolean']['output'];
  gia: Scalars['Float']['output'];
};

export type ChiPhiInput = {
  bhyt: Scalars['Boolean']['input'];
  gia: Scalars['Float']['input'];
};

export type ChuyenKhoa = {
  __typename?: 'ChuyenKhoa';
  _id: Scalars['ID']['output'];
  mota: Scalars['String']['output'];
  tenkhoa: Scalars['String']['output'];
};

export type CreateBlogInput = {
  hinhanh: LinkImageInput;
  noidung: Scalars['String']['input'];
  tieude: Scalars['String']['input'];
  tomtat: Scalars['String']['input'];
  user: Scalars['String']['input'];
};

export type CreateDichvuInput = {
  bhyt: Scalars['Boolean']['input'];
  dvt: Scalars['String']['input'];
  gia: Scalars['Float']['input'];
  soluong: Scalars['Int']['input'];
  tendichvu: Scalars['String']['input'];
};

export type CreateHoadonInput = {
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  ngaytao: Scalars['DateTime']['input'];
};

export type CreateHoadonchidinhcanlamsangInput = {
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  chitietcanlamsang: Array<DichVuInput>;
};

export type CreateKetquacanlamsangInput = {
  loaicanlamsang: Scalars['String']['input'];
};

export type CreatePhieuXacNhanInput = {
  benhnhan: Scalars['String']['input'];
  email: Scalars['String']['input'];
  ngaykham: Scalars['DateTime']['input'];
  ngaytao: Scalars['DateTime']['input'];
  phongs: Array<Scalars['String']['input']>;
};

export type CreatePhieuchidinhcanlamsangInput = {
  bacsi: Scalars['String']['input'];
  benhnhan: Scalars['String']['input'];
  bhyt: Scalars['Boolean']['input'];
  ngaytao: Scalars['DateTime']['input'];
  phieuxacnhan: Scalars['String']['input'];
};

export type CreateSinhhieuInput = {
  benhmangtinh: Scalars['Boolean']['input'];
  benhnhan: Scalars['String']['input'];
  bmi: Scalars['Float']['input'];
  cannang: Scalars['Float']['input'];
  chieucao: Scalars['Float']['input'];
  ha: Scalars['String']['input'];
  mach: Scalars['Float']['input'];
  nhietdo: Scalars['Float']['input'];
};

export type CreateSobenhInput = {
  benhnhan: Scalars['String']['input'];
  ngaytao: Scalars['DateTime']['input'];
};

export type CreateToathuocInput = {
  bacsi: Scalars['String']['input'];
  benhnhan: Scalars['String']['input'];
  benhs: Array<Scalars['String']['input']>;
  bhyt: Scalars['Boolean']['input'];
  ngaytaikham: Scalars['DateTime']['input'];
  ngaytao: Scalars['DateTime']['input'];
  soluongs: Array<Scalars['Int']['input']>;
  thuocs: Array<Scalars['String']['input']>;
};

export type CreateVattuyteInput = {
  chiphi: Array<ChiPhiInput>;
  dvt: Scalars['String']['input'];
  soluong: Scalars['Int']['input'];
  tenvattu: Scalars['String']['input'];
};

export type DatLich = {
  __typename?: 'DatLich';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  email: Scalars['String']['output'];
  motabenh: Scalars['String']['output'];
  ngaydat: Scalars['DateTime']['output'];
  ngaykham: Scalars['DateTime']['output'];
  trangthai: TrangThaiDatKham;
};

export type DichVu = {
  __typename?: 'DichVu';
  gia: Scalars['Float']['output'];
  soluong: Scalars['Int']['output'];
  ten: Scalars['String']['output'];
  thanhtien: Scalars['Float']['output'];
};

export type DichVuInput = {
  gia: Scalars['Float']['input'];
  soluong: Scalars['Int']['input'];
  ten: Scalars['String']['input'];
  thanhtien: Scalars['Float']['input'];
};

export type Dichvu = {
  __typename?: 'Dichvu';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['Boolean']['output'];
  dvt: Scalars['String']['output'];
  gia: Scalars['Float']['output'];
  hoadons: Array<Hoadon>;
  soluong: Scalars['Int']['output'];
  tendichvu: Scalars['String']['output'];
};

export type FetchPagination = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type FetchUsersArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Hoadon = {
  __typename?: 'Hoadon';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  ngaytao: Scalars['DateTime']['output'];
  thanhtien: Scalars['Float']['output'];
  thuocs: Array<DichVu>;
  trangthai: Scalars['Boolean']['output'];
  vattuyte: Array<DichVu>;
};

export type Hoadonchidinhcanlamsang = {
  __typename?: 'Hoadonchidinhcanlamsang';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  chitietcanlamsang: Array<DichVu>;
  ngaytao: Scalars['DateTime']['output'];
  thanhtien: Scalars['Float']['output'];
  tinhtrang: Scalars['Boolean']['output'];
};

export type KetQuaCanLamSang = {
  __typename?: 'KetQuaCanLamSang';
  _id: Scalars['ID']['output'];
  hinhanh?: Maybe<LinkImage>;
  ketluan?: Maybe<Scalars['String']['output']>;
  loaicanlamsang: LoaiCanLamSang;
  thietbi?: Maybe<Scalars['String']['output']>;
};

export type LinkImage = {
  __typename?: 'LinkImage';
  fileName: Scalars['String']['output'];
  type: TypeImage;
  url: Scalars['String']['output'];
};

export type LinkImageInput = {
  fileName: Scalars['String']['input'];
  type: TypeImage;
  url: Scalars['String']['input'];
};

export type LoaiCanLamSang = {
  __typename?: 'LoaiCanLamSang';
  _id: Scalars['ID']['output'];
  gia: Scalars['Float']['output'];
  loaicanlamsang: Scalars['String']['output'];
  mota: Scalars['String']['output'];
  tenxetnghiem: Scalars['String']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String']['output'];
  code: Scalars['Int']['output'];
  success: Scalars['Boolean']['output'];
};

export type LoginUserInput = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBacSi: BacSi;
  createBenh: Benh;
  createBenhNhan: BenhNhan;
  createBlog: Blog;
  createChuyenKhoa: ChuyenKhoa;
  createDatLich?: Maybe<DatLich>;
  createDichvu: Dichvu;
  createHoadon: Hoadon;
  createHoadonchidinhcanlamsang: Hoadonchidinhcanlamsang;
  createKetquacanlamsang: KetQuaCanLamSang;
  createLoaicanlamsang: LoaiCanLamSang;
  createNhanVien: NhanVien;
  createPhieuXacNhan: PhieuXacNhan;
  createPhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  createPhong: Phong;
  createSinhhieu: Sinhhieu;
  createSobenh: Sobenh;
  createThuoc: Thuoc;
  createToathuoc: Toathuoc;
  createUser: Users;
  createVatTuYTe: Vattuyte;
  deleteBacSi: Scalars['Boolean']['output'];
  deleteBenh: Scalars['Boolean']['output'];
  deleteBenhNhan: Scalars['Boolean']['output'];
  deleteBlog: Scalars['Boolean']['output'];
  deleteChuyenKhoa: Scalars['Boolean']['output'];
  deleteDatLich: Scalars['Boolean']['output'];
  deleteDichvu: Dichvu;
  deleteHoadon: Scalars['Boolean']['output'];
  deleteLoaicanlamsang: Scalars['Boolean']['output'];
  deleteNhanVien: Scalars['Boolean']['output'];
  deletePhieuXacNhan: Scalars['Boolean']['output'];
  deletePhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  deletePhong: Scalars['Boolean']['output'];
  deleteSinhhieu: Sinhhieu;
  deleteSobenh: Sobenh;
  deleteThuoc: Scalars['Boolean']['output'];
  deleteToathuoc: Toathuoc;
  deleteUser: Scalars['Boolean']['output'];
  deleteVatTuYTe: Scalars['Boolean']['output'];
  login: LoginResponse;
  loginwithGoogleCallback: LoginResponse;
  logout?: Maybe<Scalars['Boolean']['output']>;
  updateBacSi: BacSi;
  updateBenh: Benh;
  updateBenhNhan: BenhNhan;
  updateBlog: Blog;
  updateChuyenKhoa: ChuyenKhoa;
  updateDatLich: DatLich;
  updateDichvu: Dichvu;
  updateHoadon: Hoadon;
  updateKetquacanlamsang: KetQuaCanLamSang;
  updateKichHoat: Scalars['Boolean']['output'];
  updateLoaicanlamsang: LoaiCanLamSang;
  updateNhanVien: NhanVien;
  updatePhieuXacNhan: PhieuXacNhan;
  updatePhieuchidinhcanlamsang: Phieuchidinhcanlamsang;
  updatePhong: Phong;
  updateSinhhieu: Sinhhieu;
  updateSobenh: Sobenh;
  updateSoluongThuoc: Thuoc;
  updateThuoc: Thuoc;
  updateTinhTrangHoaDonCLS: Hoadonchidinhcanlamsang;
  updateToathuoc: Toathuoc;
  updateTrangThaiCanLamSang: Phieuchidinhcanlamsang;
  updateTrangThaiDatLich: DatLich;
  updateTrangThaiHoaDon: Hoadon;
  updateTrangThaiKham: PhieuXacNhan;
  updateUser: Users;
  updateVatTuYTe: Vattuyte;
  xulyKhoa: Users;
};


export type MutationCreateBacSiArgs = {
  newBacSiInput: NewBacSiInput;
};


export type MutationCreateBenhArgs = {
  newBenhInput: NewBenhInput;
};


export type MutationCreateBenhNhanArgs = {
  newBenhNhanInput: NewBenhNhanInput;
};


export type MutationCreateBlogArgs = {
  createBlogInput: CreateBlogInput;
};


export type MutationCreateChuyenKhoaArgs = {
  newChuyenKhoaInput: NewChuyenKhoaInput;
};


export type MutationCreateDatLichArgs = {
  newDatLichInput: NewDatLichInput;
};


export type MutationCreateDichvuArgs = {
  createDichvuInput: CreateDichvuInput;
};


export type MutationCreateHoadonArgs = {
  createHoadonInput: CreateHoadonInput;
};


export type MutationCreateHoadonchidinhcanlamsangArgs = {
  createHoadonchidinhcanlamsang: CreateHoadonchidinhcanlamsangInput;
};


export type MutationCreateKetquacanlamsangArgs = {
  createKetquacanlamsangInput: CreateKetquacanlamsangInput;
};


export type MutationCreateLoaicanlamsangArgs = {
  createLoaicanlamsangInput: NewLoaiCanLamSangInput;
};


export type MutationCreateNhanVienArgs = {
  newNhanVienInput: NewNhanVienInput;
};


export type MutationCreatePhieuXacNhanArgs = {
  newPhieuXacNhanInput: CreatePhieuXacNhanInput;
};


export type MutationCreatePhieuchidinhcanlamsangArgs = {
  createKetQuaCLSList: Array<CreateKetquacanlamsangInput>;
  createPhieuchidinhcanlamsangInput: CreatePhieuchidinhcanlamsangInput;
};


export type MutationCreatePhongArgs = {
  newPhongInput: NewPhongInput;
};


export type MutationCreateSinhhieuArgs = {
  createSinhhieuInput: CreateSinhhieuInput;
};


export type MutationCreateSobenhArgs = {
  createSobenhInput: CreateSobenhInput;
};


export type MutationCreateThuocArgs = {
  newThuocInput: NewThuocInput;
};


export type MutationCreateToathuocArgs = {
  createToathuocInput: CreateToathuocInput;
};


export type MutationCreateUserArgs = {
  newUserInput: NewUserInput;
};


export type MutationCreateVatTuYTeArgs = {
  createDichvuInput: CreateVattuyteInput;
};


export type MutationDeleteBacSiArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteBenhArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteBenhNhanArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteBlogArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteChuyenKhoaArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDatLichArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteDichvuArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteHoadonArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLoaicanlamsangArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNhanVienArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeletePhieuXacNhanArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeletePhieuchidinhcanlamsangArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePhongArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteSinhhieuArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSobenhArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteThuocArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteToathuocArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  _id: Scalars['String']['input'];
};


export type MutationDeleteVatTuYTeArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationUpdateBacSiArgs = {
  input: UpdateBacSiInput;
};


export type MutationUpdateBenhArgs = {
  input: UpdateBenhInput;
};


export type MutationUpdateBenhNhanArgs = {
  input: UpdateBenhNhanInput;
};


export type MutationUpdateBlogArgs = {
  updateBlogInput: UpdateBlogInput;
};


export type MutationUpdateChuyenKhoaArgs = {
  updateChuyenKhoaInput: UpdateChuyenKhoaInput;
};


export type MutationUpdateDatLichArgs = {
  input: UpdateDatLichInput;
};


export type MutationUpdateDichvuArgs = {
  updateDichvuInput: UpdateDichvuInput;
};


export type MutationUpdateHoadonArgs = {
  updateHoadonInput: UpdateHoadonInput;
};


export type MutationUpdateKetquacanlamsangArgs = {
  updateKetquacanlamsangInput: UpdateKetquacanlamsangInput;
};


export type MutationUpdateKichHoatArgs = {
  _id: Scalars['String']['input'];
};


export type MutationUpdateLoaicanlamsangArgs = {
  updateLoaicanlamsangInput: UpdateLoaicanlamsangInput;
};


export type MutationUpdateNhanVienArgs = {
  input: UpdateNhanVienInput;
};


export type MutationUpdatePhieuXacNhanArgs = {
  input: UpdatePhieuXacNhanInput;
};


export type MutationUpdatePhieuchidinhcanlamsangArgs = {
  updatePhieuchidinhcanlamsangInput: UpdatePhieuchidinhcanlamsangInput;
};


export type MutationUpdatePhongArgs = {
  input: UpdatePhongInput;
};


export type MutationUpdateSinhhieuArgs = {
  updateSinhhieuInput: UpdateSinhhieuInput;
};


export type MutationUpdateSobenhArgs = {
  updateSobenhInput: UpdateSobenhInput;
};


export type MutationUpdateSoluongThuocArgs = {
  id: Scalars['String']['input'];
  soluongdung: Scalars['Float']['input'];
};


export type MutationUpdateThuocArgs = {
  input: UpdateThuocInput;
};


export type MutationUpdateTinhTrangHoaDonClsArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateToathuocArgs = {
  updateToathuocInput: UpdateToathuocInput;
};


export type MutationUpdateTrangThaiCanLamSangArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiDatLichArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiHoaDonArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateTrangThaiKhamArgs = {
  id: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateVatTuYTeArgs = {
  updateDichvuInput: UpdateVattuyteInput;
};


export type MutationXulyKhoaArgs = {
  id: Scalars['String']['input'];
};

export type NewBacSiInput = {
  cccd: Scalars['String']['input'];
  chuyenkhoa: Scalars['ID']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phongs: Array<Scalars['ID']['input']>;
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type NewBenhInput = {
  chuongbenh: Scalars['String']['input'];
  maICD: Scalars['String']['input'];
  motabenh: Scalars['String']['input'];
  tenbenh: Scalars['String']['input'];
};

export type NewBenhNhanInput = {
  bhyt: Scalars['String']['input'];
  cccd: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type NewChuyenKhoaInput = {
  mota: Scalars['String']['input'];
  tenkhoa: Scalars['String']['input'];
};

export type NewDatLichInput = {
  email: Scalars['String']['input'];
  hoten: Scalars['String']['input'];
  motabenh: Scalars['String']['input'];
  ngaydat: Scalars['DateTime']['input'];
  ngaykham: Scalars['DateTime']['input'];
  sodienthoai: Scalars['String']['input'];
};

export type NewLoaiCanLamSangInput = {
  gia: Scalars['Float']['input'];
  loaicanlamsang: Scalars['String']['input'];
  mota: Scalars['String']['input'];
  tenxetnghiem: Scalars['String']['input'];
};

export type NewNhanVienInput = {
  cccd: Scalars['String']['input'];
  chucvu: Scalars['String']['input'];
  diachi: Scalars['String']['input'];
  gioitinh: Scalars['Boolean']['input'];
  hoten: Scalars['String']['input'];
  ngayBD: Scalars['DateTime']['input'];
  ngaysinh: Scalars['DateTime']['input'];
  phongs: Array<Scalars['String']['input']>;
  sodienthoai: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type NewPhongInput = {
  chuyenkhoa: Scalars['String']['input'];
  mota: Scalars['String']['input'];
  tenphong: Scalars['String']['input'];
};

export type NewThuocInput = {
  bhyt: Scalars['Boolean']['input'];
  dangthuoc: Scalars['String']['input'];
  donvi: Scalars['String']['input'];
  giaBHYT: Scalars['Float']['input'];
  giaKhongBHYT: Scalars['Float']['input'];
  hamluong: Scalars['Float']['input'];
  hansudung: Scalars['String']['input'];
  nhasanxuat: Scalars['String']['input'];
  soluong: Scalars['Int']['input'];
  tenPhoBien: Scalars['String']['input'];
  tenthuoc: Scalars['String']['input'];
};

export type NewUserInput = {
  avatar?: InputMaybe<LinkImageInput>;
  email: Scalars['String']['input'];
  isLocked: Scalars['Boolean']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type NhanVien = {
  __typename?: 'NhanVien';
  _id: Scalars['ID']['output'];
  cccd: Scalars['String']['output'];
  chucvu: Scalars['String']['output'];
  diachi: Scalars['String']['output'];
  gioitinh: Scalars['Boolean']['output'];
  hoten: Scalars['String']['output'];
  ngayBD: Scalars['DateTime']['output'];
  ngaysinh: Scalars['DateTime']['output'];
  phongs: Array<Phong>;
  sodienthoai: Scalars['String']['output'];
  user: Users;
};

export type OnlyUser = BacSi | BenhNhan | NhanVien | Users;

export type PhieuXacNhan = {
  __typename?: 'PhieuXacNhan';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  ngaykham: Scalars['DateTime']['output'];
  ngaytao: Scalars['DateTime']['output'];
  phieuchidinhcanlamsang?: Maybe<Phieuchidinhcanlamsang>;
  phongs: Array<Phong>;
  sothutu: Scalars['Int']['output'];
  trangthai: TrangThaiKham;
};

export type Phieuchidinhcanlamsang = {
  __typename?: 'Phieuchidinhcanlamsang';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  bhyt: Scalars['Boolean']['output'];
  ketquacanlamsangs: Array<KetQuaCanLamSang>;
  ngaytao: Scalars['DateTime']['output'];
  phieuxacnhan: PhieuXacNhan;
  trangthai: Scalars['Boolean']['output'];
};

export type Phong = {
  __typename?: 'Phong';
  _id: Scalars['ID']['output'];
  chuyenkhoa?: Maybe<ChuyenKhoa>;
  mota: Scalars['String']['output'];
  tenphong: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  CountBacSi: Scalars['Float']['output'];
  CountBenhNhan: Scalars['Float']['output'];
  CountThuoc: Scalars['Float']['output'];
  countBlogs: Scalars['Float']['output'];
  countUser: Scalars['Float']['output'];
  findAllRelatedKetQuaCanLamSang?: Maybe<Array<KetQuaCanLamSang>>;
  getAllBacSi: Array<BacSi>;
  getAllBenh: Array<Benh>;
  getAllBenhNhan: Array<BenhNhan>;
  getAllBenhNhanNoPagination: Array<BenhNhan>;
  getAllBlog: Array<Blog>;
  getAllByNgayVaPhong: Array<PhieuXacNhan>;
  getAllChuyenKhoa: Array<ChuyenKhoa>;
  getAllDatLich?: Maybe<Array<DatLich>>;
  getAllDatLichbyTrangThai?: Maybe<Array<DatLich>>;
  getAllDichVu: Array<Dichvu>;
  getAllHoaDonPhieuCanLamSang: Array<Hoadonchidinhcanlamsang>;
  getAllHoadon: Array<Hoadon>;
  getAllHoadonByBenhNhan: Array<Hoadon>;
  getAllLoaiCLS: Array<LoaiCanLamSang>;
  getAllNhanVien: Array<NhanVien>;
  getAllPhieuCLS: Array<Phieuchidinhcanlamsang>;
  getAllPhieuCLSbyNgay: Array<Phieuchidinhcanlamsang>;
  getAllPhieuXacNhan: Array<PhieuXacNhan>;
  getAllPhieuXacNhanDaXetNgiem?: Maybe<Array<PhieuXacNhan>>;
  getAllPhong: Array<Phong>;
  getAllSinhHieuByBenhNhan: Sinhhieu;
  getAllSinhhieu: Array<Sinhhieu>;
  getAllSoBenh: Array<Sobenh>;
  getAllThuoc: Array<Thuoc>;
  getAllToaThuoc: Array<Toathuoc>;
  getAllToaThuocbyBenhNhan: Array<Toathuoc>;
  getAllUsers: Array<Users>;
  getAllVatTuYTe: Array<Vattuyte>;
  getBacSibyUserId?: Maybe<BacSi>;
  getBenhNhanbyId: BenhNhan;
  getBenhNhanbySodienthoai?: Maybe<BenhNhan>;
  getBenhNhanbyUserId?: Maybe<BenhNhan>;
  getBlogbyId: Blog;
  getLastestBlog: Array<Blog>;
  getNhanVienbyUserId?: Maybe<NhanVien>;
  getPhieuCanLamSangbyPhieuXacNhanId?: Maybe<Phieuchidinhcanlamsang>;
  getThuocPagination: Array<Thuoc>;
  getThuocbyIds: Array<Thuoc>;
  getUserByEmail: Users;
  getUserById: Users;
  getUserByUsername?: Maybe<Users>;
  onlyUser?: Maybe<OnlyUser>;
};


export type QueryFindAllRelatedKetQuaCanLamSangArgs = {
  ketQuaIds: Array<Scalars['String']['input']>;
};


export type QueryGetAllBacSiArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllBenhNhanArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllBlogArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetAllByNgayVaPhongArgs = {
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllDatLichbyTrangThaiArgs = {
  trangthai: Scalars['String']['input'];
};


export type QueryGetAllHoadonByBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllPhieuClSbyNgayArgs = {
  ngaytao: Scalars['DateTime']['input'];
  trangthai: Scalars['Boolean']['input'];
};


export type QueryGetAllPhieuXacNhanDaXetNgiemArgs = {
  ngaykham: Scalars['String']['input'];
  phongIds: Scalars['String']['input'];
};


export type QueryGetAllSinhHieuByBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllToaThuocbyBenhNhanArgs = {
  benhnhanId: Scalars['String']['input'];
};


export type QueryGetAllUsersArgs = {
  fetchUsersArgs: FetchUsersArgs;
};


export type QueryGetBacSibyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetBenhNhanbySodienthoaiArgs = {
  sodienthoai: Scalars['String']['input'];
};


export type QueryGetBenhNhanbyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetBlogbyIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetLastestBlogArgs = {
  limit: Scalars['Float']['input'];
};


export type QueryGetNhanVienbyUserIdArgs = {
  user: Scalars['String']['input'];
};


export type QueryGetPhieuCanLamSangbyPhieuXacNhanIdArgs = {
  phieuxacnhan: Scalars['String']['input'];
};


export type QueryGetThuocPaginationArgs = {
  fetchPagination: FetchPagination;
};


export type QueryGetThuocbyIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryGetUserByIdArgs = {
  _id: Scalars['String']['input'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};

export type Sinhhieu = {
  __typename?: 'Sinhhieu';
  _id: Scalars['ID']['output'];
  benhmangtinh: Scalars['Boolean']['output'];
  benhnhan: BenhNhan;
  bmi: Scalars['Float']['output'];
  cannang: Scalars['Float']['output'];
  chieucao: Scalars['Float']['output'];
  ha: Scalars['String']['output'];
  mach: Scalars['Float']['output'];
  nhietdo: Scalars['Float']['output'];
};

export type Sobenh = {
  __typename?: 'Sobenh';
  _id: Scalars['ID']['output'];
  benhnhan: BenhNhan;
  ngaytao: Scalars['DateTime']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  newDatLich: DatLich;
};

export type Thuoc = {
  __typename?: 'Thuoc';
  _id: Scalars['ID']['output'];
  bhyt: Scalars['Boolean']['output'];
  dangthuoc: Scalars['String']['output'];
  donvi: Scalars['String']['output'];
  giaBHYT: Scalars['Float']['output'];
  giaKhongBHYT: Scalars['Float']['output'];
  hamluong: Scalars['Float']['output'];
  hansudung: Scalars['String']['output'];
  nhasanxuat: Scalars['String']['output'];
  soluong: Scalars['Int']['output'];
  tenPhoBien: Scalars['String']['output'];
  tenthuoc: Scalars['String']['output'];
};

export type Toathuoc = {
  __typename?: 'Toathuoc';
  _id: Scalars['ID']['output'];
  bacsi: BacSi;
  benhnhan: BenhNhan;
  benhs: Array<Benh>;
  bhyt: Scalars['Boolean']['output'];
  ngaytaikham: Scalars['DateTime']['output'];
  ngaytao: Scalars['DateTime']['output'];
  soluongs: Array<Scalars['Int']['output']>;
  thuocs: Array<Thuoc>;
};

export enum TrangThaiDatKham {
  Dangxet = 'DANGXET',
  Xacnhan = 'XACNHAN'
}

export enum TrangThaiKham {
  Chokham = 'CHOKHAM',
  Choxetngiem = 'CHOXETNGIEM',
  Daxetnghiem = 'DAXETNGHIEM',
  Hoantat = 'HOANTAT'
}

export enum TypeImage {
  File = 'FILE',
  Link = 'LINK'
}

export type UpdateBacSiInput = {
  cccd?: InputMaybe<Scalars['String']['input']>;
  chuyenkhoa?: InputMaybe<Scalars['ID']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngayBD?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['ID']['input']>>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBenhInput = {
  chuongbenh?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  maICD?: InputMaybe<Scalars['String']['input']>;
  motabenh?: InputMaybe<Scalars['String']['input']>;
  tenbenh?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBenhNhanInput = {
  _id: Scalars['ID']['input'];
  bhyt?: InputMaybe<Scalars['String']['input']>;
  cccd?: InputMaybe<Scalars['String']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBlogInput = {
  hinhanh?: InputMaybe<LinkImageInput>;
  id: Scalars['String']['input'];
  noidung?: InputMaybe<Scalars['String']['input']>;
  tieude?: InputMaybe<Scalars['String']['input']>;
  tomtat?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateChuyenKhoaInput = {
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenkhoa?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDatLichInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  motabenh?: InputMaybe<Scalars['String']['input']>;
  ngaydat?: InputMaybe<Scalars['DateTime']['input']>;
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDichvuInput = {
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  dvt?: InputMaybe<Scalars['String']['input']>;
  gia?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tendichvu?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateHoadonInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  thuocs: Array<DichVuInput>;
  vattuyte: Array<DichVuInput>;
};

export type UpdateKetquacanlamsangInput = {
  hinhanh: LinkImageInput;
  id: Scalars['String']['input'];
  ketluan: Scalars['String']['input'];
  loaicanlamsang?: InputMaybe<Scalars['String']['input']>;
  thietbi: Scalars['String']['input'];
};

export type UpdateLoaicanlamsangInput = {
  gia?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['String']['input'];
  loaicanlamsang?: InputMaybe<Scalars['String']['input']>;
  mota?: InputMaybe<Scalars['String']['input']>;
  tenxetnghiem?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNhanVienInput = {
  cccd?: InputMaybe<Scalars['String']['input']>;
  chucvu?: InputMaybe<Scalars['String']['input']>;
  diachi?: InputMaybe<Scalars['String']['input']>;
  gioitinh?: InputMaybe<Scalars['Boolean']['input']>;
  hoten?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngayBD?: InputMaybe<Scalars['DateTime']['input']>;
  ngaysinh?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['String']['input']>>;
  sodienthoai?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhieuXacNhanInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngaykham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  phongs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePhieuchidinhcanlamsangInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  phieuxacnhan?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhongInput = {
  chuyenkhoa?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  mota?: InputMaybe<Scalars['String']['input']>;
  tenphong?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSinhhieuInput = {
  benhmangtinh: Scalars['Boolean']['input'];
  bmi: Scalars['Float']['input'];
  cannang: Scalars['Float']['input'];
  chieucao: Scalars['Float']['input'];
  ha: Scalars['String']['input'];
  id: Scalars['String']['input'];
  mach: Scalars['Float']['input'];
  nhietdo: Scalars['Float']['input'];
};

export type UpdateSobenhInput = {
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateThuocInput = {
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  dangthuoc?: InputMaybe<Scalars['String']['input']>;
  donvi?: InputMaybe<Scalars['String']['input']>;
  giaBHYT?: InputMaybe<Scalars['Float']['input']>;
  giaKhongBHYT?: InputMaybe<Scalars['Float']['input']>;
  hamluong?: InputMaybe<Scalars['Float']['input']>;
  hansudung?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  nhasanxuat?: InputMaybe<Scalars['String']['input']>;
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tenPhoBien?: InputMaybe<Scalars['String']['input']>;
  tenthuoc?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateToathuocInput = {
  bacsi?: InputMaybe<Scalars['String']['input']>;
  benhnhan?: InputMaybe<Scalars['String']['input']>;
  benhs?: InputMaybe<Array<Scalars['String']['input']>>;
  bhyt?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  ngaytaikham?: InputMaybe<Scalars['DateTime']['input']>;
  ngaytao?: InputMaybe<Scalars['DateTime']['input']>;
  soluongs?: InputMaybe<Array<Scalars['Int']['input']>>;
  thuocs?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateUserInput = {
  avatar: LinkImageInput;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
  username: Scalars['String']['input'];
};

export type UpdateVattuyteInput = {
  chiphi?: InputMaybe<Array<ChiPhiInput>>;
  dvt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  soluong?: InputMaybe<Scalars['Int']['input']>;
  tenvattu?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Doctor = 'DOCTOR',
  Staff = 'STAFF',
  User = 'USER'
}

export type Users = {
  __typename?: 'Users';
  _id: Scalars['ID']['output'];
  avatar: LinkImage;
  email: Scalars['String']['output'];
  isLocked: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  role: UserRole;
  thongtin: Scalars['Boolean']['output'];
  username: Scalars['String']['output'];
};

export type Vattuyte = {
  __typename?: 'Vattuyte';
  _id: Scalars['ID']['output'];
  chiphi: Array<ChiPhi>;
  dvt: Scalars['String']['output'];
  soluong: Scalars['Int']['output'];
  tenvattu: Scalars['String']['output'];
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string } };

export type CreateDatLichMutationVariables = Exact<{
  input: NewDatLichInput;
}>;


export type CreateDatLichMutation = { __typename?: 'Mutation', createDatLich?: { __typename?: 'DatLich', _id: string } | null };

export type GetCountUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountUserQuery = { __typename?: 'Query', countUser: number };

export type OnlyUserQueryVariables = Exact<{ [key: string]: never; }>;


export type OnlyUserQuery = { __typename?: 'Query', onlyUser?: { __typename?: 'BacSi', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }>, chuyenkhoa: { __typename?: 'ChuyenKhoa', tenkhoa: string } } | { __typename?: 'BenhNhan', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, bhyt: string, user: { __typename?: 'Users', email: string, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } } | { __typename?: 'NhanVien', _id: string, hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sodienthoai: string, cccd: string, ngayBD: any, chucvu: string, user: { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }, phongs: Array<{ __typename?: 'Phong', _id: string, tenphong: string }> } | { __typename?: 'Users', _id: string, username: string, email: string, role: UserRole, isLocked: boolean, avatar: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } | null };

export type GetAllBlogsQueryVariables = Exact<{
  input: FetchPagination;
}>;


export type GetAllBlogsQuery = { __typename?: 'Query', countBlogs: number, getAllBlog: Array<{ __typename?: 'Blog', _id: string, tieude: string, tomtat?: string | null, noidung: string, luotxem: number, kichhoat: boolean, ngaytao: any, user: { __typename?: 'Users', username: string }, hinhanh: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }> };

export type GetLastestBlogQueryVariables = Exact<{
  limit: Scalars['Float']['input'];
}>;


export type GetLastestBlogQuery = { __typename?: 'Query', getLastestBlog: Array<{ __typename?: 'Blog', _id: string, tieude: string, tomtat?: string | null, noidung: string, luotxem: number, kichhoat: boolean, ngaytao: any, user: { __typename?: 'Users', username: string }, hinhanh: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } }> };

export type GetBlogbyIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetBlogbyIdQuery = { __typename?: 'Query', getBlogbyId: { __typename?: 'Blog', _id: string, tieude: string, tomtat?: string | null, noidung: string, luotxem: number, ngaytao: any, kichhoat: boolean, user: { __typename?: 'Users', username: string }, hinhanh: { __typename?: 'LinkImage', url: string, fileName: string, type: TypeImage } } };

export type GetAllHoadonByBenhNhanQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAllHoadonByBenhNhanQuery = { __typename?: 'Query', getAllHoadonByBenhNhan: Array<{ __typename?: 'Hoadon', _id: string, trangthai: boolean, ngaytao: any, bhyt: boolean, thanhtien: number, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, sodienthoai: string }, thuocs: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }>, vattuyte: Array<{ __typename?: 'DichVu', ten: string, gia: number, soluong: number, thanhtien: number }> }> };

export type GetAllToaThuocbyBenhNhanQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAllToaThuocbyBenhNhanQuery = { __typename?: 'Query', getAllToaThuocbyBenhNhan: Array<{ __typename?: 'Toathuoc', _id: string, soluongs: Array<number>, bhyt: boolean, ngaytaikham: any, ngaytao: any, benhnhan: { __typename?: 'BenhNhan', hoten: string, ngaysinh: any, gioitinh: boolean, diachi: string, sinhhieu?: { __typename?: 'Sinhhieu', cannang: number } | null }, bacsi: { __typename?: 'BacSi', hoten: string }, thuocs: Array<{ __typename?: 'Thuoc', tenthuoc: string }>, benhs: Array<{ __typename?: 'Benh', tenbenh: string }> }> };


export const LoginDocument = gql`
    mutation login($input: LoginUserInput!) {
  login(loginUserInput: $input) {
    access_token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateDatLichDocument = gql`
    mutation createDatLich($input: NewDatLichInput!) {
  createDatLich(newDatLichInput: $input) {
    _id
  }
}
    `;
export type CreateDatLichMutationFn = Apollo.MutationFunction<CreateDatLichMutation, CreateDatLichMutationVariables>;

/**
 * __useCreateDatLichMutation__
 *
 * To run a mutation, you first call `useCreateDatLichMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDatLichMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDatLichMutation, { data, loading, error }] = useCreateDatLichMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDatLichMutation(baseOptions?: Apollo.MutationHookOptions<CreateDatLichMutation, CreateDatLichMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDatLichMutation, CreateDatLichMutationVariables>(CreateDatLichDocument, options);
      }
export type CreateDatLichMutationHookResult = ReturnType<typeof useCreateDatLichMutation>;
export type CreateDatLichMutationResult = Apollo.MutationResult<CreateDatLichMutation>;
export type CreateDatLichMutationOptions = Apollo.BaseMutationOptions<CreateDatLichMutation, CreateDatLichMutationVariables>;
export const GetCountUserDocument = gql`
    query GetCountUser {
  countUser
}
    `;

/**
 * __useGetCountUserQuery__
 *
 * To run a query within a React component, call `useGetCountUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCountUserQuery, GetCountUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountUserQuery, GetCountUserQueryVariables>(GetCountUserDocument, options);
      }
export function useGetCountUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountUserQuery, GetCountUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountUserQuery, GetCountUserQueryVariables>(GetCountUserDocument, options);
        }
export function useGetCountUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCountUserQuery, GetCountUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountUserQuery, GetCountUserQueryVariables>(GetCountUserDocument, options);
        }
export type GetCountUserQueryHookResult = ReturnType<typeof useGetCountUserQuery>;
export type GetCountUserLazyQueryHookResult = ReturnType<typeof useGetCountUserLazyQuery>;
export type GetCountUserSuspenseQueryHookResult = ReturnType<typeof useGetCountUserSuspenseQuery>;
export type GetCountUserQueryResult = Apollo.QueryResult<GetCountUserQuery, GetCountUserQueryVariables>;
export const OnlyUserDocument = gql`
    query OnlyUser {
  onlyUser {
    ... on Users {
      _id
      username
      email
      role
      avatar {
        url
        fileName
        type
      }
      isLocked
    }
    ... on BacSi {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      user {
        _id
        username
        email
        role
        avatar {
          url
          fileName
          type
        }
        isLocked
      }
      phongs {
        _id
        tenphong
      }
      chuyenkhoa {
        tenkhoa
      }
    }
    ... on BenhNhan {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      bhyt
      user {
        avatar {
          url
          fileName
          type
        }
        email
      }
    }
    ... on NhanVien {
      _id
      hoten
      ngaysinh
      gioitinh
      diachi
      sodienthoai
      cccd
      ngayBD
      chucvu
      user {
        _id
        username
        email
        role
        avatar {
          url
          fileName
          type
        }
        isLocked
      }
      phongs {
        _id
        tenphong
      }
    }
  }
}
    `;

/**
 * __useOnlyUserQuery__
 *
 * To run a query within a React component, call `useOnlyUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnlyUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnlyUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnlyUserQuery(baseOptions?: Apollo.QueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
      }
export function useOnlyUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
        }
export function useOnlyUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OnlyUserQuery, OnlyUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OnlyUserQuery, OnlyUserQueryVariables>(OnlyUserDocument, options);
        }
export type OnlyUserQueryHookResult = ReturnType<typeof useOnlyUserQuery>;
export type OnlyUserLazyQueryHookResult = ReturnType<typeof useOnlyUserLazyQuery>;
export type OnlyUserSuspenseQueryHookResult = ReturnType<typeof useOnlyUserSuspenseQuery>;
export type OnlyUserQueryResult = Apollo.QueryResult<OnlyUserQuery, OnlyUserQueryVariables>;
export const GetAllBlogsDocument = gql`
    query GetAllBlogs($input: FetchPagination!) {
  countBlogs
  getAllBlog(fetchPagination: $input) {
    _id
    user {
      username
    }
    hinhanh {
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
}
    `;

/**
 * __useGetAllBlogsQuery__
 *
 * To run a query within a React component, call `useGetAllBlogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAllBlogsQuery(baseOptions: Apollo.QueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables> & ({ variables: GetAllBlogsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
      }
export function useGetAllBlogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export function useGetAllBlogsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllBlogsQuery, GetAllBlogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllBlogsQuery, GetAllBlogsQueryVariables>(GetAllBlogsDocument, options);
        }
export type GetAllBlogsQueryHookResult = ReturnType<typeof useGetAllBlogsQuery>;
export type GetAllBlogsLazyQueryHookResult = ReturnType<typeof useGetAllBlogsLazyQuery>;
export type GetAllBlogsSuspenseQueryHookResult = ReturnType<typeof useGetAllBlogsSuspenseQuery>;
export type GetAllBlogsQueryResult = Apollo.QueryResult<GetAllBlogsQuery, GetAllBlogsQueryVariables>;
export const GetLastestBlogDocument = gql`
    query GetLastestBlog($limit: Float!) {
  getLastestBlog(limit: $limit) {
    _id
    user {
      username
    }
    hinhanh {
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
}
    `;

/**
 * __useGetLastestBlogQuery__
 *
 * To run a query within a React component, call `useGetLastestBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastestBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastestBlogQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetLastestBlogQuery(baseOptions: Apollo.QueryHookOptions<GetLastestBlogQuery, GetLastestBlogQueryVariables> & ({ variables: GetLastestBlogQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastestBlogQuery, GetLastestBlogQueryVariables>(GetLastestBlogDocument, options);
      }
export function useGetLastestBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastestBlogQuery, GetLastestBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastestBlogQuery, GetLastestBlogQueryVariables>(GetLastestBlogDocument, options);
        }
export function useGetLastestBlogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetLastestBlogQuery, GetLastestBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLastestBlogQuery, GetLastestBlogQueryVariables>(GetLastestBlogDocument, options);
        }
export type GetLastestBlogQueryHookResult = ReturnType<typeof useGetLastestBlogQuery>;
export type GetLastestBlogLazyQueryHookResult = ReturnType<typeof useGetLastestBlogLazyQuery>;
export type GetLastestBlogSuspenseQueryHookResult = ReturnType<typeof useGetLastestBlogSuspenseQuery>;
export type GetLastestBlogQueryResult = Apollo.QueryResult<GetLastestBlogQuery, GetLastestBlogQueryVariables>;
export const GetBlogbyIdDocument = gql`
    query GetBlogbyId($id: String!) {
  getBlogbyId(id: $id) {
    _id
    user {
      username
    }
    tieude
    tomtat
    noidung
    hinhanh {
      url
      fileName
      type
    }
    luotxem
    ngaytao
    kichhoat
  }
}
    `;

/**
 * __useGetBlogbyIdQuery__
 *
 * To run a query within a React component, call `useGetBlogbyIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBlogbyIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBlogbyIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBlogbyIdQuery(baseOptions: Apollo.QueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables> & ({ variables: GetBlogbyIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
      }
export function useGetBlogbyIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
        }
export function useGetBlogbyIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>(GetBlogbyIdDocument, options);
        }
export type GetBlogbyIdQueryHookResult = ReturnType<typeof useGetBlogbyIdQuery>;
export type GetBlogbyIdLazyQueryHookResult = ReturnType<typeof useGetBlogbyIdLazyQuery>;
export type GetBlogbyIdSuspenseQueryHookResult = ReturnType<typeof useGetBlogbyIdSuspenseQuery>;
export type GetBlogbyIdQueryResult = Apollo.QueryResult<GetBlogbyIdQuery, GetBlogbyIdQueryVariables>;
export const GetAllHoadonByBenhNhanDocument = gql`
    query GetAllHoadonByBenhNhan($id: String!) {
  getAllHoadonByBenhNhan(benhnhanId: $id) {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      sodienthoai
    }
    trangthai
    ngaytao
    bhyt
    thanhtien
    thuocs {
      ten
      gia
      soluong
      thanhtien
    }
    vattuyte {
      ten
      gia
      soluong
      thanhtien
    }
  }
}
    `;

/**
 * __useGetAllHoadonByBenhNhanQuery__
 *
 * To run a query within a React component, call `useGetAllHoadonByBenhNhanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHoadonByBenhNhanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHoadonByBenhNhanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllHoadonByBenhNhanQuery(baseOptions: Apollo.QueryHookOptions<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables> & ({ variables: GetAllHoadonByBenhNhanQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>(GetAllHoadonByBenhNhanDocument, options);
      }
export function useGetAllHoadonByBenhNhanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>(GetAllHoadonByBenhNhanDocument, options);
        }
export function useGetAllHoadonByBenhNhanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>(GetAllHoadonByBenhNhanDocument, options);
        }
export type GetAllHoadonByBenhNhanQueryHookResult = ReturnType<typeof useGetAllHoadonByBenhNhanQuery>;
export type GetAllHoadonByBenhNhanLazyQueryHookResult = ReturnType<typeof useGetAllHoadonByBenhNhanLazyQuery>;
export type GetAllHoadonByBenhNhanSuspenseQueryHookResult = ReturnType<typeof useGetAllHoadonByBenhNhanSuspenseQuery>;
export type GetAllHoadonByBenhNhanQueryResult = Apollo.QueryResult<GetAllHoadonByBenhNhanQuery, GetAllHoadonByBenhNhanQueryVariables>;
export const GetAllToaThuocbyBenhNhanDocument = gql`
    query GetAllToaThuocbyBenhNhan($id: String!) {
  getAllToaThuocbyBenhNhan(benhnhanId: $id) {
    _id
    benhnhan {
      hoten
      ngaysinh
      gioitinh
      diachi
      sinhhieu {
        cannang
      }
    }
    bacsi {
      hoten
    }
    thuocs {
      tenthuoc
    }
    soluongs
    benhs {
      tenbenh
    }
    bhyt
    ngaytaikham
    ngaytao
  }
}
    `;

/**
 * __useGetAllToaThuocbyBenhNhanQuery__
 *
 * To run a query within a React component, call `useGetAllToaThuocbyBenhNhanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllToaThuocbyBenhNhanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllToaThuocbyBenhNhanQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllToaThuocbyBenhNhanQuery(baseOptions: Apollo.QueryHookOptions<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables> & ({ variables: GetAllToaThuocbyBenhNhanQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>(GetAllToaThuocbyBenhNhanDocument, options);
      }
export function useGetAllToaThuocbyBenhNhanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>(GetAllToaThuocbyBenhNhanDocument, options);
        }
export function useGetAllToaThuocbyBenhNhanSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>(GetAllToaThuocbyBenhNhanDocument, options);
        }
export type GetAllToaThuocbyBenhNhanQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBenhNhanQuery>;
export type GetAllToaThuocbyBenhNhanLazyQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBenhNhanLazyQuery>;
export type GetAllToaThuocbyBenhNhanSuspenseQueryHookResult = ReturnType<typeof useGetAllToaThuocbyBenhNhanSuspenseQuery>;
export type GetAllToaThuocbyBenhNhanQueryResult = Apollo.QueryResult<GetAllToaThuocbyBenhNhanQuery, GetAllToaThuocbyBenhNhanQueryVariables>;