import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: {type: Number},
    f_name: { type: String, required: true },
    l_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required:true}
});

export default userSchema;
