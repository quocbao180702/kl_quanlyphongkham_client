'use client'
import HoaDon from "@/components/pdf/hoadon";
import { Button, Modal } from "react-bootstrap";

function XemHoaDon({show, onHide, hoadon}: any) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Hóa Đơn Cận Lâm Sàng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {hoadon && (<HoaDon hoadon={hoadon} />
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default XemHoaDon;