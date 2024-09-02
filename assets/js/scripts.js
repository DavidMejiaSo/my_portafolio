// scripts.js

// Function to show the desktop after BIOS
function showDesktop() {
    document.getElementById('bios').style.display = 'none';
    document.getElementById('desktop').style.opacity = '1';
}

// Function to update the clock
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById('clock').textContent = time;
}

// Function to open the projects window
function openProjectsWindow() {
    document.getElementById('projects-window').style.display = 'flex';
}

// Function to close the projects window
function closeProjectsWindow() {
    document.getElementById('projects-window').style.display = 'none';
}

// Function to toggle the start menu
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.classList.toggle('active');
}

// Function to open the GitHub modal
function openVSCModal() {
    document.getElementById('vsc-modal').style.display = 'block';
}

// Función para cerrar el modal de VSC
function closeVSCModal() {
    document.getElementById('vsc-modal').style.display = 'none';
}
document.querySelectorAll('.vsc-menubar span, .vsc-file').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#37373d';
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});

function openMobilePDFModal() {
    document.getElementById('mobile-pdf-modal').style.display = 'block';
  }
  
  // Function to close the mobile PDF modal
  function closeMobilePDFModal() {
    document.getElementById('mobile-pdf-modal').style.display = 'none';
  }
  
  // Function to zoom in
  function zoomIn() {
    const pdf = document.querySelector('.pdf-container embed');
    pdf.style.transform = `scale(${parseFloat(pdf.style.transform.replace('scale(', '').replace(')', '') || 1) + 0.1})`;
  }
  
  // Function to zoom out
  function zoomOut() {
    const pdf = document.querySelector('.pdf-container embed');
    pdf.style.transform = `scale(${Math.max(0.1, parseFloat(pdf.style.transform.replace('scale(', '').replace(')', '') || 1) - 0.1)})`;
  }
  
  // Event listeners
 
setTimeout(showDesktop, 2000);
setInterval(updateClock, 1000);
updateClock();
document.querySelector('.icon:nth-child(2)').onclick = openVSCModal;
document.querySelector('.icon:nth-child(3)').onclick = openMobilePDFModal;
document.querySelector('.close-modal').onclick = closeMobilePDFModal;
document.querySelector('.zoom-in').onclick = zoomIn;
document.querySelector('.zoom-out').onclick = zoomOut;
// Initial setup
