const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const logger = require('./infra/logger');
logger.info('logger has set');

const router = require('./routes');
const { notFound, errorHandler } = require('./middlewares');

const app = express();
app.set('trust proxy', 1)

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

app.use('/uploads', express.static(__dirname + '/public/uploads'));
//app.use('/assets', express.static(__dirname + '/public/assets'));

const corsOptions = {
    origin: `http://localhost:8080`,
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(router);

app.use(notFound)
app.use(errorHandler);

module.exports = app;