const testControl = (req,res) => {
    res.status(200).send({
        message:"welcome",
        success:true,
    })
}

module.exports = { testControl }