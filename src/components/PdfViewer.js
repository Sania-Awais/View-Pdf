// src/components/PDFViewer.js
import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './PdfViewer.css';

const PDFViewer = ({ file }) => {
  const fileURL = `data:application/pdf;base64,${file}`;

  return (
    <Worker workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}>
      <div className="pdf-viewer-container">
        <Viewer fileUrl={fileURL} />
      </div>
    </Worker>
  );
};

export default PDFViewer;
