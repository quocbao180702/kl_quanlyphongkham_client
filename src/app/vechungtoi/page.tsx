"use client"
import BreadCrum from "@/components/breadcrumb/breadcrumb";
import { Container } from "react-bootstrap";

function VeChungToi() {
    const title = "Về Chúng Tôi"
    return (
        <>
            <BreadCrum title={title} />
            <Container style={{height: "800px"}}>

            </Container>
        </>
    );
}

export default VeChungToi;