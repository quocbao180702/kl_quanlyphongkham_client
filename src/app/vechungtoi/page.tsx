"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";

function VeChungToi() {
    const title = "Về Chúng Tôi"
    return (
        <>
            <BreadCrum title={title} />
            <Container>
                <Row style={{ marginTop: "40px" }}>
                    <Col className="mr-4" md={6}>
                        <div className="d-flex">
                            <div style={{ marginTop: "30px", height: "300px", borderRight: "2px solid black" }}>
                            </div>
                            <div style={{ marginTop: "30px", width: "100px", height: "1px", border: "1px solid black" }}></div>
                            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#ee7621", width: "100px", maxHeight: "100px", border: "2px solid black" }}>
                                <div style={{ padding: "5px", fontSize: "48px", color: "#fff" }}>
                                    1
                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <h4>Kinh Nghiệm</h4>
                                <div>
                                    <p>Với bác sĩ có nhiều năm kinh nghiệm</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="mr-4" style={{ marginTop: "200px" }} md={6}>
                        <div className="d-flex">
                            <div className="text-right" style={{ padding: "10px" }}>
                                <h4>Kinh Nghiệm</h4>
                                <div>
                                    <p>Với bác sĩ có nhiều năm kinh nghiệm</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#ee7621", width: "100px", maxHeight: "100px", border: "2px solid black" }}>
                                <div style={{ padding: "5px", fontSize: "48px", color: "#fff" }}>
                                    2
                                </div>
                            </div>
                            <div style={{ marginTop: "30px", width: "100px", height: "1px", border: "1px solid black" }}></div>
                            <div style={{ marginTop: "30px", height: "300px", borderRight: "2px solid black" }}>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row style={{marginTop: "40px"}}>
                    <Col md={6}></Col>
                    
                </Row> */}
                <Row style={{ marginTop: "40px" }}>
                    <Col className="mr-4" md={6}>
                        <div className="d-flex">
                            <div style={{ marginTop: "30px", height: "300px", borderRight: "2px solid black" }}>
                            </div>
                            <div style={{ marginTop: "30px", width: "100px", height: "1px", border: "1px solid black" }}></div>
                            <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#ee7621", width: "100px", maxHeight: "100px", border: "2px solid black" }}>
                                <div style={{ padding: "5px", fontSize: "48px", color: "#fff" }}>
                                    1
                                </div>
                            </div>
                            <div style={{ padding: "10px" }}>
                                <h4>Kinh Nghiệm</h4>
                                <div>
                                    <p>Với bác sĩ có nhiều năm kinh nghiệm</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default VeChungToi;