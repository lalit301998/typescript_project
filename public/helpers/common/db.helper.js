"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log('process', process.env.DB_USER);
var Database = /** @class */ (function () {
    function Database() {
        this.connectionString = "mysql://" + process.env.DB_USER + ":" + process.env.DB_PASSWORD + "@" + process.env.DB_HOST + "/" + process.env.DB_DATABASE;
        console.log(this.connectionString);
        this.db = new sequelize_1.Sequelize(this.connectionString, {
            dialect: 'mysql',
            logging: false,
            define: {
                charset: 'utf8',
                collate: 'utf8_general_ci',
                underscored: true,
                timestamps: true,
            },
            pool: {
                max: 5,
                min: 0,
                idle: 20000,
                acquire: 20000,
            },
        });
        console.log('Succesfully connected to database');
    }
    return Database;
}());
var database = new Database();
exports.default = database;
