"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import CommentsFaceBook from "@/components/comment/fbComment";
import { useGetBlogbyIdQuery, useGetLastestBlogQuery } from "@/graphql-definition/graphql";
import Head from "next/head";

import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

function Blog({ params }: { params: { id: string } }) {

    const title = "Blog Chi Tiết"
    const { data, loading, error } = useGetBlogbyIdQuery({
        variables: {
            id: params?.id
        }
    })

    const { data: dataBlogLastest, loading: loadingBlogLastest, error: errorBlogLastest } = useGetLastestBlogQuery({
        variables: {
            limit: 3
        }
    })

    return (
        <>
            <Head>
                <div id="fb-root"></div>
                <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v19.0&appId=363711562908396" nonce="ThhtTaPX"></script>
            </Head>
            <BreadCrum title={title} />
            <Container className="py-5">
                <Row>
                    <div className="pb-3">
                        <div className="bg-white mb-3" style={{ padding: "30px" }}>
                            <p className="text-center" style={{ fontSize: "18px" }}><strong>Tác giả: </strong>{data?.getBlogbyId?.user?.username}</p>
                            <h2 className="mb-3 text-center">{data?.getBlogbyId?.tieude}</h2>
                            <div className="w-100 text-center">
                                <Image src={data?.getBlogbyId?.hinhanh?.url} style={{ width: "80%", maxHeight: "500px", objectFit: "fill" }} alt="" />
                            </div>
                            <h5 className="mt-3 mb-3">Tóm tắt</h5>
                            <p><em>{data?.getBlogbyId?.tomtat}</em></p>
                            <h5 className="mt-3 mb-3">Nội Dung</h5>
                            <div dangerouslySetInnerHTML={{ __html: data?.getBlogbyId?.noidung ?? '' }} />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="pb-3">
                        <div style={{ padding: "30px" }}>
                            <CommentsFaceBook id={params?.id} />
                        </div>
                    </div>
                </Row>
                <Row className="text-center">
                    <h4>Blog mới nhất</h4>
                </Row>
                <Row>
                    {dataBlogLastest && dataBlogLastest.getLastestBlog.map((blog) => (
                        <Col lg={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={blog?.hinhanh?.url} style={{ width: "100%", maxHeight: "200px", objectFit: "fill" }} />
                                <Card.Body>
                                    <Card.Title>{blog?.tieude}</Card.Title>
                                    <Card.Text className="text-truncate">
                                        {blog?.tomtat}
                                    </Card.Text>
                                    <a href="">Đọc tiếp</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Blog;