const router = require('express').Router()


const models = require('../models')

router.get('/', (req, res) => {
    models.Bounty.find().then((foundBounties) => {
        res.status(200).json( { bounties: foundBounties })
    })
})


router.get('/:id', (req, res) => {
    res.send('hello from get/bounties/:id')
})

router.post('/', (req, res) => {
    res.send('Hello from POST /bounties')
})


router.put('/:id', (req, res) => {
    res.send('Hello from PUT /bounties/:id')
})


router.delete('/:id', (req, res) => {
    res.send('Hello from DELETE /bounties/:id')
})

