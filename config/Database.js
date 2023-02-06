import {Sequelize} from "sequelize"

const db = new Sequelize('erestoran_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db