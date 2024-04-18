import dayjs from "dayjs";
import { Button, Modal, Row, Table } from "react-bootstrap";

function XemToaThuoc({ show, onHide, toathuoc }: any) {
    console.log('toa thuốc: ', toathuoc)
    const ketQua = (toathuoc?.thuocs || []).reduce((acc: any, curr: any, index: number) => {
        acc.push({ thuoc: curr?.tenthuoc, soLuong: (toathuoc?.soluongs || [])[index] });
        return acc;
    }, []);
    console.log('kết quả là: ', ketQua)

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Toa Thuốc</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {toathuoc && (
                    <>
                        <Row>
                            <p>Phòng Khám Clinic</p>
                            <p>Địa chỉ: 1022/3 Mỹ Hòa, Long Xuyên, An Giang</p>
                            <p>Điện thoại: 0123456789</p>
                        </Row>
                        <Row>
                            <h4 className="text-center">Đơn Thuốc</h4>
                            <p>Họ tên: {toathuoc?.benhnhan?.hoten}</p>
                            <div className="d-flex justify-content-between">
                                <p>Ngày sinh: {dayjs(toathuoc?.benhnhan?.ngaysinh).format('DD/MM/YYYY')}</p>
                                <p>Cân nặng: {toathuoc?.benhnhan?.sinhhieu?.cannang}</p>
                                <p>Giới tính: {toathuoc?.benhnhan?.gioitinh ? 'Nam' : 'Nữ'}</p>
                            </div>
                            <p>Sổ bảo hiểm y tế (nếu có): </p>
                            <p>Địa chỉ liên hệ: {toathuoc?.benhnhan?.diachi}</p>
                            <p>Chuẩn đoán: {toathuoc?.benhs?.map((benh: any) => (benh?.tenbenh))}</p>
                            <p>Thuốc điền trị: </p>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Tên Thuốc</th>
                                        <th>Số lượng</th>
                                        <th>Liều dùng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ketQua && ketQua?.map((thuoc: any, index: number) => (
                                        <tr key={index}>
                                            <td>{thuoc?.thuoc}</td>
                                            <td>{thuoc?.soLuong}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <p>Lời dặn: </p>
                            <p>Ngày tái khám: {dayjs(toathuoc?.ngaytaikham).format('DD-MM-YYYY')}</p>
                            <div className="w-100 d-flex justify-content-end">
                                <div className="text-center">
                                    <p>...., Ngày ... Tháng ... Năm ... </p>
                                    <p>Bác sĩ/Y sĩ khám bệnh</p>
                                    {toathuoc?.bacsi?.hoten}
                                </div>
                            </div>
                            <ul className="row-list">
                                <li>Khám lại xin mang theo đơn này</li>
                                <li>Số điện thoại liên hệ ....</li>
                                <li>Tên bố hoặc mẹ của trẻ hoặc người đưa trẻ đến khám bệnh, chữa bệnh: ...</li>
                            </ul>
                        </Row>
                    </>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default XemToaThuoc;