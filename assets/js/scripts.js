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
// Initial setup
setTimeout(showDesktop, 2000);
setInterval(updateClock, 1000);
updateClock();
document.querySelector('.icon:nth-child(2)').onclick = openVSCModal;
