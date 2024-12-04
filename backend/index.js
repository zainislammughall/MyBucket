import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello there!!!');
})

app.listen(3000, () => {
    console.log('Server is runing on port 3000.')
})