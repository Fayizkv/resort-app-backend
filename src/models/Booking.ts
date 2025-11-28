import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
    user: mongoose.Types.ObjectId;
    resort: mongoose.Types.ObjectId;
    checkInDate: Date;
    checkOutDate: Date;
    numberOfGuests: number;
    status: 'pending' | 'confirmed' | 'cancelled';
}

const BookingSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    resort: { type: Schema.Types.ObjectId, ref: 'Resort', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    numberOfGuests: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model<IBooking>('Booking', BookingSchema);
