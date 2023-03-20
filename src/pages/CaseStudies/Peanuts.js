import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../assets/Peanuts.pdf'
import Topbar from '../Topbar.js';

function BTS(){
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, [] )

  return (
    <div className='body'>
    <Topbar/>
    <div class="pdf">
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page  
            scale={2}
            key={`page_${index + 1}`} 
            pageNumber={index + 1}
            pageMode="fullscreen" />
        ))}
      </Document>
    </div>
    </div>
   
  );
}

export default BTS;