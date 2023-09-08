import cors from 'cors';
import express from 'express';
import routes from './routes';
import swaggerUI from 'swagger-ui-express';
import swagger from './swagger.def';
import { URL_PREFIX } from './utils/constants';
import { app } from './initExpress';

app.use(
  cors({
    credentials: true,
    origin: [/localhost:\d+$/],
  }),
);

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

app.use(`${URL_PREFIX}/docs`, swaggerUI.serve, swaggerUI.setup(swagger));
app.use(`${URL_PREFIX}/averageEarning`, routes.earning);
