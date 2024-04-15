import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Badge, Col, Container, Row } from "react-bootstrap";

function TuyenDung() {
    const title = "Tuyển Dụng"
    return (
        <>
            <BreadCrum title={title} />
            <Container>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="danger" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="success" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="success" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="success" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="success" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
                <Row className="mt-2">
                    <div className="d-flex justify-content-between" style={{ padding: "20px", borderRadius: "5px", border: "1px solid black" }}>
                        <h1>Kế Toán</h1>
                        <div>
                            <Badge bg="success" style={{ fontSize: "20px" }}>Đang Cần Gấp</Badge>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default TuyenDung;