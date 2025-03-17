// Filename - App.js
import React, {useState} from "react";
import BasicDocument from "./BasicDocument";

const App = () => {
    const [showDocument, setShowDocument] = useState(false);
    // Function will execute on click of button
    const onButtonClick = () => {
        setShowDocument(true);
        // using Java Script method to get PDF file
        // fetch("SamplePDF.pdf").then((response) => {
        //     response.blob().then((blob) => { 
        //         // Creating new object of PDF file
        //         const fileURL = window.URL.createObjectURL(blob);
        //         // Setting various property values
        //         let alink = document.createElement("a");
        //         alink.href = fileURL;
        //         alink.download = "INV_25784125.pdf";
        //         alink.click();
        //     });
        // });
    };
    return (
        <>
            <center>
                <h1 className="font-bold">Welcome to Multi Hotel </h1>
                <h3>
                    Click on below button to download PDF
                    Invoice
                </h3>
                <button className="border border-gray-500 p-1" onClick={onButtonClick}>
                    Download
                </button>
            </center>
            {showDocument && <BasicDocument />}
        </>
    );
};

export default App;
