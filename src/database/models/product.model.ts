import { Model } from 'sequelize';
import { Optional } from 'sequelize/types';
import { DataTypes } from 'sequelize';
import database from '../../helpers/common/db.helper';
interface ProductModal {
  id: number;
  productDescription: string;
  productRating: number;
  productName: string;
  productCode: string;
}

interface ProductCreationModel extends Optional<ProductModal, 'id'> {}
interface ProductInstance
  extends Model<ProductModal, ProductCreationModel>,
    ProductModal {}

const ProductModel = database.db.define<ProductInstance>('products', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
  },
  productDescription: {
    type: DataTypes.STRING,
  },
  productRating: {
    type: DataTypes.NUMBER,
  },
  productName: {
    type: DataTypes.STRING,
  },
  productCode: {
    type: DataTypes.STRING,
  },
});
ProductModel.sync().then(() => {
  console.log('table created');
}).catch(err=>console.log('err',err));

export default ProductModel;
