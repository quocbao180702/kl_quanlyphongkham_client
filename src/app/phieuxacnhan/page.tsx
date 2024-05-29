"use client"
import { useGetAllPhieuXacNhanbyIdBenhNhanQuery } from "@/graphql-definition/graphql";
import { AuthContext } from "@/provider/AuthContextProvider";
import dayjs from "dayjs";
import { useContext } from "react";
import { Badge, Container, Row, Table } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';

function PhieuXacNhan() {
    const { profile } = useContext(AuthContext);
    const { data, loading, error } = useGetAllPhieuXacNhanbyIdBenhNhanQuery({
        variables: {
            id: profile?._id
        },
        skip: !profile?._id
    })

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <>
            <Container style={{ minHeight: "400px" }}>
                <Row>
                    <h3 className="text-center">Phiếu Xác Nhận Của Bạn</h3>
                </Row>
                <Row className="mt-3">
                    <Table bordered hover>
                        <thead >
                            <tr className="text-center">
                                <th>
                                    Họ Tên
                                </th>
                                <th>
                                    Ngày Sinh
                                </th>
                                <th>
                                    Giới Tính
                                </th>
                                <th>
                                    Phiên Khám
                                </th>
                                <th>
                                    Ngày Khám
                                </th>
                                <th>
                                    Trạng Thái
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            )}
                            {data &&
                                data.getAllPhieuXacNhanbyIdBenhNhan.map((phieu, index: number) => (
                                    <tr className="text-center" key={phieu?._id}>
                                        <td>{phieu?.benhnhan?.hoten}</td>
                                        <td>{dayjs(phieu?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</td>
                                        <td>{phieu?.benhnhan?.gioitinh ? "Nam" : "Nữ"}</td>
                                        <td>{phieu?.phien?.batdau} - {phieu?.phien?.ketthuc}</td>
                                        <td>{dayjs(phieu?.ngaykham).format('YYYY-MM-DD')}</td>
                                        <td><Badge bg="success">{phieu?.trangthai}</Badge></td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Row>
            </Container >
        </>
    );
}

export default PhieuXacNhan;