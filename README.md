📝 Simple Notes Web App - Backend Guide
This project focuses on the backend development of a simple note-taking web application using Node.js, Express, 
and File System (fs) for persistent note storage. The frontend (HTML, CSS, JavaScript) is already built and 
lives in the public/ folder.

Our goal is to build an API that allows users to create, view, and delete notes.

🔧 Development Steps

1. Folder Structure
~~~

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

~~~
2. API Endpoints
~~~
Endpoint	         Method	     Description

/notes/	             GET	     Returns all saved notes
/notes/add	         POST	     Adds a new note (from user input)
/notes/:title        GET         Return the particular note with the title
/notes/:title/delete POST        Delete the note file from the folder.
~~~
Notes are stored as .txt files inside the /notes folder.# Personal-note-manager-app

3. Screenshots

   <img width="1445" height="745" alt="Screenshot 2025-09-19 at 11 05 01 PM" src="https://github.com/user-attachments/assets/59cf19c5-4c30-42f0-bb78-6c678855520b" />
   <img width="1445" height="734" alt="Screenshot 2025-09-19 at 11 05 23 PM" src="https://github.com/user-attachments/assets/bd74b523-91ca-4dde-a5b8-2a8b35a2078f" />
   <img width="1455" height="727" alt="Screenshot 2025-09-19 at 11 06 32 PM" src="https://github.com/user-attachments/assets/6cbfbb49-1d57-4e57-a75c-531aedb70b8c" />
   <img width="1438" height="635" alt="Screenshot 2025-09-19 at 11 07 55 PM" src="https://github.com/user-attachments/assets/c4977293-1425-4a56-8e11-71e0a5420bb2" />





