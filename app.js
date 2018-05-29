/**
 * app.js
 */
import path from 'path';
import express from 'express';
import routes from './routes';

// Express app setup
const app = express();

app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use('/', routes);

export default app;
