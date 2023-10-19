import axios from 'axios'
import { useState } from 'react'
import Select from './Select'
import './Form.css'

const Form = () => {
    const [name, setName] = useState('')
    const [event, setEvent] = useState({ key: '', val: '' })
    const [city, setCity] = useState({ key: '', val: '' })
    const [errors, setErrors] = useState([])

    const choicesEvents = [
        ['', '---'],
        ['front-end-react', 'Front End - ReactJS'],
        ['back-end-react', 'Back End - Node.js'],
        ['full-stack-react', 'Full Stack - MERN'],
        ['tester-manual', 'Tester Manualny']
    ]

    const choicesCities = [
        ['', '---'],
        ['onilne', 'Online'],
        ['warsaw', 'Warszawa'],
        ['cracow', 'Kraków']
    ]

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEvent = (e) => {
        setEvent({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
        })
    }

    const handleChangeCity = (e) => {
        setCity({
            key: e.target.value,
            val: e.target.options[e.target.selectedIndex].innerText
        })
    }

    return (
        <div className="formwrapper">
            <form action='#'>
                <div className="wrapper">
                    <label htmlFor="name">Imię i nazwisko</label>
                    <input type="text" id="name" value={name} onChange={handleChangeName} />
                </div>
                <div className="wrapper">
                    <label htmlFor="event">Wydarzenie</label>
                    <Select
                        values={choicesEvents}
                        selectedValue={event.key}
                        onValueChange={handleChangeEvent}
                        id='events'
                    />
                </div>
                <div className="wrapper">
                    <label htmlFor="city">Miasto</label>
                    <Select
                        values={choicesCities}
                        selectedValue={event.key}
                        onValueChange={handleChangeCity}
                        id='city'
                    />
                </div>
                <div className="wrapper">
                    <button type="submit">Zapis na szkolenie</button>
                </div>
            </form>

            <div className="errorsWrapper">
                <ul className='errors'></ul>
            </div>
        </div>
    )
}

export default Form