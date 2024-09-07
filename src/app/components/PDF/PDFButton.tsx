"use client"
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const PDFContent = dynamic(() => import("./PDFContent"), { ssr: false });

const PDFButton = () => {
    const pdfContentRef = useRef<HTMLDivElement>(null);
    const [html2pdf, setHtml2pdf] = useState<any>(null);

    useEffect(() => {
        import("html2pdf.js").then((module) => {
            setHtml2pdf(module.default);
        });
    }, []);

    const handleGeneratePDF = () => {
        if (pdfContentRef.current && html2pdf) {
            const opt = {
                margin: 0.5,
                filename: 'Order-Confirmation.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().from(pdfContentRef.current).set(opt).save();
        }
    };

    return (
        <div className="flex justify-center items-center">
            <button type="button" onClick={handleGeneratePDF} className="border px-3 md:px-16 py-3 rounded-md font-semibold duration-200 border-black text-black hover:text-white hover:bg-black">
                Download PDF
            </button>

            <div className="hidden">
                <PDFContent ref={pdfContentRef} />
            </div>
        </div>
    )
}
export default PDFButton