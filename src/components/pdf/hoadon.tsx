import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import dayjs from "dayjs";

function HoaDon({hoadon}: {hoadon: any}) {

    const pdfRef = useRef<HTMLDivElement>(null);


    const downloadPdf = () => {
        const input = pdfRef.current;
        if (input) {  // Ensure the element is not null
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
                const imgX = (pdfWidth - imgWidth * ratio) / 2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save('hoadon.pdf');
            });
        } else {
            console.error("The PDF container is not yet available.");
        }
    }


    return (
        <>
            <div className="container" ref={pdfRef}>
                <p>Xin chào {hoadon?.benhnhan?.hoten}</p>
                <p>Thông tin hóa đơn:</p>
                <p>- Điện thoại: <strong>0123456789</strong></p>
                <p>- Ngày sinh: <strong>{dayjs(hoadon?.benhnhan?.ngaysinh).format('YYYY-MM-DD')}</strong></p>
                <p>Thông tin dịch vụ bao gồm:</p>
                <table style={{ border: "1" }}>
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}>#</th>
                            <th>Tên</th>
                            <th style={{ width: "5%" }}>Số lượng</th>
                            <th style={{ width: "15%" }}>Đơn giá</th>
                            <th style={{ width: "20%" }}>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hoadon?.thuocs && hoadon?.thuocs.map((thuoc: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{thuoc?.ten}</td>
                                <td>{thuoc?.soluong}</td>
                                <td>{thuoc?.gia}</td>
                                <td>{thuoc?.thanhtien}</td>
                            </tr>
                        ))}
                        {hoadon?.vattuyte && hoadon?.vattuyte.map((vattu: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{vattu?.ten}</td>
                                <td>{vattu?.soluong}</td>
                                <td>{vattu?.gia}</td>
                                <td>{vattu?.thanhtien}</td>
                            </tr>
                        ))}
                        {hoadon?.chitietcanlamsang && hoadon?.chitietcanlamsang.map((canlamsang: any, index: number) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{canlamsang?.ten}</td>
                                <td>{canlamsang?.soluong}</td>
                                <td>{canlamsang?.gia}</td>
                                <td>{canlamsang?.thanhtien}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={3}>Tổng tiền sản phẩm:</td>
                            <td className="text-center" colSpan={2}>
                                <strong>{hoadon?.thanhtien}</strong><sup><u>đ</u></sup>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p>Trân trọng,</p>
            </div>
            <div>
                <button className="btn btn-outline-danger" onClick={downloadPdf}>Download</button>
            </div>
        </>
    );
}

export default HoaDon;