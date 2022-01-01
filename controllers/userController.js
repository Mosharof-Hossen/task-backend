const { Rider } = require("../models/rider")

exports.allUser = async (req, res) => {
    try {
        let order = await Rider.find({})
        res.send(order)
    } catch (err) {
        console.log(err)
    }
}
