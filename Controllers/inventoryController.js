const inventoryModel = require("../Models/inventoryModel")
const userModel = require("../Models/userModel")

// create inventory call back
const createInventoryController = async (req, res) => {
    try {
        const { email, inventoryType } = req.body
        // validation
        const user = await userModel.findOne({ email })
        if (!user) {
            throw new Error('User not found')
        }
        if (inventoryType === "in" && user.role !== "donor") {
            throw new Error('Only donors can add inventory')
        }
        if (inventoryType === "out" && user.role !== "hospital") {
            throw new Error('Only hospital can use inventory')
        }

        //save the valid inventory entry
        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success: true,
            message: "Inventory created successfully (New blood record)",
            inventory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// get inventory call back
const getInventoryController = async (req, res) => {
    try {
        // ???
        const inventory = await inventoryModel
            .find({ organization: req.body.userId })
            // .populate("organization")
            // .populate("donor")
            // .sort({ createdAt: -1 })
        // ???
        return res.status(200).send({
            success: true,
            message: "Inventory fetched successfully",
            inventory
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "Server Error in getting Inventories",
            error: error.message
        })
    }
}

module.exports = { createInventoryController, getInventoryController }