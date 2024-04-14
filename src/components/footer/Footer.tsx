import { Container, Form, Row } from "react-bootstrap";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
    return (
        <footer id="footer" className="mt-5">
            <div className="footer-top">
                <Container>
                    <Row>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>Clinic</h3>
                            <p>
                                1022/3 Hà Hoàng Hổ <br />
                                Phú Hòa, Long Xuyên<br />
                                An Giang <br /><br />
                                <strong>Phone:</strong> +0123 456 789<br />
                                <strong>Email:</strong> dqbao_21th@student.agu.edu.vn<br />
                            </p>
                        </div>

                        <div className="col-lg-5 col-md-12 footer-links">
                            <div className="w-100 d-flex justify-content-around">
                                <div className="footer-link">
                                    <h4>Link</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Đặt Lịch</a></li>
                                    </ul>
                                </div>
                                <div className="footer-link">
                                    <h4>Tin Tức</h4>
                                    <ul>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Tuyển Dụng</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Về Chúng Tôi</a></li>
                                        <li><i className="bx bx-chevron-right"></i> <a href="#">Blogs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Gửi Thư Cho Chúng Tôi</h4>
                            <p>Rất mong nhận được sự góp ý của các bạn để chúng tôi hoàn thiện hơn!</p>
                            <Form>
                                <Form.Control type="email" name="email"></Form.Control>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </div>

            <Container className="d-md-flex py-4 footerBottom">
                <div className="me-md-auto text-center text-md-start w-100 footer__content">
                    <div className="w-100 text-center footer__copyright">
                        &copy; Copyright <strong><span>Dang Quoc Bao - DTH205716 - DH21TH3</span></strong>. All Rights Reserved
                    </div>
                </div>
                <div className="social-links d-flex justify-content-around text-center text-md-right pt-3 pt-md-0 footer__social-links">
                    <a href="#" className="twitter"><BsTwitter /></a>
                    <a href="#" className="facebook"><FaFacebook /></a>
                    <a href="#" className="instagram"><BsInstagram /></a>
                </div>
            </Container>
        </footer >
    );
}

export default Footer;