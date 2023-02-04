import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Order = db.define('order', {
  jumlahpesan: DataTypes.INTEGER,
  keterangan: DataTypes.STRING,
});

export default Order;

(async () => {
  await db.sync();
})();
