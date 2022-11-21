import express, { Express } from 'express';
import clientsRoutes from './src/routes/clientsRoutes.js'
import filesRoutes from './src/routes/filesRoutes.js'

const app: Express = express();
const port = 3000;

app.use('/clients', clientsRoutes)
app.use('/documents', filesRoutes)

app.listen(port, () => {
  console.log(`Listening at port : http://localhost:${port}`);
});
