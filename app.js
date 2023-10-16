const config = require('./config')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const eventsRoutes = require('./app/routes/EventsRoutes')()
app.use('/events', eventsRoutes)

app.listen(config.app.port, () => {
    console.log('Express server is up!')
})