import Product from "../models/ProductsModel.js";
import Feedback from "../models/FeedbackModel.js";
import BestProduct from "../models/BestProductModel.js";
import Order from "../models/OrderModel.js";
import path from "path";
import fs from "fs";

// ----------------------------------------------------BestProduct----------------------------------------------------
export const getbestProducts = async (req, res) => {
    try {
        const response = await BestProduct.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const saveBestProduct = (req, res) => {
    if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });
    const name = req.body.title;
    const file = req.files.file;
    const harga = req.body.harga;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', '.jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await BestProduct.create({ name: name, harga: harga, image: fileName, url: url });
            res.status(201).json({ msg: "BestProduct Created Successfuly" });
        } catch (error) {
            console.log(error.message);
        }
    });
}

// ----------------------------------------------------BestProduct----------------------------------------------------




// ----------------------------------------------------Products----------------------------------------------------
export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductsById = async (req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const saveProducts = (req, res)=>{
    if(req.files === null) return res.status(400).json({msg: "No File Uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const harga = req.body.harga;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','.jpg','.jpeg'];



    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });

    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err) return res.status(500).json({ msg: err.message });
        try {
            await Product.create({ name: name, harga: harga, image: fileName, url: url });
            res.status(201).json({ msg: "Product Created Successfuly" });
        } catch (error) {
            console.log(error.message);
        }
    })

}

export const updateProducts = async (req, res) => {
    const product = await Product.findOne({
        where: {
            id: req.params.id
        }
    });
    if (!product) return res.status(404).json({ msg: "No Data Found" });

    let fileName = "";
    if (req.files === null) {
        fileName = product.image;
    } else {
        const file = req.files.file;
        const ext = path.extname(file.name);
        fileName = file.md5 + ext;
        const allowedType = ['.png', '.jpg', '.jpeg'];

        if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });

        const filepath = `./public/images/${product.image}`;
        fs.unlinkSync(filepath);

        file.mv(`./public/images/${fileName}`, (err) => {
            if (err) return res.status(500).json({ msg: err.message });
        });
    }
    const name = req.body.title;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

    try {
        await Product.update({ name: name, image: fileName, url: url }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({ msg: "Product Updated Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteProducts = async (req, res) => {
    try {
      const product = await Product.findOne({
        where: {
          id: req.params.id
        }
      });
      if (!product) {
        return res.status(404).json({ msg: "Product not found" });
      }
      await Product.destroy({
        where: {
            id: req.params.id
        }
      });
      res.status(200).json({ msg: "Product deleted successfully" });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Internal server error" });
    }
  };
  
  
  

// ----------------------------------------------------Products----------------------------------------------------


// ----------------------------------------------------Feedback----------------------------------------------------
export const getfeedback = async (req, res) => {
    try {
        const response = await Feedback.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const saveFeedback = async (req, res) => {
    const nama = req.body.nama;
    const email = req.body.email;
    const message = req.body.message;
    try {
        await Feedback.create({ nama: nama, email: email, message: message });
        res.status(201).json({ msg: "Feedback Created Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}
// ----------------------------------------------------Feddback----------------------------------------------------




// ----------------------------------------------------Order----------------------------------------------------
export const getOrder = async (req, res) => {
    try {
        const response = await Order.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveOrder = async (req, res) => {
    const jumlahpesan = req.body.jumlahpesan;
    const keterangan = req.body.keterangan;
    try {
        await Order.create({ jumlahpesan: jumlahpesan, keterangan: keterangan });
        res.status(201).json({ msg: "Order Created Successfuly" });
    } catch (error) {
        console.log(error.message);
    }
}
// ----------------------------------------------------Order----------------------------------------------------
