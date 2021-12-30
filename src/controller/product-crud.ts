import { Request, Response } from 'express';
import { Product } from '../product';
import ProductModel from '../database/models/product.model';

export const getProductList = async (req: Request, res: Response) => {
  try {
    const data = await ProductModel.findAll();
    console.log(data);
    return res.status(200).json(data);
  } catch (e) {
    res.status(404).send((e as Error).message);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const {
    productCode,
    productName,
    productRating,
    productDescription,
  }: Product = req.body;
  try {
    await ProductModel.create({
      productCode,
      productDescription: productDescription || '',
      productName,
      productRating: productRating || 1,
    });
  } catch (err) {
    console.log(err);
    res.send({ messgae: err });
  }
  res.status(200).send({});
};

export const updateproduct = async (req: Request, res: Response) => {
  try {
    let data = await ProductModel.update(
      { productName: 'amzon1', productDescription: 'phone' },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    res.status(200).send({
      message: 'Successfully updated',
      IsSuccess: true,
      result: '',
    });
  } catch (e) {
    res.status(404).send((e as Error).message);
  }
};

export const deleteproduct = async (req: Request, res: Response) => {
  try {
    let data = await ProductModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).send({
      message: 'Successfully deleted',
      IsSuccess: true,
      result: '',
    });
  } catch (e) {
    res.status(404).send((e as Error).message);
  }
};
