import express from "express"
import FileUpload from "express-fileupload"
import cors from "cors"
import ProductRoutes from "./route/ProductRoutes.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(FileUpload())
app.use(express.static("public"))
app.use(ProductRoutes)

app.listen(port, () => {
    console.log(`Node start on port ${port}`)
});