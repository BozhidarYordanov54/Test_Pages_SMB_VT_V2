document.getElementById('downloadButton').addEventListener('click', function() {
    // Select the area you want to capture
    const captureElement = document.getElementById('captureArea');
    
    // Use html2canvas to capture the element
    html2canvas(captureElement).then(canvas => {
        // Convert the canvas to a JPEG image
        const imageUrl = canvas.toDataURL('image/jpeg');

        // Create a link element
        const link = document.createElement('a');
        
        // Set the download attribute with a filename
        link.download = 'downloaded-image.jpg';
        
        // Set the href to the JPEG image URL
        link.href = imageUrl;

        // Programmatically click the link to trigger the download
        link.click();
    });
});
