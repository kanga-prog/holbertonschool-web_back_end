// full_server/server.js
import express from 'express';
import router from './routes';

const app = express();
app.use('/', router);

const port = 1245;
app.listen(port);

export default app;
