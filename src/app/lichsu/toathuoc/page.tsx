"use client"
import { useGetAllToaThuocbyBenhNhanQuery } from "@/graphql-definition/graphql";
import { AuthContext } from "@/provider/AuthContextProvider";
import { useContext, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";
import dayjs, { Dayjs } from "dayjs";
import XemToaThuoc from "./xemToaThuoc";

function ToaThuoc() {

    const { profile } = useContext(AuthContext)
    const { data: dataToathuoc, loading: loadingToathuoc, error: errorToathuoc } = useGetAllToaThuocbyBenhNhanQuery({
        variables: {
            id: profile?._id
        },
        skip: !profile?._id
    })

    const [selectedToaThuoc, setSelectedToaThuoc] = useState({})
    const [show, setModalShow] = useState(false)

    const handleXem = (toathuoc: any) => {
        console.log('toa thuốc là: ', toathuoc)
        setSelectedToaThuoc(toathuoc);
        setModalShow(true)
    }

    return (
        <>
            <Container style={{ minHeight: "500px" }}>
                <Row>
                    <h3 className="text-center">Toa Thốc</h3>
                </Row>
                <Row className="mt-3">
                    <Table bordered hover>
                        <thead>
                            <tr className="text-center">
                                <th style={{ width: "5%" }}>STT</th>
                                <td>Ngày Tạo</td>
                                <td>Ngày Tái Khám</td>
                                <td>Bệnh</td>
                                <td>Bác Sĩ Khám</td>
                                <td style={{ width: "7%" }}>Chi Tiết</td>
                            </tr>
                        </thead>
                        <tbody>
                            {dataToathuoc && dataToathuoc.getAllToaThuocbyBenhNhan.map((toathuoc, index: number) => {
                                return (
                                    <tr className="text-center" key={toathuoc?._id}>
                                        <td>{index += 1}</td>
                                        <td>{dayjs(toathuoc?.ngaytao).format('DD-MM-YYYY')}</td>
                                        <td>{dayjs(toathuoc?.ngaytaikham).format('DD-MM-YYYY')}</td>
                                        <td>{toathuoc?.benhs?.map((benh) => (benh?.tenbenh))}</td>
                                        <td>{toathuoc?.bacsi?.hoten}</td>
                                        <td onClick={() => handleXem(toathuoc)}><FaEye /></td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </Row>
                <XemToaThuoc
                    show={show}
                    onHide={() => setModalShow(false)}
                    toathuoc={selectedToaThuoc}
                />
            </Container>
        </>
    );
}

export default ToaThuoc;