const userModel = require("../Models/userModel");
const bcrypt = require('bcryptjs');

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
const loginController = async () => {
    try {
        
    } catch (error) {
        
    }
}

module.exports = { registerController }