// src/App.js
import React, { useState } from 'react';
import PDFViewer from './components/PdfViewer';
import './App.css';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewing, setViewing] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result.split(',')[1];
        setPdfFile(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewClick = () => {
    setViewing(true);
  };

  return (
    <div>
      <header>
        <h1>PDF Viewer</h1>
      </header>
      <section>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button onClick={handleViewClick} disabled={!pdfFile}>
          View PDF
        </button>
        {viewing && pdfFile && <PDFViewer file={pdfFile} />}
      </section>
    </div>
  );
}

export default App;
