import { Button, Container, Form, Row } from "react-bootstrap";

function Register() {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center" style={{ height: "700px" }}>
                <div className="col-md-6 pt-4 mt-3 mt-md-0">
                    <div className="card border-0 shadow">
                        <div className="card-body">
                            <h2 className="h4 mb-3">Chưa có tài khoản? Đăng ký</h2>
                            <p className="fs-sm text-muted mb-4">Việc đăng ký chỉ mất chưa đầy một phút nhưng mang lại cho bạn toàn quyền kiểm soát quá trình khám của bạn</p>
                            <Form className="needs-validation">
                                <Row className="gx-4 gy-3">
                                    <div className="col-sm-6">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" required id="reg-fn" />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control type="text" required id="reg-ln" />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >E-mail Address</Form.Label>
                                        <Form.Control type="email" required id="reg-email" />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >Phone Number</Form.Label>
                                        <Form.Control type="text" required id="reg-phone" />
                                        <div className="invalid-feedback">Please enter your phone number!</div>
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >Password</Form.Label>
                                        <Form.Control type="password" required id="reg-password" />
                                    </div>
                                    <div className="col-sm-6">
                                        <Form.Label >Confirm Password</Form.Label>
                                        <Form.Control type="password" required id="reg-password-confirm" />
                                        <div className="invalid-feedback">Passwords do not match!</div>
                                    </div>
                                    <div className="col-12 text-end">
                                        <Button className="btn btn-primary" type="submit"><i className="ci-user me-2 ms-n1"></i>Đăng ký</Button>
                                    </div>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Register;