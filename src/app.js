import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/test', (req, res) => {
  res.send('Test API Page');
});

app.listen(3000, () => {
  console.log('welcome to express: http://localhost:3000');
});
