"use client"
import DatePickerValue from "@/components/datatimepicker/DateTimePicker";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import dayjs, { Dayjs } from "dayjs";
import { AuthContext } from "@/provider/AuthContextProvider";
import { useUpdateBenhNhanMutation } from "@/graphql-definition/graphql";
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { LanguageContext } from "@/provider/LanguageProvider";
import { profile as vn } from "@/locales/vi/profile.page";
import { profile as en } from "@/locales/en/profile.page";

function Profile() {
    const { profile } = useContext(AuthContext);
    const [hoten, setHoten] = useState('');
    const [ngaysinh, setNgaySinh] = useState<Dayjs>(dayjs());
    const [gioitinh, setGioitinh] = useState("0");
    const [diachi, setDiaChi] = useState('');
    const [cccd, setCCCD] = useState('');
    const [bhyt, setBHYT] = useState('');
    const [user, setUser] = useState('');
    const [edit, SetEding] = useState(true);
    const { languageState } = useContext(LanguageContext);
    const [t, setT] = useState(languageState === 'vn' ? vn : en)
    const [title, setTitle] = useState(t?.title)
    
    useEffect(() => {
        setT(languageState === 'vn' ? vn : en)
    }, [languageState])

    useEffect(() => {
        setTitle(t?.title)
    }, [t])



    useEffect(() => {
        if (profile) {
            setHoten(profile?.hoten || '');
            setNgaySinh(dayjs(profile?.ngaysinh));
            setGioitinh(profile?.gioitinh == true ? "0" : "1");
            setDiaChi(profile?.diachi);
            setCCCD(profile?.cccd);
            setBHYT(profile?.bhyt);
            setUser(profile?.user?._id);
        }
        console.log('profile: ', profile);
    }, [profile])

    const handleDateChange = (date: any) => {
        setNgaySinh(date.$d);
    };

    const handleGenderChange = (event: SelectChangeEvent<string>) => {
        setGioitinh(event.target.value);
    };

    const handleEdit = () => {
        SetEding(!edit);
    }

    const [updateBenhNhan] = useUpdateBenhNhanMutation()

    const handleAdd = async () => {
        try {
            if (profile?._id) {
                const response = await updateBenhNhan({
                    variables: {
                        "input": {
                            "_id": profile?._id,
                            "hoten": hoten,
                            "ngaysinh": dayjs(ngaysinh).format('YYYY-MM-DD'),
                            "gioitinh": gioitinh === "0" ? true : false,
                            "diachi": diachi,
                            "cccd": cccd,
                            "bhyt": bhyt,
                            "username": profile?.user?.username
                        }
                    }
                })
            }
            else {
                console.log('Không tìm thấy bệnh nhân: ', profile?._id)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <BreadCrum title={title} />
            <Container className="">
                <div className="container-custom">
                    <Form>
                        <h1>Thông Tin Bệnh Nhân</h1>
                        <Form.Group controlId="formBenhNhanHoten" className="mt-2">
                            <Form.Label>Họ Tên</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"Họ tên"}
                                value={hoten}
                                onChange={(event) => setHoten(event.target.value)}
                                disabled={edit}
                            />
                        </Form.Group>

                        <Form.Group controlId="formUserEmail" className="mt-2">
                            <DatePickerValue label={'Ngày Sinh'} value={ngaysinh} onChange={handleDateChange} />
                        </Form.Group>

                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="mt-2">
                            <InputLabel id="demo-select-small-label">Giới tính</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                label="Giới tính"
                                value={gioitinh}
                                onChange={handleGenderChange}
                                disabled={edit}
                            >
                                <MenuItem value={0}>Nam</MenuItem>
                                <MenuItem value={1}>Nữ</MenuItem>
                            </Select>
                        </FormControl>

                        <Form.Group controlId="formBenhNhanDiaChi" className="mt-2">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"Địa chỉ"}
                                value={diachi}
                                onChange={(event) => setDiaChi(event.target.value)}
                                disabled={edit}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBenhNhanCCCD" className="mt-2">
                            <Form.Label>CCCD</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"CCCD"}
                                value={cccd}
                                onChange={(event) => setCCCD(event.target.value)}
                                disabled={edit}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBenhNhanBHYT" className="mt-2">
                            <Form.Label>BHYT</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={"BHYT"}
                                value={bhyt}
                                onChange={(event) => setBHYT(event.target.value)}
                                disabled={edit}
                            />
                        </Form.Group>
                        <div className="mt-3 d-flex justify-content-around">
                            <Button type="button" className="" onClick={handleEdit}>
                                Thay Đổi
                            </Button>
                            <Button type="submit" className="" onClick={handleAdd}>
                                Hoàn Tất
                            </Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    );
}

export default Profile;