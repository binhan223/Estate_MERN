import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import {
    errorHandler
} from '../utils/error.js';
import Listing from '../models/listing.model.js';

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
        return next(errorHandler(401, 'Chỉ được cập nhật tài khoản của mình'));
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updateUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            },
        }, {
            new: true
        });

        const { password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) return next(errorHandler(404, 'User not found'));

        const {
            password: pass,
            ...rest
        } = user._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error);
    }
};