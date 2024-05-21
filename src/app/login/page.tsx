"use client"
import { useLoginMutation } from "@/graphql-definition/graphql";
import { setJwtToken } from "@/utils/jwt";
import { useContext, useEffect } from "react";
import { Button, Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock, CiMail } from "react-icons/ci";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../provider/AuthContextProvider";
import { IoEyeSharp } from "react-icons/io5";
import { RiLockPasswordLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const router = useRouter()
    const { checkAuth } = useContext(AuthContext);
    const [login, _] = useLoginMutation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit: SubmitHandler<any> = async (data) => {
        console.log(data)
        const response = await login({
            variables: {
                "input": {
                    "username": data?.username,
                    "password": data?.password
                }
            }
        })
        if (response.data?.login) {
            toast.success("Đăng Nhập Thành Công",{
                position: "top-right",
            });
            setJwtToken(response.data.login.access_token as string);
            checkAuth();
            router.push('/');
        }
    }

    return (
        <Container className="py-4 my-4 mb-5">
            <ToastContainer />
            <Row className="d-flex justify-content-center align-items-center" style={{height: "700px"}}>
                <Col md={6}>
                    <Card border="0" className="shadow">
                        <Card.Body>
                            <h2 className="h4 mb-1">Đăng nhập</h2>
                            {/* <div className="social-login">
                                <Button className="btn-social bs-google bg-light border" onClick={handleSubmitGoogle}>
                                    <FaGoogle size={28} />
                                    <span className="ms-2 fs-6">Google</span>
                                </Button>
                                <Button className="btn-social bs-facebook">
                                    <FaFacebook size={28} />
                                    <span className="ms-2 fs-6">FaceBook</span>
                                </Button>
                            </div> */}
                            <hr />
                            <h3 className="fs-base pt-4 pb-2">Hoặc sử dụng thông tin đã có</h3>
                            <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <HiOutlineMail className="text-muted" />
                                    </InputGroup.Text>
                                    <Form.Control type="text" placeholder="Username" {...register('username')} required />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>
                                        <RiLockPasswordLine className="text-muted" />
                                    </InputGroup.Text>
                                    <Form.Control type="password" placeholder="Password" {...register('password')} required />
                                </InputGroup>
                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                    <Form.Check>
                                        <Form.Check.Input type="checkbox" id="remember_me" defaultChecked />
                                        <Form.Check.Label htmlFor="remember_me">Ghi nhớ đăng nhập</Form.Check.Label>
                                    </Form.Check>
                                    <a className="fs-sm" href="#">Quên mật khẩu?</a>
                                </div>
                                <hr className="mt-4" />
                                <div className="text-end pt-4">
                                    <Button className="btn-primary" type="submit"><i className="ci-sign-in me-2 ms-n1"></i>Đăng nhập</Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;