import { body, query } from 'express-validator';

export const createProductRules = () => {
  return [
    body('id').isNumeric().exists(),
    body('productName').exists(),
    body('productCode').exists(),
    body('proddescription').exists(),
    body('prodRating').exists(),
  ];
};
