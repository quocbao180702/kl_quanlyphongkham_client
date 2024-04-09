"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { useGetAllBlogsQuery, useGetLastestBlogQuery } from "@/graphql-definition/graphql";
import { useState } from "react";
import { getUrlImage } from "@/utils/uploadFile";
import Blog from "./[id]/page";
import dayjs from "dayjs";

function Blogs() {
    const title = "Blogs"
    /*     const arrayBlogs = [1, 2, 3, 4]
     */
    const [take, setTake] = useState(2);
    const [skip, setSkip] = useState(0);

    const { data: dataBlog, error: errorBlog, loading: loadingBlog } = useGetAllBlogsQuery({
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

    return (
        <>
            <BreadCrum title={title} />
            <Container className="py-5">
                <Row>
                    <Col lg={9}>
                        <Row className="mb-3">
                            <h3 className="text-uppercase mb-3">BlOG NỔI BẬT</h3>
                            <div>
                                {BlogLastest && BlogLastest?.getLastestBlog.map((blog) => {
                                    return(
                                    <div className="card bg-light text-white p-0">
                                        <Image src={getUrlImage(blog?.hinhanh)} className="card-img" alt="..." />
                                        <div className="card-img-overlay">
                                            <h5 className="card-title text-dark">{blog?.tieude}</h5>
                                            <p className="card-text text-dark">{blog?.tomtat}</p>
                                            <p className="card-text text-dark">{dayjs(blog?.ngaytao).format("YYYY-MM-DD")}</p>
                                        </div>
                                    </div>
                                )})}
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
                                                        width: "171px",
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
                                                <a className="h5 m-0 text-decoration-none">{blog?.tieude}</a>

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
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button>
                                        Search
                                    </Button>
                                </Form>
                            </div>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Recent Blog</h4>
                            {dataBlogLastes && dataBlogLastes.getLastestBlog.map(blog => {
                                return (
                                    <a key={blog?._id} className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                                        <Image className="img-fluid" src={getUrlImage(blog?.hinhanh)} alt="" style={{ width: "100px", height: "100px", objectFit: "fill" }} />
                                        <div className="pl-3">
                                            <h6 className="m-1">{blog?.tieude}</h6>
                                            <small>{dayjs(blog?.ngaytao).format('YYYY-MM-DD')}</small>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                        <div className="mb-5">
                            <h4 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Tag Cloud</h4>
                            <div className="d-flex flex-wrap m-n1">
                                <a href="" className="btn btn-light m-1">COVID</a>
                                <a href="" className="btn btn-light m-1">PHỔI</a>
                                <a href="" className="btn btn-light m-1">GAN</a>
                                <a href="" className="btn btn-light m-1">GAN</a>
                                <a href="" className="btn btn-light m-1">GAN</a>
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