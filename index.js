const express = require('express');
const cors = require('cors');
const app = express();


const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello hey...are you there!!!')
})
const users = [
    { id: 1, name: 'sdS', email: 'sda@gmail.com' },
    { id: 2, name: 'S', email: 'sds@gmail.com' },
    { id: 3, name: 'w', email: 'w@gmail.com' },
    { id: 4, name: 'x', email: 'x@gmail.com' },
    { id: 5, name: 'y', email: 'y@gmail.com' },
]
app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }

});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/fruit', (req, res) => {
    res.send(['mango', 'banana', 'grape'])
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    //res.send('post method success')
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listening to port', port)
})