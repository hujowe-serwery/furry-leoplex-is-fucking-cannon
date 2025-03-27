// Function to handle image downloads
document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const imgName = button.getAttribute('data-img');
            
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = imgName;
            link.download = imgName;
            
            // Append to the body, click it, and remove it
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});