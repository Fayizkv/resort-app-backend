import mongoose, { Schema, Document } from 'mongoose';

export interface IResort extends Document {
    name: string;
    description: string;
    price: number;
    amenities: string[];
    image: string;
}

const ResortSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    image: { type: String, required: true }, // URL or path
}, { timestamps: true });

export default mongoose.model<IResort>('Resort', ResortSchema);
