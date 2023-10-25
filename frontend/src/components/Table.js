import './Table.css'

const Table = ({ events, deleteEvent, ...rest }) => {

    return (
        <table {...rest}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imię i nazwisko</th>
                    <th>Wydarzenie</th>
                    <th>Miasto</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {events.map((row, index) => {
                    return (
                        <tr>
                            <td>{index}</td>
                            <td>{row.name}</td>
                            <td eventkey={row.event.key}>{row.event.key}</td>
                            <td citykey={row.city.key}>{row.city.val}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        console.log(row._id)
                                    }}
                                    className='delete'>
                                    Usuń
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table