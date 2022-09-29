const {Router} = require('express');
const router = Router();


let employee = {
    first_name : 'Angel David',
    last_name : 'Martinez',
    age : 30
};

router.get('/getEmployee', (req, res) => {
    res.status(200).json({
        employee
    });
});

module.exports = router;