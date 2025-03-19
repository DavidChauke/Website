// Elements
const videoContainer = document.getElementById('video-container');
const pdfContainer = document.getElementById('pdf-container');

// Show video instantly
window.onload = () => {
  videoContainer.classList.add('show');

  // After 3 seconds, switch to PDF
  setTimeout(() => {
    videoContainer.style.opacity = '0';
    videoContainer.style.visibility = 'hidden';
    pdfContainer.style.opacity = '1';
    pdfContainer.style.visibility = 'visible';
  }, 400);  // 3000ms = 3 seconds
};