import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

import {
  createProduct,
  updateproduct,
  deleteproduct,
  getProductList,
} from './controller/product-crud';
import { createProductRules } from './rules/product.rules';
import validate from './middlewares/body-validation.middleware';
import Database from './helpers/common/db.helper';
import Product from './database/models/product.model';

//console.log(app,'appapapapa');
//   app.use(bodyParser.json())
dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}

const PORT = process.env.PORT || 4000;

const app = express();

var bodyParser = require('body-parser');
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(helmet());
app.use(cors());
app.use(express.json());

app.post('/product/create', createProductRules(), validate, createProduct);
app.put('/product/update', updateproduct);
app.delete('/product/delete', deleteproduct);
app.get('/product/get', getProductList);

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
