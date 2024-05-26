'use client'
import { useGetALlHoaDonClSbyBenhNhanQuery } from "@/graphql-definition/graphql";
import { AuthContext } from "@/provider/AuthContextProvider";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Badge, Container, Row, Table } from "react-bootstrap";
import { LiaEyeSolid } from "react-icons/lia";
import XemHoaDon from "./XemHoaDon";

function HoaDonCLS() {

    const { profile } = useContext(AuthContext);

    const {data: dataHoaDonCLS, error: errorHoaDonCSL, loading: loadingHoadonCLS} = useGetALlHoaDonClSbyBenhNhanQuery({
        variables: {
            id: profile?._id
        },
        skip: !profile?._id
    })

    useEffect(() => {
        console.log('hoa đơn lâm sàng', dataHoaDonCLS?.getHoaDonCLSbyBenhNhan)
    }, [dataHoaDonCLS])

    const [show, setModalShow] = useState(false);
    const [selectedHoadon, setSelectedHoadon] = useState({})
    
    const handleXem = (hoadon: any) => {
        setSelectedHoadon(hoadon);
        setModalShow(true);
    }
    


    return (
        <>
            <Container style={{ minHeight: "400px" }}>
                <Row>
                    <h3 className="text-center">Lịch Sử Hóa Đơn Cận Lâm Sàng</h3>
                </Row>
                <Row className="mt-3">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Họ Tên</th>
                                <th>Ngày Sinh</th>
                                <th>Giới Tính</th>
                                <th>Ngày Tạo</th>
                                <th>BHYT</th>
                                <th>Thành Tiền</th>
                                <th>Trạng Thái</th>
                                <th className="text-center"> Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {dataHoaDonCLS?.getHoaDonCLSbyBenhNhan.map((hoadon: any) => (
                                <tr key={hoadon?._id}>
                                    <td>{hoadon?.benhnhan?.hoten}</td>
                                    <td>{moment(hoadon?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</td>
                                    <td>{hoadon?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</td>
                                    <td>{moment(hoadon?.ngaytao).format('YYYY-MM-DD')}</td>
                                    <td>{hoadon?.bhyt ? 'Có' : 'Không'}</td>
                                    <td>{hoadon?.thanhtien}</td>
                                    <td width={150} className="text-center" >{hoadon?.tinhtrang ? <Badge bg="success">Đã Thanh Toán</Badge> : <Badge bg="warning">Chưa Thanh Toán</Badge>}</td>
                                    <td width={50} className="text-center" onClick={() => handleXem(hoadon)}><LiaEyeSolid /></td>
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
            </Container>
        </>
    );
}

export default HoaDonCLS;