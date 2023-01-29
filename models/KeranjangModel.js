import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize
const Keranjang = db.define('keranjang', {

},
)

export default Keranjang;

    (async () => {
        await db.sync();
    })()