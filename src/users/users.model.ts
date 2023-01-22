import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
});

export interface Users {
    id: string;
    firstName: string;
    lastName: string;
}