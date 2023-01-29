import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Feedback = db.define('feedback', {
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
  message: DataTypes.STRING,
});

export default Feedback;

(async () => {
  await db.sync();
})();
