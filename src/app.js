import express from 'express';

const app = express();

app.get('/', function (req, res) {
    res.status(200).send({ message: 'Hello from acquisitions' });
})

export default app;