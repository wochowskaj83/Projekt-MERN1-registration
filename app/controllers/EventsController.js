const { response } = require('express')
const EventModel = require('../models/EventModel')


module.exports = {
    index: (req, res) => {
        const events = EventModel({
            name: req.body.name,
            event: req.body.event,
            city: req.body.city
        })
        EventModel.find()
            .then((events) => {
            res.status(200).json(events)
            })
            .catch(err => {
            res.status(500).json({ error: err })
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
                    id: id,
                    deleted: true
                })
            })
            .catch(err => {
                return res.status(500).json({ error: err });
            })

    },
}