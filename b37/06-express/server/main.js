
const express = require('express');
const app = express();

// Para que sirve este middleware.
app.use(express.json());

const users = require('./controllers/users');


app.use('/users', users);


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Solucion 1:
// app.post('/new/user', (req, res) => {
//     const body = {
//         "id": 4,
//         "name": "alumno1",
//         "email": "alumno1@mail.com",
//         "password": "123456"
//     };
//     const users = newUser(params);
//     res.json({users});
// });

// Solucion 2:
// Desde postman mando el body.
// app.post('/new/user', (req, res) => {
//     const params = req.body;
//     const users = newUser(params);
//     res.json({users});
// });

// app.patch('/user/:id', (req, res) => {
//     res.json({message: 'Hello World!'});
// });

// app.delete('/user/:id', (req, res) => {
//     res.json({message: 'Hello World!'});
// });


