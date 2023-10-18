import './Form.css'

const Form =() => {
    return <form action='#'>
        <div className="wrapper">
            <label htmlFor="name">Imię i nazwisko</label>
            <input type="text" id="name" />
        </div>
        <div className="wrapper">
            <label htmlFor="event">Wydarzenie</label>
        </div>
        <div className="wrapper">
            <label htmlFor="city">Miasto</label>
        </div>
        <div className="wrapper">
            <button type="submit">Zapis na szkolenie</button>
        </div>
    </form>
}

export default Form