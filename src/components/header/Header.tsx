"use client"
import { memo, useContext, useEffect, useState } from 'react';
import { AuthContext } from '@/provider/AuthContextProvider';
import Flag from 'react-world-flags';
import { Button, Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

function Header() {
    const { isAuthenticated, profile, logoutClient } = useContext(AuthContext);

    const handleLogout = () => {
        logoutClient();
    };

    const [selectedItem, setSelectedItem] = useState({ label: 'Tiếng Việt', code: 'vn' });

    const handleSelect = (code: string | null) => {
        if (code !== null) {
            let label = 'Tiếng Việt';
            if (code === 'us') {
                label = 'Tiếng Anh';
            }
            setSelectedItem({ label, code });
        }
    };


    return (
        <header className="mb-3">
            <Navbar style={{ backgroundColor: "#1da1f2" }} data-bs-theme="dark" className="navbar-custom">
                <Container>
                    <Navbar.Brand href="#home">Clinic</Navbar.Brand>
                    <Nav className="jutify-content-center " >
                        <Nav.Link as={Link} href="/" className="text-light">Trang Chủ</Nav.Link>
                        <Nav.Link as={Link} href="/vechungtoi" className="text-light">Về Chúng Tôi</Nav.Link>
                        <Nav.Link as={Link} href="/tuyendung" className="text-light">Tuyển Dụng</Nav.Link>
                        <Nav.Link as={Link} href="/datlich" className="text-light">Đặt Lịch</Nav.Link>
                        <Nav.Link as={Link} href="/blogs" className="text-light">Blogs</Nav.Link>
                    </Nav>
                    <div className="d-flex justify-content-between align-items-center">
                        <DropdownButton
                            title={<Flag className="custom-flag" code={selectedItem.code.toUpperCase()} />}
                            onSelect={handleSelect}
                            className="custom-dropdown"
                        >
                            <Dropdown.Item eventKey="vn">
                                <Flag code="VN" className="custom-flag" /> Tiếng Việt
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="us">
                                <Flag code="US" className="custom-flag" /> Tiếng Anh
                            </Dropdown.Item>
                        </DropdownButton>
                        {isAuthenticated ?
                            (
                                <Dropdown data-bs-theme="light">
                                    <Dropdown.Toggle id="dropdown-button-light-example1" style={{ backgroundColor: "inherit" }}>
                                        <Image src={`${profile?.avatar?.url}`} style={{ width: "30px", height: "30px", borderRadius: "5px" }} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" active>
                                            Hồ Sơ Cá Nhân
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/lichsu/hoadon">Hoá Đơn</Dropdown.Item>
                                        <Dropdown.Item href="/lichsu/toathuoc">Toa Thuốc</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item onClick={handleLogout}>Đăng Xuất</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) :
                            (
                                <div className="d-flex justify-content-between align-items-center" style={{ marginLeft: '10px' }}> {/* Thêm margin left */}
                                    <Button variant="outline-secondary">
                                        <Link href="/login" className=" link-underline link-underline-opacity-0 text-light">
                                            Đăng Nhập
                                        </Link>
                                    </Button>
                                    <Button variant="outline-secondary">
                                        <Link href="/register" className=" link-underline link-underline-opacity-0 text-light">
                                            Đăng Ký
                                        </Link>
                                    </Button>
                                </div>
                            )
                        }
                    </div>

                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
