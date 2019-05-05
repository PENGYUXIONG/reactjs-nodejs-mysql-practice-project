router = require('express').Router();
bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/login', (req, res)=>{
    
    console.log(req.body)       
});

router.get('/signup', (req, res)=> {
    res.send({
        status: 200,
        message: 'This is sign up page',
    })
});

module.exports = router;
