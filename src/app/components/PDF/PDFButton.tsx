"use client";
import React, { useRef } from "react";
import PDFContent from "./PDFContent";

const PDFButton = () => {
    const pdfContentRef = useRef<HTMLDivElement>(null);

    const handleGeneratePDF = async () => {
        if (pdfContentRef.current) {
            try {
                const html2pdf = (await import('html2pdf.js')).default;
                console.log('html2pdf loaded successfully');
                const opt = {
                    margin: 0.5,
                    filename: 'Order-Confirmation.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
                };

                html2pdf().from(pdfContentRef.current).set(opt).save();
                console.log('PDF generated successfully');
            } catch (error) {
                console.error('Error during PDF generation:', error);
            }
        } else {
            console.error('pdfContentRef.current is null');
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
    );
};

export default PDFButton;
