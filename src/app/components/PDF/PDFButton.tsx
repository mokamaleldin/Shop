"use client";
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import PDFContent from "./PDFContent";

const PDFButton = () => {
    const pdfContentRef = useRef<HTMLDivElement>(null);

    const handleGeneratePDF = () => {
        if (pdfContentRef.current) {
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