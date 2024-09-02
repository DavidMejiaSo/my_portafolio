function showDesktop() {
    document.getElementById('bios').style.display = 'none';
    document.getElementById('desktop').style.opacity = '1';
}

function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    document.getElementById('clock').textContent = time;
}

function openProjectsWindow() {
    document.getElementById('projects-window').style.display = 'flex';
}

function closeProjectsWindow() {
    document.getElementById('projects-window').style.display = 'none';
}

function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.classList.toggle('active');
}

function openResumeModal() {
    document.getElementById('resume-frame').src = 'vsc.html'; // Ajusta la ruta si es necesario
    document.getElementById('resume-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('resume-modal').classList.add('hidden');
    document.getElementById('resume-frame').src = ''; // Limpia el src del iframe para evitar problemas
}

document.querySelectorAll('.icon').forEach(icon => {
    if (icon.querySelector('span').textContent === 'Résumé') {
        icon.addEventListener('click', openResumeModal);
    }
});


// Initial setup
setTimeout(showDesktop, 2000);
setInterval(updateClock, 1000);
updateClock();
