"use client"
import { useLoginMutation } from "@/graphql-definition/graphql";
import { setJwtToken } from "@/utils/jwt";
import { useContext, useEffect } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { CiLock, CiMail } from "react-icons/ci";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from 'next/navigation';
import { AuthContext } from "../../provider/AuthContextProvider";
import { IoEyeSharp } from "react-icons/io5";

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
            setJwtToken(response.data.login.access_token as string);
            checkAuth();
            router.push('/');
        }
    }

    const handleSubmitGoogle = () => {
        
    }

    return (
        <Container className="py-4 my-4">
            <Row className="justify-content-center">
                <div className="col-md-6">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="h4 mb-1">Đăng nhập</h2>
                            <div className="py-3">
                                <div className="d-inline-block align-items-center">
                                    {/* <a className="btn-social bs-google me-2 mb-2" href="#" data-bs-toggle="tooltip" title="Đăng nhập với Google">
                                        <FaGoogle size={28} color="red" />
                                    </a> */}
                                    <Button className="btn bsb-btn-xl btn-outline-primary" onClick={handleSubmitGoogle}>
                                        <FaGoogle size={28} />
                                        <span className="ms-2 fs-6">Google</span>
                                    </Button>
                                    <a className="btn-social bs-facebook me-2 mb-2" href="#" data-bs-toggle="tooltip" title="Đăng nhập với Facebook">
                                        <FaFacebook size={28} />
                                    </a>
                                </div>
                            </div>
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
                                        <CiLock className="text-muted" />
                                    </InputGroup.Text>
                                    <Form.Control type="password" placeholder="Password" {...register('[password')} required />
                                </InputGroup>
                                <div className="d-flex flex-wrap justify-content-between">
                                    <Form.Check className="form-check">
                                        <Form.Check.Input type="checkbox" id="remember_me" defaultChecked />
                                        <Form.Check.Label htmlFor="remember_me">Ghi nhớ đăng nhập</Form.Check.Label>
                                    </Form.Check>
                                    <a className="nav-link-inline fs-sm" href="#">Quên mật khẩu?</a>
                                </div>
                                <hr className="mt-4" />
                                <Form.Group className="text-end pt-4">
                                    <Button className="btn btn-primary" type="submit"><i className="ci-sign-in me-2 ms-n21"></i>Đăng nhập</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </div>
                </div>
            </Row>
        </Container >
    );
}

export default Login;