import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize
const BestProduct = db.define('bestproduct', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING,
    harga: DataTypes.STRING
},
)

export default BestProduct;

    (async () => {
        await db.sync();
    })()