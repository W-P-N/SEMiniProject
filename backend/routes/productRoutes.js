import express from 'express';
import { Product } from './../models/productModel.js';
import mongoose from 'mongoose';
import { Category } from '../models/productCategoryModel.js';
// For CRUD operations on Product

const productRouter = express.Router();

// Get all products
productRouter.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        console.log("Working");
        console.log(products);
        return res.status(200).json({
            count: products.length,
            data: products
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// Check exisitng categorcy
async function CheckCategory(inp_category)
{
    const cate = inp_category;
    console.log(cate);

    // Check category
    const existingCategory = await Category.findOne({name: cate});
    console.log(existingCategory);

    if (existingCategory) {
        return existingCategory._id;
    }
    else {
        // Create a new category
        const new_category = new Category({
            name: cate
        });

        await new_category.save();

        console.log('Category Saved');
        
        return new_category._id;
    }
}
// Add new Product
productRouter.post('/', async (req, res) => {
    try {
        console.log(req.body.name, req.body.description, req.body.price, req.body.Category, req.body.image, req.body.brand)
        if(
            !req.body.name || !req.body.description || !req.body.price || !req.body.Category || !req.body.image || !req.body.brand
        )
        {
            return res.status(400).send({
                message: "Send all required fields: name, description, price, category, image, brand",
            });
        }
        const category_id = await CheckCategory(req.body.Category);
        console.log(category_id);

        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            Category: category_id,
            image: req.body.image,
            brand: req.body.brand
        }

        const product = await Product.create(newProduct);
        return res.status(201).send(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

// Get one product with ID
productRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        return res.status(200).json({
            product
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// Update Product
productRouter.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.description || !req.body.price || !req.body.Category || !req.body.image || !req.body.brand)
        {
            return res.status(400).send({
                message: "Send all required fields: name, description, price, Categroy, Image, brand",
            });
        }

        const { id } = req.params;

        const category_id = await CheckCategory(req.body.Category);

        const new_data = {
            "name": req.body.name,
            "description": req.body.description,
            "price": 3971,
            "Category": category_id,
            "image": req.body.image,
            "brand": req.body.brand
        }

        const result = await Product.findByIdAndUpdate(id, new_data);

        if(!result)
        {
            return res.status(400).json({message: 'Product not found'});
        }
        return res.status(200).send({mesage: 'Product updated succesfully'});
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
})
// Delete product by ID
productRouter.delete('/:id', async (req, res) => {
    try {
        const  { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        
        if(!result)
        {
            return res.status(404).json({message: 'Product not found'});
        }

        return res.status(200).send({message: 'Product deleted successfully'});
    } catch (error) {
        
    }
})

export default productRouter;
