const router = require('express').Router();

const { userController } = require('../controllers')

router.post('/register', async  (req, res) => {
    try {
        const result = await userController.createUser(req.body);

        return res.json({
            message: 'User created succesfully!'
        });
    } catch (error) {
        return res.json({
            status: 401,
            error: {
               message: error.message
            }
        })
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const result = await userController.login(username, password);
        if (result.records && result.records.length > 0) {
            return res.json({
                token: 'YouLoginWasSuccesful',
                user: result.records[0]
            });
        }
        
        return res.json({
            status: 401,
            error: {
                message: 'Failed to recognise user!'
            }
        });
    } catch (error) {
        return res.json({
            status: 401,
            error: {
                message: error.message
            }
        })
    }
});

router.get('/me/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await userController.fetchMe(userId);
        if (result.records && result.records.length > 0) {
            return res.json({
                data: result.records[0]
            });
        }

        return res.json({
            status: 401,
            error: {
                message: 'No user with such id!'
            }
        })
    } catch (error) {
        return res.json({
            status: 401,
            error: {
                message: error.message
            }
        }) 
    }
})

module.exports = router;