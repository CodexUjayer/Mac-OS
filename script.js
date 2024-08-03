// Function to make any window draggable
function makeWindowDraggable(windowElement, titleBar) {
  titleBar.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    const offsetY = e.clientY - windowElement.getBoundingClientRect().top;

    function onMouseMove(e) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
}

// Function to handle window buttons (close, minimize, maximize)
function handleWindowButtons(
  windowElement,
  closeId,
  minimizeId,
  maximizeId,
  defaultWidth,
  defaultHeight,
  defaultLeft,
  defaultTop,
  minimizedTitle
) {
  document.getElementById(closeId).addEventListener("click", () => {
    windowElement.classList.add("hidden");
  });

  document.getElementById(minimizeId).addEventListener("click", () => {
    windowElement.style.height = "30px";
    windowElement.querySelector(".window-content").style.display = "none";
    windowElement.querySelector(".title").innerText = minimizedTitle;
  });

  document.getElementById(maximizeId).addEventListener("click", () => {
    if (
      windowElement.style.width === "100vw" &&
      windowElement.style.height === "100vh"
    ) {
      windowElement.style.width = defaultWidth;
      windowElement.style.height = defaultHeight;
      windowElement.style.left = defaultLeft;
      windowElement.style.top = defaultTop;
      windowElement.querySelector(".window-content").style.display = "flex";
      windowElement.querySelector(".title").innerText =
        windowElement.querySelector(".title").dataset.originalTitle;
    } else {
      windowElement.style.width = "100vw";
      windowElement.style.height = "100vh";
      windowElement.style.left = "0";
      windowElement.style.top = "0";
      windowElement.querySelector(".window-content").style.display = "flex";
      windowElement.querySelector(".title").innerText = "Maximized";
    }
  });
}



// Initialize VSCode window
const vscodeWindowElement = document.getElementById("vscode-window");
const titleBarVSCode = vscodeWindowElement.querySelector(".window-header");
makeWindowDraggable(vscodeWindowElement, titleBarVSCode);

handleWindowButtons(
  vscodeWindowElement,
  "vscode-close-button",
  "vscode-minimize-button",
  "vscode-maximize-button",
  "800px",
  "600px",
  "20%",
  "20%",
  "Visual Studio Code"
);

// Open VSCode window when the icon is clicked
function openVSCode() {
  vscodeWindowElement.classList.remove("hidden");
  centerWindow(vscodeWindowElement);
}

// Initialize File Explorer window
const fileExplorerElement = document.getElementById("file-explorer");
const titleBarFileExplorer =
  fileExplorerElement.querySelector(".window-header");
makeWindowDraggable(fileExplorerElement, titleBarFileExplorer);

handleWindowButtons(
  fileExplorerElement,
  "close-button",
  "minimize-button",
  "maximize-button",
  "800px",
  "500px",
  "20%",
  "20%",
  "File Explorer"
);

// Open File Explorer window
function openFileExplorer() {
  fileExplorerElement.classList.remove("hidden");
  centerWindow(fileExplorerElement);
}

// Initialize Notes window
const notesWindowElement = document.getElementById("notes-window");
const titleBarNotes = notesWindowElement.querySelector(".window-header");
makeWindowDraggable(notesWindowElement, titleBarNotes);

handleWindowButtons(
  notesWindowElement,
  "notes-close-button",
  "notes-minimize-button",
  "notes-maximize-button",
  "600px",
  "400px",
  "50%",
  "50%",
  "Notes"
);

// Open Notes window
function openNotesWindow() {
  notesWindowElement.classList.remove("hidden");
  centerWindow(notesWindowElement);
}

// Initialize Gallery window
const galleryWindowElement = document.getElementById("gallery-window");
const titleBarGallery = galleryWindowElement.querySelector(".window-header");
makeWindowDraggable(galleryWindowElement, titleBarGallery);

handleWindowButtons(
  galleryWindowElement,
  "gallery-close-button",
  "gallery-minimize-button",
  "gallery-maximize-button",
  "800px",
  "600px",
  "20%",
  "20%",
  "Gallery"
);

// Open Gallery window
function openGalleryWindow() {
  galleryWindowElement.classList.remove("hidden");
  centerWindow(galleryWindowElement);
  loadImages(); // Load images when gallery is opened
}

// Function to fetch images from a specified folder
function loadImages() {
  const gallery = document.getElementById("gallery");

  const imageFiles = [
    "wallpaper.jpg",
    "wallpaper(1).jpg",
    "wallpaper(2).jpg",
    "wallpaper(3).jpg",
    "wallpaper(4).jpg",
    "wallpaper(5).jpg",
    // Add your image file names here
  ];

  gallery.innerHTML = ""; // Clear previous images

  imageFiles.forEach((file) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = `gallery/${file}`;
    img.alt = file;

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.textContent = file;

    div.appendChild(img);
    div.appendChild(overlay);
    gallery.appendChild(div);
  });
}

// Function to center a window on the screen
function centerWindow(windowElement) {
  // Ensure the window is not hidden
  windowElement.classList.remove("hidden");

  // Get viewport size
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Get window size
  const windowWidth = windowElement.offsetWidth;
  const windowHeight = windowElement.offsetHeight;

  // Calculate position
  const left = (viewportWidth - windowWidth) / 2;
  const top = (viewportHeight - windowHeight) / 2;

  // Set window position
  windowElement.style.left = `${left}px`;
  windowElement.style.top = `${top}px`;
}




