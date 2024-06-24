const userModel = require("../Models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// registration controller call back
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email })
        //validation
        if (existingUser) {
            return res.status(400).send({
                message: 'Email already exists',
                success: false,
                existingUser
            })
        }
        //password hash
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashPassword

        //data saving
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success: true,
            message: 'User Registered Successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error in Registration API',
            success: false,
            error
        })
    }
}

// login controller call back
const loginController = async (req, res) => {
    try {

        // try finding the user
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).send({
                message: 'User not found',
                success: false
            });
        }

        // check role
        if(user.role !== req.body.role){
            return res.status(500).send({
                message: 'Invalid Role',
                success: false
            })
        }

        // compare the password with DB
        const comparePassword = await bcrypt.compare(req.body.password, user.password);
        if (!comparePassword) {
            return res.status(401).send({
                message: 'Invalid Password or Email',
                success: false
            });
        }

        // generate token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).send({
            message: 'User Logged In Successfully',
            success: true,
            token,
            user
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Error in Login API',
            success: false,
            error
        });
    }
};

const currentUserController = async (req,res) => {
    try {
        const user = await userModel.findOne({_id:req.body.userId})
        return res.status(200).send({
            success:true,
            message:"User fetched succesfully",
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Unable to get user",
            error
        })
    }
}
module.exports = { registerController, loginController, currentUserController }