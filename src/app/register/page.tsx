"use client"
import { LinkImage, TypeImage, useGetBenhNhanbySodienthoaiLazyQuery, useRegisterUserMutation, useUpdateTrangThaiThongTinUserMutation, useUpdateUserbySoDienThoaiMutation } from "@/graphql-definition/graphql";
import { useState, useEffect } from "react";
import { Button, Container, Form, Row, Toast } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { message } from "antd";

function Register() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [avatar, setAvatar] = useState<LinkImage>();
    const [thongbao, setThongBao] = useState('');
    const [toast, setToast] = useState(false);

    const [getData, { data: dataBenhNhan, loading: loadingBenhNhan }] = useGetBenhNhanbySodienthoaiLazyQuery();
    const [registerUser] = useRegisterUserMutation();
    const [updateBenhNhan] = useUpdateUserbySoDienThoaiMutation();
    const [updateTrangThaiThongTinUser] = useUpdateTrangThaiThongTinUserMutation();

    const handleRegistration = async (formData: any) => {
        try {
            const response = await registerUser({
                variables: {
                    input: {
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                        avatar: {
                            url: avatar?.url || 'http://localhost:3000/images/530ffc10-1661-11ef-9cee-9181ad9c2dd7--logo.jpg',
                            fileName: avatar?.fileName || '530ffc10-1661-11ef-9cee-9181ad9c2dd7--logo.jpg',
                            type: avatar?.type || TypeImage.File
                        }
                    }
                }
            });

            if (response?.data?.registerUser?._id) {
                const update = await updateBenhNhan({
                    variables: {
                        user: response?.data?.registerUser?._id,
                        sodienthoai: formData.sodienthoai
                    }
                });

                if (update?.data?.updateUserbySoDienThoai === null) {
                    setThongBao('Bạn Chưa Đăng Ký Thông Tin Hãy Liên Hệ Với Chúng Tôi Để Ký Thông Tin');
                    setToast(true);
                    return;
                }

                if (update?.data?.updateUserbySoDienThoai?._id) {
                    await updateTrangThaiThongTinUser({
                        variables: {
                            id: response?.data?.registerUser?._id
                        }
                    });
                    message.success("Đã tạo tài khoản thành công");
                    router.push('/login');
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit: SubmitHandler<any> = async (data) => {
        try {
            await getData({
                variables: {
                    sodienthoai: data.sodienthoai
                }
            });

            if (!loadingBenhNhan && dataBenhNhan?.getBenhNhanbySodienthoai?._id) {
                await handleRegistration(data);
            } else {
                setThongBao('Không tìm thấy thông tin bệnh nhân với số điện thoại này');
                setToast(true);
            }
        } catch (error) {
            console.log(error);
            setThongBao('Có lỗi xảy ra, vui lòng thử lại');
            setToast(true);
        }
    };

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
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" required {...register('email')} />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" required {...register('password')} />
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
