import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        Category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        },
        image: {
            data: Buffer,
            type: String
        },
        brand: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)


export const Product = mongoose.model('Product', productSchema)
