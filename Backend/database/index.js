import { Sequelize } from "sequelize";
import { dbconfig } from "../config/database.js";

export const sequelize = new Sequelize(dbconfig);
