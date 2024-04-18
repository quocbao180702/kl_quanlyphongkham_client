"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { useCreateDatLichMutation } from "@/graphql-definition/graphql";
import { Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs"
import DatePickerValue from "@/components/datatimepicker/DateTimePicker";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthContextProvider";

function DatLich() {
    const { isAuthenticated } = useContext(AuthContext);

    const [thongbao, setThongBao] = useState('');
    const [toast, setToast] = useState(false);
    const [toastSuccess, setToastSuccess] = useState(false);
    const title = "Đặt Lịch"

    const [ngaykham, setNgayKham] = useState<Dayjs>(dayjs());

    const handleDateChange = (date: any) => {
        setNgayKham(date);
    };

    const [createDatlich] = useCreateDatLichMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        try {
            if (isAuthenticated) {
                if (data?.hoten && data?.sodienthoai && data?.email && data?.motabenh) {
                    const response = await createDatlich({
                        variables: {
                            "input": {
                                "hoten": data?.hoten,
                                "sodienthoai": data?.sodienthoai,
                                "motabenh": data?.motabenh,
                                "ngaydat": dayjs().format("YYYY-MM-DD"),
                                "ngaykham": ngaykham.format('YYYY-MM-DD'),
                                "email": data?.email
                            }
                        }
                    })
                    setThongBao('Đặt Lịch Thành Công Với Số Điện Thoại ' + data?.sodienthoai)
                    setToastSuccess(true);
                }
            }
            else {
                setThongBao('Bạn Cần Đăng Nhập Để Đặt Lịch')
                setToast(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {toast &&
                <Toast bg="danger" onClose={() => setToast(false)} show={toast} delay={3000} autohide style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1 }}>
                    <Toast.Header></Toast.Header>
                    <Toast.Body className="text-white">{thongbao}</Toast.Body>
                </Toast>
            }
            {toastSuccess &&
                <Toast bg="success" onClose={() => setToastSuccess(false)} show={toastSuccess} delay={3000} autohide style={{ position: "fixed", top: "20px", right: "20px", zIndex: 2 }}>
                    <Toast.Header></Toast.Header>
                    <Toast.Body className="text-white">{thongbao}</Toast.Body>
                </Toast>
            }
            <BreadCrum title={title} />
            <Container className="text-center mb-5">
                <div className="mb-5 d-flex align-items-center" style={{ height: "400px" }}>
                    <Row className="mt-5 w-100 text-center">
                        <Col className="col-lg-6 z-index-2 mx-auto">
                            <Form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="col-md-6">
                                    <Form.Label className="visually-hidden sr-only" >Họ Tên</Form.Label>
                                    <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Họ Tên" {...register('hoten')} />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Label className="visually-hidden sr-only">Số Điện Thoại</Form.Label>
                                    <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Số Điện Thoại" {...register('sodienthoai')} />
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    {/* <Form.Label className="form-label visually-hidden sr-only">Category</Form.Label>
                                    <Form.Select className="form-select"  {...register("loai")}>
                                        <option value={""}> Category</option>
                                        <option value={"1"}> Category One</option>
                                        <option value={"2"}> Category Two</option>
                                        <option value={"3"}> Category Three</option>
                                    </Form.Select> */}
                                    <Form.Control type="date" value={ngaykham.format('YYYY-MM-DD')} onChange={(e) => handleDateChange(dayjs(e.target.value))} />
                                    {/* <DatePickerValue label={'Ngày Sinh'} value={ngaykham} onChange={handleDateChange} /> */}
                                </Form.Group>
                                <Form.Group className="col-md-6">
                                    <Form.Label className="form-label visually-hidden sr-only" >Email</Form.Label>
                                    <Form.Control className="form-control form-livedoc-control" type="email" placeholder="Email" {...register('email')} />
                                </Form.Group>
                                <Form.Group className="col-md-12" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control as="textarea" rows={3} placeholder="Mô tả bệnh" {...register('motabenh')} />
                                </Form.Group>
                                <Form.Group className="col-12">
                                    <div className="d-grid">
                                        <Button className="btn btn-primary rounded-pill" type="submit">Đặt Lịch Ngay</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default DatLich;
