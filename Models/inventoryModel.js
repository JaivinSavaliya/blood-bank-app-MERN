const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'inventory type required'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true,'blood group required'],
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    quantity:{
        type:Number,
        required:[true,'quantity required']
    },
    organization:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organization required']
    },
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function () {
            return this.inventoryType === 'out'
        }
    },
    donor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function () {
            return this.inventoryType === 'in'
        }
    }
},{timestamps:true})