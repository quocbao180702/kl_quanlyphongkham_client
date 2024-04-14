"use client"
import { useGetCountUserQuery, useGetLastestBlogQuery } from "@/graphql-definition/graphql";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import CountUp from 'react-countup';
import { FaUserDoctor } from "react-icons/fa6";
import { FaAward, FaFlask, FaHospital } from "react-icons/fa";
import dayjs from "dayjs";
import { getUrlImage } from "@/utils/uploadFile";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/provider/LanguageProvider";
import { HomePage as vn } from "@/locales/vi/home.page";
import { HomePage as en} from "@/locales/en/home.page";


export default function Home() {

  const {languageState} = useContext(LanguageContext);
  const [t, setT] = useState(languageState === 'vn' ? vn : en)

  useEffect(() => {
    setT(languageState === 'vn' ? vn : en)
  }, [languageState])

  const { data, loading, error } = useGetCountUserQuery();

  console.log(data);

  const { data: dataBlogLastes, error: errorBlogsLastest, loading: loadingBlogsLastest } = useGetLastestBlogQuery({
    variables: {
      limit: 3
    }
  })



  const arrayDepartment = [1, 2, 3, 4, 5, 6]
  return (<>
    <Row className="banner-home mb-3">
      {/* <div style={{ position: 'relative', maxHeight: '400px', overflow: 'hidden' }}> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="d-flex justify-content-center">
          <Image src="https://www.ijmsir.com/asset/images/uploads/14764324021411.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover'/* , maxHeight: '400px' */ }} />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <Image src="/assets/images/gallery/about_1.png" alt="" style={{ width: 'auto', height: '100%', objectFit: 'cover'/* , maxHeight: '400px' */ }} />
        </SwiperSlide>
      </Swiper>

      {/* </div> */}
    </Row>
    <Container className="mb-5">
      <Row className="mb-3">
        <div className="counts w-100">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <FaUserDoctor className="icon" />
              <CountUp start={0} end={10} className="purecounter" />
              <p className="title">{t?.homeDotors}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <FaHospital className="icon" />
              <CountUp start={0} end={10} className="purecounter" />
              <p className="title">{t?.homeDeparment}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <FaFlask className="icon" />
              <CountUp start={0} end={10} className="purecounter" />
              <p className="title">{t?.homeRoom}</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <FaAward className="icon" />
              <CountUp start={0} end={10} className="purecounter" />
              <p className="title">{t?.homeAward}</p>
            </div>
          </div>

        </div>
      </Row>
      {/* <Row className="mb-3">
        About US
      </Row> */}
      <Row className="mb-3 w-100">
        <Row className="justify-content-center">
          <Col className="py-3">
            <h1 className="text-center">{t?.homePhong}</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={3}>
            <div className="py-5 align-items-center justify-content-center justify-content-lg-evenly">
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center"><a className="text-decoration-none" href="#!">
                    <Image className="mb-3 deparment-icon" src="/assets/images/gallery/cardiac.png" alt="..." />
                    <Image className="mb-3 deparment-icon-hover" src="/assets/images/gallery/cardiac.svg" alt="..." />
                    <p className="fs-1 fs-xxl-2 text-center">{t?.homeLung}</p>
                  </a></div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="py-5 align-items-center justify-content-center justify-content-lg-evenly">
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center"><a className="text-decoration-none" href="#!">
                    <Image className="mb-3 deparment-icon" src="/assets/images/gallery/eye-care.png" alt="..." />
                    <Image className="mb-3 deparment-icon-hover" src="/assets/images/gallery/eye-care.svg" alt="..." />
                    <p className="fs-1 fs-xxl-2 text-center">{t?.homeEyes}</p>
                  </a></div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="py-5 align-items-center justify-content-center justify-content-lg-evenly">
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center"><a className="text-decoration-none" href="#!">
                    <Image className="mb-3 deparment-icon" src="/assets/images/gallery/osteoporosis.png" alt="..." />
                    <Image className="mb-3 deparment-icon-hover" src="/assets/images/gallery/osteoporosis.svg" alt="..." />
                    <p className="fs-1 fs-xxl-2 text-center">{t?.homeOsteoarthritis}</p>
                  </a></div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="py-5 align-items-center justify-content-center justify-content-lg-evenly">
              <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                <div className="d-flex flex-column align-items-center">
                  <div className="icon-box text-center"><a className="text-decoration-none" href="#!">
                    <Image className="mb-3 deparment-icon" src="/assets/images/gallery/neurology.png" alt="..." />
                    <Image className="mb-3 deparment-icon-hover" src="/assets/images/gallery/neurology.svg" alt="..." />
                    <p className="fs-1 fs-xxl-2 text-center">{t?.homebrain}</p>
                  </a></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
      <Row className="mb-5">
        <Row className="justify-content-center">
          <Col className="py-3">
            <h1 className="text-center">{t?.homeDatlich}</h1>
          </Col>
        </Row>
        <Row>
          <div className=" d-flex align-items-center" style={{ height: "400px" }}>
            <Row className="mt-3 w-100 text-center">
              <Col className="col-lg-6 z-index-2 mx-auto">
                <Form className="row g-3">
                  <Form.Group className="col-md-6">
                    <Form.Label className="visually-hidden sr-only" >Họ Tên</Form.Label>
                    <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Họ Tên" />
                  </Form.Group>
                  <Form.Group className="col-md-6">
                    <Form.Label className="visually-hidden sr-only">Số Điện Thoại</Form.Label>
                    <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Số Điện Thoại" />
                  </Form.Group>
                  <Form.Group className="col-md-6">
                    <Form.Label className="form-label visually-hidden sr-only">Category</Form.Label>
                    <Form.Select className="form-select">
                      <option > Category</option>
                      <option> Category One</option>
                      <option> Category Two</option>
                      <option> Category Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="col-md-6">
                    <Form.Label className="form-label visually-hidden sr-only" >Email</Form.Label>
                    <Form.Control className="form-control form-livedoc-control" type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="col-md-12" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Mô tả bệnh" />
                  </Form.Group>
                  <Form.Group className="col-12">
                    <div className="d-grid">
                      <Button className="btn btn-primary rounded-pill" type="submit">Sign in</Button>
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </div>
        </Row>
      </Row>
      <Row className="mb-5">
        <Row className="justify-content-center">
          <Col className="py-3">
            <h1 className="text-center">{t?.homeBacSi}</h1>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Row className="h-100 m-lg-7 mx-3 mt-6 mx-md-4 my-md-7">
            <Col md={4} className="mb-8 mb-md-0">
              <div className="card card-span h-100 shadow">
                <div className="card-body d-flex flex-column flex-center py-5">
                  <Image src="/assets/images/gallery/doctor1s.jpg" style={{ width: "100%" }} alt="..." />
                  <h5 className="mt-3">Nguyễn Quang Hải</h5>
                  <p className="mb-0 fs-xxl-1">Chuyên Khoa Tim Mạch</p>
                  <p className="text-600 mb-0">Long Xuyên - An Giang</p>
                  <p className="text-600 mb-4">10 năm kinh nghiệm</p>
                  <div className="text-center">
                    <button className="btn btn-outline-secondary rounded-pill" type="submit">Xem</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-8 mb-md-0">
              <div className="card card-span h-100 shadow">
                <div className="card-body d-flex flex-column flex-center py-5"><img src="/assets/images/gallery/doctor2s.jpg" style={{ width: "100%" }} alt="..." />
                  <h5 className="mt-3">Đặng Thanh Thảo</h5>
                  <p className="mb-0 fs-xxl-1">Cận Lâm Sàng</p>
                  <p className="text-600 mb-0">Châu Đốc - An Giang</p>
                  <p className="text-600 mb-4">5 năm kinh nghiệm</p>
                  <div className="text-center">
                    <button className="btn btn-outline-secondary rounded-pill" type="submit">Xem</button>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="mb-8 mb-md-0">
              <div className="card card-span h-100 shadow">
                <div className="card-body d-flex flex-column flex-center py-5"><img src="/assets/images/gallery/doctor3s.jpg" style={{ width: "100%" }} alt="..." />
                  <h5 className="mt-3">Chau JiReng</h5>
                  <p className="mb-0 fs-xxl-1">Chuyên Khoa Da Liễu</p>
                  <p className="text-600 mb-0">Tri Tôn - An Giang</p>
                  <p className="text-600 mb-4">10 năm kinh nghiệm</p>
                  <div className="text-center">
                    <button className="btn btn-secondary hover-top rounded-pill border-0" type="submit">Xem</button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Row>
      <Row className="mb-5">
        <Row className="justify-content-center">
          <Col className="py-3">
            <h1 className="text-center">{t?.homeBlog}</h1>
          </Col>
        </Row>
        <Row>
          {dataBlogLastes && dataBlogLastes?.getLastestBlog?.map((blog) => {
            return (
              <Col xl={4} sm={4} lg={4}>
                <div className="card h-100 shadow card-span rounded-3"><Image className="card-img-top d-flex justify-content-center" style={{ width: "171px", height: "180px", objectFit: "fill", }} src={getUrlImage(blog?.hinhanh)} alt="news" />
                  <div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
                    <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                      <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                    </svg><span className="fs--1 text-900">{dayjs(blog?.ngaytao).format('YYYY-MM-DD')}</span><span className="fs--1"></span>
                    <h5 className="font-base fs-lg-0 fs-xl-1 my-3">{blog?.tieude}</h5><a className="stretched-link" href="#!">xem toàn bộ</a>
                  </div>
                </div>
              </Col>
            )
          })}
          {/* <Col xl={4} sm={4} lg={4}>
            <div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="/assets/images/gallery/bg-about-us.png" alt="news" />
              <div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
                <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                </svg><span className="fs--1 text-900">Nov 21, 2021</span><span className="fs--1"></span>
                <h5 className="font-base fs-lg-0 fs-xl-1 my-3">COVID-19: The Most Up-to-Date Information</h5><a className="stretched-link" href="#!">read full article</a>
              </div>
            </div>
          </Col>
          <Col xl={4} sm={4} lg={4}>
            <div className="card h-100 shadow card-span rounded-3"><img className="card-img-top rounded-top-3" src="/assets/images/gallery/bg-about-us.png" alt="news" />
              <div className="card-body"><span className="fs--1 text-primary me-3">Health</span>
                <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                </svg><span className="fs--1 text-900">Nov 21, 2021</span><span className="fs--1"></span>
                <h5 className="font-base fs-lg-0 fs-xl-1 my-3">COVID-19: The Most Up-to-Date Information</h5><a className="stretched-link" href="#!">read full article</a>
              </div>
            </div>
          </Col> */}
        </Row>
      </Row>
    </Container >
  </>
  );
}