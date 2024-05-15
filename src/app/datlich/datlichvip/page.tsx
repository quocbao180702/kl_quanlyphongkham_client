"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Card, Col, Container, Form, Row, Toast } from "react-bootstrap";

import { Button, Calendar, message } from "antd";


import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { PiNotePencilFill } from "react-icons/pi";

import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { IoCalendarOutline } from "react-icons/io5";
import { GiFinishLine } from "react-icons/gi";

import moment from "moment";
import { FaUserDoctor } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useCreateDatLichBacSiMutation, useGetAllBacSiQuery, useGetLichKhamLazyQuery } from "@/graphql-definition/graphql";
import { SubmitHandler, useForm } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import Link from "next/link";
import { AuthContext } from "@/provider/AuthContextProvider";




function DatLichVip() {

    const { isAuthenticated } = useContext(AuthContext)
    const [activeStep, setActiveStep] = useState(0);
    const [selectedDate, setSelectedDate] = useState<any>(null);
    const [idBacSi, setIdBacSi] = useState('');
    const [idLich, setIdLich] = useState('');
    const [enabledDates, setEnabledDates] = useState<string[] | undefined>(undefined);
    const [phien, SetPhien] = useState([] as any[]);
    const [selectePhien, setSelectedPhien] = useState<{ batdau: string, ketthuc: string }>()
    const [thongbao, setThongBao] = useState('');
    const [toast, setToast] = useState(false);
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());


    const { data: dataBacSi, loading: loadingBacSi, error: errorBacSi } = useGetAllBacSiQuery({
        variables: {
            input: {
                skip: 0,
                take: 4
            }
        }
    });

    const [getLichKham, { data: dataLichKham, loading: loadingLichKham, error: errorLichKham }] = useGetLichKhamLazyQuery();


    useEffect(() => {
        if (idBacSi) {
            getLichKham({
                variables: {
                    id: idLich
                }
            })
        }
    }, [idLich])

    useEffect(() => {
        const enabledDates = dataLichKham?.getLichKham?.ngaykham.map(date => date.ngaytrongtuan);
        setEnabledDates(enabledDates);
    }, [dataLichKham?.getLichKham])

    const totalSteps = () => {
        return steps.length;
    }

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    }

    const handleChangeNextStep = () => {
        const newActiveStep = isLastStep() ? activeStep : activeStep + 1
        setActiveStep(newActiveStep);
        /*  setActiveStep(activeStep + 1) */
    }

    const handleChangeBackStep = () => {
        const newActiveStep = (activeStep - 1) < 0 ? 0 : (activeStep - 1);
        setActiveStep(newActiveStep)
        /* setActiveStep(activeStep-1); */
    }

    const handleChooseBacSi = (id: string, idBacSi: string) => {
        console.log('id is: ', id);
        setIdBacSi(idBacSi);
        setIdLich(id);
        handleChangeNextStep();
    }

    const onDateSelect = (date: any) => {
        console.log(date.format('YYYY-MM-DD'));
        setSelectedDate(date);
        const phiens = dataLichKham?.getLichKham?.ngaykham
            .flatMap(ngay => ngay?.ngaytrongtuan === date.format('dddd') ? ngay?.phiens : [])
            .filter(Boolean);
        SetPhien(phiens || []);
    };

    useEffect(() => {
        console.log('các phiên khám: ', phien)
    }, [phien])

    const currentWeek = moment().week(); // Tuần hiện tại

    // Hàm xử lý khi người dùng chọn một ngày cụ thể
    const handleDateSelect = (date: any) => {
        console.log("Selected date:", date.format("YYYY-MM-DD"));
    };

    // Hàm xác định xem ngày có thể chọn hay không
    /* const disabledDate = (date: any) => {
        return date.week() !== currentWeek;
    }; */
    /* const disabledDate = (date: any) => {
        return date.week() !== currentWeek; 
    } */

    const disabledDate = (current: any) => {
        if (!enabledDates?.includes(current.format('dddd'))) {
            return true
        }
        const ngaynghi = dataLichKham?.getLichKham?.ngaynghi.map(ngay => moment(ngay).format('YYYY-MM-DD'));

        if (ngaynghi) {
            if (ngaynghi.includes(current.format('YYYY-MM-DD'))) {
                return true;
            }
        }

        return false;

    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleChoosePhien = (batdau: string, ketthuc: string) => {
        setSelectedPhien({ batdau, ketthuc })
        handleChangeNextStep();
    }

    const handleDateChange = (date: any) => {
        setNgaySinh(date);
    };

    const [createDatlichBacSi] = useCreateDatLichBacSiMutation();

    const onSubmit: SubmitHandler<any> = async (data: any) => {
        console.log('phiên: ', selectePhien);
        console.log('ngày khám: ', selectedDate.format('YYYY-MM-DD'));
        console.log('id Bác Sĩ: ', idBacSi);
        console.log('họ tên: ', data?.hoten);
        console.log('data số điện thoại: ', data?.sodienthoai);
        console.log('email: ', data?.email);
        console.log('mô tả bệnh: ', data?.motabenh);
        try {
            if (isAuthenticated) {
                if (idBacSi && data?.sodienthoai && selectePhien) {
                    const result = await createDatlichBacSi({
                        variables: {
                            input: {
                                "bacsi": idBacSi,
                                "sodienthoai": data?.sodienthoai,
                                "email": data?.email,
                                "hoten": data?.hoten,
                                "cccd": data?.cccd,
                                "ngaysinh": ngaysinh.format("YYYY-MM-DD"),
                                "gioitinh": data?.gioitinh === 0 ? true : false,
                                "motabenh": data?.motabenh,
                                "ngaydat": dayjs().format("YYYY-MM-DD"),
                                "ngaykham": selectedDate.format('YYYY-MM-DD'),
                                "phien": {
                                    "batdau": selectePhien?.batdau,
                                    "ketthuc": selectePhien?.ketthuc,
                                    "soluongToiDa": 5,
                                    "trangthai": true
                                }
                            }
                        }
                    })
                    if (result?.errors) {
                        console.log('bị lỗi: ', result?.errors)
                        return;
                    }
                    message.success('Đặt Lịch Thành Công');
                    handleChangeNextStep();
                }
            } else {
                message.error('Đặt Lịch Thất Bại');
                setThongBao('Bạn Cần Đăng Nhập Để Đặt Lịch')
                setToast(true);
            }
        } catch (error) {
            message.error('Đặt Lịch Thất Bại');
            setThongBao('không thể thêm đặt lịch theo bác sĩ vì' + error)
            setToast(true);
            /* console.log('không thể thêm đặt lịch theo bác sĩ vì: ', error) */
        }

    }


    const getStepContent = (activeStep: number) => {
        switch (activeStep) {
            case 0:
                return (
                    <>
                        <h3>Danh Sách Bác Sĩ</h3>
                        <Row className="mt-2 mb-2">
                            {dataBacSi?.getAllBacSi?.map(bacsi => (
                                <Col lg={6} key={bacsi?._id}>
                                    <Card className="mt-2">
                                        <Card.Header>{bacsi?.hoten}</Card.Header>
                                        <Card.Body>
                                            <Card.Title>{bacsi?.chuyenkhoa?.tenkhoa}</Card.Title>
                                            <Card.Text>
                                                <strong>Giá khám</strong>150.000 đ
                                            </Card.Text>
                                            <Button onClick={() => handleChooseBacSi(bacsi?.lichkham || '', bacsi?._id || '')} className="primary">Đặt</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </>
                )
            case 1:
                return (
                    <div>
                        <h3 className="text-center"> Lịch Khám </h3>
                        <h4>Lịch Khám Id: {dataLichKham?.getLichKham?._id}</h4>
                        <Calendar
                            disabledDate={disabledDate}
                            onSelect={onDateSelect}
                        />
                        <div>
                            {selectedDate && <h4>{selectedDate.format('YYYY-MM-DD')}</h4>}
                            {selectedDate && <h4>{selectedDate.format('dddd')}</h4>}
                            {phien && (phien.map((map, index) => (
                                <Button className="btn-custom" onClick={() => handleChoosePhien(map?.batdau, map?.ketthuc)} key={index}>{map?.batdau} - {map?.ketthuc}</Button>
                            )))}
                        </div>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <Row className="justify-content-center">
                            <Form className="col-6 g-3" onSubmit={handleSubmit(onSubmit)}>
                                <Row>
                                    <Form.Group className="col-md-8 mb-2">
                                        <Form.Label className="visually-hidden sr-only" >Họ Tên</Form.Label>
                                        <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Họ Tên" {...register('hoten')} />
                                    </Form.Group>
                                    <Form.Group className="col-md-4 mb-2">
                                        <Form.Label className="visually-hidden sr-only" >CCCD</Form.Label>
                                        <Form.Control className="form-control form-livedoc-control" type="text" placeholder="CCCD" {...register('cccd')} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="col-md-4 mb-2">
                                        <Form.Label className="visually-hidden sr-only">Số Điện Thoại</Form.Label>
                                        <Form.Control className="form-control form-livedoc-control" type="text" placeholder="Số Điện Thoại" {...register('sodienthoai')} />
                                    </Form.Group>
                                    <Form.Group className="col-md-4">
                                        <Form.Control type="date" min={dayjs().format('YYYY-MM-DD')} value={ngaysinh.format('YYYY-MM-DD')} onChange={(e) => handleDateChange(dayjs(e.target.value))} />
                                    </Form.Group>
                                    <Form.Group className="col-md-4">
                                        <Form.Select className="col-md-4" {...register("gioitinh")}>
                                            <option value={0}>Nam</option>
                                            <option value={1}>Nữ</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group className="col-md-12 mb-2">
                                        <Form.Label className="form-label visually-hidden sr-only" >Email</Form.Label>
                                        <Form.Control className="form-control form-livedoc-control" type="email" placeholder="Email" {...register('email')} />
                                    </Form.Group>
                                    <Form.Group className="col-md-12 mb-2" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} placeholder="Mô tả bệnh" {...register('motabenh')} />
                                    </Form.Group>
                                    <Form.Group className="col-12">
                                        <div className="d-grid">
                                            <Button className="btn btn-primary rounded-pill" htmlType="submit">Hoàn Tất</Button>
                                        </div>
                                    </Form.Group>
                                </Row>
                            </Form>
                        </Row>
                    </div>
                )
        }

    }


    const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundImage:
                    'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 3,
            border: 0,
            backgroundColor:
                theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
        },
    }));

    const ColorlibStepIconRoot = styled('div')<{
        ownerState: { completed?: boolean; active?: boolean };
    }>(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            backgroundImage:
                'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        }),
    }));

    function ColorlibStepIcon(props: StepIconProps) {
        const { active, completed, className } = props;

        const icons: { [index: string]: React.ReactElement } = {
            1: <FaUserDoctor />,
            2: <IoCalendarOutline />,
            3: <PiNotePencilFill />,
            4: <GiFinishLine />
        };

        return (
            <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </ColorlibStepIconRoot>
        );
    }

    const steps = ['Chọn Bác Sĩ', 'Chọn Lịch Khám', 'Điền Thông Tin', 'Hoàn Thành'];

    return (
        <>
            {toast &&
                <Toast bg="danger" onClose={() => setToast(false)} show={toast} delay={3000} autohide style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1 }}>
                    <Toast.Header></Toast.Header>
                    <Toast.Body className="text-white">{thongbao}</Toast.Body>
                </Toast>
            }
            <BreadCrum title="Đặt Lịch Vip" />
            <Container>
                <Stack sx={{ width: '100%', marginTop: "10px" }} spacing={4}>
                    <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                        {
                            steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                </Step>
                            ))
                        }
                    </Stepper>
                </Stack>
                <div>
                    {activeStep === steps.length - 1 ? (
                        <div className="mt-5">
                            <h4 className="text-center">Đặt Khám Hoàn Tất</h4>
                            <h5 className="text-center mt-5">Thông Tin Đặt Khám</h5>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>Đặt Lịch Thành Công</Card.Title>
                                        <Card.Text>
                                            Cảm ơn, bạn đã tin tưởng chúng tôi
                                        </Card.Text>
                                        <Link href={"/"} className="btn btn-outline-primary">
                                            Về Trang Chủ
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h4> Step is {activeStep}</h4>

                            <div className="mt-2 mb-1">
                                {getStepContent(activeStep)}
                            </div>

                            <div className="d-flex justify-content-start align-items-center">
                                {activeStep === 0 ? '' : <Button className="btn btn-outline-primary" onClick={handleChangeBackStep}>Quay về</Button>}
                            </div>
                        </div>
                    )
                    }
                </div>
                {/* <div>
                    <h3 className="text-center"> Lịch Khám </h3>
                    <Calendar
                        disabledDate={disabledDate}
                        onSelect={onDateSelect}
                    />
                </div> */}
            </Container>
        </>
    );
}

export default DatLichVip;