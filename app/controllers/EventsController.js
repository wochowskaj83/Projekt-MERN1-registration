const EventModel = require('../models/EventModel')


module.exports = {
    index: (req, res, next) => {
        res.json({
            events: [
                {
                    name: "Krystian Dziopa",
                    event: { key: 'front-end', val: 'Front End' },
                    city: { key: 'warsaw', val: 'Warszawa' },
                },
                {
                    name: "Łukasz Badocha",
                    event: { key: 'back-end', val: 'Back End' },
                    city: { key: 'cracow', val: 'Kraków' },
                },
            ]
        })
    },
    create: (req, res) => {
        const event = new EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
        })
        event.save()
            .then(response => {
                res.status(201).json(event)
            })
            .catch(err => {
                res.status(500).json({ error: err })
            })

    },
    delete: (req, res) => {
        const id = req.params.id
        EventModel.findByIdAndDelete(req.params.id)
            .then(response => {
                return res.status(204).json({
                    id:id,
                    deleted: true
                })
            })
            .catch(err => {
                return res.status(500).json({ error: err });
            })

    },
}