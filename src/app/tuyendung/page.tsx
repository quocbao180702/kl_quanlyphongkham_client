import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";

function TuyenDung() {
    const title = "Tuyển Dụng"
    return (
        <>
            <BreadCrum title={title} />
            <Container>
                <Row className="">
                    <Col style={{height: "500px"}} className="w-100 d-flex justify-content-center">
                            <div className="tuyendung">
                                <h3 className="text-uppercase">Kế Toan</h3>
                            </div>
                    </Col>
                </Row>
                <Row>pagination</Row>
            </Container>
        </>
    );
}

export default TuyenDung;