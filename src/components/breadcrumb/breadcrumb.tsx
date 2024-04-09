import { Container } from "react-bootstrap";
import { FaAngleDoubleRight } from "react-icons/fa";

function BreadCrum({ title }: { title: string }) {
    return (
        <div className="page-header" style={{ backgroundImage: "url('/assets/images/gallery/bg-about-us.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "400px" }}>
                    <h3 className="display-4 text-white text-uppercase">{title}</h3>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <FaAngleDoubleRight className="icon" />
                        <p className="m-0 text-uppercase">{title}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default BreadCrum;