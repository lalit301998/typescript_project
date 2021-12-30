"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_helper_1 = __importDefault(require("../../helpers/common/db.helper"));
var ProductModel = db_helper_1.default.db.define('products', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    productDescription: {
        type: sequelize_1.DataTypes.STRING,
    },
    productRating: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    productName: {
        type: sequelize_1.DataTypes.STRING,
    },
    productCode: {
        type: sequelize_1.DataTypes.STRING,
    },
});
ProductModel.sync().then(function () {
    console.log('table created');
}).catch(function (err) { return console.log('err', err); });
exports.default = ProductModel;
