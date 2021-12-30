import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
console.log('process', process.env.DB_USER);
class Database {
  public db: Sequelize;
  public connectionString: string;
  constructor() {
    this.connectionString = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;
    console.log(this.connectionString);

    this.db = new Sequelize(this.connectionString, {
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
}

const database = new Database();
export default database;
