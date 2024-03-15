const express = require('express')
const authRouter = express.Router()
const User = require('../models/User.js')
const jwt = require('jsonwebtoken')



//SingUo

authRouter.post("/signup", async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username.toLowerCase() });

        if (existingUser) {
            return res.status(403).json({ message: "That username is already taken" });
        }

        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        // Assuming withoutPassword() is a method that removes the password from the user object before sending
        const userForToken = savedUser.withoutPassword ? savedUser.withoutPassword() : savedUser.toObject({ versionKey: false });
        delete userForToken.password; // Make sure password isn't included if withoutPassword() isn't defined

        const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)

        return res.status(201).json({ token, user: userForToken });
    } catch (err) {
        console.error(err);
        // Pass any errors to the next middleware (could be a custom error handler middleware)
        next(err);
    }
});

//lofin

authRouter.post("/login", async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username.toLowerCase() });
        if (!user) {
            return res.status(404).json({ message: "Username or password are incorrect" });
        }

        // Using the refactored checkPassword method
        const isMatch = await user.checkPassword(req.body.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Username or password are incorrect" });
        }

        const userWithoutPassword = user.withoutPassword();

        const token = jwt.sign(user.withoutPassword(), process.env.SECRET);

        return res.status(200).json({ token, user: userWithoutPassword });
    } catch (err) {
        console.error(err);
        next(err);
    }
});







// authRouter.post("/login", (req, res, next) => {
//     User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
//         if (err) {
//             res.status(500);
//             return next(err);
//         }
//         if (!user) {
//             res.status(404); // User not found
//             return next(new Error("Username or password are incorrect"));
//         }
//         user.checkPassword(req.body.password, (err, isMatch) => {
//             if (err || !isMatch) {
//                 res.status(401); // Unauthorized
//                 return next(new Error("Username or password are incorrect"));
//             }
//             const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
//             return res.status(200).send({ token, user: user.withoutPassword() });
//         });
//     });
// });


module.exports =authRouter