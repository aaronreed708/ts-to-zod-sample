import express, {json, urlencoded} from 'express';
import { RegisterRoutes } from './routes';
const app = express();
const port = 3000;

// Use body parser to read provided JSON
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
