module.exports = {
    index: (req,res,next) =>{
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
    },
    create: (req, res, next) => {
        res.send('create')
    },
    delete: (req, res, next) => {
        res.send('delete')
    },
}