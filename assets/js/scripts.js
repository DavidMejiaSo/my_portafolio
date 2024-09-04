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



const codeContent = {
    python: `
class AboutMe:
    def __init__(self):
        self.name = "David Mejía Soto"
        self.username = "DavidMejiaSo"
        self.location = "Pereira, Colombia"
        self.web = ""
    
    def __str__(self):
        return self.name

if __name__ == '__main__':
    me = AboutMe()
    print(me)
`,
    dart: `
class AboutMe {
  String name;
  String username;
  String location;
  String web;

  AboutMe() {
    name = "David Mejía Soto";
    username = "DavidMejiaSo";
    location = "Pereira, Colombia";
    web = "";
  }

  @override
  String toString() => name;
}

void main() {
  var me = AboutMe();
  print(me);
}
`,
    javascript: `
class AboutMe {
  constructor() {
    this.name = "David Mejía Soto";
    this.username = "DavidMejiaSo";
    this.location = "Pereira, Colombia";
    this.web = "";
  }

  toString() {
    return this.name;
  }
}

const me = new AboutMe();
console.log(me.toString());
`,
    php: `
<?php
class AboutMe {
    public $name;
    public $username;
    public $location;
    public $web;

    public function __construct() {
        $this->name = "David Mejía Soto";
        $this->username = "DavidMejiaSo";
        $this->location = "Pereira, Colombia";
        $this->web = "";
    }

    public function __toString() {
        return $this->name;
    }
}

$me = new AboutMe();
echo $me;
?>
`,
    java: `
public class AboutMe {
    private String name;
    private String username;
    private String location;
    private String web;

    public AboutMe() {
        this.name = "David Mejía Soto";
        this.username = "DavidMejiaSo";
        this.location = "Pereira, Colombia";
        this.web = "";
    }

    @Override
    public String toString() {
        return name;
    }

    public static void main(String[] args) {
        AboutMe me = new AboutMe();
        System.out.println(me);
    }
}
`
};

function showFile(lang) {
    const codeElement = document.getElementById('code-content');
    const languageMode = document.getElementById('vsc-language-mode');
    const currentLanguage = document.getElementById('vsc-current-language');
    const fileTitle = document.getElementById('vsc-file-title');

    codeElement.textContent = codeContent[lang];
    languageMode.textContent = lang.charAt(0).toUpperCase() + lang.slice(1);
    currentLanguage.textContent = `main - ${lang}.${lang === 'javascript' ? 'js' : lang}`;
    fileTitle.textContent = `${lang}.${lang === 'javascript' ? 'js' : lang} - My Portfolio - Visual Studio Code`;

    // Remove active class from all files
    document.querySelectorAll('.vsc-file').forEach(file => file.classList.remove('active'));
    // Add active class to clicked file
    document.querySelector(`.vsc-file[data-lang="${lang}"]`).classList.add('active');

    // Apply syntax highlighting (basic implementation)
    applySyntaxHighlighting(codeElement, lang);
}

function applySyntaxHighlighting(element, lang) {
    let html = element.textContent;
    
    // Basic syntax highlighting (you might want to use a more robust solution for real projects)
    const patterns = {
        keyword: /\b(class|def|function|var|const|let|if|else|for|while|return|public|private|static|void)\b/g,
        string: /"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g,
        comment: /\/\/.*|\/\*[\s\S]*?\*\/|#.*/g,
        number: /\b\d+(\.\d+)?\b/g,
        function: /\b\w+(?=\()/g
    };

    for (const [className, regex] of Object.entries(patterns)) {
        html = html.replace(regex, match => `<span class="${className}">${match}</span>`);
    }

    element.innerHTML = html;
}

function openVSCModal() {
    document.getElementById('vsc-modal').style.display = 'block';
    showFile('python'); // Show Python by default
}

function closeVSCModal() {
    document.getElementById('vsc-modal').style.display = 'none';
}



//_------------------------Mobile
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


// ... (existing functions) ...

// Function to open the PDF modal
function openPDFModal() {
    document.getElementById('pdf-modal').style.display = 'block';
}

// Function to close the PDF modal
function closePDFModal() {
    document.getElementById('pdf-modal').style.display = 'none';
}

// ... (existing event listeners) ...

// Add event listener for the new PDF icon

// ... (rest of existing code) ...
// Event listeners

setTimeout(showDesktop, 2000);
setInterval(updateClock, 1000);
updateClock();
document.querySelector('.icon:nth-child(2)').onclick = openVSCModal;
document.querySelector('.icon:nth-child(3)').onclick = openMobilePDFModal;
document.querySelector('.close-modal').onclick = closeMobilePDFModal;
document.querySelector('.zoom-in').onclick = zoomIn;
document.querySelector('.zoom-out').onclick = zoomOut;
document.querySelector('.icon:nth-child(3)').onclick = openPDFModal;
document.querySelector('.icon:nth-child(2)').onclick = openVSCModal;
// Initial setup
