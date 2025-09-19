📝 Simple Notes Web App - Backend Guide
This project focuses on the backend development of a simple note-taking web application using Node.js, Express, 
and File System (fs) for persistent note storage. The frontend (HTML, CSS, JavaScript) is already built and 
lives in the public/ folder.

Our goal is to build an API that allows users to create, view, and delete notes.

🔧 Development Steps

1. Folder Structure
.
├── notes                          # Stores user-created notes as .txt files
│   └── [note files].txt
├── public                         
│   └── styles.css
├── routes
│   └── notes.js                   # All note-related API endpoints
├── views
│   ├── add-note.js
│   ├── index.js
│   ├── notes.js
│   └── view-note.js
├── package.json
└── server.js                      # Entry point


2. API Endpoints
Endpoint	         Method	     Description
/notes/	             GET	     Returns all saved notes
/notes/add	         POST	     Adds a new note (from user input)
/notes/:title        GET         Return the particular note with the title
/notes/:title/delete POST        Delete the note file from the folder.

Notes are stored as .txt files inside the /notes folder.# Personal-note-manager-app
