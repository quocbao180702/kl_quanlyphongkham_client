"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { useGetAllBlogsQuery, useGetLastestBlogQuery } from "@/graphql-definition/graphql";
import { useContext, useEffect, useState } from "react";
import { getUrlImage } from "@/utils/uploadFile";
import Blog from "./[id]/page";
import dayjs from "dayjs";
import { LanguageContext } from "@/provider/LanguageProvider";
import { BlogPage as vn } from "@/locales/vi/blogs.page";
import { BlogPage as en } from "@/locales/en/blogs.page";
import Search, { SearchProps } from "antd/es/input/Search";


function Blogs() {
    const { languageState } = useContext(LanguageContext);
    const title = "Blogs"
    const [take, setTake] = useState(2);
    const [skip, setSkip] = useState(0);

    const [t, setT] = useState(languageState === 'vn' ? vn : en)

    useEffect(() => {
        setT(languageState === 'vn' ? vn : en)
    }, [languageState])

    const { data: dataBlog, error: errorBlog, loading: loadingBlog, refetch } = useGetAllBlogsQuery({
        variables: {
            input: {
                skip: skip,
                take: take
            }
        }
    })

    const { data: dataBlogLastes, error: errorBlogsLastest, loading: loadingBlogsLastest } = useGetLastestBlogQuery({
        variables: {
            limit: 4
        }
    })

    const { data: BlogLastest, error: errorBlogLastest, loading: loadingBlogLastest } = useGetLastestBlogQuery({
        variables: {
            limit: 1
        }
    })

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
        refetch({
            input: {
                take: take,
                skip: skip,
                search: value
            }
        })
    }

    return (
        <>
            <BreadCrum title={title} />
            <Container className="py-5">
                <Row>
                    <Col lg={9}>
                        <Row className="mb-3">
                            <h3 className="text-uppercase mb-3">{t?.blogTitle}</h3>
                            <div>
                                {BlogLastest && BlogLastest?.getLastestBlog.map((blog) => {
                                    return (
                                        <a className="card bg-light text-white p-0" href={`http://localhost:8000/blogs/${blog?._id}`}>
                                            <Image src={getUrlImage(blog?.hinhanh)} className="card-img" alt="..." />
                                            <div className="card-img-overlay">
                                                <h5 className="card-title text-dark">{blog?.tieude}</h5>
                                                <p className="card-text text-dark">{blog?.tomtat}</p>
                                                <p className="card-text text-dark">{dayjs(blog?.ngaytao).format("YYYY-MM-DD")}</p>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>
                        </Row>
                        <Row className="pb-3">
                            <h3 className="text-uppercase mb-3 mt-5">BlOG</h3>
                            {dataBlog && dataBlog?.getAllBlog?.map((blog) => {
                                return (
                                    <Col key={blog?._id} md={4} className="mb-4 pb-2">
                                        <div className="blog-item">
                                            <div className="position-relative">
                                                <Image
                                                    src={getUrlImage(blog?.hinhanh)}
                                                    style={{
                                                        width: "100%",
                                                        height: "180px",
                                                        objectFit: "fill",
                                                    }}
                                                    rounded
                                                />
                                            </div>
                                            <div className="bg-white p-4">
                                                <div className="d-flex mb-2">
                                                    <a className="text-primary text-uppercase text-decoration-none" href="">{blog?.user?.username}</a>
                                                    <span className="text-primary px-2">|</span>
                                                    <a className="text-primary text-uppercase text-decoration-none" href="">Sức Khỏe</a>
                                                </div>
                                                <a className="h5 m-0 text-decoration-none" href={`http://localhost:8000/blogs/${blog?._id}`}>{blog?.tieude}</a>

                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <div className="mb-5">
                            <div className="bg-white">
                               {/*  <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder={`${t?.blogSearch}`}
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button>
                                        {t?.blogSearch}
                                    </Button>
                                </Form> */}
                                 <Search placeholder="Tiêu đề" allowClear onSearch={onSearch} size={"large"} style={{ width: 300 }} />
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>{t?.blogRecent}</h4>
                            {dataBlogLastes && dataBlogLastes.getLastestBlog.map(blog => {
                                return (
                                    <a key={blog?._id} className="d-flex text-decoration-none bg-white mb-3" href={`http://localhost:8000/blogs/${blog?._id}`}>
                                        <Image className="img-fluid" src={getUrlImage(blog?.hinhanh)} alt="" style={{ width: "100%", height: "100px", objectFit: "fill" }} />
                                        <div className="pl-3">
                                            <h6 className="m-1">{blog?.tieude}</h6>
                                            <small>{dayjs(blog?.ngaytao).format('YYYY-MM-DD')}</small>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Tag</h4>
                            <div className="d-flex flex-wrap m-n1">
                                <a href="" className="btn btn-light m-1">COVID</a>
                                <a href="" className="btn btn-light m-1">PHỔI</a>
                                <a href="" className="btn btn-light m-1">GAN</a>
                            </div>
                        </div>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Blogs;