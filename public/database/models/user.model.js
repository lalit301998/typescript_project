"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var db_helper_1 = __importDefault(require("../../helpers/common/db.helper"));
var UserModel = db_helper_1.default.db.define('users', {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    userDescription: {
        type: sequelize_1.DataTypes.STRING,
    },
    userRating: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
    },
    userCode: {
        type: sequelize_1.DataTypes.STRING,
    },
});
UserModel.sync()
    .then(function () {
    console.log('table created');
})
    .catch(function (err) { return console.log('err', err); });
exports.default = UserModel;
