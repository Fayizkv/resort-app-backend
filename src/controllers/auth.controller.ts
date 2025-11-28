import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { MENUS } from '../config/menus';

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password as string);
        if (!isMatch) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET as string, {
            expiresIn: '1d',
        });

        const menus = MENUS[user.role];

        res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            menus,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
