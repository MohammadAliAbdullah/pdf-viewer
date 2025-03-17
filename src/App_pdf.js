import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import BasicDocument from "./BasicDocument";
import BasicDocumentPDFView from './BasicDocumentPDFView';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('BN- ' + Math.floor(Math.random() * 100));

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleDownload = async () => {
    setIsLoading(true);
    const blob = await pdf(<BasicDocument />).toBlob();
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName + '.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    await sleep(2000);
    setIsLoading(false);
    URL.revokeObjectURL(url); // Clean up the URL object
  };

  return (
    <div>
      {/* <button onClick={handleDownload} disabled={isLoading}>
        {isLoading ? 'Generating PDF...' : 'Download PDF'}
      </button> */}
      <BasicDocumentPDFView />
    </div>
  );
};

export default App;



// import React, { useState } from 'react';
// import { Document, Page, Text, View, StyleSheet, PDFViewer, BlobProvider, PDFDownloadLink } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow:   
//  1,
//   },
// });

// const MyDocument = () => {
//   return (
//     <Document>
//       <Page size="A4">
//         <View style={styles.section}>
//           <Text>Hello, world!</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// const App = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleDownload = () => {
//     setIsLoading(true);
//     // Simulate a delay for demonstration
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       <button onClick={handleDownload}>Generate PDF</button>
//       {isLoading && <p>Generating PDF...</p>}
//       <BlobProvider document={<MyDocument />}>
//         {({ blob, url, loading, error }) => (
//           <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
//             {({ blob, url, loading, error }) => (
//               <button>Download PDF</button>
//             )}
//           </PDFDownloadLink>
//         )}
//       </BlobProvider>
//     </div>
//   );
// };

// export default App;