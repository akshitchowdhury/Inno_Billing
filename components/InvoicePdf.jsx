import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

// Function to generate a PDF using jsPDF
const generatePdf = (invoice) => {
  const doc = new jsPDF();

  // Set font styles
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');

  // Define content for the PDF
  const content = `
    Invoice Details
    
    ID: ${invoice.id}
    Client: ${invoice.client}
    Project: ${invoice.project}
    Address: ${invoice.address}
    Services: ${invoice.services}
    State: ${invoice.state}
    City: ${invoice.city}
    PIN: ${invoice.pin}
    GST: ${invoice.gst}
    Price: ${invoice.price}
  `;

  // Add content to the PDF
  doc.text(content, 10, 10);

  // Save the PDF
  doc.save('invoice.pdf');
};

const InvoicePdf = ({ invoice }) => {
  return (
    <div>
      {/* Button to generate and download PDF */}
      <button onClick={() => generatePdf(invoice)}>Download PDF</button>
    </div>
  );
};

export default InvoicePdf;
