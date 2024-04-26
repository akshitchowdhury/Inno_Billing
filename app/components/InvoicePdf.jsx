import React from "react";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// Function to generate a PDF using jsPDF
const generatePdf = (invoice) => {
  const doc = new jsPDF({
    orientation: "p", //set orientation
    unit: "pt", //set unit for document
    format: "letter", //set document standard
  });

  // Set font styles
  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");

  // Add title
  doc.text("INVOICE", 250, 50);
  doc.text(`Invoice No : ${invoice.invNo}`, 100, 85);
  
  doc.text(`DATE : ${invoice.date}`, 420, 85);
  
  // doc.text("SAC CODE:  ", 100, 110);

  // Add logo
  const logo = new Image();
  logo.src = "/innomatric_logo_only.png";
  doc.addImage(logo, "PNG", 40, 60, 50, 50);

  // Draw a rectangle around the content area with borders
  doc.rect(
    10,
    10,
    doc.internal.pageSize.getWidth() - 20,
    doc.internal.pageSize.getHeight() - 20,
    "S"
  );

  // Define variables for positioning
  const startY = 120; // Adjusted startY value
  const spacing = 20; // Spacing between elements
  const blockWidth = 266; // Adjusted block width
  const blockHeight = 140; // Block height
  const blockSpacing = 20; // Spacing between blocks

  // Draw left block
  doc.rect(40, startY, blockWidth * 2, blockHeight);
  doc.setFontSize(10);
  doc.text("INNOMATRICS Technologies", 60, startY + 20);
  doc.text("Akshay Complex", 60, startY + 40);
  doc.text("BTM 2nd Stage", 60, startY + 60);
  doc.text("Bangalore", 60, startY + 80);
  doc.text(`Karnataka - 560041`, 60, startY + 100);
  doc.text("GSTIN: 123456789120", 60, startY + 120);

  // doc.rect(20 + blockWidth + blockSpacing, startY, blockWidth, blockHeight);
  doc.setFontSize(10);
  doc.text(
    `Bill to :${invoice.client} `,
    60 + blockWidth + blockSpacing,
    startY + 20
  );
  doc.text(
    "No. 1/34/7, Bheemasena, Papareddy Palya",
    60 + blockWidth + blockSpacing,
    startY + 40
  );
  doc.text(
    "Papareddy Palya, Bangalore",
    60 + blockWidth + blockSpacing,
    startY + 60
  );
  doc.text(
    `${invoice.state} - ${invoice.pin}`,
    60 + blockWidth + blockSpacing,
    startY + 80
  );
  doc.text(
    `GSTIN: ${invoice.gst}`,
    60 + blockWidth + blockSpacing,
    startY + 100
  );

  // Draw middle line
  doc.line(50 + blockWidth, startY, 50 + blockWidth, startY + blockHeight);

  // Generate the PDF
  doc.autoTable({
    startY: startY + 140, // Adjusted to start below the left and right blocks
    head: [
      [
        { content: "Sl.No.", styles: { halign: "center" } },

        { content: "Services", styles: { halign: "center" } },
        { content: "Gst", styles: { halign: "center" } },

        { content: "Qty", styles: { halign: "center" } },
        
        { content: "Rate", styles: { halign: "center" } },
        { content: "Amount", styles: { halign: "center" } },
      ],
    ],
    body: [[1, invoice.services,`18%`,  invoice.qty,invoice.price, invoice.price]],
    styles: {
      fillColor: "#005959",
      lineColor: "#005959",
      lineWidth: 1,
    },
    margin: { top: 60 },
    columnStyles: {
      0: {
        halign: "right",
        minCellHeight: 100,
        cellPadding: 25,
        cellSpacing: 2,
      },
    },
    addPageContent: function () {
      const footerY = doc.internal.pageSize.getHeight() - 410; // Adjusted startY value for entire footer block
      const lineHeight = 30;
      const firstRowSpacing = 30;

      const tableRowHeight = doc.previousAutoTable.finalY + firstRowSpacing; // FinalY of previous table + spacing
      // Three-lined block
      doc.rect(40, footerY, doc.internal.pageSize.getWidth() - 80, 370); // Increase height to accommodate three lines
      
    ; 
   
    
    
      //1st mid line
      // doc.line(50 + blockWidth, startY+70, 50 + blockWidth, startY + blockHeight);

    //2nd Mid line
      doc.line(
        450,
        footerY ,
        450,
        footerY + lineHeight+90
      ); // Line after the first line of text

      
      //3rd mid line
  doc.line(10 + blockWidth, 112+startY+(90*3), 10 + blockWidth, startY + blockHeight+418);
   
      doc.line(
        40,
        footerY + lineHeight,
        doc.internal.pageSize.getWidth() - 40,
        footerY + lineHeight
      ); // Line after the first line of text
      doc.line(
        40,
        footerY + lineHeight+90,
        doc.internal.pageSize.getWidth() - 40,
        footerY + lineHeight+90
      ); // Line after the first line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight-10,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight-10
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+20,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+20
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+100,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+100
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+140,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+140
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+170,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+170
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+195,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+195
      ); // Line shifted below the second line of text
      doc.line(
        40,
        footerY + 2.5 * lineHeight+220,
        doc.internal.pageSize.getWidth() - 40,
        footerY + 2.5 * lineHeight+220
      ); // Line shifted below the second line of text
      ; // Line shifted below the second line of text
      //   doc.text(".", 60, footerY + 50);

      //Price additional values//

      //Tax key-val
      doc.text(
        "CGST",
        390,
        footerY + lineHeight -10
      );
      
      doc.text(
        `${invoice.cgst}`,
        500,
        footerY + lineHeight -10
      );



      //Discount key-val
      doc.text(
        "SGST",
        390,
        footerY + lineHeight +20
      );
      doc.text(
        `${invoice.sgst}`,
        500,
        footerY + lineHeight +20
      );


      //Grand total- Key-val
      doc.text(
        "Total Amount",
        370,
        footerY + lineHeight +50
      );
      
      doc.text(
        `${invoice.price}`,
        500,
        footerY + lineHeight +50
      );

      //Amount in words
      doc.text(
        "Paid",
        390,
        footerY + lineHeight +80
      );
      


      doc.text(
        `${invoice.price}`,
        500,
        footerY + lineHeight +80
      );

      
      doc.setFontSize(12);
      doc.text(
        "ACCOUNT DETAILS: ",
        140,
        footerY + lineHeight +130
      );
      
      doc.text(
        `Bank: HDFC BANK`,
        340,
        footerY + lineHeight +130
      );

      
      doc.setFontSize(8);
      doc.text(
        "For Cheque Payments: ",
        140,
        footerY + lineHeight +170
      );
      
      doc.text(
        `INNOMATRICS TECHNOLOGIES`,
        340,
        footerY + lineHeight +170
      );

      doc.setFontSize(8);


      doc.text(
        "ACCOUNT NO ",
        140,
        footerY + lineHeight +200
      );
      
      doc.text(
        `50200091294824`,
        340,
        footerY + lineHeight +200
      );
      doc.setFontSize(8);

      doc.text(
        "IFSC CODE ",
        140,
        footerY + lineHeight +230
      );
      
      doc.text(
        `HDFC0001226`,
        340,
        footerY + lineHeight +230
      );
      doc.setFontSize(8);
      

      doc.text(
        "Branch ",
        140,
        footerY + lineHeight +260
      );
      
      doc.text(
        `Jayangar 4th T Block`,
        340,
        footerY + lineHeight +260
      );
      doc.setFontSize(8);
      


      const textLines = doc.splitTextToSize(
        "Comments (If any): Request you to kindly release advance payment @ 50 percent.",
        doc.internal.pageSize.getWidth() - 120
      );
      // Display the lines of text
      textLines.forEach((line, index) => {
        doc.text(line, 60, footerY+60 + lineHeight + 250 );
      });

      doc.text(
        "For all other queries/questions, please email us at hello@innomatrics.com ",
        60,
        footerY+60 + lineHeight + 270
      );


      doc.text(
        "THANK YOU FOR CHOOSING OUR SERVICES ",
        200,
        footerY+90 + lineHeight + 270
      );
    },
  });

  // Save the PDF
  doc.save(`${invoice.client}InV.pdf`);
};

const InvoicePdf = ({ invoice }) => {
  return (
    <div className="flex justify-start mt-7 mx-16">
      {/* Button to generate and download PDF */}
      <button className="bg-red-400 rounded-md px-4 py-2 shadow-md hover:shadow-lg" onClick={() => generatePdf(invoice)}>Download INVOICE</button>
    </div>
  );
};

export default InvoicePdf;
