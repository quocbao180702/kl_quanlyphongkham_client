"use client"
import { useGetAllHoadonByBenhNhanQuery } from "@/graphql-definition/graphql";
import { AuthContext } from "@/provider/AuthContextProvider";
import { useContext, useState } from "react";
import { Badge, Container, Row, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";
import dayjs, { Dayjs } from "dayjs";
import XemHoaDon from "./xemHoaDon";

function HoaDon() {

    const { profile } = useContext(AuthContext);
    const { data: dataHoadon, loading: loadingHoadon, error: errorHoadon } = useGetAllHoadonByBenhNhanQuery({
        variables: {
            id: profile?._id
        },
        skip: !profile?._id
    });
    const [show, setModalShow] = useState(false);
    const [selectedHoadon, setSelectedHoadon] = useState({})

    const handleXemHoaDon = (hoadon: any) => {
        setSelectedHoadon(hoadon)
        setModalShow(true)
    }

    return (
        <>
            <Container style={{ minHeight: "400px" }}>
                <Row>
                    <h3 className="text-center">Lịch Sử Hóa Đơn</h3>
                </Row>
                <Row className="mt-3">
                    <Table bordered hover>
                        <thead >
                            <tr className="text-center">
                                <th style={{ width: "5%" }}>
                                    STT
                                </th>
                                <th>
                                    Ngày T
                                </th>
                                <th>
                                    Thành Tiền
                                </th>
                                <th style={{ width: "7%" }}>
                                    BHYT
                                </th>
                                <th>
                                    Trạng Thái
                                </th>
                                <th style={{ width: "7%" }}>
                                    Chi Tiết
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {dataHoadon &&
                                dataHoadon.getAllHoadonByBenhNhan.map((hoadon, index: number) => (
                                    <tr className="text-center" key={hoadon?._id}>
                                        <td>{index += 1}</td>
                                        <td>{dayjs(hoadon?.ngaytao).format('YYYY-MM-DD')}</td>
                                        <td>{hoadon?.thanhtien}</td>
                                        <td>{hoadon?.bhyt ? 'Có' : 'Không'}</td>
                                        <td>
                                            {hoadon?.trangthai ? <Badge bg="success">Đã Thanh Toán</Badge> : <Badge bg="danger">Chưa Thanh Toán</Badge>}
                                        </td>
                                        <td onClick={() => handleXemHoaDon(hoadon)}>
                                            <FaEye />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Row>
                <XemHoaDon
                    show={show}
                    onHide={() => setModalShow(false)}
                    hoadon={selectedHoadon}
                />
            </Container >
        </>
    );
}

export default HoaDon;