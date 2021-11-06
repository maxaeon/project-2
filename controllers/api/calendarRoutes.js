const router = require("express").Router();
const withAuth = require("../../utils/auth");


router.post('/', async (req, res) => {
    const { month, events } = req.body.data
    const newData = {
        user: req.session.user_id,
        month,
        events
    }
    console.log(newData)

    res.end()
})

module.exports = router