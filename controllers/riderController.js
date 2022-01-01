const { Rider } = require("../models/rider")
const { pick } = require("lodash")
exports.signUp = async (req, res) => {
    try {
        console.log(req.body)
        let user = req.body

        let findUser = await Rider.findOne({ email: user.email })
        console.log(findUser);
        if (findUser) {
            return res.status(400).send("Allready registered with this email")
        }

        user = new Rider(user)

        const result = await user.save()
        console.log(result);

        return res.status(201).send({
            message: "New Account Created. Please",
            user: result
        })
    } catch (err) {
        return res.status(500).send("something wrong")
    }
}

exports.signIn = async (req, res) => {
    try {
        let user = await Rider.findOne({ email: req.body.email })
        if (!user) {
            return res.status(400).send("Invalid Email or password")
        }

        if (!(req.body.password === user.password)) {
            return res.status(400).send("Invalid Email or password")
        }

        res.send({
            message: "Login Successfull",
            user: user
        })

    } catch (err) {
        return res.status(500).send("Something wrong")
    }
}