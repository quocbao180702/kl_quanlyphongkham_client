"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { useRouter } from "next/navigation";
import { Button, Container, Row } from "react-bootstrap";
import { FcOvertime, FcPlanner } from "react-icons/fc";

function DatLich() {

    const router = useRouter()

    const handleChyenVip = () => {
        router.push('/datlich/datlichvip');
    }
    const handleChuyenThuong = () => {
        router.push('/datlich/datlichthuong');
    }

    return (
        <>
            <BreadCrum title="Đặt Lịch" />
            <Container className="mb-5">
                <div className="w-100 text-center mt-5">
                    <h2 className="d-block">Hình Thức Đặt Lịch</h2>
                    <p>Đặt khám nhanh chóng, giảm thời gian chờ đợi</p>
                    <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="flex-item">
                            <Button className="btn-custom" onClick={handleChuyenThuong}>
                                <FcOvertime size={42} /> Đặt Lịch Thường
                            </Button>
                        </div>
                        <div className="flex-item">
                            <Button className="btn-custom" onClick={handleChyenVip}>
                                <FcPlanner size={42}/> Đặt Theo Bác Sĩ
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default DatLich;