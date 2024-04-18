"use client"
import { LinkImage, TypeImage, useRegisterUserMutation, useUpdateTrangThaiThongTinUserMutation, useUpdateUserbySoDienThoaiMutation } from "@/graphql-definition/graphql";
import { useState } from "react";
import { Button, Container, Form, Row, Toast } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';

function Register() {

    const router = useRouter()
    const { register, handleSubmit } = useForm();
    const [avatar, setAvatar] = useState<LinkImage>()

    const [thongbao, setThongBao] = useState('');
    const [toast, setToast] = useState(false);


    const [registerUser] = useRegisterUserMutation();
    const [updateBenhNhan] = useUpdateUserbySoDienThoaiMutation();
    const [updateTrangThaiThongTinUser] = useUpdateTrangThaiThongTinUserMutation();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            if (data?.email && data?.password && data?.username) {
                const response = await registerUser({
                    variables: {
                        input: {
                            username: data?.username,
                            email: data?.email,
                            password: data?.password,
                            avatar: {
                                url: avatar?.url || 'xyz',
                                fileName: avatar?.fileName || 'xyz',
                                type: avatar?.type || TypeImage.File
                            }
                        }
                    }
                })


                if (response?.data?.registerUser?._id || data?.sodienthoai) {
                    const update = await updateBenhNhan({
                        variables: {
                            user: response?.data?.registerUser?._id || '',
                            sodienthoai: data?.sodienthoai
                        }
                    })

                    if (update?.data?.updateUserbySoDienThoai === null) {
                        setThongBao('Bạn Chưa Đăng Ký Thông Tin Hãy Liên Hệ Với Chúng Tôi Để Ký Thông Tin')
                        setToast(true);
                        return
                    }
                    if (update?.data?.updateUserbySoDienThoai?._id) {
                        const updateUser = await updateTrangThaiThongTinUser({
                            variables: {
                                id: response?.data?.registerUser?._id || ''
                            }
                        })
                    }
                }
                router.push('/login')
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            {toast &&
                <Toast bg="danger" onClose={() => setToast(false)} show={toast} delay={3000} autohide style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1 }}>
                    <Toast.Header></Toast.Header>
                    <Toast.Body className="text-white">{thongbao}</Toast.Body>
                </Toast>
            }
            <Row className="d-flex justify-content-center align-items-center" style={{ height: "700px" }}>
                <div className="col-md-6 pt-4 mt-3 mt-md-0">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="h4 mb-3">Chưa có tài khoản? Đăng ký</h2>
                            <p className="fs-sm text-muted mb-4">Việc đăng ký chỉ mất chưa đầy một phút nhưng mang lại cho bạn toàn quyền kiểm soát quá trình khám của bạn</p>
                            <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
                                <Row className="gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" required {...register('username')} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label>Số điện thoại</Form.Label>
                                        <Form.Control type="tel" required {...register('sodienthoai')} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >Email</Form.Label>
                                        <Form.Control type="email" required {...register('email')} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >Password</Form.Label>
                                        <Form.Control type="password" required {...register('password')} />
                                    </div>
                                    <div className="col-sm-12 justify-content-center">

                                    </div>
                                    <div className="col-12 text-end">
                                        <Button className="btn btn-primary" type="submit"><i className="ci-user me-2 ms-n1"></i>Đăng ký</Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Register;