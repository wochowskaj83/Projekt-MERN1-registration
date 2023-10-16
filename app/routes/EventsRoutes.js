const express = require ('express')
const router = express.Router()

module.exports = () => {
    router.get('/',(req,res,next) =>{
        res.json({
            events: [
                {
                name : "Krystian Dziopa",
                event: {key: 'front-end', val: 'Front End'},
                city: {key: 'warsaw', val: 'Warszawa'},
                },
                {
                name : "Łukasz Badocha",
                event: {key: 'back-end', val: 'Back End'},
                city: {key: 'cracow', val: 'Kraków'},
                },
             ]
        })
    })
    return router
}