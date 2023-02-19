import express, { Express, Response, Request } from 'express';
import * as dotenv from 'dotenv';
import { collectionRouter } from './features/collections';
import { imageRouter } from './features/image';
import { connect } from './database';

dotenv.config({ path: './.env.development.local' });

const app: Express = express();
const port = process.env.PORT;

connect();

app.use(express.json());
app.use('/image', imageRouter);
app.use('/collection', collectionRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World! aaa');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log('test app');
});
