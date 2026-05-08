***starting backend implementation first***


`step 1`

**Setup**
npm install express mongoose dotenv cors bcryptjs jsonwebtoken axios cheerio
npm install nodemon -D

**folder structure**
/backend
    /models
        /user.js
    /routes
        /auth.js
        /scrape.js
    /controllers
        /auth.js
        /scrape.js
    /middleware
        /auth.js
    /config
        /db.js
    /server.js


`step 2`

**models**
  /story.js 
  /users.js
  

 **server running**  
 http://localhost:5000

`step 3`

authentication routes
  /register
  /login  

`step 4`
  routes
    
  `step 5`

 ***routes***
    /api/stories
    /api/stories/:id
    /api/stories/:id/bookmark

    ***controllers***
        /getstories
        /getsingle story

***frontend***

`npm create vite@latest frontend`
`cd frontend`
`npm install`
`npm run dev`
`npm install axios react-router-dom`


***Folder Structure***
frontend/
│
├── src/
│   ├── api/
│   │   └── axios.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── StoryCard.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Bookmarks.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json

